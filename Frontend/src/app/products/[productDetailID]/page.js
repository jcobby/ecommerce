'use client'

import React, { useState } from "react";
import { FaStar, FaHeart, FaTruck, FaUndoAlt } from 'react-icons/fa'; // Import icons for stars, delivery, and return
import ProductCard from "../../components/ProductCard";
import products from "../../products";

function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);

  // Function to handle quantity increase
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Function to handle quantity decrease
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="px-32">
      <div className="bg- py-16">
        {/* Gaming/Controller Text */}
        <h1>
          <span className="text-2xl font- text-gray-800">Gaming</span>
          <span className="text-2xl font- text-gray-800">/</span>
          <span className="text-2xl font- text-gray-800">Controller</span>
          <span className="text-2xl font- text">/</span>
          <span className="text-2xl font-bold text">Havic HV G-92 Gamepad</span>
        </h1>
      </div>

      <div className="container mx-auto p-6 grid grid-cols-12 gap-8">
        {/* First Column: 4 Pictures with See More Button */}
        <div className="col-span-2 flex flex-col">
          <div className="flex flex-col space-y-6">
            {/* 4 Images - With height and width constraints */}
            <img
              src="/productDetail/controller2.png"
              alt="Product 1"
              className="h-36 w-full object-contain rounded-md bg-gray-200"
            />
            <img
              src="/productDetail/controller3.png"
              alt="Product 2"
              className="h-36 w-full object-contain rounded-md bg-gray-200"
            />
            <img
              src="/productDetail/controller4.png"
              alt="Product 3"
              className="h-36 w-full object-contain rounded-md bg-gray-200"
            />
            <img
              src="/productDetail/controller5.png"
              alt="Product 4"
              className="h-36 w-full object-contain rounded-md bg-gray-200"
            />
          </div>

          <button className="mt-6 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            See More Photos
          </button>
        </div>

        {/* Second Column: One Large Picture */}
        <div className="col-span-6 flex justify-center items-center bg-gray-200">
          <img
            src="/productDetail/controller1.png"
            alt="Main Product"
            className="w-full object-contain rounded-lg"
          />
        </div>

        {/* Third Column: Product Details */}
        <div className="col-span-4 flex flex-col space-y-4">
          {/* Product Name */}
          <h1 className="text-3xl font-bold text-gray-800">Gaming Controller</h1>

          {/* Review Stars */}
          <div className="flex items-center">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-gray-300" /> {/* Empty Star */}
            <span className="ml-2 text-gray-500">(45 reviews)</span>
          </div>

          {/* Price */}
          <h2 className="text-2xl font-semibold text-gray-800">$59.99</h2>

          {/* Description */}
          <p className="text-gray-600">
            This gaming controller is designed for both professional and casual
            gamers. Enjoy ergonomic design, quick response, and long battery life.
          </p>

          {/* Black Bar Line */}
          <hr className="border-black" />

          {/* Colors */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Colors</h3>
            <div className="flex space-x-2 mt-2">
              <span className="w-8 h-8 bg-blue-500 rounded-full cursor-pointer"></span>
              <span className="w-8 h-8 bg-red-500 rounded-full cursor-pointer"></span>
              <span className="w-8 h-8 bg-green-500 rounded-full cursor-pointer"></span>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Size</h3>
            <div className="flex space-x-4 mt-2">
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">
                Small
              </button>
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">
                Medium
              </button>
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">
                Large
              </button>
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center space-x-4 mt-4">
            {/* Quantity Selector */}
            <div className="flex items-center border rounded-lg">
              <button
                onClick={decreaseQuantity}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-l-lg"
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-r-lg"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
              Add to Cart
            </button>
          </div>

          {/* Buy Now and Like Button */}
          <div className="flex space-x-4 items-center mt-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
              Buy Now
            </button>
            <button className="bg-gray-200 px-6 py-2 rounded-lg hover:bg-gray-300 flex items-center space-x-2">
              <FaHeart className="text-red-500" /> <span>Like</span>
            </button>
          </div>

          {/* Delivery and Return Info */}
          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <div className="flex items-center space-x-4">
              <FaTruck className="text-blue-500 text-3xl" />
              <div>
                <h3 className="font-bold text-gray-800">Free Delivery</h3>
                <p className="text-gray-600">
                  Estimated delivery within 3-5 business days.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-4">
              <FaUndoAlt className="text-blue-500 text-3xl" />
              <div>
                <h3 className="font-bold text-gray-800">Return Delivery</h3>
                <p className="text-gray-600">Free 30-day return policy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

     

      <div className="pt-16 h-">
        <div className="flex gap-4 items-center mb-8">
          <div className="h-20 w-10 rounded-lg bg-orange-400"></div>
          <div className="font-bold text-orange-400 text-2xl">Related Item</div>
        </div>

        
        <div className="py-14 flex gap-10 overflow-hidden bg- justify-center w-full">
          {products
            .slice(0, 4)
            .map((item, index) => (
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
       
      </div>
    </div>
  );
}

export default ProductDetailPage;
