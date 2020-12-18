const mongoose = require('mongoose')

const goodsSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	quantity: {
		type: Number,
		required: true
	},
	picture: {
		type: String,
		required: true
	}
})

module.exports = mongoose.model('Post', goodsSchema)