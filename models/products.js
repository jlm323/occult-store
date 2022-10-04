// load mongoose
const mongoose = require('mongoose')

// add a shortcut to Schema
const Schema = mongoose.Schema

// create Schema
const productSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true},
    price: { type: Number, required: true },
    // img: { type: String, required: true}
})

// create a Model from our Schema
const Product = mongoose.model('Product', productSchema)

// export the Model
module.exports = Product;