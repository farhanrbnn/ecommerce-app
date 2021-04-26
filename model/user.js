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
		type: String
	},
	provinsi: {
		type:String
	},
	kecamatan:{
		type: String
	},
	kelurahan: {
		type: String
	},
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