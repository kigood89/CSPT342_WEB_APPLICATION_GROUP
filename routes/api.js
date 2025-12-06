const express = require('express');
const router = express.Router();

// Temporary in-memory grocery list (you can connect to DB later)
let groceries = [
    { id: 1, name: "Milk", aisle: "Dairy" },
    { id: 2, name: "Eggs", aisle: "Dairy" },
    { id: 3, name: "Bananas", aisle: "Produce" },
    { id: 4, name: "Chicken Breast", aisle: "Meat" }
];

// --------------------------------------------------
// GET ALL GROCERIES
// --------------------------------------------------
router.get('/groceries', (req, res) => {
    res.json(groceries);
});

// --------------------------------------------------
// ADD A NEW GROCERY ITEM
// --------------------------------------------------
router.post('/groceries', (req, res) => {
    const newItem = {
        id: groceries.length + 1,
        name: req.body.name,
        aisle: req.body.aisle
    };

    groceries.push(newItem);

    res.json({
        message: "Item added successfully!",
        item: newItem
    });
});

// --------------------------------------------------
// GET GROCERIES BY AISLE (GROUP / CATEGORY)
// --------------------------------------------------

// PRODUCE
router.get('/aisle/produce', (req, res) => {
    const produceItems = groceries.filter(item => item.aisle.toLowerCase() === "produce");
    res.json(produceItems);
});

// DAIRY
router.get('/aisle/dairy', (req, res) => {
    const dairyItems = groceries.filter(item => item.aisle.toLowerCase() === "dairy");
    res.json(dairyItems);
});

// MEAT
router.get('/aisle/meat', (req, res) => {
    const meatItems = groceries.filter(item => item.aisle.toLowerCase() === "meat");
    res.json(meatItems);
});

// SNACKS
router.get('/aisle/snacks', (req, res) => {
    const snackItems = groceries.filter(item => item.aisle.toLowerCase() === "snacks");
    res.json(snackItems);
});

// DRINKS
router.get('/aisle/drinks', (req, res) => {
    const drinkItems = groceries.filter(item => item.aisle.toLowerCase() === "drinks");
    res.json(drinkItems);
});

// FROZEN
router.get('/aisle/frozen', (req, res) => {
    const frozenItems = groceries.filter(item => item.aisle.toLowerCase() === "frozen");
    res.json(frozenItems);
});

// PANTRY
router.get('/aisle/pantry', (req, res) => {
    const pantryItems = groceries.filter(item => item.aisle.toLowerCase() === "pantry");
    res.json(pantryItems);
});

module.exports = router;
