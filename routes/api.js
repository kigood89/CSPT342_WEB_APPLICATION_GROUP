const express = require("express");
const router = express.Router();
const groceriesRouter = require("./groceries");

// Example: /api/groceries
router.use("/groceries", groceriesRouter);

module.exports = router;
