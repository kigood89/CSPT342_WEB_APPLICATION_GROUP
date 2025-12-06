const express = require("express");
const router = express.Router();

// -- RENDER FRONT-END PAGES --

// Home Page
router.get("/", (req, res) => {
  res.render("index");
});

// Login Page
router.get("/login", (req, res) => {
  res.render("login");
});

// Shopping List Page
router.get("/shopping-list", (req, res) => {
  res.render("shopping-list");
});

// Settings Page
router.get("/settings", (req, res) => {
  res.render("settings");
});

module.exports = router;
