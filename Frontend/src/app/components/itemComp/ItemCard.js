import React from "react";

const ItemCard = ({ imageUrl, name, price, isCompanyProduct }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg bg-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <img src={imageUrl} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-700 mt-2">${price}</p>
        {isCompanyProduct ? (
          <span className="mt-4 inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded">
            Company Product
          </span>
        ) : (
          <span className="mt-4 inline-block bg-green-500 text-white text-xs px-2 py-1 rounded">
            Seller Product
          </span>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
