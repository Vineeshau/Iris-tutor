import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
          <div className="text-center lg:text-left mb-8 lg:mb-0 lg:mr-10">
            <Image
              src="/logo.svg"
              width={150}
              height={45}
              alt="Logo"
              className="mx-auto lg:mx-0"
            />
            <p className="mt-4 text-base lg:text-lg font-semibold text-gray-300 text-center lg:text-left max-w-lg">
              We&apos;re a team of experienced designers and developers. We
              combine beautiful&lsquo; modern designs with clean&lsquo;
              functional&lsquo; and high-performance code to produce stunning
              websites.
            </p>
            <div className="flex justify-center lg:justify-start mt-6 space-x-4">
              <Link href="#" className="bg-blue-600 p-2 rounded-full">
                <FaFacebookF className="text-white text-xl" />
              </Link>
              <Link href="#" className="bg-blue-500 p-2 rounded-full">
                <FaXTwitter className="text-white text-xl" />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-full"
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
              <h3 className="text-lg font-bold text-gray-300 mb-4">Company</h3>
              <ul>
                <li className="mb-2">
                  <Link href="#" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/contactus" className="hover:text-white">
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-300 mb-4">Product</h3>
              <ul>
                <li className="mb-2">
                  <Link href="#" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/pricing" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="hover:text-white">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-300 mb-4">Support</h3>
              <ul>
                <li className="mb-2">
                  <Link href="#" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="hover:text-white">
                    API
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="hover:text-white">
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
