const express = require("express");
const router = express.Router();

// TEMPORARY DATABASE (in-memory array)
let groceries = [
  { id: 1, name: "Milk", aisle: "dairy" },
  { id: 2, name: "Eggs", aisle: "dairy" },
  { id: 3, name: "Bananas", aisle: "produce" },
  { id: 4, name: "Chicken", aisle: "meat" },
  { id: 5, name: "Chips", aisle: "snacks" },
  { id: 6, name: "Orange Juice", aisle: "drinks" },
  { id: 7, name: "Frozen Pizza", aisle: "frozen" },
  { id: 8, name: "Rice", aisle: "pantry" },
];


// -----------------------------------------------------
// GET ALL GROCERIES
// -----------------------------------------------------
router.get("/groceries", (req, res) => {
  res.json(groceries);
});


// -----------------------------------------------------
// ADD NEW GROCERY ITEM
// -----------------------------------------------------
router.post("/groceries", (req, res) => {
  const { name, aisle } = req.body;

  if (!name || !aisle) {
    return res.status(400).json({ error: "Name and aisle are required" });
  }

  const newItem = {
    id: groceries.length + 1,
    name,
    aisle: aisle.toLowerCase()
  };

  groceries.push(newItem);

  res.json({
    message: "Item added successfully",
    item: newItem
  });
});


// -----------------------------------------------------
// GET ONE GROCERY BY ID
// -----------------------------------------------------
router.get("/groceries/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = groceries.find(g => g.id === id);

  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }

  res.json(item);
});


// -----------------------------------------------------
// DELETE A GROCERY BY ID
// -----------------------------------------------------
router.delete("/groceries/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const exists = groceries.some(item => item.id === id);
  if (!exists) {
    return res.status(404).json({ error: "Item not found" });
  }

  groceries = groceries.filter(item => item.id !== id);

  res.json({ message: "Item deleted successfully" });
});


// -----------------------------------------------------
// GET GROCERIES BY AISLE CATEGORY
// Example: /api/aisle/produce
// -----------------------------------------------------
router.get("/aisle/:type", (req, res) => {
  const aisle = req.params.type.toLowerCase();

  const filtered = groceries.filter(item => item.aisle === aisle);

  if (filtered.length === 0) {
    return res.status(404).json({ error: `No items found in aisle: ${aisle}` });
  }

  res.json(filtered);
});


module.exports = router;

