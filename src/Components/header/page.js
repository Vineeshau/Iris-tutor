"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/Components/ui/button";
import Image from "next/image";

function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="w-full">
      <div className="card w-full shadow-xl bg-white px-5 lg:px-10">
        <div className="h-20 lg:h-28 flex flex-row items-center justify-around">
          <div className="w-24 lg:w-auto">
            <Link href="/">
            <Image src="/logo.svg" width={100} height={50} alt="Image" />
            </Link>
          </div>
          <div className="md:hidden">
            <svg
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-6 h-6 cursor-pointer"
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
          </div>
          <div
            className={`md:flex gap-10 md:gap-10 text-lg font-normal items-center ${
              isMenuOpen
                ? "z-50 mt-72 flex flex-col w-full translate-y-5 p-4 bg-[#ffffff] text-white"
                : "hidden"
            }`}
          >
            <Link href="/" className="text-gray-800 hover:text-gray-600">
              Home
            </Link>
            <Link href="/dashboard/courses" className="text-gray-800 hover:text-gray-600">
              Courses
            </Link>
            <Link href="/contactus" className="text-gray-800 hover:text-gray-600">
              Contact Us
            </Link>
            <Link href="/pricing" className="text-gray-800 hover:text-gray-600">
              Pricing
            </Link>
            <div className="flex gap-3 py-20">
              <Button asChild style={{ backgroundColor: 'white', color: 'black', width: '100px', height: '40px', border: '1px solid black', borderRadius: '5px' }}>
                <Link href="/signin">Sign in</Link>
              </Button>
              
              <Button asChild style={{ backgroundColor: '#3278FF', color: 'white', width: '100px', height: '40px' }}>
                <Link href="/signup">Sign up</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
