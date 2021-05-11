const mongoose = require('mongoose')

const wishlistSchema = mongoose.Schema({
	item:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'Post'
	}
})

module.exports = mongoose.model('Wishlist', wishlistSchema)