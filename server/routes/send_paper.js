const { sendMail } = require('../controllers/send_paper');
const multer = require('multer');
const router = require('express').Router();


//E - POSTA DOSYA BOYUTU
const limits = {
    fileSize: (5 * 1024 * 1024) + 1, // 20 MB refresh 5MB bc of proje.isyeriegitimi
                                //+1 eşitlik kaldırma tam 5mb kabul
};

const storage = multer.diskStorage({
    destination: async (req, file, callBack) => {
        console.log("--> File:", file);
        return callBack(null, "./.temp/")
    },
    filename: (req, file, callBack) => {
        return callBack(null, `mailto_${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage, limits });
const singleUpload = upload.single("file");

// router.post("/send-paper", singleUpload, sendMail);
router.post("/", (req, res, next) => {
    singleUpload(req, res, (err) => {
        if (err instanceof multer.MulterError && err.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({ code: '0xC1', message: "DOSYA BOYUTU FAZLA" });
        } else if (err) {
            return res.status(500).json({ code: '0xA1', message: "DOSYA YÜKLEME HATA" });
        }
        next();
    });
}, sendMail);

module.exports = router;