const express = require('express')
const router = express.Router()
const User = require('../model/user')
const bcrypt = require('bcrypt');
const authController = require('../controller/authController')

router.post('/auth', authController.login)

module.exports = router