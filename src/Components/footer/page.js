import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

function Page() {
  return (
    <div className="flex flex-col lg:flex-row items-center py-20 px-40">
      <div className="flex-1 lg:text-center">
        <Image src="/logo.svg" width={100} height={30} alt="Image" />
        <p className="max-w-xs text-center lg:text-left py-6 font-bold">
          We&apos;re a team of experienced designers and developers. We can
          combine beautiful, modern designs with clean, functional, and
          high-performance code to produce stunning websites.
        </p>
        <div className="flex justify-center lg:justify-start mt-4 lg:mt-0 py-8">
          <div className="flex justify-center items-center space-x-2">
            <Link href="#" className="bg-blue-600 p-2 border border-gray-300 rounded-sm">
              <FaFacebookF className="text-white text-2xl" />
            </Link>
            <Link href="#" className="bg-gray-900 p-2 border border-gray-300 rounded-sm">
              <FaXTwitter className="text-white text-2xl" />
            </Link>
            <Link
              href="#"
              className="p-2 border border-gray-300 rounded-sm"
              style={{
                background:
                  "linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)",
              }}
            >
              <FaInstagram className="text-white text-2xl" />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex-1 lg:order-1 lg:flex lg:justify-around lg:py-4">
        <div className="p-4 py-1">
          <h3 className="text-lg font-bold mb-4 text-center lg:text-left">
            Company
          </h3>
          <Link
            href="#"
            className="block text-black-500 text-center lg:text-left mb-4"
          >
            About
          </Link>
          <Link
            href="#"
            className="block text-black-500 text-center lg:text-left mb-4"
          >
            Careers
          </Link>
          <Link
            href="/contactus"
            className="block text-black-500 text-center lg:text-left mb-4"
          >
            Contacts
          </Link>
        </div>

        <div className="p-4 py-1">
          <h3 className="text-lg font-bold mb-4 text-center lg:text-left">
            Product
          </h3>
          <Link
            href="#"
            className="block text-black-500 text-center lg:text-left mb-4"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="block text-black-500 text-center lg:text-left mb-4"
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="block text-black-500 text-center lg:text-left mb-4"
          >
            Security
          </Link>
        </div>

        <div className="p-4 py-1">
          <h3 className="text-lg font-bold mb-4 text-center lg:text-left">
            Support
          </h3>
          <Link
            href="#"
            className="block text-black-500 text-center lg:text-left mb-4"
          >
            Help Center
          </Link>
          <Link
            href="#"
            className="block text-black-500 text-center lg:text-left mb-4"
          >
            API
          </Link>
          <Link
            href="#"
            className="block text-black-500 text-center lg:text-left mb-4"
          >
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
