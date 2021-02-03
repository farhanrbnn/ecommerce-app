const User = require('../model/user')
const bcrypt = require('bcrypt')
const statusController = require('../controller/statusController')

const register = async (req, res) => {
	let user = new User({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password
	})

	let validatePass = {
		confirm: req.body.confirmPassword
	}

	try {
		let validate = await User.findOne({email:req.body.email})

		if (validate) {
			return statusController.badRequest400(res, 'user already exist')

		} 

		if (validatePass.confirm != user.password){
			return statusController.badRequest400(res, "password doesn't match")

		} else {
			let encrypted = await bcrypt.genSalt(10)
			user.password = await bcrypt.hash(user.password, encrypted)

			let savedPost = await user.save()
			return res.json({
				'message':'success add user'
			})
		}
	} catch (err) {
		return res.json({
			'message':'something went wrong'
		})
	}
}

module.exports = {
	register
}