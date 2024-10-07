import React from "react";

function Page() {
  return (
    <div className="px-8 lg:px-32 pb-16">
      {/* Header section */}
      <div className="py-16">
        <h1>
          <span className="text-2xl font-normal text-gray-800">Home</span>
          <span className="text-2xl font-normal text-gray-800"> / </span>
          <span className="text-2xl font-bold">My Account</span>
        </h1>
      </div>

      <div className="flex gap-4">
        {/* Sidebar Contact Info */}
        <div className="w-1/4 shadow-lg p-10">
          {/* Contact Us Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Manage My Account</h2>
            <p className="text-lg mb-2 pl-5">My Profile</p>
            <p className="text-lg mb-2 pl-5">Address Book</p>
            <p className="text-lg mb-2 pl-5">My Payment Options</p>
          </div>

          {/* Write To Us Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">My Orders</h2>
            <p className="text-lg mb-2 pl-5">My Returns</p>
            <p className="text-lg mb-2 pl-5">My Cancellations</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4 mt-6">My Wishlist</h2>
          </div>
        </div>

        {/* Main Content - Contact Form */}
        <div className="w-3/4 pl-10 shadow-lg p-7">
          <h2 className="text-2xl font-bold mb-8">Edit Your Profile</h2>
          <form className="space-y-6">
            {/* Inputs for Name, Email, Phone (on the same line) */}
            <div className="flex space-x-4">
            <div className="w-full">
                <label className="block text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  placeholder="Your First Name"
                  className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
                />
              </div>
              <div className="w-full">
                <label className="block text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  placeholder="Your Last Name"
                  className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
                />
              </div>
             
            </div>

            <div className="flex space-x-4 w-full">
            <div className="w-full">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
                />
              </div>
              <div className="w-full">
                <label className="block text-gray-700 mb-2">Address</label>
                <input
                  type="text"
                  placeholder="Your Address"
                  className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
                />
              </div>
             
            </div>

            {/* Message Box */}
            <div>
            <label className="block text-gray-700 mb-2">Password changes</label>
            <input
                  type="text"
                  placeholder="Current Password"
                  className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
                />
                 <input
                  type="text"
                  placeholder="New Password"
                  className="w-full p-3 border border-gray-300 rounded-md my-5 bg-gray-100"
                />
                 <input
                  type="text"
                  placeholder="Confirm New Password"
                  className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
                />
            </div>

            {/* Send Message Button */}
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-3 px-8 rounded-md hover:bg-blue-600"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
