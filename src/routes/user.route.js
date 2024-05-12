const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controllers");

// base end-point - /user

// 
// expects a body with name, email, password
// 
router.post("/register", userController.register);

// 
// expects a body with email, password
// 
router.post("/login", userController.login);

// 
// expects id
// 
router.get("/:id");

module.exports = router;