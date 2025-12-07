const express = require("express");
const router = express.Router();

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
