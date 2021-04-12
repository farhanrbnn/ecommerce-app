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
	let user = await User.findOne({email:req.body.email})

	if (!user) {
		return res.status(404).send({
			'message':'Not Found'
		})
	}

	try {
		let validatedPassword = await bcrypt.compare(req.body.password, user.password)

		if (!validatedPassword) {
			return statusController.notFound404(res)
			
		} else {
			const token = createToken(user._id)
			return res.json({
				'status':'200',
				'token': token
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