const multer = require('multer');
const { getAll, newSlide, delSlide, updateSlide, getOnlyAir } = require('../controllers/slider');
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

router.get("/", getOnlyAir);
router.patch("/", authorization, updateSlide);
router.get("/all", authorization, getAll);
router.post("/", authorization, singleUpload, newSlide);
router.delete("/:id", authorization, delSlide);

module.exports = router;