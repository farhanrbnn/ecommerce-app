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
		let validateUserName = await User.findOne({userName:req.body.userName})
		let validateEmail = await User.findOne({email:req.body.email})

		if (validateUserName) {
			return res.send({
				'status':'400',
				'message':'user name already exist'
			})
		} 

		if(validateEmail) {
			return res.send({
				'status':'400',
				'message':'email already exist'
			})
		}

		if (validatePass.confirm != user.password){
			return res.send({
				'status':'400',
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

const get_user = async(req,res) => {
	try {
		const getUser = await User.findById(req.params.id)

		if(getUser){
			res.json({
				'status':'200',
				'data':getUser
			})
		} else {
			res.json({
				'status':'404',
				'data':{}
			})
		}
	}  catch (err) {
		res.json({
			'message':err
		})
	}
}

module.exports = {
	register,
	get_user
}