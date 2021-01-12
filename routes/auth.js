const express = require('express')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../model/user')
const bcrypt = require('bcrypt');
var returnStatus = require('../controller/status')
var status = new returnStatus()

dotenv.config()

router.post('/auth', async (req, res) => {
	let user = await User.findOne({email: req.body.email})
	
	if(!user) {
		return status.badrequest400(res, 'Incorrect email or password')
	} 

	try {
		const validatedPassword = await bcrypt.compare(req.body.password, user.password)
		
		if(!validatedPassword) {
			return status.badrequest400(res, 'Incorrect email or password')
		}

		const token = jwt.sign({_id:user.id}, process.env.TOKEN_SECRET)

		// res.header('auth-token', token).send()
		res.json({
			'accessToken': token
		})

	} catch (err) {
		res.json({'message':err})
	}
})

module.exports = router