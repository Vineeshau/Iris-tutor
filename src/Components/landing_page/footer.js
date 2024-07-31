import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer
      className="text-gray-400 py-10"
      style={{ backgroundColor: "rgba(104, 176, 171, 0.3)" }}
    >
      <div className="container mx-auto px-4 lg:px-2">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
          <div className="text-center lg:text-left mb-8 lg:mb-0 lg:mr-10">
            <div>
              <Link href="/" className="flex items-center">
                <Image src="/iris_logo.svg" width={80} height={80} alt="Logo" />
                <span className="ml-2 text-4xl font-semibold text-black dark:text-white">
                  Iris Tutor
                </span>
              </Link>
            </div>

            <div className="flex justify-center lg:justify-start mt-6 space-x-4">
              <Link href="#" className="bg-blue-600 p-2 rounded-xl">
                <FaFacebookF className="text-white text-xl" />
              </Link>
              <Link href="#" className="bg-black p-2 rounded-xl">
                <FaXTwitter className="text-white text-xl" />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-xl"
                style={{
                  background:
                    "linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)",
                }}
              >
                <FaInstagram className="text-white text-xl" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-8 lg:mt-0">
            <div>
              <h3 className="text-lg font-bold text-black mb-4">Company</h3>
              <ul>
                <li className="mb-2">
                  <Link href="#" className="hover:text-black">
                    About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="hover:text-black">
                    Careers
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/contactus" className="hover:text-black">
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-black mb-4">Product</h3>
              <ul>
                <li className="mb-2">
                  <Link href="#" className="hover:text-black">
                    Features
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/pricing" className="hover:text-black">
                    Pricing
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="hover:text-black">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-black mb-4">Support</h3>
              <ul>
                <li className="mb-2">
                  <Link href="#" className="hover:text-black">
                    Help Center
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="hover:text-black">
                    API
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="hover:text-black">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Copyright 2024 IRISTUTOR. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
