'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  
  // Handle input changes
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const { login } = useAuth(); // Get login function from context


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:7000/api/auth/login', { // Update with your API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Login successful!');
        console.log('lgoin dets ', data)
        login(data.username, data.token); // Update global auth state

        router.push('/'); // Redirect to homepage or any other page
      } else {
        const errorData = await response.json();
        alert('Error: ' + errorData.message);
      }
    } catch (error) {
      console.error('Server error:', error);
      alert('Login failed, please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify- min-h-screen bg- relative">
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
        <form onSubmit={handleSubmit} className="mt-8 text-center bg-transparent bg-opacity-70 p-4 rounded-lg text-">
          <h2 className="text-2xl font-semibold pb-5">Login to SalesBox</h2>
          <p className="text-gray-600 text-">Enter your details below</p>

          {/* Email Input */}
          <div className="mt-6">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              className="w-full placeholder-gray-700 border-b-2 bg-transparent border-black py-2 px-4 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mt-4">
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              className="w- border-b-2 placeholder-gray-700 bg-transparent border-black py-2 px-4 focus:outline-none focus:border-blue-500 w-96"
              required
            />
          </div>

          {/* Login Button and Forgot Password */}
          <div className="mt-6 flex justify-between items-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Login
            </button>
            <a href="#" className="text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
