"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";


const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
  };

  return (
    <nav className="bg-[#3278FF] text-white py-8 shadow-lg sticky top-0 right-0 z-50">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* First Section: Search Bar */}
        <div className="flex-grow mb-4 lg:mb-0 lg:mr-4 lg:w-2/5">
          <form onSubmit={handleSearchSubmit} className="w-3/5">
            <div className="relative">
              <input
                type="text"
                placeholder="Type here to search"
                className="bg-white-700 text-black border border-gray-600 px-2 py-2 focus:outline-none focus:ring focus:border-blue-300 w-full pl-10"
                value={searchQuery}
                onChange={handleSearchChange}
                style={{ borderRadius: "100px" }} // Change the value as desired
              />

              <Image
                src="/search.png"
                alt="Search Icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
              />
            </div>
          </form>
        </div>

        {/* Second Section: Navigation Links */}
        <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10 px-10">
          <li>
            <Link href="/" legacyBehavior>
              <a className="text-white-600">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/courses" legacyBehavior>
              <a className="text-white-600">Courses</a>
            </Link>
          </li>
          <li>
            <Link href="/contactus" legacyBehavior>
              <a className="text-white-600">Contact Us</a>
            </Link>
          </li>
          <li>
            <Link href="/pricing" legacyBehavior>
              <a className="text-white-600">Pricing</a>
            </Link>
          </li>
        </ul>

        {/* Third Section: Logout Button */}
        <div>
          <Link href="/">
            <button
              className="bg-[#3278FF] border border-white text-white px-4 py-2 rounded-lg"
              style={{ borderWidth: "2px" }}
            >
              Logout
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
