const mongoose = require('mongoose')

const purchasedSchema = mongoose.Schema({
	purchasedItem:{
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	purchasedAt: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('purhcased')