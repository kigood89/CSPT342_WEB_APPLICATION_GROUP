const express = require("express");
const router = express.Router();

// ---------- MAIN PAGES ----------

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

// ---------- AISLE PAGES ----------

router.get("/produce", (req, res) => {
  res.render("produce");
});

router.get("/dairy", (req, res) => {
  res.render("dairy");
});

router.get("/meat", (req, res) => {
  res.render("meat");
});

router.get("/snacks", (req, res) => {
  res.render("snacks");
});

router.get("/drinks", (req, res) => {
  res.render("drinks");
});

router.get("/frozen", (req, res) => {
  res.render("frozen");
});

router.get("/pantry", (req, res) => {
  res.render("pantry");
});

// Export router ONCE
module.exports = router;

