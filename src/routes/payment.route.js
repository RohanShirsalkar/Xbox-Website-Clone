const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/payment.controller");

router.post("/process", paymentController.create);
router.post("/verify", paymentController.verify);

module.exports = router;