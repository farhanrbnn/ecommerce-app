const express = require('express')
const verify = require('../controller/verifyToken')

const router = express.Router()

router.get('/asd',verify, (req, res)=>{
	res.send(req.user)
})

module.exports = router