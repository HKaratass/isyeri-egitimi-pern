const User = require("../database/users");
const Session = require("../database/sessions");
const bcrypt = require("bcryptjs");
const redis = require('../config/redis');

// from authorization + req.user_rank
exports.getAllUser = async (req, res, next) => {
    try {
        const founded = await User.findAll(req.user_rank)
        res.status(200).json(founded)
    } catch (e) {
        res.status(404).json({ code: '0xFAA', message: "Kullanıcılar bulunamadı." })
    }

}

function customError(message, name, code) {
    const err = new Error(message);
    err.name = name;
    err.code = code;
    return err;
}

const passwordControl = (pwd) => {
    return String(pwd)
        .match(
            // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\"\-@$'!%,.\s*?&])[A-Za-z\d@$\-.,"!'%\s*?&]{10,}$/
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\"\-_\/+=@$'!%,.:<£#>;\s*?|&^~\[\]{}\(\)])[A-Za-z\dğĞüÜşŞiİöÖçÇ@0$-_\/+=.:;<#£>,"!'%\s*?|(){\[\]}&^~]{10,250}$/
        );
}

const PCID_COOKIE_NAME = "_PCID";
// from authorization + req.user_id
exports.changePassword = async (req, res, next) => {
    const pc_id = req.cookies[PCID_COOKIE_NAME];
    try {
        const id = req.user_id;
        if (!id) {
            throw customError("Token sahibi kullanıcı bulunamadı", "FND:NAN", "0xFA3-1");
        }
        const { old_password, new_password } = req.body;
        const founded = await User.findById(id);
        if (!founded)
            throw customError("Kullanıcı bulunamadı", "FND:NAN", "0xFA3-2");

        if (!passwordControl(new_password))
            throw customError("Şifre en az 10 karakter olmalı. En az bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter[?@$&?%!*\"\-'.,] içermelidir.", "REGEX", "0xAF29");

        const passwordCompare = await bcrypt.compare(old_password, founded.password);
        if (!passwordCompare)
            throw customError("Eski şifre hatalı.", "PWD:CMPR", "0xFA3-3");

        const passwordHash = await bcrypt.hash(new_password, 12);
        await User.updateById({ password: passwordHash }, id);
        await redis.scanDel(`U:${id}:*`);
        await Session.removeAllWithOutCurrentPC(id, pc_id)
        await User.addLog({
            user_id: req.user_id,
            user_ip: req.user_ip,
            changed_user_id: id,
            type: 'P',
            isChangedPassword: true
        })

        res.status(200).json({ message: "Şifre başarıyla değiştirildi" })
    } catch (error) {
        if (error.name === "FND:NAN" || error.name === "PWD:CMPR")
            return res.status(400).json({ code: error.code, message: error.message })
        res.status(400).json({ code: '0xFA3', message: "Şifre değiştirme başarısız." })
    }
}

const { randomBytes, randomUUID } = require("crypto");
// from authorization + req.user_rank
exports.deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const willBeDeleteUser = await User.findById(id);
        if (req.user_rank <= willBeDeleteUser.access_rank) {
            throw customError("YETKİNİZ YOK - Kendinize eşit kullanıcıları silemezsiniz.", "AUTH", "0xAFFF9");
        }
        // await User.deleteById(id);
        console.log("UUID: ", randomUUID());
        for (let index = 0; index < 500; index++) {
            console.log("TEST: ", randomBytes(3).toString('hex'));
            
        }

        console.log(randomBytes(3).toString('hex') + "-" + willBeDeleteUser.user_name);
        await User.updateById({
            isRemoved: true,
            user_name: randomBytes(3).toString('hex') + "-" + willBeDeleteUser.user_name,
            email: randomBytes(3).toString('hex') + "-" + willBeDeleteUser.email,
            phone_number: randomBytes(3).toString('hex') + "-" + willBeDeleteUser.phone_number,
        }, id);
        await Session.removeAll(id);
        await redis.scanDel(`U:${id}:*`);
        await User.addLog({
            user_id: req.user_id,
            user_ip: req.user_ip,
            changed_user_id: id,
            type: 'D',
        })
        res.status(200).json({ message: "Kullanıcı başarıyla silindi." })
    } catch (error) {
        console.log("E: ", error);
        if (error.name === "AUTH")
            return res.status(400).json({ code: error.code, message: error.message })
        res.status(400).json({ code: '0xFA1', message: "Kullanıcı silme başarısız." })
    }
}

// from authorization + req.user_rank + req.user_id
exports.changeRank = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (parseInt(id) === req.user_id) {
            throw customError("YETKİNİZ YOK - Kendini yetkinizi değiştiremezsiniz.", "AUTH", "0xAFFF0");
        }
        const { access_rank } = req.body;
        if (req.user_rank <= access_rank) {
            throw customError("YETKİNİZ YOK - Kendinize eşit ve ya üst yönetici yapamazsınız.", "AUTH", "0xAFFF1");
        }
        const willBeUpdated = await User.findById(id);
        if (req.user_rank <= willBeUpdated.access_rank) {
            throw customError("YETKİNİZ YOK - Kendinize eşit kullanıcıları alt yönetici yapamazsınız.", "AUTH", "0xAFFF3");
        }
        const Auth = await User.findById(req.user_id);
        const updated = await User.update({ access_rank, whoLastAuth: Auth.email }, id);
        await Session.removeAll(id);
        await redis.scanDel(`U:${id}:*`);
        await User.addLog({
            user_id: req.user_id,
            user_ip: req.user_ip,
            changed_user_id: id,
            type: 'P',
            old_access_rank: willBeUpdated.access_rank,
            new_access_rank: updated.access_rank
        })

        res.status(200).json({ message: "Yetki başarıyla değiştirildi" })
    } catch (error) {
        if (error.name === "AUTH")
            return res.status(400).json({ code: error.code, message: error.message })
        res.status(400).json({ code: '0xFA5', message: "Yetki değiştirme başarısız." })
    }
}

module.exports = {
    ...module.exports,
};