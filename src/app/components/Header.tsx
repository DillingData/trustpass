"use client"; // Ensure this is treated as a client component

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the mobile menu open/close
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Left Side: Logo / Name links back to Home */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            TrustPass
          </Link>
        </div>

        {/* Right Side: Links */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/features" className="text-gray-600 hover:text-gray-900">
            Features
          </Link>
          <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
            Privacy
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu} // Toggle menu on click
            className="text-gray-600 hover:text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && ( // Conditionally render mobile menu
        <nav className="md:hidden bg-gray-100 py-4 px-4">
          <Link
            href="/features"
            className="block py-2 text-gray-600 hover:text-gray-900"
          >
            Features
          </Link>
          <Link
            href="/privacy"
            className="block py-2 text-gray-600 hover:text-gray-900"
          >
            Privacy
          </Link>
          <Link
            href="/contact"
            className="block py-2 text-gray-600 hover:text-gray-900"
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}