import React from 'react';
import { FaCcVisa, FaCcMastercard, FaPaypal, FaApplePay, FaGooglePay, FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import payment and social media icons

function Footer() {
  return (
    <div className="bg-blue-500 text-white">
      {/* Footer Content */}
      <div className="container mx-auto py-10 px-5 grid grid-cols-5 gap-8">
        {/* Column 1: Brandname & About */}
        <div className="flex flex-col">
          <h3 className="font-bold text-xl mb-4">Brandname Company</h3>
          <a href="#" className="text-gray-300 mb-2">About</a>
          <a href="#" className="text-gray-300 mb-2">Features</a>
          <a href="#" className="text-gray-300 mb-2">Works</a>
          <a href="#" className="text-gray-300 mb-2">Career</a>
        </div>

        {/* Column 2: Help */}
        <div className="flex flex-col">
          <h3 className="font-bold text-xl mb-4">Help</h3>
          <a href="#" className="text-gray-300 mb-2">Customer Support</a>
          <a href="#" className="text-gray-300 mb-2">Delivery Details</a>
          <a href="#" className="text-gray-300 mb-2">Terms & Conditions</a>
          <a href="#" className="text-gray-300 mb-2">Privacy Policy</a>
          <a href="#" className="text-gray-300 mb-2">FAQ</a>
        </div>

        {/* Column 3: Account */}
        <div className="flex flex-col">
          <h3 className="font-bold text-xl mb-4">Account</h3>
          <a href="#" className="text-gray-300 mb-2">Manage Deliveries</a>
          <a href="#" className="text-gray-300 mb-2">Orders</a>
          <a href="#" className="text-gray-300 mb-2">Payments</a>
        </div>

        {/* Column 4: Resources */}
        <div className="flex flex-col">
          <h3 className="font-bold text-xl mb-4">Resources</h3>
          <a href="#" className="text-gray-300 mb-2">Free eBooks</a>
          <a href="#" className="text-gray-300 mb-2">Development Tutorial</a>
          <a href="#" className="text-gray-300 mb-2">How to - Blog</a>
          <a href="#" className="text-gray-300 mb-2">Youtube Playlist</a>
        </div>

        {/* Column 5: Contact Information */}
        <div className="flex flex-col">
          <h3 className="font-bold text-xl mb-4">Location</h3>
          <p className="text-gray-300 mb-2">Brandname © 2000-2023, All Rights Reserved</p>
          <p className="text-gray-300 mb-2">email@gmail.com</p>
          <p className="text-gray-300 mb-2">+123-456-789</p>
        </div>
      </div>

      {/* Social Media Icons - Moved Above the Bar */}
      <div className="py-4">
        <div className="container mx-auto flex justify-center space-x-8">
          <FaTwitter className="text-blue-400 text-3xl" />
          <FaFacebook className="text-blue-600 text-3xl" />
          <FaInstagram className="text-pink-500 text-3xl" />
          <FaLinkedin className="text-blue-700 text-3xl" />
        </div>
      </div>

      {/* Orange Bar */}
      <div className="bg-orange-500 h-1"></div>

      {/* Footer Rights with Payment Icons */}
      <div className="bg-gray-200 py-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Copyright on the left */}
          <p className="text-gray-600 text-lg">Brandname © 2000-2023, All Rights Reserved</p>

          {/* Payment Icons on the right */}
          <div className="flex space-x-4">
            <FaCcVisa className="text-blue-600 text-3xl" />
            <FaCcMastercard className="text-red-600 text-3xl" />
            <FaPaypal className="text-blue-500 text-3xl" />
            <FaApplePay className="text-black text-3xl" />
            <FaGooglePay className="text-green-600 text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
