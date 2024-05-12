const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart.controller");

// base end-point - /cart

// 
// expects a body with userId, products, cartTotal, productsQty, orderId
// 
router.post("/", cartController.create);

// 
// expects nothing
// 
router.get("/", cartController.find);

// 
// expects a id 
// 
router.get("/:id", cartController.findById);

// 
// expects id and a body with products, orderId
// 
router.put("/:id", cartController.editById);

module.exports = router;