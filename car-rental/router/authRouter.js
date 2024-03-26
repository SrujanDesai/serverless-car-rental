const express = require("express");
const { signup, login, home } = require("../controllers/authController");

const router = express.Router();

// Route for user signup
router.post("/signup", signup);

// Route for user login
router.post("/login", login);

// Route for home page
router.get("/", home);

module.exports = router;
