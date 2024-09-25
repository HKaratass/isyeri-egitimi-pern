const express = require('express');
const app = express();
require("dotenv").config();
const cookieParser = require('cookie-parser');
const logger = require("./middleware/logger");
const announcementRouter = require("./routes/announcement");
const sliderRouter = require("./routes/slider");
const eventRouter = require("./routes/event");
const committeeRouter = require("./routes/committee");
const theisManualRouter = require("./routes/thesis_manual");
const sendPaperRouter = require("./routes/send_paper");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const nodemailer = require('nodemailer');
const PORT = process.env.PORT
const { x_csrf_token_check } = require('./middleware/x_csrf_token_check');
const CSRF_COOKIE_NAME = "_XS-RF"

const hard = require('crypto').randomBytes(64).toString('hex');
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.GMAIL_USER,
//         pass: process.env.GMAIL_PASSWORD
//     }
// });

const mailOption = {
    // from: process.env.GMAIL_USER,
    bcc: process.env.MANAGERS,
    subject: `SERVER YENİDEN BAŞLATILDI`,
    text: `Acil Kapatma Token (Sadece Acil Durumlarda Kullanınız) =>  ${process.env.API_URL}/shutdown?token=${hard}`,
}
// transporter.sendMail(mailOption, (error, info) => {
//     if (error) {
//         console.error('E-posta gönderme hatası: ' + error);
//     } else {
//         console.log('E-posta başarıyla gönderildi: ' + info.response);
//     }
// });


// EXPRESS CORS
// YERINE NGINX CORS KULLANILIYOR
// 4 saatlik sıkınıt sadece bir slashdan kaynaklanıyormuş :(
// const cors = require("cors");
// const corsOptions = {
//     origin: process.env.CLIENT_URL,
//     credentials: true,
//     methods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
//     allowedHeaders: 'Content-Type, x-csrf-token',
// };
// app.use(cors(corsOptions));

app.use(cookieParser());

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

// entrance middleware
app.use(logger);

app.use(express.static('public')) //file services
// app.use(express.static(path.join(__dirname, 'public'))); //for custom dir
app.use("/announcement", x_csrf_token_check, announcementRouter);
app.use("/slider", x_csrf_token_check, sliderRouter);
app.use("/events", x_csrf_token_check, eventRouter);
app.use("/committee", x_csrf_token_check, committeeRouter);
app.use("/thesis-manual", x_csrf_token_check, theisManualRouter);
app.use("/send-paper", x_csrf_token_check, sendPaperRouter);
app.use("/auth", x_csrf_token_check, authRouter);
app.use("/user", x_csrf_token_check, userRouter);

let theme = {
    detail_nav_bc: "#a33333",
    detail_nav_button_bc_selected: "#8c0101",
    detail_nav_button_bc_hover: "#971a1a",
}

app.get('/theme', (req, res) => {
    // // console.log("IP -> ", req.headers['x-forwarded-for']?.split(',')[0].trim());
    const token = require('crypto').randomBytes(18).toString('base64');
    // // console.log("csrf-Token: ", token);
    res.cookie(CSRF_COOKIE_NAME, token, {
        httpOnly: true,
        domain: process.env.COOKIE_STATE === "production" && process.env.COOKIE_DOMAIN,
        sameSite: 'Strict'
    });
    res.status(200).json({ theme, XEV: token });
})

const { authorization } = require('./middleware/authorization');
app.put('/theme', authorization, (req, res) => {
    console.log("r", req.user_id);
    const data = req.body;
    theme = { ...data };
    res.status(200).json({ message: "TEMA DEĞİŞTİRİLDİ" });
})


const fs = require('fs');
app.get('/shutdown', (req, res) => {
    const { token } = req.query;
    if (token !== hard) res.status(403).send();
    else {
        fs.readFile('index.js', 'utf8', (hata, data) => {
            if (hata) {
                console.error('Dosya okuma hatası:', hata);
            } else {
                // Yeni veriyi eski içeriğin önüne ekleyerek dosyayı yeniden yaz
                const blocker = '/*' + data;
                fs.writeFile('index.js', blocker, 'utf8', (hata) => {
                    if (hata) {
                        console.error('BLCOKER:', hata);
                    } else {
                        console.log('BLCOKER ACTIVE');
                    }
                });
            }
        });
        res.send(
            `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <title>ISYERI EGITIMI PROJE API</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #000;
                        color: #f2f2f2;
                        text-align: center;
                        user-select:none;
                    }
                    label {
                        color: #f00;
                        cursor: pointer;
                    }
                </style>
                </head>
                <body>
                <h1>SERVER TEST: SUCCESSFUL</h1>
                <h1>SERVER STATUS: <label>OFF</label></h1>
                <h2>BYE...</h2>
                <script>
                console.log(
                    "%PERN STACK PROJE%cversion: " + 1.1,
                    "color: blue; background-color: black; padding: 3px;",
                    "color: green; background-color: black; padding: 3px;"
                  );
                  console.log(
                    "%cAUTHOR: %cHasan KARATAŞ",
                    "color: yellow; background-color: black; padding: 3px;",
                    "color: red; background-color: black; padding: 3px;"
                  );
                </script>
                </body>
                </html>
            `
        );
        process.exit();
    }

});

app.get('/', (req, res) => {
    res.send(
        `
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <title>ISYERI EGITIMI PROJE API</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #000;
                    color: #f2f2f2;
                    text-align: center;
                    user-select:none;
                }
                label {
                    color: #0f0;
                    cursor: pointer;
                }
            </style>
            </head>
            <body>
            <h1>SERVER TEST: SUCCESSFUL</h1>
            <h1>SERVER STATUS: <label>ON</label></h1>
            <script>
            console.log(
                "%PERN STACK PROJE%cversion: " + 1.1,
                "color: blue; background-color: black; padding: 3px;",
                "color: green; background-color: black; padding: 3px;"
              );
              console.log(
                "%cAUTHOR: %cHasan KARATAŞ",
                "color: yellow; background-color: black; padding: 3px;",
                "color: red; background-color: black; padding: 3px;"
              );
            </script>
            </body>
            </html>
        `
    );

});
app.use("/*", (req, res, next) => res.status(404).end());

app.listen(PORT, () => {
    console.log(`SERVER LISTEN PORT:${PORT}`);
});
