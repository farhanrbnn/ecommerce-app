const express = require('express')
const router = express.Router()
const Post = require('../model/goods')
const User = require('../model/user')
const itemsController = require('../controller/itemsController')
const userController = require('../controller/userController')


router.get('/items', itemsController.get_all_items)
router.get('/items/:id', itemsController.get_item_by_id)
router.get('/items/category', itemsController.category)
router.get('/items/related/:id', itemsController.related_product)
router.get('/user/order-history/:id', itemsController.order_history)
router.get('/user/list/:id', userController.get_user)
router.get('/user/address/:id', userController.get_user_address)


module.exports = router