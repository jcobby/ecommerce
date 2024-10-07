"use client";

import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import cartProducts from "../cartProducts";


function page() {
  const [cart, setCart] = useState(cartProducts);

  // Function to handle quantity increase
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to handle quantity decrease
  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div className="px-32 pb-16">
      <div className="bg- py-16">
        <h1>
          <span className="text-2xl font- text-gray-800">Home</span>
          <span className="text-2xl font- text-gray-800">/</span>
          <span className="text-2xl font-bold text">Cart</span>
        </h1>
      </div>

      <div className="flex space-x-5">
        {/* Left side: Product list */}
        <div className="w-2/3 border rounded-3xl border-r-2 border-gray-300">
          {cart.map((product, index) => (
            <div key={product.id} className="flex flex-col">
              <div className="flex flex-row justify-between p-6">
                <div className="flex flex-row">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-52 h-52 object-contain bg-gray-200 rounded-xl"
                  />

                  <div className="pt-6 pl-6">
                    <div className="font-bold text-3xl pb-3">{product.name}</div>
                    <div className="text-xl">
                      Size: <span className="text-gray-500">{product.size}</span>
                    </div>
                    <div className="pb-6 text-xl">
                      Colour: <span className="text-gray-500">{product.color}</span>
                    </div>
                    <div className="font-bold text-3xl">${product.price}</div>
                  </div>
                </div>

                <div className="flex flex-col justify-between items-end">
                  <DeleteIcon className="text-5xl" />
                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={() => decreaseQuantity(product.id)}
                      className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-l-lg"
                    >
                      -
                    </button>
                    <span className="px-4 py-2">{product.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(product.id)}
                      className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-r-lg"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Conditionally shortened divider bar */}
              <div className="h-px bg-gray-300 w-3/4 mx-auto my-4 last:border-b-0 last:my-0"></div>
            </div>
          ))}
        </div>

        {/* Right side: Order Summary */}
        <div className="w-1/3 border border-gray-300 border-r-2 rounded-3xl p-6 self-start">
          <div className="text-4xl font-bold pb-6">Order Summary</div>

          <div className="flex items-center justify-between text-gray-500 text-2xl pb-">
            Subtotal
            <span className="text-black font-bold">
              ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
            </span>
          </div>

          <div className="flex items-center justify-between text-gray-500 text-2xl py-10">
            Discount<span className="text-black font-bold">$50</span>
          </div>

          <div className="flex items-center justify-between text-gray-500 text-2xl">
            Delivery Fee<span className="text-black font-bold">$15</span>
          </div>
          <div className="h-px bg-gray-300 w-full my-10"></div>

          <div className="flex items-center justify-between text-black text-4xl">
            Total
            <span className="text-black font-bold">
              $
              {cart.reduce((acc, item) => acc + item.price * item.quantity, 0) -
                50 +
                15}
            </span>
          </div>

          <button className="bg-blue-600 w-full py-5 mt-5 rounded-full text-white text-2xl">
            Go to Checkout <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
