"use client";

import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Lottie from "lottie-react";
import GlobeLottie from "./globe-lottie.json";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="700"
      className="h-auto max-w-screen overflow-hidden bg-[#190E08ED]"
    >
      <div className="xl:my-10 lg:my-8 w-full h-[2px] bg-[#AE0D19] flex flex-col justify-center space-y-4"></div>
      <div className="lg:px-8 w-full flex lg:flex-row flex-col space-y-6 lg:space-y-0 justify-between items-start">
        <div className="flex-[0.8] flex flex-col justify-center items-center xl:space-y-4 lg:space-y-2 lg:px-4">
          <div className="self-center lg:self-start lg:border-r-3 border-[#BDB809] flex flex-col lg:w-full w-[60%] justify-center items-center xl:space-y-6 lg:space-y-4 space-y-2 lg:px-4">
            <div>
              <Lottie animationData={GlobeLottie} loop={true} />
            </div>
            <h3 className="font-poppins font-bold xl:text-4xl lg:text-3xl sm:text-2xl text-xl text-[#1D92C9] uppercase text-center">
              Donate for Astronova Globe
            </h3>
            <p className="font-opensans font-normal lg:text-base sm:text-sm text-xs text-center text-[#9E9E9E]">
              Make your dreams come true with astronova foundation, Make your
              dreams come true with astronova foundation,Make your dreams come
              true with astronova foundation
            </p>
          </div>
        </div>

        <div className="h-px w-[90%] mx-auto bg-[#473e39ED] lg:hidden"></div>
        <div className="self-start flex flex-col justify-center items-start  xl:space-y-4 space-y-2 px-6">
          <h4 className="font-inter font-bold 2xl:text-xl xl:text-lg sm:text-base text-sm text-[#77AB33]">
            ABOUT US
          </h4>
          <ul className="flex flex-col justify-center items-start  xl:space-y-4 space-y-2 font-kumbhsans font-normal 2xl:text-lg xl:text-base sm:text-sm  text-xs text-[#C9BDB6]">
            <li>
              <Link href="#">Who We Are</Link>
            </li>
            <li>
              <Link href="#">Where We Work</Link>
            </li>
            <li>
              <Link href="#">Our Board of Trustee</Link>
            </li>
            <li>
              <Link href="#">Board Of Director</Link>
            </li>
            <li>
              <Link href="#">Meet Our Founder</Link>
            </li>
            <li>
              <Link href="#">Our Team</Link>
            </li>
            <li>
              <Link href="#">International Ambassador</Link>
            </li>
          </ul>
          <h4 className="font-inter font-bold 2xl:text-xl xl:text-lg sm:text-base text-sm text-[#AE0D19]">
            OUR SUBSIDIARIES
          </h4>
          <ul className="flex flex-col justify-center items-start xl:space-y-4 space-y-2 font-kumbhsans font-normal 2xl:text-lg xl:text-base sm:text-sm  text-xs text-[#C9BDB6]">
            <li>
              <Link href="#">Astro E-commerce</Link>
            </li>
            <li>
              <Link href="#">E-Learning</Link>
            </li>
          </ul>
          <h4 className="font-inter font-bold 2xl:text-xl xl:text-lg sm:text-base text-sm text-white">
            SUPPORT STUDENTS
          </h4>
          <ul className="flex flex-col justify-center items-start xl:space-y-4 space-y-2 font-kumbhsans font-normal 2xl:text-lg xl:text-base sm:text-sm  text-xs text-[#C9BDB6]">
            <li>
              <Link href="#">Planetarium</Link>
            </li>
            <li>
              <Link href="#">Research and Development</Link>
            </li>
            <li>
              <Link href="#">Startups and Entrepreneurship</Link>
            </li>
            <li>
              <Link href="#">Ventures and Seed Money</Link>
            </li>
          </ul>
        </div>
        <div className="self-start flex flex-col justify-center items-start  xl:space-y-4 space-y-2 px-6">
          <h4 className="font-inter font-bold 2xl:text-xl xl:text-lg sm:text-base text-sm text-[#BDB809]">
            COMPETITIONS
          </h4>
          <ul className="flex flex-col justify-center items-start xl:space-y-4 space-y-2 font-kumbhsans font-normal 2xl:text-lg xl:text-base sm:text-sm  text-xs text-[#C9BDB6]">
            <li>
              <Link href="#">National Science and Expo</Link>
            </li>
            <li>
              <Link href="#">Best Teacher Award</Link>
            </li>
          </ul>
          <h4 className="font-inter font-bold 2xl:text-xl xl:text-lg sm:text-base text-sm text-[#DB8114]">
            OUTREACH
          </h4>
          <ul className="flex flex-col justify-center items-start xl:space-y-4 space-y-2 font-kumbhsans font-normal 2xl:text-lg xl:text-base sm:text-sm  text-xs text-[#C9BDB6]">
            <li>
              <Link href="#">Science and Technology</Link>
            </li>
            <li>
              <Link href="/school_event_registration">
                Research and Development
              </Link>
            </li>
            <li>
              <Link href="/school_event_registration">
                Startups and Entrepreneurship
              </Link>
            </li>
            <li>
              <Link href="#">Ventures and Seed Money</Link>
            </li>
          </ul>
        </div>

        <div className="self-start flex flex-col justify-center items-start xl:space-y-4 space-y-2 px-6">
          <h4 className="font-inter font-bold 2xl:text-xl xl:text-lg sm:text-base text-sm text-[#2496D7]">
            GET INVOLVED
          </h4>
          <ul className="flex flex-col justify-center items-start lg:space-y-4 space-y-2 font-kumbhsans font-normal 2xl:text-lg xl:text-base sm:text-sm  text-xs text-[#C9BDB6]">
            <li>
              <Link href="https://forms.gle/3uCVNnSz6MvqeGfn8" target="_blank">
                Become Volunteer
              </Link>
            </li>
            <li>
              <Link href="#">Become Trainee Trainer</Link>
            </li>
            <li>
              <Link href="#">Become Our School Partner</Link>
            </li>
            <li>
              <Link href="#">Collaborate With Us</Link>
            </li>
            <li>
              <Link href="#">Fundraise</Link>
            </li>
          </ul>
          <h4 className="font-inter font-bold 2xl:text-xl xl:text-lg sm:text-base text-sm text-[#2496D7]">
            OPPORTUNITIES
          </h4>
          <ul className="flex flex-col justify-center items-start xl:space-y-4 space-y-2 font-kumbhsans font-normal 2xl:text-lg xl:text-base sm:text-sm  text-xs text-[#C9BDB6]">
            <li>
              <Link href="#">Public Speaking</Link>
            </li>
            <li>
              <Link href="#">Emotional Intelligence</Link>
            </li>
            <li>
              <Link href="#">Problem Solving</Link>
            </li>
          </ul>
        </div>
        <div className="self-start flex flex-col justify-center items-start xl:space-y-4 space-y-2 px-6">
          <h4 className="font-inter font-bold 2xl:text-xl xl:text-lg sm:text-base text-sm text-[#DB8114] text-left">
            USEFUL LINKS
          </h4>
          <ul className="flex flex-col justify-center items-start xl:space-y-4 space-y-2 font-kumbhsans font-normal 2xl:text-lg xl:text-base sm:text-sm  text-xs text-[#C9BDB6] text-left">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="#">News and Events</Link>
            </li>
            <li>
              <Link href="/short_term_projects">Our Projects</Link>
            </li>
            <li>
              <Link href="#">Podcast</Link>
            </li>
            <li>
              <Link href="/careers">Career</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-auto flex lg:flex-row flex-col-reverse justify-between lg:items-start items-center lg:px-8 py-4">
        <div className="lg:py-6 border-t-2 border-[#FFFFFF80] flex flex-col justify-center items-center space-x-3">
          <div className="flex flex-col justify-center items-center space-y-3 py-4">
            <h4 className="font-opensans font-light xl:text-sm md:text-xs text-[10px] text-white text-center">
              &copy; Astronova Foundation Nepal
            </h4>
            <h4 className="font-opensans font-light xl:text-sm md:text-xs text-[10px] text-white text-center">
              44100,Lattinath Marg,Bagmati Province,Hetauda,Makawanpur,Nepal
            </h4>
            <h4 className="font-opensans font-light xl:text-sm md:text-xs text-[10px] text-white text-center">
              Astronova Foundation Nepal is a Nonprofit organization.
            </h4>
            <h4 className="font-opensans font-light xl:text-sm md:text-xs text-[10px] text-white text-center">
              Rights & Permissions | Privacy Policy
            </h4>
          </div>
          <div className="flex justify-center items-center space-x-4">
            <div>
              <Link href="https://www.facebook.com/astroinf369">
                <FaFacebook className="w-8 h-8 cursor-pointer fill-white" />
              </Link>
            </div>
            <div>
              <Link href="https://www.linkedin.com/company/astro369">
                <FaLinkedin className="w-8 h-8 cursor-pointer fill-white stroke-white" />
              </Link>
            </div>
            <div>
              <FaInstagram className="w-8 h-8 cursor-pointer fill-white" />
            </div>
            <div>
              <FaTwitter className="w-8 h-8 cursor-pointer fill-white" />
            </div>
            <div>
              <SiGmail className="h-8 w-8 cursor-pointer fill-white" />
            </div>
          </div>
        </div>
        <div className="lg:py-6 self-center flex justify-center items-center">
          <Image
            priority
            src="/assets/support.svg"
            alt="Support Image"
            width={600}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
