const { login, logout } = require('../controllers/auth');
const router = require('express').Router();
const { authorization } = require('../middleware/authorization');

router.post("/login", login);
router.get("/logout", authorization, logout);

module.exports = router;