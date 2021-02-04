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

		return statusController.success200(res, savedPost)

	} catch (err) {
		return statusController.badRequest400(res, err)
	}
}

const category = async (req, res) => {
	let category = await Post.find({category: req.body.category})

	try {
		if (category) {
			return statusController.success200(res, category)
			
		} else {
			return statusController.notFound404(res)

		}
	} catch (err) {
		return statusController.badRequest400(res, err)

	}
}

const get_all_items = async (req, res) => {
	try {
		let getData = await Post.find()

		if (getData) {
			console.log(req)
			return statusController.success200(res, getData)

		} else {
			return statusController.notFound404(res)

		}

	} catch (err) {
		return statusController.badRequest400(res, err)

	}
}

const get_item_by_id = async (req, res) => {
	try {
		let getData = await Post.findById(req.params.id, {_id:0})

		if (getData) {
			return statusController.success200(res, getData)
			
		} else {
			return statusController.notFound404(res)
			
		}
	} catch (err) {
		return statusController.badRequest400(res, err)
		
	}
}
module.exports = {
	input_items,
	category,
	get_all_items,
	get_item_by_id
}