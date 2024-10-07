import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite"; // Like icon
import VisibilityIcon from "@mui/icons-material/Visibility"; // Eye icon
import StarIcon from "@mui/icons-material/Star"; // Star icon for ratings

function ProductCard({ image, name, price, discount, rating }) {
  return (
    <div className="flex flex-col items-center">
      {/* Product Card - Square Shape */}
      <div className="group border rounded-lg shadow-lg bg-white relative" style={{ width: "250px", height: "250px" }}>
        {/* Image with discount and icons */}
        <div className="relative w-full h-full flex justify-center items-center">
          <img
            src={image}
            alt={name}
            className="max-w-full max-h-full object-contain"
          />

          {/* Discount Badge */}
          {discount && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {discount} OFF
            </div>
          )}

          {/* Icons on top right, like button above eye button */}
          <div className="absolute top-2 right-2 flex flex-col space-y-2">
            {/* Like Icon */}
            <div className="bg-white p-2 rounded-full shadow-md cursor-pointer">
              <FavoriteIcon style={{ fontSize: 20, color: "red" }} />
            </div>

            {/* Eye Icon */}
            <div className="bg-white p-2 rounded-full shadow-md cursor-pointer">
              <VisibilityIcon style={{ fontSize: 20, color: "gray" }} />
            </div>
          </div>

          {/* Add to Cart Button (Initially hidden, shown on hover) */}
          <button className="absolute bottom-0 left-0 right-0 bg-blue-500 text-white font-bold py-2 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out hover:bg-blue-300">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Information Below the Card */}
      <div className="mt-4 text-center">
        {/* Product Name */}
        <div className="text-lg font-semibold">{name}</div>

        {/* Price */}
        <div className="text-xl font-bold text-gray-800 mt-1">{price}</div>

        {/* Ratings */}
        <div className="flex justify-center items-center mt-1">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <StarIcon
                key={index}
                style={{
                  fontSize: 20,
                  color: index < rating ? "#fbbf24" : "#d1d5db", // Show filled star for rating
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
