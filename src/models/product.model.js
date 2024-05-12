const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productType: String,
    title_1: String,
    title_2: String,
    description_1: String,
    description_2: String,
    description_3: String,
    price: Number,
    images: {
        type: [Object]
    },
    thumnails: {
        type: [Object]
    }
})

const Product = mongoose.model("Product", productSchema);
module.exports = Product;