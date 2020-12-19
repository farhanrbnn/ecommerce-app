const express = require('express')
const router = express.Router()
const Post = require('../model/goods')
var returnStatus = require('../controller/status')
var status = new returnStatus()

router.get('/', async (req,res) => {
	try {
		const getData = await Post.find()
	
		if(getData){
			return status.success200(res, getData)
		}
		else {
			return status.badrequest400(res, 'something went wrong')
		}

	} catch (err) {
		return status.notfound404(res, err)
	}
})

router.get('/:id', async(req, res)=>{
	try{
		const getData = await Post.findById(req.params.id, {_id:0})

		if(getData){
			return status.success200(res, getData)
		}
		else {
			return status.badrequest400(res, 'something went wrong')
		}
		
	} catch (err) {
		return status.notfound404(res, err)
	} 
})

module.exports = router