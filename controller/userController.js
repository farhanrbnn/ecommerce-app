const User = require('../model/user')
const Cart = require('../model/cartModel')
const bcrypt = require('bcrypt')
const Joi = require('@hapi/joi')

// const validateRegister = async (data) => {
// 	const schema = Joi.object({
// 		name: Joi.string().required(),
// 		userName: Joi.string().required(),
// 		gender: Joi.string().required(),
// 		email: Joi.string().required(),
// 		password: Joi.string().required()
// 	})

// 	try {
// 		const result = await schema.validate(data)

// 		if(result.error == null){
// 			return {
// 				isvalid: true
// 			}
// 		} else {
// 			return {
// 				isValid: false,
// 				message: result.error.toString()
// 			}
// 		}
// 	} catch (err) {
// 		return {
// 			isValid: false,
// 			message: err.details[0].message
// 		}
// 	}

// }

const register = async (req, res) => {
	let user = new User({
		name: req.body.name,
		userName: req.body.userName,
		gender: req.body.gender,
		email: req.body.email,
		password: req.body.password,
	})
	
	// const validate = await validateRegister(user)
	
	// if(!validate.isValid){
	// 	return res.send({
	// 		'status':'400',
	// 		'message': validate.message
	// 	})
	// }

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

const get_user_address = async (req, res) => {
	const userId = req.params.id

	try {
		await User.findById(userId)
		.populate('address')
		.exec((err, data) => {
			res.json({
				'status':'200',
				'data':data.address
			})
		})
	} catch(err) {
		res.json({
			'status':'500',
			'data':{}
		})
	}
}

const user_cart = async (req, res) => {
	const cart = new Cart({
		item: req.body.itemid,
		quantity: req.body.quantity,
		subtotal: req.body.subtotal
	})

	const user = req.body.user

	try {
		const saveCart = await cart.save()
		const refCart = await User.findByIdAndUpdate(user, {"$push":{cart:saveCart.id}})

		if(saveCart && refCart) {
			return res.json({
				'status':200,
				'message':true
			})
		}
	} catch (err) {
		return res.send({
			'message':err
		})
	}
}

const get_cart = async (req, res) => {
	const userId = req.params.id

	try {
		await User.findById(userId)
		.populate({
			path: 'cart',
			populate: {
				path:'item'
			}
		})
		.exec((err, data) => {
			if(data) {
				return res.json({
					'data':data.cart
				})
			} else {
				return res.json({
					data:{}
				})
			}
		})
	} catch(err) {
		return res.json({
			'message':err
		})
	}
}

const delete_cart = async (req, res) => {
	const cartId = req.params.id

	try {
		await User.findOneAndDelete({cart:cartId})
		.then(() => {
			return res.json({
				'message':true
			})
		})
	} catch(err) {
		return res.json({
			'message': err
		})
	}
}

module.exports = {
	register,
	get_user,
	get_user_address,
	user_cart,
	get_cart,
	delete_cart
}