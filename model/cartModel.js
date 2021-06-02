const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Post'
    },
    quantity: {
        type: Number,
        required: true
    },
    subtotal: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Cart', cartSchema)