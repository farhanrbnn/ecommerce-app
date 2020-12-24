const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');
const Post = require('../model/goods')
const User = require('../model/user')
const app = express()
const bodyParser = require('body-parser')
const Joi = require('@hapi/joi')
var returnStatus = require('../controller/status')
var status = new returnStatus()

router.use(bodyParser.json({ limit: '1mb' }))
router.use(bodyParser.urlencoded({ limit: '1mb', extended: true }))

// ITEM POST REQUEST
// save items to database
router.post('/', async (req, res) => {
	const post = new Post({
		name: req.body.name,
		category: req.body.category,
		price: req.body.price,
		quantity: req.body.quantity,
		picture: req.body.picture
	})

	try {
		const savedPost = await post.save()
		res.json(savedPost)

	} catch (err) {
		res.json({message:err})
	}
})

router.post('/items', async (req, res) => {
	let category = await Post.find({category: req.body.category})

	try {
		if (category) {
			return status.success200(res, category)

		} else {
			return status.badrequest404(res, 'not found')
		}
	} catch (err) {
		return status.notfound404(res, 'something went wrong')
	}
})

// USER POST REQUEST

router.post('/register', async (req, res) => {
	let user = new User({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password
	})

	try {
		let validate = await User.findOne({email:req.body.email})

		if(validate) {
			return status.badrequest400(res, 'user already exist')

		} else {
			let encrypted = await bcrypt.genSalt(10)
			user.password = await bcrypt.hash(user.password, encrypted)
		
			const savedPost = await user.save()
			return status.success200(res, savedPost)
		}
	} catch (err) {
		res.json({message: err})
	}
})

module.exports = router