const express = require('express');
const userController = require("../controller/users.controller");
const Auth = require('../../middleware/Auth');
const router = express.Router();

router.post('/create-user', userController.createUser);
router.post('/login', userController.loginUser);
router.get('/profile', Auth.verifyToken, userController.profileUser);

module.exports = router;