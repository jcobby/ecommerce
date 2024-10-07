"use client";

import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Range } from "react-range";
import TuneIcon from "@mui/icons-material/Tune";
import ProductCard from "../components/ProductCard";
import products from "../products";

function Page() {
  const [values, setValues] = useState([10, 100]); // Initial min and max values
  const [currentPage, setCurrentPage] = useState(1); // State to track current page
  const productsPerPage = 9; // Number of products per page

  // Calculate total pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Get current products for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle page change
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle previous and next button clicks
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // Create page numbers array with ellipsis logic
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 10) {
      // If total pages are less than or equal to 10, show all
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // If total pages are more than 10, use ellipsis
      if (currentPage <= 4) {
        // Show first 5 pages and last 2 pages
        for (let i = 1; i <= 5; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages - 1);
        pages.push(totalPages);
      } else if (currentPage > 4 && currentPage < totalPages - 3) {
        // Show first page, 3 middle pages, and last 2 pages
        pages.push(1);
        pages.push("...");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("...");
        pages.push(totalPages - 1);
        pages.push(totalPages);
      } else {
        // Show first page, ellipsis, and last 5 pages
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
      }
    }
    return pages;
  };

  return (
    <div className="px-8 lg:px-32 pb-16">
      {/* Header section */}
      <div className="py-16">
        <h1>
          <span className="text-2xl font-normal text-gray-800">Home</span>
          <span className="text-2xl font-normal text-gray-800"> / </span>
          <span className="text-2xl font-bold">Cart</span>
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar filters */}
        <div className="w-full lg:w-1/4 border rounded-2xl p-10 mb-10 lg:mb-0">
          <div className="flex items-center justify-between mb-4">
            <div className="font-bold text-lg">Filters</div>
            <div>
              <TuneIcon />
            </div>
          </div>
          <div className="h-px bg-gray-300 w-3/4 mx-auto mb-5"></div>

          {/* Category filter */}
          <button className="justify-between w-full items-center flex mb-5">
            <div className="text-md">T-shirts</div>
            <ChevronRightIcon />
          </button>

          {/* Price filter */}
          <div className="font-bold mt-5 text-lg">Price</div>

          {/* Price range slider */}
          <div className="flex flex-col mt-5">
            <div style={{ padding: "0 20px" }}>
              <Range
                step={1}
                min={0}
                max={500}
                values={values}
                onChange={(values) => setValues(values)}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      height: "6px",
                      width: "100%",
                      background: "#ddd",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        height: "100%",
                        background: "#999",
                        left: `${(values[0] / 500) * 100}%`,
                        width: `${((values[1] - values[0]) / 500) * 100}%`,
                      }}
                    />
                    {children}
                  </div>
                )}
                renderThumb={({ props, index }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "20px",
                      width: "20px",
                      backgroundColor: "#999",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow: "0px 2px 6px #AAA",
                      position: "absolute",
                      top: "-7px",
                    }}
                  >
                    <div style={{ fontSize: "10px" }}>{values[index]}</div>
                  </div>
                )}
              />
              <div className="mt-4">
                <p>
                  Min Price: ${values[0]} <br />
                  Max Price: ${values[1]}
                </p>
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-300 w-3/4 mx-auto mt-5"></div>

          {/* Apply Filter button */}
          <button className="bg-blue-500 text-white rounded-full py-3 px-10 w-full mt-5">
            Apply Filter
          </button>
        </div>

        {/* Main content */}
        <div className="w-full lg:w-3/4 lg:ml-10">
          <div className="flex justify-between items-center mb-10">
            <div className="text-2xl font-bold">Casual</div>
            <div className="flex items-center gap-4">
              {/* Showing X of Y products */}
              <div className="text-gray-500 text-lg">
                Showing <span>{indexOfFirstProduct + 1}</span>-
                <span>{indexOfLastProduct}</span> of <span>{products.length}</span>{" "}
                Products
              </div>

              {/* Sort by dropdown */}
              <div className="flex items-center">
                <label
                  htmlFor="sort-options"
                  className="mr-2 text-gray-500 text-lg"
                >
                  Sort by:
                </label>
                <select
                  id="sort-options"
                  className="border border-gray-300 rounded-md py-1 px-3"
                >
                  <option value="most-popular">Most Popular</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="newest-arrivals">Newest Arrivals</option>
                </select>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-10">
            {currentProducts.map((item, index) => (
              <ProductCard
                key={index}
                image={item.imageUrl}
                name={item.name}
                price={item.price}
                discount={item.discount}
                rating={item.rating}
              />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-8 space-x-2">
            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              className={`px-4 py-2 border rounded-lg ${
                currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "hover:bg-blue-500 hover:text-white"
              }`}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            {/* Page Numbers */}
            {getPageNumbers().map((page, index) => (
              <button
                key={index}
                onClick={() => typeof page === "number" && handlePageClick(page)}
                className={`px-4 py-2 border rounded-lg ${
                  currentPage === page
                    ? "bg-blue-500 text-white"
                    : page === "..."
                    ? "cursor-default"
                    : "hover:bg-blue-500 hover:text-white"
                }`}
                disabled={page === "..."}
              >
                {page}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={handleNext}
              className={`px-4 py-2 border rounded-lg ${
                currentPage === totalPages
                  ? "bg-gray-300 cursor-not-allowed"
                  : "hover:bg-blue-500 hover:text-white"
              }`}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
