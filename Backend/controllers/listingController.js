// controllers/listingController.js
const Listing = require('../models/Listing'); // Import the Listing model

// Controller Function for Creating a Listing
const createListing = async (req, res) => {
  const { title, description, price, category, images, location } = req.body;
  try {
    const listing = new Listing({
      title,
      description,
      price,
      category,
      images,
      location,
      contactInfo: { phone: req.user.phoneNumber, email: req.user.email },
      user: req.user._id
    });
    await listing.save();
    res.status(201).json(listing);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// GET /api/listings
const getListings = async (req, res) => {
  const { category, location, priceMin, priceMax } = req.query;
  try {
    let query = {};
    if (category) query.category = category;
    if (location) query.location = location;
    if (priceMin || priceMax) {
      query.price = { $gte: priceMin || 0, $lte: priceMax || Infinity };
    }
    const listings = await Listing.find(query).populate('user', 'name location');
    res.json(listings);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Controller Function for Fetching a Listing by ID
const getListingById = async (req, res) => {
  const { id } = req.params;
  try {
    const listing = await Listing.findById(id).populate('user', 'name email phoneNumber');
    if (!listing) {
      return res.status(404).json({ error: "Listing not found" });
    }
    res.status(200).json(listing);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {
  createListing, getListings, getListingById
};
