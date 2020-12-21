const express = require('express')
const router = express.Router()
const User = require('../model/user')
const bcrypt = require('bcrypt');
var returnStatus = require('../controller/status')
var status = new returnStatus()

router.post('/auth', async (req, res) => {
	let user = await User.findOne({email: req.body.email})
	console.log(user)

	if(!user) {
		return status.badrequest400(res, 'Incorrect email or password')
	} 

	try {
		const validatedPassword = await bcrypt.compare(req.body.password, user.password)
		
		if(!validatedPassword) {
			return status.badrequest400(res, 'Incorrect email or password')

		} else {
			res.json({
				'message': 'login'
			})
		}
	} catch (err) {
		res.json({'message':err})
	}
})

module.exports = router