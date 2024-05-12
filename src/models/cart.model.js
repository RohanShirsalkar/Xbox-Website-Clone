const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    userId: String,
    orderId: String,
    products: [String],
    cartTotal: Number,
    productsQty: Number
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart; 