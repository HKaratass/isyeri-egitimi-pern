const multer = require('multer');
const { getAll, newCommitteeMember, updateCommitteeMember, getAll_IdAndName, deleteCommitteeMember, getById } = require('../controllers/committee');
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
router.get("/info", getAll_IdAndName);
router.get("/:id", getById);
router.post("/", authorization, singleUpload, newCommitteeMember);
router.put("/", authorization, singleUpload, updateCommitteeMember);
router.delete("/:id", authorization, deleteCommitteeMember);

module.exports = router;
