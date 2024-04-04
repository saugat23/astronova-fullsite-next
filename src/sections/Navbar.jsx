import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="h-auto bg-[#1A1728] py-2 px-4 sm:py-3 sm:px-4 md:py-4 md:px-6 lg:px-8">
      <nav className="grid grid-cols-8 gap-x-4 md:gap-x-6 lg:gap-x-8">
        <div className="col-span-2 flex justify-center items-center">
          <Link href="/">
            <Image
              src="/navbarlogo.png"
              alt="Navbar Logo"
              width={72}
              height={48}
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div className="lg:col-span-4 hidden lg:flex lg:items-center lg:justify-evenly lg:w-full">
          <ul className="flex justify-evenly items-center space-x-8 text-white">
            <li>Home</li>
            <li>About Us</li>
            <li>Our Works</li>
            <li>Join Our Team</li>
            <li>Our Campaign</li>
            <li>Opportunity</li>
            <li>Blogs & News</li>
          </ul>
        </div>
        <div className="col-span-2 flex justify-center items-center">
          <button className="bg-[#F36523] border border-white rounded-full px-12 py-3 text-white">
            Contact Us
          </button>
        </div>
        <div className="flex lg:hidden">
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.375 4.75H16.625V6.33333H2.375V4.75ZM2.375 8.70833H16.625V10.2917H2.375V8.70833ZM2.375 12.6667H16.625V14.25H2.375V12.6667Z"
              fill="white"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
