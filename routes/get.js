const express = require('express');
const router = express.Router();
const Post = require('../model/goods');

router.get('/', async (req,res) => {
	try {
		const getData = await Post.find();

		res.json({
			message: 'success',
			data: getData
		});

	} catch (err) {
		res.json({
			message: err
		});
	}
});

router.get('/:id', async(req, res)=>{
	try{
		const getData = await Post.findById(req.params.id, {_id:0});
		res.json(getData);

	} catch (err) {
		res.json({message:err});
	} 
});

module.exports = router;