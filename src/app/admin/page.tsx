"use client"; // Ensure this is treated as a client component

import Header from "../components/Header"; // Import the reusable Header component

export default function Admin() {
    return(
        <div>
            <Header />
            <div>
                <h1 className="text-xl mt-20">Admin Page</h1>
            </div>
        </div>
    );
}