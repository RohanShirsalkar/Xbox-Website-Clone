const mongoose = require('mongoose');
const Location = require('../models/location.model')

const productSchema = new mongoose.Schema({
    _id: String,
    productType: String,
    title: String,
    price: Number,
});

const orderSchema = mongoose.Schema({
    orderNumber: Number,
    userId: String,
    customer: String,
    status: String,
    cartId: String,
    paymentMode: String,
    paymentId: String,
    products: [productSchema],
    productsQty: Number,
    orderTotal: Number,
    shippingAddress: {
        type: Object,
        ref: 'Location'
    }
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;