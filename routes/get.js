const express = require('express')
const router = express.Router()
const Post = require('../model/goods')
const itemsController = require('../controller/itemsController')

router.get('/', itemsController.get_all_items)
router.get('/:id', itemsController.get_item_by_id)

module.exports = router