const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
const upload = require("../middleware/multer/multerMiddleware");

// base end-point - /product

// 
// expects a body with productType, title_1, title_2, description_1, description_2, description_3, price
// 
router.post("/", upload.array("image", 6), productController.create);

// 
// expects nothing
//
router.get("/", productController.find);

// 
// expects id 
//
router.get("/:id", productController.findOne);

module.exports = router;