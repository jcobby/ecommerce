import React from 'react';

function Page() {
  return (
    <div className="flex flex-col items-center justify- min-h-screen bg- relative ">
      {/* Brand Name centered at the top */}
      <div className="py-14 text-3xl font-bold text-center w-full">
        SalesBox
      </div>

      {/* Card with Background Image */}
      <div
        className="bg-transparent flex items-center justify-center shadow-lg rounded-lg p-6 w-1/4 relative"
        style={{
          backgroundImage: 'url("/newArrival/login.png")', // Replace with the correct path to your image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Login Form */}
        <div className="mt-8 text-center bg-transparent bg-opacity-70 p-4 rounded-lg text-">
          <h2 className="text-2xl font-semibold pb-5">Login to SalesBox</h2>
          <p className="text-gray-600 text-">Enter your details below</p>

          {/* Email Input */}
          <div className="mt-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full placeholder-gray-700 border-b-2 bg-transparent border-black py-2 px-4 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="mt-4">
            <input
              type="password"
              placeholder="Password"
              className="w- border-b-2 placeholder-gray-700 bg-transparent border-black py-2 px-4 focus:outline-none focus:border-blue-500 w-96"
            />
          </div>

          {/* Login Button and Forgot Password */}
          <div className="mt-6 flex justify-between items-center">
            <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none">
              Login
            </button>
            <a href="#" className="text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
