const express = require('express')
const verify = require('../controller/verifyToken')

const router = express.Router()

router.get('/asd',verify, (req, res)=>{
	res.json({
		'message':"you've been allowed to visit private route"
	})
})

module.exports = router