const express = require('express')
const router = express.Router()
const User = require('../model/user')
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser')
const authController = require('../controller/authController')

router.use(cookieParser())

router.post('/auth', authController.login)

module.exports = router