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
	email: {
		type: String,
		required: true
	},
	cart: [{
		item:{
			type:mongoose.Schema.Types.ObjectId,
			ref:'Post'
		},
		quantity: {
			type:Number,
			required: true
		},
		subtotal: {
			type: Number,
			required: true
		}
	}],
	order: [{
		type:mongoose.Schema.Types.ObjectId,
		ref:'Purhcased'
	}],
	wishlist:[{
		type:mongoose.Schema.Types.ObjectId,
		ref:'Post'
	}],
	address:[{
		address: {
			type: String
		},
		provinsi: {
			type: String
		},
		kecamatan: {
			type: String
		},
		kota: {
			type: String
		},
		kodePos:{
			type: String
		}
	}]
})

module.exports = mongoose.model('User', userSchema)