"use client"; // Ensure this is treated as a client component

import Header from "../components/Header"; // Import the reusable Header component
import { EnvelopeIcon, UserIcon, ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline'; // Import icons from Heroicons v2

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 text-gray-800">
      <Header /> {/* Include the reusable header */}

      {/* Spacing to prevent content from being hidden under fixed header */}
      <div className="mt-20"></div>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
          {/* Smaller Contact Us heading */}
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-12">
            We'd love to hear from you. Fill out the form below to get in touch with us, and we'll respond as soon as we can.
          </p>

          {/* Contact Form */}
          <form className="bg-white shadow-lg rounded-lg p-8 space-y-6">
            
            {/* Name Field */}
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <UserIcon className="absolute inset-y-0 right-3 h-6 w-6 text-gray-400" />
              </div>
            </div>

            {/* Email Field */}
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <EnvelopeIcon className="absolute inset-y-0 right-3 h-6 w-6 text-gray-400" />
              </div>
            </div>

            {/* Message Field */}
            <div className="relative">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Write your message"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
                <ChatBubbleLeftEllipsisIcon className="absolute inset-y-0 right-3 h-6 w-6 text-gray-400" />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg text-lg hover:bg-blue-700 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg">&copy; {new Date().getFullYear()} TrustPass. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">Privacy-first password safety, built with trust and security in mind.</p>
        </div>
      </footer>
    </div>
  );
}
