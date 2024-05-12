const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');


// base end-point - /order

// 
// expects a body with userId, cartId, shippingAddress
// 
router.post("/", orderController.create);

// 
// expects nothing
// 
router.get("/", orderController.find);

// 
// expects id
// 
router.get("/:id", orderController.findById);

// 
// expects id and body with products, shippingAddress, paymentMode
// 
router.put("/:id", orderController.editById);

module.exports = router