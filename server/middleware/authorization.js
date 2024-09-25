const redis = require('../config/redis');
const jwt = require('jsonwebtoken');
const Session = require("../database/sessions");
require("dotenv").config();

function customError(message, name, code) {
    const err = new Error(message);
    err.name = name;
    err.code = code;
    err.custom = true;
    return err;
}

const REFRESH_COOKIE_NAME = "_RTKN";
const ACCESS_COOKIE_NAME = "_ATKN";
const UID_COOKIE_NAME = "_UID4";
const PCID_COOKIE_NAME = "_PCID";
const S_CHECK_COOKIE_NAME = "_CHECK";
const REFRESH_TOKEN_EXPIRATION = parseInt(process.env.REFRESH_TOKEN_EXPIRATION);
const ACCESS_TOKEN_EXPIRATION = parseInt(process.env.ACCESS_TOKEN_EXPIRATION);
const ONE_HALF_HOUR = 90 * 60;

function generateAccessToken(refresh_token_data) {
    const { id, access_rank } = refresh_token_data;
    const payload = { id, access_rank };
    const token = jwt.sign(payload, process.env.JWT_SECRET_ACCESS, { expiresIn: ACCESS_TOKEN_EXPIRATION });
    return {
        token,
        payload
    }
}

function generateRefreshToken(refresh_token_data) {
    const { id, access_rank } = refresh_token_data;
    const payload = { id, access_rank };
    const token = jwt.sign(payload, process.env.JWT_SECRET_REFRESH, { expiresIn: REFRESH_TOKEN_EXPIRATION });
    return {
        token,
        payload
    }
}

function refreshAccessToken(refresh_token_data, res) {
    const generatedNewAccessToken = generateAccessToken(refresh_token_data);
    redis.putJSON(`U:${generatedNewAccessToken.payload.id}:${generatedNewAccessToken.token}`, generatedNewAccessToken.payload, ACCESS_TOKEN_EXPIRATION)
    res.cookie(ACCESS_COOKIE_NAME, generatedNewAccessToken.token, {
        httpOnly: true,
        domain: process.env.COOKIE_STATE === "production" && process.env.COOKIE_DOMAIN,
        secure: process.env.NODE_ENV === "production",
        maxAge: ACCESS_TOKEN_EXPIRATION * 1000 //15m
    })
}

async function refreshRefreshToken(old_token, res, next) {
    try {
        const old_refresh_data = jwt.decode(old_token, process.env.JWT_SECRET_REFRESH);
        const generatedNewRefreshToken = generateRefreshToken(old_refresh_data);
        const new_token = generatedNewRefreshToken.token;
        const sessionUpdateState = Session.refresh(old_refresh_data.id, old_token, new_token);
        if (sessionUpdateState) {
            redis.putJSON(`U:${old_refresh_data.id}:${new_token}`, { id: old_refresh_data.id, access_rank: old_refresh_data.access_rank }, ONE_HALF_HOUR);
            res.cookie(REFRESH_COOKIE_NAME, new_token, {
                httpOnly: true,
                domain: process.env.COOKIE_STATE === "production" && process.env.COOKIE_DOMAIN,
                secure: process.env.NODE_ENV === "production",
                maxAge: REFRESH_TOKEN_EXPIRATION * 1000 //7d
            })
            return next();
        } else {
            throw customError("0xD0011", "UPT:ERR", "0xD0011");
        }
    } catch (error) {
        console.log('0xD0001: ', error.message);
        if (error.name === "UPT:ERR")
            return res.status(400).json({ code: error.code, message: error.message })
        return res.status(401).json({ code: '0xD0001', message: '0xD0001' });
    }
}

function refreshExpireCheck(tokenData) {
    const currentTimestamp = Math.floor(Date.now() / 1000);
    if (currentTimestamp < tokenData.exp - (7 * 24 * 60 * 60) / 2) {
        return true;
    }
    return false;
}

const authorization = async (req, res, next) => {
    try {
        req.user_ip = req.headers['x-forwarded-for']?.split(',')[0].trim();
        const accessToken = req.cookies[ACCESS_COOKIE_NAME];
        const UID = req.cookies[UID_COOKIE_NAME];
        if (!accessToken) {
            const refreshToken = req.cookies[REFRESH_COOKIE_NAME];
            if (!refreshToken)
                throw customError("0xA0001", "RTK:NAN", "0xA0001"); //401
            try {
                if (refreshToken === "DESTROYED")
                    throw customError("0xAFDD1", "MCS:ERR", "0xAFDD1"); //401
                const data = await redis.getJSON(`U:${UID}:${refreshToken}`);
                if (data) {
                    req.user_id = data.id;
                    req.user_rank = data.access_rank;
                    refreshAccessToken(data, res);
                    return next();
                }
                const isIt = await Session.verify(refreshToken);
                if (isIt) {
                    const refresh_token_data = jwt.verify(refreshToken, process.env.JWT_SECRET_REFRESH);
                    req.user_id = refresh_token_data.id;
                    req.user_rank = refresh_token_data.access_rank;
                    refreshAccessToken(refresh_token_data, res);
                    if (refreshExpireCheck(refresh_token_data)) { //yarı ömür
                        redis.putJSON(`U:${refresh_token_data.id}:${refreshToken}`, { id: refresh_token_data.id, access_rank: refresh_token_data.access_rank }, ONE_HALF_HOUR);
                        return next();
                    }
                    refreshRefreshToken(refreshToken, res, next);
                } else {
                    throw customError("0xA0011", "SES:NAN", "0xA0011"); //401
                }
            } catch (error) {
                if (error instanceof jwt.TokenExpiredError) {
                    Session.remove(refreshToken);
                    throw customError("0xA0008", "RTK:EXP", "0xA0008"); //401
                } else if (error instanceof jwt.JsonWebTokenError) {
                    throw customError("0xA0009", "RTK:ERR", "0xA0009"); //401
                } else {
                    if (error.name === "SES:NAN" || error.name === "MCS:ERR" || error.name === "RTK:NAN")
                        throw customError(error.message, error.name, error.code); //401
                    else
                        throw customError("0xA0000", "RTK:CMN", "0xA0000"); //401
                }
            }
        } else { //-------ACCESS OK------------
            try {
                const data = await redis.getJSON(`U:${UID}:${accessToken}`);
                if (data) {
                    req.user_id = data.id;
                    req.user_rank = data.access_rank;
                    console.log('cached')
                    return next();
                } else {
                    throw customError("0xAA00C", "ATK:RDS", "0xAA00C"); //401
                }
            } catch (error) {
                const refreshToken = req.cookies[REFRESH_COOKIE_NAME];
                if (error instanceof jwt.TokenExpiredError || error.name === "ATK:RDS") {
                    if (!refreshToken) {
                        throw customError("0xAA001", "ATK:RTK", "0xAA001"); //401
                    }

                    try {
                        const data = await redis.getJSON(`U:${UID}:${refreshToken}`);
                        if (data) {
                            req.user_id = data.id;
                            req.user_rank = data.access_rank;
                            refreshAccessToken(data, res);
                            return next();
                        } else {
                            const isIt = await Session.verify(refreshToken);
                            if (isIt) {
                                const refresh_token_data = jwt.verify(refreshToken, process.env.JWT_SECRET_REFRESH);
                                refreshAccessToken(refresh_token_data, res);
                                if (refreshExpireCheck(refresh_token_data)) {//yarı ömür
                                    redis.putJSON(`U:${refresh_token_data.id}:${refreshToken}`, { id: refresh_token_data.id, access_rank: refresh_token_data.access_rank }, ONE_HALF_HOUR);
                                    return next();
                                }
                                refreshRefreshToken(refreshToken, res, next);
                            } else {
                                throw customError("0xAA002", "ATK:RTK", "0xAA002"); //401
                            }
                        }
                    } catch (error) {
                        if (error instanceof jwt.TokenExpiredError) {
                            Session.remove(refreshToken);
                            throw customError("0xAA008", "RTK:EXP", "0xAA008"); //401
                        } else if (error instanceof jwt.JsonWebTokenError) {
                            throw customError("0xAA009", "RTK:ERR", "0xAA009"); //401
                        } else {
                            throw customError("0xAA00F", "RTK:CMN", "0xAA00F"); //401
                        }
                    }

                } else if (error instanceof jwt.JsonWebTokenError) {
                    throw customError("0xAA0F9", "ATK:ERR", "0xAA0F9"); //401
                } else {
                    // if (error.name === "ATK:RDS")
                    //     throw customError(error.message, error.name, error.code); //401
                    // else
                    throw customError("0xAA010", "ATK:ERR", "0xAA010"); //401
                }

            }
        }
    } catch (error) {
        console.log(error);
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
            });
        if (error.custom) {
            res.status(401).json({ code: error.code, message: error.message, authOut: true });
        } else {
            res.status(401).json({ code: '0xAAA10', message: '0xAAA10', authOut: true });
        }
    }

};

module.exports = {
    authorization
}