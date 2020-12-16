const express = require('express');
const router = express.Router();
const Post = require('../model/goods');
var returnStatus = require('../controller/status');
var status = new returnStatus()

router.get('/', async (req,res) => {
	try {
		const getData = await Post.find();
	
		if(getData){
			status.success200(res, getData)
		}
		else {
			status.notfound404(res)
		}

	} catch (err) {
		res.json({
			message: err
		});
	}
});

router.get('/:id', async(req, res)=>{
	try{
		const getData = await Post.findById(req.params.id, {_id:0});

		if(getData){
			status.success200(res, getData)
		}
		else {
			status.notfound404(res)
		}
		
	} catch (err) {
		res.json({message:err});
	} 
});

module.exports = router;