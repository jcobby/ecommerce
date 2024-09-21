// components/CategorySlider.js
'use client'

import React, { useState } from 'react';
import CategoryCard from './CategoryCard';

const CategorySlider = ({ categories, itemsPerPage }) => {
  const [startIndex, setStartIndex] = useState(0);

  // Determine the items to display based on the current index
  const displayedCategories = categories.slice(startIndex, startIndex + itemsPerPage);

  // Handler for moving to the previous set of categories
  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  // Handler for moving to the next set of categories
  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + itemsPerPage, categories.length - itemsPerPage));
  };

  return (
    <div className="flex justify-center items-center space-x-4">
      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="bg-gray-800 hover:bg-gray-400 text-white text-3xl font-bold pb-1 px-2 rounded"
        disabled={startIndex === 0}
      >
        &larr;
      </button>

      {/* Category Cards */}
      <div className="flex justify-center space-x-10">
        {displayedCategories.map((category) => (
          <CategoryCard key={category.id} name={category.name} imageUrl={category.imageUrl} />
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="bg-gray-800 hover:bg-gray-400 text-white text-3xl font-bold pb-1 px-2 rounded"
        disabled={startIndex + itemsPerPage >= categories.length}
      >
        &rarr;
      </button>
    </div>
  );
};

export default CategorySlider;
