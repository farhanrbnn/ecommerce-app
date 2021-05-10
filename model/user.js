const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	userName: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	gender: {
		type: String,
		required: true
	},
	order: [{
		type:mongoose.Schema.Types.ObjectId,
		ref:'Purhcased'
	}],
	wishlist:[{
		type:mongoose.Schema.Types.ObjectId,
		ref:'Wishlist'
	}],
	address:[{
		type:mongoose.Schema.Types.ObjectId,
		ref:'Address'
	}]
})

module.exports = mongoose.model('User', userSchema)