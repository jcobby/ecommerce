// index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();


const app = express();
const port = 7000;

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.log("MongoDB connection error:", error));

// Use routes
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes)

// Test Route
app.get("/", (req, res) => {
    res.send("API is running");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
