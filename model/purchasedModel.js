const mongoose = require('mongoose')

const purchasedSchema = mongoose.Schema({
	user:{
		type: mongoose.Schema.Types.ObjectId,
		ref:'User'
	},
	item:[{
		type:mongoose.Schema.Types.ObjectId, 
		ref:'Goods'
	}],
	total: {
		type: String
	},
	purchasedAt: {
		type:Number
	}
})

module.exports = mongoose.model('purhcased', purchasedSchema)