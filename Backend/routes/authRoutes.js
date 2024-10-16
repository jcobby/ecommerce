// routes/authRoutes.js
const express = require("express");
const router = express.Router();

const { Register, Login } = require("../controllers/authController");

// Registration Route
router.post("/register", Register);
  

// Login Route
router.post("/login", Login);

module.exports = router;
