// listingRoutes.js
const express = require("express");
const { createListing } = require("../controllers/listingController"); // Import the createListing function
const { getListings } = require("../controllers/listingController");
const { getListingById } = require("../controllers/listingController");

const router = express.Router();

// Define the POST route for creating a listing
router.post("/api/listings", createListing);
router.get("/api/listings",getListings)
router.get("/api/listings/:id", getListingById);


module.exports = router;
