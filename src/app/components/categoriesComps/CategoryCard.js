// components/CategoryCard.js
import React from 'react';

const CategoryCard = ({ name, imageUrl }) => {
  return (
    <div className="flex flex-col items-center">
      {/* Round Image */}
      <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg bg-white">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover bg-white"
        />
      </div>
      {/* Category Name */}
      <h2 className="text-lg font-semibold mt-4">{name}</h2>
    </div>
  );
};

export default CategoryCard;
