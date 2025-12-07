const express = require('express');
const router = express.Router();

// Temporary in-memory grocery list
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
// GET BY AISLE
// --------------------------------------------------
router.get('/aisle/:name', (req, res) => {
    const aisle = req.params.name.toLowerCase();
    const items = groceries.filter(i => i.aisle.toLowerCase() === aisle);
    res.json(items);
});

module.exports = router;
