"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/Components/ui/button";
import Image from "next/image";

function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full">
      <div className="card w-full shadow-xl bg-white px-5 lg:px-10">
        <div className="h-20 lg:h-28 flex flex-row items-center justify-between">
          <div className="w-24 lg:w-auto">
            <Link href="/">
              <Image src="/logo.svg" width={130} height={30} alt="Image"  className=""/>
            </Link>
          </div>
          <div className="md:hidden">
            <svg
              onClick={toggleMenu}
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
          <div className="hidden md:flex gap-10 text-lg font-normal items-center">
            <Link href="/" className="text-gray-800 hover:text-gray-600">
              Home
            </Link>
            <Link href="/signin" className="text-gray-800 hover:text-gray-600">
              Courses
            </Link>
            <Link href="/contactus" className="text-gray-800 hover:text-gray-600">
              Contact Us
            </Link>
            <Link href="/pricing" className="text-gray-800 hover:text-gray-600">
              Pricing
            </Link>
            <div className="flex gap-3">
              <Button asChild style={{ backgroundColor: 'white', color: 'black', width: '100px', height: '40px', border: '1px solid black', borderRadius: '5px' }}>
                <Link href="/signin">Sign in</Link>
              </Button>
              <Button asChild style={{ backgroundColor: '#3278FF', color: 'white', width: '100px', height: '40px' }}>
                <Link href="/signup">Sign up</Link>
              </Button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden inset-0 bg-white flex flex-col items-center p-4 overflow-y-auto">
            <div className="flex flex-col items-center gap-6 text-lg font-normal mt-2 w-24">
              <Link href="/" onClick={closeMenu} className="text-gray-800 hover:text-gray-600">
                Home
              </Link>
              <Link href="/dashboard/courses" onClick={closeMenu} className="text-gray-800 hover:text-gray-600">
                Courses
              </Link>
              <Link href="/contactus" onClick={closeMenu} className="text-gray-800 hover:text-gray-600">
                Contact Us
              </Link>
              <Link href="/pricing" onClick={closeMenu} className="text-gray-800 hover:text-gray-600">
                Pricing
              </Link>
              <div className="flex flex-col gap-3 py-10 w-full items-center">
                <Button asChild style={{ backgroundColor: 'white', color: 'black', width: '100px', height: '40px', border: '1px solid black', borderRadius: '5px' }}>
                  <Link href="/signin" onClick={closeMenu}>Sign in</Link>
                </Button>
                <Button asChild style={{ backgroundColor: '#3278FF', color: 'white', width: '100px', height: '40px' }}>
                  <Link href="/signup" onClick={closeMenu}>Sign up</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;
