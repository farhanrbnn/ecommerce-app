const bcrypt = require('bcrypt')
const User = require('../model/user')
const statusController = require('../controller/statusController')
const jwt = require('jsonwebtoken')


const maxAge = 3 * 24 * 60 * 60

const createToken = (id) => {
	return jwt.sign({ id }, 'sadasdwdqwdqwddq', {
		expiresIn: maxAge
	})
}

const login = async (req, res) =>{
	let user = await User.findOne({userName:req.body.userName})

	if (!user) {
		return statusController.notFound404(res)
	}

	try {
		let validatedPassword = await bcrypt.compare(req.body.password, user.password)

		if (!validatedPassword) {
			return statusController.notFound404(res)
			
		} else {
			const token = createToken(user._id)
			return res.status(200).send({
				'token':token
			})
		}
	} catch (err) {
		return res.status(400).send({
			'message':'error'
		})
	}
}

module.exports = {
	login
}