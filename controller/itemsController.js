const Post = require('../model/goods')
const Purchased = require('../model/purchasedModel')
const Wishlist = require('../model/wishlistModel')
const Address = require('../model/addressModel')
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
		}
	} catch (err) {
		return res.status(500).send({
			'message':err
		})
	}
}

const purchased_item = async (req, res) => {
	try {
		const dateNow = new Date()
    	const purchaseDate = dateNow.getDate() + '/' + (dateNow.getMonth() + 1) + '/' + dateNow.getFullYear()

		const purchasedData = new Purchased({
			user:req.body.user,
			item:req.body.item,
			total:req.body.total,
			purchasedAt:purchaseDate
		})

		const savePurchased = await purchasedData.save()
		const refPurcashed = await User.findByIdAndUpdate(req.body.user,{"$push":{order:savePurchased.id}})

		if(savePurchased && refPurcashed){
			return res.send({
				'status':'200'
			})
			
		}else{
			return res.send({
				'status':'400'
			})
		}
	} catch(err){
		return res.send({
				'status':'500'
			})
	}
	
}

const order_history = async(req, res) => {
	try {
		await User.findOne({_id:req.params.id})
		.populate({
			path:'order',
			populate: {
				path:'item'
			}
		})
		.exec((err, data) => {
			if(data) {
				res.send({
					'data':data.order
				})	

			} else {
				res.send({
					'data':{}
				})
			}
			
		})
	} catch(err) {
		res.status(500).send({
			'message':err
		})
	}
	
}

const add_wishlist = async(req, res) => {
	const wishlist = new Wishlist({
		item:req.body.item
	})

	try {
		const saveWishlist = await wishlist.save()
		const refWishlist =  await User.findByIdAndUpdate(req.body.user,{"$push":{wishlist:saveWishlist.id}})

		if(saveWishlist && refWishlist){
			res.json({
				'data':saveWishlist
			})
		} else {
			res.json({
				'data':{}
			})
		}
	} catch(err){
		res.json({
			'message':err
		})
	}

}

const get_wishlist = async (req, res) => {
	const userId = req.params.id

	try {
		await User.findById(userId)
		.populate({
			path:'wishlist',
			populate: {
				path:'item'
			}
		})
		.exec((err, data) => {
			if(data){
				res.json({
					'data':data.wishlist
				})
			}else{
				res.json({
					'data':{}
				})
			}
			
		})
	}catch(err){
		res.status(500).json({
			'message':err
		})
	}
}

const add_address = async(req,res) => {
	const address = new Address({
		address:req.body.address,
		provinsi:req.body.provinsi,
		kecamatan:req.body.kecamatan,
		kota:req.body.kota,
		kodePos:req.body.kodePos
	})

	try {
		const saveAddress = await address.save()
		const refAddress = await User.findByIdAndUpdate(req.body.user,{"$push":{address:saveAddress.id}})

		if(saveAddress && refAddress){
			res.json({
				'message':'200',
			})
		}
	} catch(err){
		res.json({
			'message':err
		})
	}
}

const update_stock = async (req, res) => {
	const orderId = req.body.item
	const qty = req.body.quantity
	console.log(orderId, qty)

	try {
		const getData = await Post.find({ _id:{$in: orderId}})

		if(getData){
			for(var i = 0; i < getData.length; i++){
				const newQty = getData[i].quantity - qty[i]
				getData[i].quantity = newQty

				await Post.update(
					{ _id:{$in: orderId[i]}},
					{$set:{quantity:getData[i].quantity}})
			}

			res.json({
				getData
			})
		} else {
			res.json({
				'data':{}
			})
		}

	} catch (err) {
		console.log(err)
	}
}


module.exports = {
	input_items,
	category,
	get_all_items,
	get_item_by_id,
	related_product,
	purchased_item,
	order_history,
	add_wishlist,
	get_wishlist,
	add_address,
	update_stock
}