const express = require('express');
const router = express.Router();
const Post = require('../model/goods');
const app = express();
const bodyParser = require('body-parser');

router.use(bodyParser.json({ limit: '1mb' }));
router.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));

router.post('/', async (req, res) => {
	const post = new Post({
		name: req.body.name,
		category: req.body.category,
		price: req.body.price,
		quantity: req.body.quantity,
		picture: req.body.picture
	});

	try {
		const savedPost = await post.save();
		res.json(savedPost);

	} catch (err) {
		res.json({message:err});
	}
});

module.exports = router;