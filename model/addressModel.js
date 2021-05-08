const mongoose = require('mongoose')

const addressSchema = mongoose.Schema({
	address:{
		type: String
	},
	provinsi:{
		type: String
	},
	kecamatan: {
		type: String
	},
	kota:{
		type: String
	},
	kodePos: {
		type: String
	}
})

module.exports = mongoose.model('Address', addressSchema)