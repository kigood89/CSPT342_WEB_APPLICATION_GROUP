const express = require("express");
const path = require("path");

// Routes
const groceriesRoute = require("./routes/groceries");
const apiRoute = require("./routes/api");

const app = express();

// ---------------- MIDDLEWARE ----------------

// Static files middleware
app.use(express.static(path.join(__dirname, "public")));

// View engine middleware (EJS)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Parse JSON
app.use(express.json());
// Parse form data
app.use(express.urlencoded({ extended: true }));

// ---------------- ROUTES ----------------
app.use("/", groceriesRoute);   // frontend pages
app.use("/api", apiRoute);      // external API route

// ---------------- SERVER ----------------
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
