const bcrypt = require('bcrypt')
const User = require('../model/user')
const statusController = require('../controller/statusController')

const login = async (req, res) =>{
	let user = await User.findOne({email:req.body.email})

	if (!user) {
		return res.json({
			'message':'incorrect email or password'
		})
	}

	try {
		let validatedPassword = await bcrypt.compare(req.body.password, user.password)

		if (!validatedPassword) {
			return res.json({
				'message':'incorrect email or password'
			})
		} else {
			return res.json({
				'message':'login'
			})
		}
	} catch (err) {
		res.json({
			'message': err
		})
	}
}

module.exports = {
	login
}