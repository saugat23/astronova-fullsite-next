import React from "react";
import Image from "next/image";
import Link from "next/link";
import "aos/dist/aos.css";

const Navbar = () => {
  return (
    <header
      data-aos="fade-down"
      data-aos-duration="500"
      className="h-auto bg-[#048FB7] py-2 px-4 sm:py-3 sm:px-4 md:py-4 md:px-8 lg:px-12 lg:pt-12"
    >
      <nav className="w-full flex justify-between items-center">
        <div className="flex justify-center items-center">
          <Link href="/">
            <Image
              src="/assets/navbarlogo.svg"
              alt="Navbar Logo"
              width={200}
              height={92}
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:items-center lg:justify-end lg:w-full">
          <ul className="flex justify-evenly items-center space-x-8 text-white font-ibmplex font-semibold text-xl uppercase leading-[25.2px]">
            <li>
              <Link
                href="#"
                className="relative after:bg-white after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="relative after:bg-white after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="relative after:bg-white after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300"
              >
                Our Project
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="relative after:bg-white after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300"
              >
                Science Expo
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="relative after:bg-white after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300"
              >
                Opportunity
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="relative after:bg-white after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300"
              >
                Blogs & News
              </Link>
            </li>
            <div className="flex justify-center items-center">
              <button className="bg-[#F2CE24] rounded-lg px-12 py-4 text-black font-ibmplex font-semibold text-2xl leading-[25.2px] hover:shadow-2xl hover:scale-105">
                SUPPORT US
              </button>
            </div>
          </ul>
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
