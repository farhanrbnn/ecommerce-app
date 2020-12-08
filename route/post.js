const express = require('express');
const router = express.Router();
const Post = require('../model/goods');

router.post('/', async (req, res) => {
	const post = new Post({
		name: req.body.name,
		category: req.body.category,
		price: req.body.price,
		quantity: req.body.quantity
	});

	try {
		const savedPost = await post.save();
		res.json(savedPost);

	} catch (err) {
		res.json({message:err});
	}
});

module.exports = router;