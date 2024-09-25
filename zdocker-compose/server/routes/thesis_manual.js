const {
    getAll_IdAndTitle,
    newThesisManual,
    delThesisManual,
    getById,
    updateThesisManual
} = require('../controllers/thesis_manual');

const router = require('express').Router();
const { authorization } = require('../middleware/authorization');


router.get("/info", getAll_IdAndTitle);
router.get("/:id", getById);
router.post("/", authorization, newThesisManual);
router.put("/", authorization, updateThesisManual);
router.delete("/:id", authorization, delThesisManual);

module.exports = router;