import React from "react";

function CategoriesCard({ image, category }) {
  return (
    <div className="flex flex-col items-center ">
      {/* Product Card */}
      <div className="flex border border-r-2 border-gray-500 rounded-lg w-48 h-48 bg-white items-center justify-center flex-col ">
        {/* Image with discount and icons */}
        <div className=" ">{image}</div>
        <div>{category}</div>
      </div>
    </div>
  );
}

export default CategoriesCard;
