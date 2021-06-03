const express = require('express')
const router = express.Router()
const User = require('../model/user')
const userController = require('../controller/userController')

router.delete('/user/cart/:id', userController.delete_cart)

module.exports = router