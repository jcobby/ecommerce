"use client";

import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


function page() {
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
    <div className="px-32 pb-16">
      <div className="bg- py-16">
        {/* Gaming/Controller Text */}
        <h1>
          <span className="text-2xl font- text-gray-800">Home</span>
          <span className="text-2xl font- text-gray-800">/</span>
          <span className="text-2xl font-bold text">Cart</span>
        </h1>
      </div>

      <div className="flex space-x-5">
        <div className="w-2/3 border rounded-3xl border-r-2 border-gray-300 ">
          <div className="flex flex-row justify-between ">
            <div className="flex flex-row">
              <div className="p-6 bg-gr">
                <img
                  src="/productDetail/controller1.png"
                  className="w-52 h-52 object-contain bg-gray-200 rounded-xl"
                />
              </div>

              <div className="pt-6">
                <div className="font-bold text-3xl pb-3">
                  Gradient Graphit T-shirt
                </div>
                <div className="text-xl">
                  Size: <span className="text-gray-500">Large</span>
                </div>
                <div className="pb-6 text-xl">
                  Colour: <span className="text-gray-500">White</span>
                </div>
                <div className="font-bold text-3xl">$145</div>
              </div>
            </div>

            <div className="flex flex-col justify-between items-end p-6">
              <DeleteIcon className="text-5xl" />
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
            </div>
          </div>
        </div>
        <div className="w-1/3 border border-gray-300 border-r-2 rounded-3xl p-6">
          <div className="text-4xl font-bold pb-6">Order Summary</div>

          <div className="flex items-center justify-between text-gray-500 text-2xl  pb-">
            Subtotal<span className="text-black font-bold">$565</span>
          </div>

          <div className="flex items-center justify-between text-gray-500 text-2xl py-10">
            Discount<span className="text-black font-bold">$565</span>
          </div>

          <div className="flex items-center justify-between text-gray-500 text-2xl">
            Delivery Fee<span className="text-black font-bold">$565</span>
          </div>
          <div class="h-px bg-gray-300 w-full my-10"></div>

          <div className="flex items-center justify-between text-black text-4xl">
            Total<span className="text-black font-bold">$467</span>
          </div>

          <div className="relative w-full flex flex-row space-x-5 pt-10">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full p-2 pl-16 border border-gray-300 rounded-full"
            />
            {/* Search Icon positioned inside the input */}
            <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none top-10">
              <VpnKeyIcon />
            </div>

            <button className="bg-blue-600 py-5 px-10 rounded-full text-white">Apply</button>
          </div>
          <button className="bg-blue-600 w-full py-5 mt-5 rounded-full text-white text-2xl ">Go to Checkout<ArrowForwardIcon /></button>
        </div>
      </div>
    </div>
  );
}

export default page;
