const express = require("express");
const router = express.Router();
const db = require("../database");
const fetch = require("node-fetch");

// --------------------------------------------------
// GET ALL GROCERIES (SQLite)
// --------------------------------------------------
router.get("/groceries", async (req, res) => {
  const items = await db.getAllItems();
  res.json(items);
});

// --------------------------------------------------
// ADD NEW GROCERY ITEM (CREATE)
// --------------------------------------------------
router.post("/groceries", async (req, res) => {
  const { name, qty, aisle } = req.body;
  await db.createItem(name, qty, aisle);
  res.json({ message: "Item added successfully!" });
});

// --------------------------------------------------
// UPDATE ITEM
// --------------------------------------------------
router.post("/groceries/update/:id", async (req, res) => {
  const id = req.params.id;
  const { qty } = req.body;
  await db.updateItem(id, qty);
  res.json({ message: "Item updated successfully!" });
});

// --------------------------------------------------
// DELETE ITEM
// --------------------------------------------------
router.post("/groceries/delete/:id", async (req, res) => {
  const id = req.params.id;
  await db.deleteItem(id);
  res.json({ message: "Item deleted successfully!" });
});

// --------------------------------------------------
// FILTER BY AISLE
// /api/aisle/dairy
// /api/aisle/produce
// /api/aisle/meat
// --------------------------------------------------
router.get("/aisle/:aisleName", async (req, res) => {
  const aisleName = req.params.aisleName.toLowerCase();
  const items = await db.getAllItems();
  const filtered = items.filter(item => item.aisle.toLowerCase() === aisleName);
  res.json(filtered);
});

// --------------------------------------------------
// EXTERNAL API (Dog API example)
// --------------------------------------------------
router.get("/dogbreeds", async (req, res) => {
  try {
    const response = await fetch("https://api.thedogapi.com/v1/breeds");
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "API failed" });
  }
});

module.exports = router;
