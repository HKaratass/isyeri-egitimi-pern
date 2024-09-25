const nodemailer = require('nodemailer');
const Events = require("../database/events");
const fs = require('fs');
require("dotenv").config();
const redis = require('../config/redis');
const redisClient = redis.client;

const CAPTCHA_MAIL_COOKIE_NAME = "_CTKNp";

const transporter = nodemailer.createTransport({
    // host: process.env.SMTP_HOST,
    // port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === "secure",
    // auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASSWORD
    // }
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD
    }
});

const HTML_TEMPLATE = (name, surname, email, phoneNumber, text, title, text_type) => {
    return `
    <!DOCTYPE html>
    <html lang="tr">
    
    <head>
        <meta charset="UTF-8">
    </head>
    
    <body>
        <div
            style="background-color: rgb(28, 28, 28); border-radius: 5px; width: calc(100% - 20px); height: calc(100dvh - 20px); padding: 10px; overflow: hidden;">
            <div
                style="width: calc(100% - 30px); padding: 10px 0 10px 0; height: 158px; background-color: aliceblue; margin: 0 auto 10px auto; border-radius: 8px; display: flex; justify-content: center; align-items: center; flex-direction: column;">
                <label
                    style="display: block; width: calc(100% - 30px); border-radius: 5px; margin: 2px; padding: 5px 10px; background-color: rgb(80, 80, 80);  color: rgb(242,242,242);">Adı:
                    ${name}</label>
                <label
                    style="display: block; width: calc(100% - 30px); border-radius: 5px; margin: 2px; padding: 5px 10px; background-color: rgb(80, 80, 80);  color: rgb(242,242,242);">Soyadı:
                    ${surname}</label>
                <label
                    style="display: block; width: calc(100% - 30px); border-radius: 5px; margin: 2px; padding: 5px 10px; background-color: rgb(80, 80, 80);  color: rgb(242,242,242);">Telefon:
                    ${phoneNumber}</label>
                <label
                    style="display: block; width: calc(100% - 30px); border-radius: 5px; margin: 2px; padding: 5px 10px; background-color: rgb(80, 80, 80);  color: rgb(242,242,242);">E-Posta:
                    ${email}</label>
                <label
                    style="display: block; width: calc(100% - 30px); border-radius: 5px; margin: 2px; padding: 5px 10px; background-color: rgb(80, 80, 80);  color: rgb(242,242,242);">Konu:
                    ${title} - ${text_type}</label>
            </div>
            <div
                style=" width: calc(80% - 20px); height: calc(100% - 268px); background-color: aliceblue; margin: 0 auto 10px auto; border-radius: 8px; padding: 10px; overflow-y: auto;">
                ${text}
            </div>
            <div
                style="height: 30px; width: calc(80% - 20px); background-color: aliceblue; margin: 0 auto 10px auto; border-radius: 8px; padding: 10px;">
                <label style="display: block; text-align: center;">Eğitim Kurulu - PERN Stack</label>
                <label style="display: block; text-align: center;">©Author: Hasan Karataş</label>
            </div>
        </div>
    </body>
    
    </html>
    `;
}

// GÖNDERME SAAT HATASINDA KULLANILACAK
function TimeZonePlus3(dateString) {
    const date = new Date(dateString);
    date.setHours(date.getHours() + 3);
    return date;
}

function customError(message, name, code) {
    const err = new Error(message);
    err.name = name;
    err.code = code;
    return err;
}

exports.sendMail = async (req, res, next) => {
    try {
        const { name, surname, email, phoneNumber, event_id, text, captchaT4p, captcha_token } = req.body;
        const captchaMailCookie = req.cookies[CAPTCHA_MAIL_COOKIE_NAME];
        if (captcha_token !== captchaMailCookie)
            throw customError("DOĞRULAMA HATASI", "MALICIOUS", "0x011");
        const CAPTCHA_VALUE = await redisClient.get(captchaMailCookie);
        if (CAPTCHA_VALUE?.substring(1) !== captchaT4p) {
            redis.del(captchaMailCookie);
            if (req.file) {
                fs.unlinkSync(req.file.path);
            }
            throw customError("DOĞRULAMA KODU YANLIŞ", "CAPTCHA", "0x012");
        }
        redis.del(captchaMailCookie);

        const ip = req.headers['x-forwarded-for']?.split(',')[0].trim();
        const [Event] = await Events.findById_DatesAndTitle(event_id);

        const today = new Date();
        const sum_state = Event.sum_first_day_date && Event.sum_last_day_date && new Date(Event.sum_first_day_date) <= today && new Date(Event.sum_last_day_date) >= today;
        const text_state = Event.text_first_day_date && Event.text_last_day_date && new Date(Event.text_first_day_date) <= today && new Date(Event.text_last_day_date) >= today;

        if (!sum_state && !text_state)
            throw new Error("Out of Date - Send Paper");

        const formated_text = text.split("\n").map((k, i) => {
            const line = `&#160;${k}<br>`
            return line
        }).join('');
        const mailOption = {
            from: `"SEMPOZYUM BILDIRI" ${process.env.SMTP_USER}`,
            to: process.env.TO_MAIL,
            subject: `${surname} - ${Event.title.substring(0, 8)} - ${sum_state ? "ÖZET" : (text_state ? "TAM METİN" : "")}`,
            html: HTML_TEMPLATE(name, surname, (ip ? email + " - " + ip : email), phoneNumber, formated_text, Event.title, (sum_state ? "ÖZET" : (text_state ? "TAM METİN" : ""))),
        }
        if (req.file) {
            mailOption.attachments = [
                {
                    filename: req.file?.originalname,
                    path: `${req.file.destination}${req.file.filename}`,
                },
            ]
        }
        transporter.sendMail(mailOption, (error, info) => {
            if (error) {
                console.error('E-posta gönderme hatası: ' + error);
                throw new Error("E-POSTA GÖNDERİLEMEDİ");
            } else {
                console.log('E-posta başarıyla gönderildi: ' + info.response);
            }
            if (req.file) {
                fs.unlinkSync(req.file.path);
            }

        });


        res.status(200).json({ message: "E-Posta Gönderildi" })
    } catch (error) {
        console.log("ERROR:", error.message);
        if (error.name === "CAPTCHA" || error.name === "MALICIOUS")
            return res.status(400).json({ code: error.code, message: error.message })
        res.status(400).json({ code: '0x01', message: "E-Posta gönderilemedi." });
    }

}

module.exports = {
    ...module.exports,
};


