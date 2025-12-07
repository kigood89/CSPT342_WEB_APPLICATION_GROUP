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
// HOME PAGE
router.get("/", (req, res) => {
  res.render("index");  // views/index.ejs
});

// PRODUCE PAGE
router.get("/produce", (req, res) => {
  res.render("produce"); 
});

// DAIRY PAGE
router.get("/dairy", (req, res) => {
  res.render("dairy");
});

// MEAT PAGE
router.get("/meat", (req, res) => {
  res.render("meat");
});

// SNACKS PAGE
router.get("/snacks", (req, res) => {
  res.render("snacks");
});

// DRINKS PAGE
router.get("/drinks", (req, res) => {
  res.render("drinks");
});

// FROZEN PAGE
router.get("/frozen", (req, res) => {
  res.render("frozen");
});

// PANTRY PAGE
router.get("/pantry", (req, res) => {
  res.render("pantry");
});

module.exports = router;
