const User = require('../model/user')
const bcrypt = require('bcrypt')
const statusController = require('../controller/statusController')

const register = async (req, res) => {
	let user = new User({
		name: req.body.name,
		userName: req.body.userName,
		email: req.body.email,
		password: req.body.password,
	})

	let validatePass = {
		confirm: req.body.confirmPassword
	}

	try {
		let validate = await User.findOne({email:req.body.email})

		if (validate) {
			return res.status(400).send({
				'message':'user already exist'
			})
		} 

		if (validatePass.confirm != user.password){
			return res.status(400).send({
				'message':"password doesn't match"
			})

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