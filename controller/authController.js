const bcrypt = require('bcrypt')
const User = require('../model/user')
const statusController = require('../controller/statusController')

const login = async (req, res) =>{
	let user = await User.findOne({email:req.body.email})

	if (!user) {
		return statusController.notFound404(res)
	}

	try {
		let validatedPassword = await bcrypt.compare(req.body.password, user.password)

		if (!validatedPassword) {
			return statusController.notFound404(res)
			
		} else {
			return res.json({
				'status':'200',
				'message':'login'
			})
		}
	} catch (err) {
		return statusController.badRequest400(res, err)
	}
}

module.exports = {
	login
}