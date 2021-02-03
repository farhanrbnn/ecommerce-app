const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const Post = require('../model/goods')
const User = require('../model/user')
const app = express()
const bodyParser = require('body-parser')
const Joi = require('@hapi/joi')
const userController = require('../controller/userController')
const itemsController = require('../controller/itemsController')

router.use(bodyParser.json({ limit: '1mb' }))
router.use(bodyParser.urlencoded({ limit: '1mb', extended: true }))

router.post('/', itemsController.input_items)
router.post('/items', itemsController.category)

// USER REGISTER POST REQUEST
router.post('/register', userController.register)
module.exports = router