"use client"; // Add this directive at the very top

import React, { useState } from "react";
import Header from "../app/components/Header"; // Import the reusable Header component
import { checkPassword, checkHackerList } from "@/helperFunctions/passWordHandling";

export default function Home() {
  const [password, setPassword] = useState(''); // Store the password input
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const [showResults, setShowResults] = useState(false); // Toggle between input and results
  const [isOnHackerList, setIsOnHackerList] = useState(false); // Check if on hacker wordlist
  const [isSafe, setIsSafe] = useState(false); // Check if password is safe

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const checkPasswordStrength = () => {
    // Perform your password checks here
    const hackerListCheck = checkHackerList(password); // Replace with real check logic
    const safetyCheck = checkPassword(password); // Example safety check

    setIsOnHackerList(hackerListCheck);
    setIsSafe(safetyCheck);

    setShowResults(true); // Show the results section
  };

  const resetCheck = () => {
    setShowResults(false); // Go back to the input form
    setPassword('');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 text-gray-800">
      <Header /> {/* Include the reusable header */}

      {/* Spacing to prevent content from being hidden under fixed header */}
      <div className="mt-20"></div>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column: Password Checker or Results */}
          <div className="col-span-2 bg-white shadow-xl rounded-lg p-8">
            {showResults ? (
              /* Results Section */
              <>
                <h2 className="text-3xl font-semibold mb-6 text-gray-900">Password Check Results</h2>

                {/* Hacker Wordlist Check */}
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold mb-2">Hacker Wordlist Check</h3>
                  <p className={isOnHackerList ? "text-red-600" : "text-green-600"}>
                    {isOnHackerList
                      ? "❌ Your password is on a hacker wordlist. Consider changing it."
                      : "✔ Your password is not on a known hacker wordlist."}
                  </p>
                </div>

                {/* Password Safety Check */}
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold mb-2">Password Safety Check</h3>
                  <p className={isSafe ? "text-green-600" : "text-red-600"}>
                    {isSafe
                      ? "✔ Your password is considered safe."
                      : "❌ Your password is too weak. Consider making it longer and more complex."}
                  </p>
                </div>

                {/* Premium Dark Web Monitoring Feature */}
                <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-2">Premium Dark Web Monitoring</h3>
                  <p className="mb-4 text-gray-600">
                    Upgrade to our premium service to monitor if your password has been leaked on the dark web.
                  </p>
                  <button
                    className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all"
                    onClick={() => alert("Upgrade to Premium feature clicked!")} // Replace with actual subscription logic
                  >
                    Upgrade to Premium
                  </button>
                </div>

                <button
                  className="mt-4 py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
                  onClick={resetCheck}
                >
                  Go Back
                </button>
              </>
            ) : (
              /* Input Form Section */
              <>
                <h2 className="text-3xl font-semibold mb-6 text-gray-900">
                  Check Your Password's Strength
                </h2>
                <p className="mb-8 text-gray-600">
                  Enter your password below to check its strength and security. All processing is done locally in your browser. We never store or send your password data anywhere.
                </p>

                <div className="relative mb-6">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter your password"
                    className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />

                  {/* Show/Hide Password Button */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 px-4 py-3 text-gray-600 hover:text-gray-900"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>

                <button
                  className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg text-lg hover:bg-blue-700 transition-all"
                  onClick={() => checkPasswordStrength()}
                >
                  Check Password
                </button>
              </>
            )}
          </div>

          {/* Right Column: Traffic Monitor */}
          <div className="bg-gray-100 shadow-xl rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Traffic Monitor</h2>
            <p className="mb-4 text-gray-600">
              Below is the real-time network traffic generated by your activity on this page. No sensitive data is transmitted to the backend.
            </p>

            <div className="bg-white border border-gray-300 p-4 rounded-lg h-72 overflow-auto">
              <p className="text-gray-500 text-sm">No traffic generated yet...</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg">
            &copy; {new Date().getFullYear()} TrustPass. All rights reserved.
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Privacy-first password safety, built with trust and security in mind.
          </p>
        </div>
      </footer>
    </div>
  );
}