const Post = require('../model/goods')
const statusController = require('../controller/statusController')

const input_items = async (req,res) => {
	let post = new Post({
		name: req.body.name,
		category: req.body.category,
		price: req.body.price,
		quantity: req.body.quantity,
		picture: req.body.picture
	})

	try {
		let savedPost = await post.save()

		return res.status(200).send({
			'message':'success',
			'data': savedPost
		})

	} catch (err) {
		return res.status(400).send({
			'message':err
		})
	}
}

const category = async (req, res) => {
	let category = await Post.find({category: req.body.category})
	try {
		if (category && category.length >= 1) {
			return res.status(200).send({
				'message':'success',
				'data':category
			})
		} else {
			return res.status(404).send({
				'message':'Not Found',
				'data': {}
			})

		}
	} catch (err) {
		return res.status(400).send({
			'message':err
		})

	}
}

const get_all_items = async (req, res) => {
	try {
		let getData = await Post.find()

		if (getData) {
			return res.status(200).send({
				'message':'success',
				'data': getData
			})
		} else {
			return res.status(404).send({
				'message':'Not Found',
				'data':{}
			})

		}
	} catch (err) {
			return res.status(400).send({
				'message':err
			})

	}
}

const get_item_by_id = async (req, res) => {
	try {
		let getData = await Post.findById(req.params.id, {_id:0})
		
		if (getData) {
			return res.status(200).send({
				'message':'success',
				'data':getData
			})
			
		} else {
			return res.status(404).send({
				'message':'Not Found',
				'data':{}
			})
			
		}
	} catch (err) {
		return res.status(400).send({
			'message':err
		})
	}
}

module.exports = {
	input_items,
	category,
	get_all_items,
	get_item_by_id
}