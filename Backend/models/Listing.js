const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true }, // E.g., "Electronics", "Vehicles", etc.
    images: [{ type: String }], // Image URLs
   
    contactInfo: {
      phone: { type: String, required: true },
      email: { type: String, required: true },
    },
    location: {
        region: {
          type: String,
          required: true,
        },
        city: {
          type: String,
          required: true,
        },
      },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // The seller's user ID
    createdAt: { type: Date, default: Date.now },
  });
  
  const Listing = mongoose.model('Listing', listingSchema);
  module.exports = Listing;
  