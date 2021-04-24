const Post = require('../model/goods')
const Purchased = require('../model/purchasedModel')
const User = require('../model/user')
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

const related_product = async (req, res) => {
	try {
		const getData = await Post.findById(req.params.id, {_id:0})
		const getCategory = await Post.find({category: getData.category})
		
		const arr = []
		for(let i = 0; i < getCategory.length; i++) {
			if(getData.name != getCategory[i].name){
				arr.push(getCategory[i])
			}
		}

		if (arr.length >= 1) {
			return res.status(200).send({
				'message':'success',
				'data':arr
			})
		} else {
			return res.status(404).send({
				'message':'Not Found'
			})
		}
	} catch (err) {
		return res.status(500).send({
			'message':err
		})
	}
}

const purchased_item = async (req, res) => {
	const purchased = new Purchased({
		total:req.body.total,		
	})

	try {
		
	const test = await purchased.save()
	console.log(test)


		// const getUserName = await User.findOne({userName:req.body.userName})
		// const getItem = await Post.findOne({name:req.body.name})

		// if(getUserName){
		// 	return res.status(200).send({
		// 		'data':getUserName
		// 	})
		// }else{
		// 	return res.status(404).send({
		// 		'message':'Not Found'
		// 	})
		// }	
	} catch(err){
		return res.status(500).send({
			'message':err
		})
	}
	
}

module.exports = {
	input_items,
	category,
	get_all_items,
	get_item_by_id,
	related_product,
	purchased_item
}