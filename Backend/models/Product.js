const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a product name'],
        maxlength: [100, 'Product name cannot be more than 100 characters'],
    },
    description: {
        type: String,
        required: [true, 'Please provide a product description'],
        maxlength: [500, 'Product description cannot be more than 500 characters'],
    },
    price: {
        type: Number,
        required: [true, 'Please provide a product price'],
        min: [0, 'Price must be a positive number'],
    },
    category: {
        type: String,
        required: [true, 'Please specify a category for the product'],
    },
    images: {
        type: [String], // Array of image URLs
        required: [true, 'Please upload at least one product image'],
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
        required: [true, 'Please provide the stock quantity'],
        min: [0, 'Stock must be a non-negative number'],
        default: 0,
    }
});

module.exports = mongoose.model("Product", ProductSchema);
