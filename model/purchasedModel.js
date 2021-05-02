const mongoose = require('mongoose')

const purchasedSchema = mongoose.Schema({
	item:[{
		type:mongoose.Schema.Types.ObjectId, 
		ref:'Post'
	}],
	total: {
		type: String
	},
	purchasedAt: {
		type:Number
	}
})

module.exports = mongoose.model('Purhcased', purchasedSchema)