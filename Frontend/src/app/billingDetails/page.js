import React from 'react';

function Page() {
  return (
    <div className="px-8 lg:px-32 pb-16">
         <div className="py-16">
        <h1>
          <span className="text-2xl font-normal text-gray-800">Account</span>
          <span className="text-2xl font-normal text-gray-800"> / </span>
          
          <span className="text-2xl font-normal text-gray-800">My Account</span>
          <span className="text-2xl font-normal text-gray-800"> / </span>
         
          <span className="text-2xl font-normal text-gray-800">Product</span>
          <span className="text-2xl font-normal text-gray-800"> / </span>
          <span className="text-2xl font-normal text-gray-800">View Cart</span>
          <span className="text-2xl font-normal text-gray-800"> / </span>
          <span className="text-2xl font-bold">Checkout</span>
        </h1>
      </div>
    

      {/* Two Column Layout */}
      <div className="flex gap-8">
        {/* Left Column - Billing Details */}
        <div className="w-1/2">
          <h2 className="text-xl font-bold mb-6">Billing Details</h2>
          <form className="space-y-4">
            {/* First Name */}
            <div>
              <label className="block text-gray-700 mb-2">First Name*</label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
              />
            </div>
            {/* Last Name */}
            <div>
              <label className="block text-gray-700 mb-2">Last Name*</label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
              />
            </div>
            {/* Digital Address */}
            <div>
              <label className="block text-gray-700 mb-2">Digital Address*</label>
              <input
                type="text"
                placeholder="Digital Address"
                className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
              />
            </div>
            {/* Town/City */}
            <div>
              <label className="block text-gray-700 mb-2">Town/City*</label>
              <input
                type="text"
                placeholder="Town/City"
                className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
              />
            </div>
            {/* Phone Number */}
            <div>
              <label className="block text-gray-700 mb-2">Phone Number*</label>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
              />
            </div>
            {/* Email Address */}
            <div>
              <label className="block text-gray-700 mb-2">Email Address*</label>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
              />
            </div>
            {/* Save Info */}
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-gray-700">Save this information for faster check-out next time</label>
            </div>
          </form>
        </div>

        {/* Right Column - Order Summary and Payment Options */}
        <div className="w-1/2 bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-6">Order Summary</h2>

          {/* Product List */}
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>H1 Gamepad</span>
              <span>$650</span>
            </div>
            <div className="flex justify-between">
              <span>LCD Monitor</span>
              <span>$1100</span>
            </div>
          </div>

          {/* Subtotal and Total */}
          <div className="mt-8 space-y-2">
            <div className="flex justify-between font-bold">
              <span>Subtotal:</span>
              <span>$1750</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>$1750</span>
            </div>
          </div>

          {/* Payment Options */}
          <div className="mt-8">
            <h3 className="text-lg font-bold mb-4">Payment Options</h3>
            <div className="flex items-center mb-2">
              <input type="radio" id="bank" name="payment" className="mr-2" />
              <label htmlFor="bank">Bank</label>
            </div>
            <div className="flex items-center mb-2">
              <input type="radio" id="cod" name="payment" className="mr-2" />
              <label htmlFor="cod">Cash on Delivery</label>
            </div>
          </div>

          {/* Coupon and Place Order */}
          <div className="mt-8 space-y-4">
            <div className='flex gap-2'>
                <input  type="text" id="coup" name="coupon" className="w-2/3 border "/>

            <button className="bg-gray-300 w-1/3 py-2 p-4 rounded-md hover:bg-gray-500">
              Apply Coupon
            </button>
            </div>
            <button className="bg-blue-500 text-white py-3 px-8 w-full rounded-md hover:bg-blue-600">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
