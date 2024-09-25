const multer = require('multer');
const { getAll, getById, newEvent, getAll_IdAndTitle, delEvent, updateEvent, getByIdForUpdate, getAll_forTable, getAll_forTable_Limited } = require('../controllers/event');
const router = require('express').Router();
const { authorization } = require('../middleware/authorization');

const storage = multer.diskStorage({
    destination: async (req, file, callBack) => {
        console.log("--> File:", file);
        return callBack(null, "./.temp/")
    },
    filename: (req, file, callBack) => {
        return callBack(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage });
const multiUpload = upload.fields([
    { name: 'images', maxCount: 12 },
    { name: 'files', maxCount: 8 },
    { name: 'schedule', maxCount: 1 },
])


router.get("/", getAll); //auth gelebilir
router.get("/pre", getAll_forTable);
router.get("/pre/limit", getAll_forTable_Limited);
router.get("/info", getAll_IdAndTitle); //auth gelebilir
router.get("/:id", getById); //databaase onAir tag gelebilir
router.get("/:id/for-update", getByIdForUpdate);//auth gelebilir
router.post("/", authorization, multiUpload, newEvent);
router.put("/", authorization, multiUpload, updateEvent);
router.delete("/:id", authorization, delEvent);

module.exports = router;