import React from 'react'

function Footer() {
  return (
      <footer className="bg-gray-800 text-white py-6">
  <div className="max-w-screen-xl mx-auto px-4">
    <div className="flex justify-between">
      <p>&copy; 2024 SaleBox. All rights reserved.</p>
      <div className="flex space-x-4">
        <a href="/privacy" className="hover:underline">Privacy Policy</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer
