const router = require('express').Router();
const { register } = require('../controllers/auth');
const { changePassword, getAllUser, deleteUser, changeRank } = require('../controllers/users');
const { authorization } = require('../middleware/authorization');

router.get("/all", authorization, getAllUser);
router.patch("/change-pwd", authorization, changePassword);
router.delete("/delete/:id", authorization, deleteUser);
router.post("/add", authorization, register);
router.patch("/:id", authorization, changeRank);

module.exports = router;