const multer = require('multer');
const { getAll, newAnnouncement, delAnnouncement, getAll_IdAndTitle, getById, updateAnnouncement } = require('../controllers/announcement');
const router = require('express').Router();
const { authorization } = require('../middleware/authorization');

const storage = multer.diskStorage({
    destination: async (req, file, callBack) => {
        console.log("--> File:", file);
        return callBack(null, "./.temp/")
    },
    filename: (req, file, callBack) => {
        return callBack(null, `${Date.now()}_${file.originalname}.jpg`)
    }
})

const upload = multer({ storage });
const singleUpload = upload.single("image");


router.get("/", getAll);
router.get("/info", getAll_IdAndTitle);
router.get("/:id", getById);
router.post("/", authorization, singleUpload, newAnnouncement);
router.put("/", authorization, singleUpload, updateAnnouncement);
router.delete("/:id", authorization, delAnnouncement);

module.exports = router;