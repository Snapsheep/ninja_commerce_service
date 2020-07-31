const express = require('express');
const userController = require("../controller/users.controller");
const router = express.Router();

router.post('/create-user', userController.createUser);
router.post('/login', userController.loginUser);

module.exports = router;