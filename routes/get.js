const express = require('express')
const router = express.Router()
const Post = require('../model/goods')
const itemsController = require('../controller/itemsController')

router.get('/items', itemsController.get_all_items)
router.get('/items/:id', itemsController.get_item_by_id)
router.get('/items/category', itemsController.category)

module.exports = router