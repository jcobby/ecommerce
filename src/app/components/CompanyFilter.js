// components/CompanyFilter.js
import React from "react";

const CompanyFilter = ({  setSelectedFilter }) => {
  selectedFilter
  return (
    <div className="flex justify-center space-x-4 mb-8">
      <button
        className={`px-4 py-2 rounded-lg font-bold ${
          selectedFilter === "company" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
        // onClick={() => setSelectedFilter("company")}
      >
        Company Products
      </button>
      <button
        className={`px-4 py-2 rounded-lg font-bold ${
          selectedFilter === "seller" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
        // onClick={() => setSelectedFilter("seller")}
      >
        Seller Products
      </button>
      <button
        className={`px-4 py-2 rounded-lg font-bold ${
          selectedFilter === "auction" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
        // onClick={() => setSelectedFilter("auction")}
      >
        Auction Products
      </button>
    </div>
  );
};

export default CompanyFilter;
