const mongoose = require('mongooese')

const addressSchema = mongoose.Schema({
	address:{
		type: String
	},
	kecamatan: {
		type: String
	},
	kelurahan:{
		type: String
	},
	kodePos: {
		type: String
	}
})

module.exports = mongoose.model('Address', addressSchema)