const User = require("../database/users");
const Session = require("../database/sessions");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const redis = require('../config/redis');
const redisClient = redis.client;
require("dotenv").config();

const REFRESH_COOKIE_NAME = "_RTKN";
const ACCESS_COOKIE_NAME = "_ATKN";
const CAPTCHA_COOKIE_NAME = "_CTKN";
const UID_COOKIE_NAME = "_UID4";
const PCID_COOKIE_NAME = "_PCID";
const S_CHECK_COOKIE_NAME = "_CHECK";
const REFRESH_TOKEN_EXPIRATION = parseInt(process.env.REFRESH_TOKEN_EXPIRATION);
const ACCESS_TOKEN_EXPIRATION = parseInt(process.env.ACCESS_TOKEN_EXPIRATION);
const ONE_HALF_HOUR = 90 * 60; //for ms* 1000;

const { randomBytes } = require("crypto");


const isEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const isPhoneNumberRegex = (phone_number) => {
    return String(phone_number)
        .match(
            /^(\+?\d{11,12})$/
        );
}

const passwordControl = (pwd) => {
    return String(pwd)
        .match(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\"\-_\/+=@$'!%,.:<£#>;\s*?|&^~\[\]{}\(\)])[A-Za-z\dğĞüÜşŞiİöÖçÇ@0$-_\/+=.:;<#£>,"!'%\s*?|(){\[\]}&^~]{10,250}$/
            // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\"\-@$'!%,.\s*?&])[A-Za-z\d@$\-.,"!'%\s*?&]{10,}$/
        );
}

function generateAccessToken(user) {
    const { id, access_rank } = user;
    const payload = { id, access_rank };
    const token = jwt.sign(payload, process.env.JWT_SECRET_ACCESS, { expiresIn: ACCESS_TOKEN_EXPIRATION });
    return {
        token,
        payload
    }
}

function generateRefreshToken(user) {
    const { id, access_rank } = user;
    const payload = { id, access_rank };
    const token = jwt.sign(payload, process.env.JWT_SECRET_REFRESH, { expiresIn: REFRESH_TOKEN_EXPIRATION });
    return {
        token,
        payload
    }
}

function customError(message, name, code) {
    const err = new Error(message);
    err.name = name;
    err.code = code;
    return err;
}

const login = async (req, res, next) => {
    const { access_id, password, os, agent, CAPTCHA, captchaToken } = req.body;
    try {
        const captchaCookie = req.cookies[CAPTCHA_COOKIE_NAME];
        if (captchaToken !== captchaCookie)
            throw customError("DOĞRULAMA HATASI", "MALICIOUS", "0xDF10");
        const CAPTCHA_VALUE = await redisClient.get(captchaToken);
        if (CAPTCHA_VALUE?.substring(1) !== CAPTCHA) {
            redis.del(captchaToken);
            throw customError("DOĞRULAMA KODU YANLIŞ", "CAPTCHA", "0xAF10");
        }
        redis.del(captchaToken);
        if (isEmail(access_id)) {
            const checked = await User.findByEmail(access_id.toLowerCase());
            if (!checked)
                throw customError("E-Posta veya Şifre Hatalı.", "FOUND:NAN:ID", "0xAF12");
            const passwordCompare = await bcrypt.compare(password, checked.password);
            if (!passwordCompare)
                throw customError("E-Posta veya Şifre Hatalı.", "FOUND:NAN:PWD", "0xAF12");
            const pc_id = randomBytes(10).toString('hex');
            const generatedAccessToken = generateAccessToken(checked);
            const generatedRefreshToken = generateRefreshToken(checked);
            const now = new Date();
            await User.last_sign_at("email", access_id.toLowerCase(), now);
            const new_session = {
                user_id: checked.id,
                pc_id,
                refresh: generatedRefreshToken.token,
                exp_date: new Date(now.getTime() + REFRESH_TOKEN_EXPIRATION * 1000),
                os,
                agent,
                ip: req.headers['x-forwarded-for']?.split(',')[0].trim()
            }
            Session.add(new_session).then((data) => {
                redis.putJSON(`U:${checked.id}:${generatedAccessToken.token}`, generatedAccessToken.payload, ACCESS_TOKEN_EXPIRATION)
                redis.putJSON(`U:${checked.id}:${generatedRefreshToken.token}`, generatedRefreshToken.payload, ONE_HALF_HOUR)
            })
            res.cookie(ACCESS_COOKIE_NAME, generatedAccessToken.token, {
                httpOnly: true,
                domain: process.env.COOKIE_STATE === "production" && process.env.COOKIE_DOMAIN,
                secure: process.env.NODE_ENV === "production",
                maxAge: ACCESS_TOKEN_EXPIRATION * 1000 //15m
            }).cookie(REFRESH_COOKIE_NAME, generatedRefreshToken.token, {
                httpOnly: true,
                domain: process.env.COOKIE_STATE === "production" && process.env.COOKIE_DOMAIN,
                secure: process.env.NODE_ENV === "production",
                maxAge: REFRESH_TOKEN_EXPIRATION * 1000 //7d
            }).cookie(PCID_COOKIE_NAME, pc_id, {
                httpOnly: true,
                domain: process.env.COOKIE_STATE === "production" && process.env.COOKIE_DOMAIN,
            }).cookie(S_CHECK_COOKIE_NAME, 1, {
                domain: process.env.COOKIE_STATE === "production" && process.env.COOKIE_DOMAIN,
            }).cookie(UID_COOKIE_NAME, checked.id.toString(), {
                httpOnly: true,
                domain: process.env.COOKIE_STATE === "production" && process.env.COOKIE_DOMAIN,
            }).status(200).json({ message: "Giriş başarılı." })
        } else if (isPhoneNumberRegex(access_id)) {
            const checked = await User.findByPhoneNumber(access_id);
            if (!checked)
                throw customError("Telefon Numarası veya Şifre Hatalı.", "FOUND:NAN:ID", "0xAF13"); //DEĞİŞECEK E-Posta - Şifre Uyuşmazlığı...
            const passwordCompare = await bcrypt.compare(password, checked.password);
            if (!passwordCompare)
                throw customError("Telefon Numarası veya Şifre Hatalı.", "FOUND:NAN:PWD", "0xAF13");
            const pc_id = randomBytes(10).toString('hex');
            const generatedAccessToken = generateAccessToken(checked);
            const generatedRefreshToken = generateRefreshToken(checked);
            const now = new Date();
            await User.last_sign_at("phone_number", access_id, now);
            const new_session = {
                user_id: checked.id,
                pc_id,
                refresh: generatedRefreshToken.token,
                exp_date: new Date(now.getTime() + REFRESH_TOKEN_EXPIRATION * 1000),
                os,
                agent,
                ip: req.headers['x-forwarded-for']?.split(',')[0].trim()
            }
            Session.add(new_session).then((data) => {
                redis.putJSON(`U:${checked.id}:${generatedAccessToken.token}`, generatedAccessToken.payload, ACCESS_TOKEN_EXPIRATION)
                redis.putJSON(`U:${checked.id}:${generatedRefreshToken.token}`, generatedRefreshToken.payload, ONE_HALF_HOUR)
            })
            res.cookie(ACCESS_COOKIE_NAME, generatedAccessToken.token, {
                httpOnly: true,
                domain: process.env.COOKIE_STATE === "production" && process.env.COOKIE_DOMAIN,
                secure: process.env.NODE_ENV === "production",
                maxAge: ACCESS_TOKEN_EXPIRATION * 1000 //15m
            }).cookie(REFRESH_COOKIE_NAME, generatedRefreshToken.token, {
                httpOnly: true,
                domain: process.env.COOKIE_STATE === "production" && process.env.COOKIE_DOMAIN,
                secure: process.env.NODE_ENV === "production",
                maxAge: REFRESH_TOKEN_EXPIRATION * 1000 //7d
            }).cookie(PCID_COOKIE_NAME, pc_id, {
                httpOnly: true,
                domain: process.env.COOKIE_STATE === "production" && process.env.COOKIE_DOMAIN,
            }).cookie(S_CHECK_COOKIE_NAME, 1, {
                domain: process.env.COOKIE_STATE === "production" && process.env.COOKIE_DOMAIN,
            }).cookie(UID_COOKIE_NAME, checked.id.toString(), {
                httpOnly: true,
                domain: process.env.COOKIE_STATE === "production" && process.env.COOKIE_DOMAIN,
            }).status(200).json({ message: "Giriş başarılı." })
        } else {
            const checked = await User.findByUserName(access_id);
            if (!checked)
                throw customError("Kullanıcı Adı veya Şifre Hatalı.", "FOUND:NAN:ID", "0xAF14"); //DEĞİŞECEK E-Posta - Şifre Uyuşmazlığı...
            const passwordCompare = await bcrypt.compare(password, checked.password);
            if (!passwordCompare)
                throw customError("Kullanıcı Adı veya Şifre Hatalı.", "FOUND:NAN:PWD", "0xAF14");
            const pc_id = randomBytes(10).toString('hex');
            const generatedAccessToken = generateAccessToken(checked);
            const generatedRefreshToken = generateRefreshToken(checked);
            const now = new Date();
            await User.last_sign_at("user_name", access_id, now);
            const new_session = {
                user_id: checked.id,
                pc_id,
                refresh: generatedRefreshToken.token,
                exp_date: new Date(now.getTime() + REFRESH_TOKEN_EXPIRATION * 1000),
                os,
                agent,
                ip: req.headers['x-forwarded-for']?.split(',')[0].trim()
            }
            Session.add(new_session).then((data) => {
                redis.putJSON(`U:${checked.id}:${generatedAccessToken.token}`, generatedAccessToken.payload, ACCESS_TOKEN_EXPIRATION)
                redis.putJSON(`U:${checked.id}:${generatedRefreshToken.token}`, generatedRefreshToken.payload, ONE_HALF_HOUR)
            })
            res.cookie(ACCESS_COOKIE_NAME, generatedAccessToken.token, {
                httpOnly: true,
                domain: process.env.COOKIE_STATE === "production" && process.env.COOKIE_DOMAIN,
                secure: process.env.NODE_ENV === "production",
                maxAge: ACCESS_TOKEN_EXPIRATION * 1000 //15m
            }).cookie(REFRESH_COOKIE_NAME, generatedRefreshToken.token, {
                httpOnly: true,
                domain: process.env.COOKIE_STATE === "production" && process.env.COOKIE_DOMAIN,
                secure: process.env.NODE_ENV === "production",
                maxAge: REFRESH_TOKEN_EXPIRATION * 1000 //7d
            }).cookie(PCID_COOKIE_NAME, pc_id, {
                httpOnly: true,
                domain: process.env.COOKIE_STATE === "production" && process.env.COOKIE_DOMAIN,
            }).cookie(S_CHECK_COOKIE_NAME, 1, {
                domain: process.env.COOKIE_STATE === "production" && process.env.COOKIE_DOMAIN,
            }).cookie(UID_COOKIE_NAME, checked.id.toString(), {
                httpOnly: true,
                domain: process.env.COOKIE_STATE === "production" && process.env.COOKIE_DOMAIN,
            }).status(200).json({ message: "Giriş başarılı." })
        }
    } catch (error) {
        if (error.name === "CAPTCHA" || error.name === "FOUND:NAN:ID" || error.name === "FOUND:NAN:PWD" || error.name === "MALICIOUS")
            return res.status(400).json({ code: error.code, message: error.message })
        res.status(400).json({ code: '0xAF01', message: "Giriş yaparken hata" })
    }
}

// from authorization + req.user_rank
const register = async (req, res, next) => {
    const { user_name, password, email, phone_number } = req.body;
    try {
        if (!isEmail(email))
            throw customError("Lütfen geçerli bir mail adresi giriniz.", "REGEX", "0xAF20");
        if (isEmail(user_name))
            throw customError("Kullanıcı adı mail tipinde olamaz.", "REGEX", "0xAF21");
        if (isPhoneNumberRegex(user_name))
            throw customError("Kullanıcı adı telefon numarası tipinde olamaz.", "REGEX", "0xAF22");
        if (!isPhoneNumberRegex(phone_number))
            throw customError("Lütfen geçerli bir telefon numarası giriniz.", "REGEX", "0xAF23");
        if (!passwordControl(password))
            throw customError("Şifre en az 10 karakter olmalı. En az bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter[?@$&?%! *\"\-'.,] içermelidir.", "REGEX", "0xAF29");

        const isUseEmail = await User.findByEmail(email);
        if (isUseEmail)
            throw customError("Bu e-postayı kullanan bir hesap zaten var.", "ALREADY", "0xAF24");
        const isUseUsername = await User.findByUserName(user_name);
        if (isUseUsername)
            throw customError("Kullanıcı adı daha önceden alınmış.", "ALREADY", "0xAF25");
        const isPhoneNumber = await User.findByPhoneNumber(phone_number);
        if (isPhoneNumber)
            throw customError("Bu telefon numarasını kullanan bir hesap zaten var.", "ALREADY", "0xAF26");

        const Created = await User.findById(req.user_id);
        const passwordHash = await bcrypt.hash(password, 12);
        const registered = await User.add({
            ...req.body,
            password: passwordHash,
            whoCreated: Created.email,
            whoLastAuth: Created.email,
            email: email.toLowerCase()
        });
        await User.addLog({
            user_id: req.user_id,
            user_ip: req.user_ip,
            changed_user_id: registered.id,
            type: 'C',
        })

        res.status(201).json({ message: "Yeni kullanıcı başarıyla oluşturuldu." });
    } catch (error) {
        console.log(error);
        if (error.name === "REGEX" || error.name === "ALREADY")
            return res.status(400).json({ code: error.code, message: error.message })
        res.status(400).json({ code: '0xAF02', message: "Yeni kullanıcı oluşturma başarısız." })
    }
};

const logout = (req, res, next) => {
    const accessToken = req.cookies[ACCESS_COOKIE_NAME];
    const refresh_token = req.cookies[REFRESH_COOKIE_NAME];
    const userId = req.cookies[UID_COOKIE_NAME];
    if (accessToken)
        redis.del(`U:${userId}:${accessToken}`);
    if (refresh_token)
        redis.del(`U:${userId}:${refresh_token}`);
    Session.remove(refresh_token).then((check) => {
        if (!check) console.log("Databasede refresh yok");
        res.clearCookie(ACCESS_COOKIE_NAME, {
            domain: process.env.COOKIE_STATE === "production" && process.env.COOKIE_DOMAIN,
        })
            .clearCookie(REFRESH_COOKIE_NAME, {
                domain: process.env.COOKIE_STATE === "production" && process.env.COOKIE_DOMAIN,
            })
            .clearCookie(PCID_COOKIE_NAME, {
                domain: process.env.COOKIE_STATE === "production" && process.env.COOKIE_DOMAIN,
            })
            .clearCookie(UID_COOKIE_NAME, {
                domain: process.env.COOKIE_STATE === "production" && process.env.COOKIE_DOMAIN,
            })
            .clearCookie(S_CHECK_COOKIE_NAME, {
                domain: process.env.COOKIE_STATE === "production" && process.env.COOKIE_DOMAIN,
            })
            .end();
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ code: '0xA7777', msg: "LOGOUT/DB ERROR" });
    })
}

module.exports = {
    register,
    login,
    logout,
};