'use client'

import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { useAuth } from '../context/AuthContext';


function Page() {
  // State to store form data
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    address: ''
  });
  const { login } = useAuth(); // Get login function from context


  // Handle input change
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:7000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        login(data.username, data.token); // Update global auth state
        router.push('/');
      } else {
        const errorData = await response.json();
        alert('Error: ' + errorData.message);
        console.error('Error:', errorData);
      }
    } catch (error) {
      console.error('Server error:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg- relative">
      {/* Brand Name centered at the top */}
      {/* Card with Background Image */}
      <div
        className="bg-transparent flex items-center justify-center shadow-lg rounded-lg px-6 w-1/4 relative"
        style={{
          backgroundImage: 'url("/newArrival/login.png")', // Replace with the correct path to your image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="mt-8 text-center bg-transparent bg-opacity-70 py-4 rounded-lg w-full">
          <h2 className="text-2xl font-semibold pb-5">Create an Account</h2>
          <p className="text-gray-600">Enter your details below</p>

          {/* Name Input */}
          <div className="mt-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="w-3/4 border-b-2 bg-transparent placeholder-gray-500 border-black py-2 px-4 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Username Input */}
          <div className="mt-2">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Username"
              className="w-3/4 border-b-2 bg-transparent placeholder-gray-500 border-black py-2 px-4 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mt-2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-3/4 border-b-2 bg-transparent placeholder-gray-500 border-black py-2 px-4 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mt-2">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              className="w-3/4 placeholder-gray-500 border-b-2 bg-transparent border-black py-2 px-4 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Phone Input */}
          <div className="mt-2">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="w-3/4 placeholder-gray-500 border-b-2 bg-transparent border-black py-2 px-4 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Address Input */}
          <div className="mt-2">
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Address"
              className="w-3/4 placeholder-gray-500 border-b-2 bg-transparent border-black py-2 px-4 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Create Account Button */}
          <div className="flex flex-col gap-5 mt-5">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Create Account
            </button>
            <button className="bg-transparent text-black py-2 px-6 border border-black rounded-lg focus:outline-none">
              Sign up with Google
            </button>
          </div>

          <div className="mt-4">
            Already have an Account?{' '}
            <span className="text-orange-400 underline cursor-pointer">
              Login in
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
