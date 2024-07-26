import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/Components/ui/sheet";
import { Button } from "@/Components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export default function Navbar() {
  return (
    <div
      className="flex items-center justify-between px-4 py-8 dark:bg-gray-800"
      style={{ backgroundColor: "rgba(104, 176, 171, 0.30)" }}
    >
      <Link href="/" className="flex items-center">
        <Image
          src="/iris_logo.svg"
          width={60}
          height={60}
          alt="Logo"
          className=""
        />
        <span className="ml-2 text-4xl font-semibold text-black dark:text-white">
          Iris Tutor
        </span>
      </Link>

      <div className="hidden md:flex gap-4">
        <Link href="/" className="text-lg font-medium" prefetch={false}>
          Home
        </Link>
        <Link href="#" className="text-lg font-medium" prefetch={false}>
          Courses
        </Link>
        <Link href="#" className="text-lg font-medium" prefetch={false}>
          Contact Us
        </Link>
        <Link href="#" className="text-lg font-medium" prefetch={false}>
          Pricing
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <form className="relative hidden lg:block">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            type="search"
            placeholder="Search..."
            className="h-9 w-[200px] rounded-md border border-gray-300 bg-gray-100 pl-10 text-sm focus:border-gray-500 focus:bg-white focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:focus:border-gray-600"
          />
        </form>

        <Button variant="ghost" size="icon" className="rounded-full lg:hidden">
          <SearchIcon className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>

        <Button
          asChild
          style={{
            backgroundColor: "white",
            color: "black",
            width: "100px",
            height: "40px",
            border: "1px solid black",
            borderRadius: "5px",
          }}
        >
          <Link href="/signin">Sign in</Link>
        </Button>
        <Button
          asChild
          style={{
            backgroundColor: "rgba(34, 87, 122, 0.43)",
            color: "black",
            width: "100px",
            height: "40px",
          }}
        >
          <Link href="/signup">Sign up</Link>
        </Button>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="flex flex-col items-center p-4">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/iris_logo.svg"
                width={60}
                height={60}
                alt="Logo"
                className=""
              />
              <span className="ml-2 text-4xl font-semibold text-black dark:text-white">
                Iris Tutor
              </span>
            </Link>
            <Link
              href="/"
              className="text-lg font-medium mb-4"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-lg font-medium  mb-4"
              prefetch={false}
            >
              Courses
            </Link>
            <Link
              href="#"
              className="text-lg font-medium  mb-4"
              prefetch={false}
            >
              Contact Us
            </Link>
            <Link
              href="#"
              className="text-lg font-medium  mb-4"
              prefetch={false}
            >
              Pricing
            </Link>
            <div className="flex flex-col items-center gap-4 mt-4">
              <Button
                asChild
                style={{
                  backgroundColor: "white",
                  color: "black",
                  width: "100px",
                  height: "40px",
                  border: "1px solid black",
                  borderRadius: "5px",
                }}
              >
                <Link href="/signin">Sign in</Link>
              </Button>
              <Button
                asChild
                style={{
                  backgroundColor: "rgba(34, 87, 122, 0.43)",
                  color: "black",
                  width: "100px",
                  height: "40px",
                }}
              >
                <Link href="/signup">Sign up</Link>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
