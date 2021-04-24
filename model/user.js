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
	address: {
		type: String,
		required: true
	},
	provinsi: {
		type:String,
		requiredL:true
	},
	kecamatan:{
		type: String,
		required: true
	},
	kelurahan: {
		type: String,
		required: true 
	}
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
})

module.exports = mongoose.model('User', userSchema)