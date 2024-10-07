import React from 'react';

function Page() {
  return (
    <div className="px-8 lg:px-32 pb-16">
      {/* Header section */}
      <div className="py-16">
        <h1>
          <span className="text-2xl font-normal text-gray-800">Home</span>
          <span className="text-2xl font-normal text-gray-800"> / </span>
          <span className="text-2xl font-bold">Contact</span>
        </h1>
      </div>

      <div className="flex gap-4">
        {/* Sidebar Contact Info */}
        <div className="w-1/4 shadow-lg p-10">
          {/* Contact Us Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg mb-2">We are available 24/7, 7 days a week.</p>
            <p className="text-lg">
              Phone: <a href="tel:+8801611112222" className="text-blue-600">+8801611112222</a>
            </p>
          </div>

          {/* Divider Bar */}
          <div className="h-px bg-gray-300 w-full mb-8"></div>

          {/* Write To Us Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Write To Us</h2>
            <p className="text-lg mb-2">Fill out our form and we will contact you within 24 hours.</p>
            <p className="text-lg">Emails:</p>
            <p className="text-blue-600">customer@exclusive.com</p>
            <p className="text-blue-600">support@exclusive.com</p>
          </div>
        </div>

        {/* Main Content - Contact Form */}
        <div className="w-3/4 pl-10 shadow-lg">
          <h2 className="text-2xl font-bold mb-8">Send Us a Message</h2>
          <form className="space-y-6">
            {/* Inputs for Name, Email, Phone (on the same line) */}
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-1/3 p-3 border border-gray-300 rounded-md bg-gray-100"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-1/3 p-3 border border-gray-300 rounded-md bg-gray-100"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-1/3 p-3 border border-gray-300 rounded-md bg-gray-100"
              />
            </div>

            {/* Message Box */}
            <div>
              <textarea
                placeholder="Your Message"
                className="w-full p-3 h-40 border border-gray-300 rounded-md bg-gray-100"
              ></textarea>
            </div>

            {/* Send Message Button */}
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-3 px-8 rounded-md hover:bg-blue-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
