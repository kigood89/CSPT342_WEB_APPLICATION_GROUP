const sqlite3 = require("sqlite3").verbose();

// Open or create database file
const db = new sqlite3.Database("./grocery.db", (err) => {
  if (err) {
    console.error("Database connection error:", err.message);
  } else {
    console.log("Connected to SQLite database.");
  }
});

// ------------------------------------------------------
// CREATE TABLE
// ------------------------------------------------------
db.run(`
  CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    qty INTEGER DEFAULT 1,
    aisle TEXT
  )
`, (err) => {
  if (err) console.error("Error creating table:", err.message);
});

// ------------------------------------------------------
// CREATE ITEM
// ------------------------------------------------------
function createItem(name, qty, aisle) {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO items (name, qty, aisle) VALUES (?, ?, ?)`;

    db.run(sql, [name, qty, aisle], function (err) {
      if (err) reject(err);
      else resolve(this.lastID);
    });
  });
}

// ------------------------------------------------------
// READ ITEMS
// ------------------------------------------------------
function getAllItems() {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM items ORDER BY id ASC`;

    db.all(sql, [], (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

// ------------------------------------------------------
// UPDATE ITEM
// ------------------------------------------------------
function updateItem(id, qty) {
  return new Promise((resolve, reject) => {
    const sql = `UPDATE items SET qty = ? WHERE id = ?`;

    db.run(sql, [qty, id], function (err) {
      if (err) reject(err);
      else resolve(true);
    });
  });
}

// ------------------------------------------------------
// DELETE ITEM
// ------------------------------------------------------
function deleteItem(id) {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM items WHERE id = ?`;

    db.run(sql, [id], function (err) {
      if (err) reject(err);
      else resolve(true);
    });
  });
}

// ------------------------------------------------------
// EXPORT FUNCTIONS
// ------------------------------------------------------
module.exports = {
  createItem,
  getAllItems,
  updateItem,
  deleteItem
};
