// models/Product.js
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    images: {
        type: [String], // Array of image URLs
        required: true,
    },
    reviews: {
        type: Number,
        default: 0,
    },
    discount: {
        type: Number,
        default: 0,
    },
    colors: {
        type: [String], // Array of colors
    },
    size: {
        type: [String], // Array of sizes
    },
    stock: {
        type: Number,
        required: true,
        default: 0,
    }
});

module.exports = mongoose.model("Product", ProductSchema);
