import React from 'react'

function SideBar() {
  return (
    <div className="relative w-64 h-full bg- p-4 border-r-2 pt-10 bg-">
    <ul className="space-y-4">
      <li className="text-2xl hover:text-blue-500 cursor-pointer">Women’s Fashion</li>
      <li className="text-2xl hover:text-blue-500 cursor-pointer">Men’s Fashion</li>
      <li className="text-2xl hover:text-blue-500 cursor-pointer">Electronics</li>
      <li className="text-2xl hover:text-blue-500 cursor-pointer">Home & Lifestyle</li>
      <li className="text-2xl hover:text-blue-500 cursor-pointer">Medicine</li>
      <li className="text-2xl hover:text-blue-500 cursor-pointer">Sports & Outdoor</li>
      <li className="text-2xl hover:text-blue-500 cursor-pointer">Baby’s & Toys</li>
      <li className="text-2xl hover:text-blue-500 cursor-pointer">Groceries & Pets</li>
      <li className="text-2xl hover:text-blue-500 cursor-pointer">Health & Beauty</li>
    </ul>
  </div>
  )
}

export default SideBar
