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

router.post('/items/store', itemsController.input_items)
router.post('/items/category', itemsController.category)
router.post('/user/register', userController.register)
router.post('/user/purchased', itemsController.purchased_item)
router.post('/user/wishlist', itemsController.add_wishlist)
router.post('/user/address', itemsController.add_address)
router.post('/items/update', itemsController.update_stock)
router.post('/user/cart', userController.user_cart)
router.post('/user/cart/delete', userController.delete_cart)
router.post('/user/wishlist/delete', itemsController.delete_wishlist)


module.exports = router