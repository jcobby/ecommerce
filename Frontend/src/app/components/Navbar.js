import Link from 'next/link';
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search'; // Import the Search Icon

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-20 py-7 border-b-2 border-gray-300 shadow-md">
      {/* Shop Name on the left */}
      <Link href={'/'} className="text-3xl w-[25%] font-bold text-black py-4">
        <h2>SaleBox</h2>
      </Link>

      {/* Navigation Links */}
      <div className='flex items-center justify-between w-[30%] px-10'>
        <Link href="/" className="relative text-2xl text-black py-4 px-4 after:absolute after:bg-blue-500 after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full">
          Home
        </Link>
        <Link href="/buy" className="relative text-2xl text-black py-4 px-4 after:absolute after:bg-blue-500 after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full">
          Buy
        </Link>
        <Link href="/sell" className="relative text-2xl text-black py-4 px-4 after:absolute after:bg-blue-500 after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full">
          Sell
        </Link>
        <Link href="/auction" className="relative text-2xl text-black py-4 px-4 after:absolute after:bg-blue-500 after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full">
          Auction
        </Link>
      </div>

      {/* Right side elements */}
      <div className="flex items-center w-[45%]">
        {/* Search Bar with Icon */}
        <div className="relative w-full">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full p-2 pl-10 border border-gray-300 rounded-md"
          />
          {/* Search Icon positioned inside the input */}
          <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
            <SearchIcon />
          </div>
        </div>
        <Link  href="/cart" className='pl-6'>
          <ShoppingCartIcon />
        </Link>
        <Link
          href="/login"
          className="text-lg text-black py-4 px-6 transition duration-300 ease-in-out hover:text-blue-300"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="text-lg bg-blue-500 text-white rounded-md py-4 px-4 transition duration-300 ease-in-out hover:text-blue-300 hover:bg-blue-300"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
