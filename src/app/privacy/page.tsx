"use client"; // Ensure this is treated as a client component

import Header from "../components/Header"; // Import the reusable Header component
import { ShieldCheckIcon, EyeSlashIcon, LockClosedIcon } from '@heroicons/react/24/outline';

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 text-gray-800">
      <Header /> {/* Include the reusable header */}

      {/* Spacing to prevent content from being hidden under fixed header */}
      <div className="mt-20"></div>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-lg text-gray-600 mb-12">
            At TrustPass, your privacy is our top priority. Learn more about how we protect your data and ensure that your personal information stays safe.
          </p>

          {/* Privacy Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Section 1: No Data Stored */}
            <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
              <ShieldCheckIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-semibold mb-2">No Data Stored</h2>
              <p className="text-gray-600">
                We do not store any passwords or personal information. Everything happens locally on your device, ensuring your data never leaves your hands.
              </p>
            </div>

            {/* Section 2: No Tracking */}
            <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
              <EyeSlashIcon className="h-12 w-12 text-green-600 mb-4" />
              <h2 className="text-2xl font-semibold mb-2">No Tracking</h2>
              <p className="text-gray-600">
                TrustPass does not track your browsing behavior. We respect your privacy and do not use cookies or third-party tracking tools.
              </p>
            </div>

            {/* Section 3: Client-Side Processing */}
            <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
              <LockClosedIcon className="h-12 w-12 text-purple-600 mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Client-Side Processing</h2>
              <p className="text-gray-600">
                All password strength checks and suggestions are processed directly on your device, eliminating the need for data to be sent to a server.
              </p>
            </div>

          </div>

          {/* Detailed Privacy Policy */}
          <section className="bg-white shadow-md rounded-lg mt-12 p-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900">Detailed Privacy Policy</h2>

            <h3 className="text-xl font-semibold mb-4 text-gray-900">1. No Data Collection</h3>
            <p className="mb-6 text-gray-600">
              TrustPass is designed to be a privacy-first application. We do not collect any personal information, and no passwords are stored on our servers. All data is processed locally on your device.
            </p>

            <h3 className="text-xl font-semibold mb-4 text-gray-900">2. No Third-Party Sharing</h3>
            <p className="mb-6 text-gray-600">
              We do not share any data with third parties, as we do not collect or store any data from our users. TrustPass remains completely isolated from third-party services that may infringe on your privacy.
            </p>

            <h3 className="text-xl font-semibold mb-4 text-gray-900">3. Local Data Processing</h3>
            <p className="mb-6 text-gray-600">
              All password strength evaluations and secure password suggestions are processed on your local device. This ensures that no sensitive information leaves your browser, keeping your data safe and secure.
            </p>

            <h3 className="text-xl font-semibold mb-4 text-gray-900">4. No Cookies or Tracking Technologies</h3>
            <p className="mb-6 text-gray-600">
              TrustPass does not use cookies or any form of tracking technology. We do not track user activity or store any session information.
            </p>

            <h3 className="text-xl font-semibold mb-4 text-gray-900">5. User Control</h3>
            <p className="mb-6 text-gray-600">
              You remain in complete control of your data. Since we do not collect or store any information, there’s nothing for you to manage, update, or request removal of.
            </p>
          </section>
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
