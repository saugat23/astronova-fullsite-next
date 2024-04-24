import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="700"
      className="h-auto max-w-screen overflow-hidden bg-[#190E08ED]"
    >
      <div className="xl:my-10 lg:my-8 w-full h-[2px] bg-[#AE0D19] flex flex-col justify-center space-y-4"></div>
      <div className="lg:px-8 w-full flex lg:flex-row flex-col space-y-3 lg:space-y-0 justify-between items-start">
        <div className="flex-[0.8] flex flex-col justify-center items-center xl:space-y-4 lg:space-y-2 lg:px-4">
          <div className="self-center lg:self-start lg:border-r-3 border-[#BDB809] flex flex-col lg:w-full w-[60%] justify-center items-center xl:space-y-6 lg:space-y-4 space-y-2 lg:px-4">
            <div>
              <img src="/globe.png" alt="Globe Image" className="w-60 sm:w-64 md:w-72 lg:w-80 2xl:w-96" />
            </div>
            <h3 className="font-poppins font-bold xl:text-4xl lg:text-3xl text-[#1D92C9] text-center">
              Donate for Astronova Globe
            </h3>
            <p className="font-opensans font-normal lg:text-xs text-center text-[#9E9E9E]">
              Make your dreams come true with astronova foundation, Make your
              dreams come true with astronova foundation,Make your dreams come
              true with astronova foundation
            </p>
          </div>
        </div>

        <div className="self-center lg:self-start flex flex-col justify-center items-center xl:space-y-4 space-y-2 lg:px-4">
          <h4 className="font-roboto font-bold 2xl:text-xl xl:text-lg md:text-base sm:text-sm text-xs text-[#77AB33]">
            ABOUT US
          </h4>
          <ul className="flex flex-col justify-center items-center xl:space-y-4 space-y-2 font-kumbhsans font-normal 2xl:text-lg xl:text-base md:text-sm sm:text-xs text-[10px] text-[#C9BDB6]">
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
          <h4 className="font-roboto font-bold 2xl:text-xl xl:text-lg md:text-base sm:text-sm text-xs text-[#AE0D19]">
            OUR SUBSIDIARIES
          </h4>
          <ul className="flex flex-col justify-center items-center xl:space-y-4 space-y-2 font-kumbhsans font-normal 2xl:text-lg xl:text-base md:text-sm sm:text-xs text-[10px] text-[#C9BDB6]">
            <li>
              <Link href="#">Astro E-commerce</Link>
            </li>
            <li>
              <Link href="#">E-Learning</Link>
            </li>
          </ul>
          <h4 className="font-roboto font-bold 2xl:text-xl xl:text-lg md:text-base sm:text-sm text-xs text-white">
            SUPPORT STUDENTS
          </h4>
          <ul className="flex flex-col justify-center items-center xl:space-y-4 space-y-2 font-kumbhsans font-normal 2xl:text-lg xl:text-base md:text-sm sm:text-xs text-[10px] text-[#C9BDB6]">
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
        <div className="lg:self-start self-center flex flex-col justify-center items-center xl:space-y-4 space-y-2 lg:px-4">
          <h4 className="font-roboto font-bold 2xl:text-xl xl:text-lg md:text-base sm:text-sm text-xs text-[#BDB809]">
            COMPETITIONS
          </h4>
          <ul className="flex flex-col justify-center items-center xl:space-y-4 space-y-2 font-kumbhsans font-normal 2xl:text-lg xl:text-base md:text-sm sm:text-xs text-[10px] text-[#C9BDB6]">
            <li>
              <Link href="#">National Science and Expo</Link>
            </li>
            <li>
              <Link href="#">Best Teacher Award</Link>
            </li>
          </ul>
          <h4 className="font-roboto font-bold 2xl:text-xl xl:text-lg md:text-base sm:text-sm text-xs text-[#DB8114]">
            OUTREACH
          </h4>
          <ul className="flex flex-col justify-center items-center xl:space-y-4 space-y-2 font-kumbhsans font-normal 2xl:text-lg xl:text-base md:text-sm sm:text-xs text-[10px] text-[#C9BDB6]">
            <li>
              <Link href="#">Science and Technology</Link>
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

        <div className="lg:self-start self-center flex flex-col justify-center items-center xl:space-y-4 space-y-2 lg:px-4">
          <h4 className="font-roboto font-bold 2xl:text-xl xl:text-lg md:text-base sm:text-sm text-xs text-[#2496D7]">
            GET INVOLVED
          </h4>
          <ul className="flex flex-col justify-center items-center lg:space-y-4 space-y-2 font-kumbhsans font-normal 2xl:text-lg xl:text-base md:text-sm sm:text-xs text-[10px] text-[#C9BDB6]">
            <li>
              <Link href="#">Become Volunteer</Link>
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
          <h4 className="font-roboto font-bold 2xl:text-xl xl:text-lg md:text-base sm:text-sm text-xs text-[#2496D7]">
            OPPORTUNITIES
          </h4>
          <ul className="flex flex-col justify-center items-center xl:space-y-4 space-y-2 font-kumbhsans font-normal 2xl:text-lg xl:text-base md:text-sm sm:text-xs text-[10px] text-[#C9BDB6]">
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
        <div className="self-center lg:self-start flex flex-col justify-center items-center xl:space-y-4 space-y-2 lg:px-4">
          <h4 className="font-roboto font-bold 2xl:text-xl xl:text-lg md:text-base sm:text-sm text-xs text-[#DB8114]">
            USEFUL LINKS
          </h4>
          <ul className="flex flex-col justify-center items-center xl:space-y-4 space-y-2 font-kumbhsans font-normal 2xl:text-lg xl:text-base md:text-sm sm:text-xs text-[10px] text-[#C9BDB6]">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">News and Events</Link>
            </li>
            <li>
              <Link href="#">Our Projects</Link>
            </li>
            <li>
              <Link href="#">Podcast</Link>
            </li>
            <li>
              <Link href="#">Career</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-auto flex lg:flex-row flex-col-reverse justify-between lg:items-start items-center lg:px-8 py-4">
        <div className="lg:py-6 border-t-2 border-[#FFFFFF80] flex lg:flex-row flex-col justify-center items-center space-x-3">
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
              <FaFacebook
                className="p-1 border-2 border-[#DB8114] text-white rounded-full 2xl:w-12 2xl:h-12 lg:w-10 kg:h-10 md:w-8 md:h-8 w-6 h-6"
              />
            </div>
            <div>
              <TbWorldWww
                className="text-white p-1 border-2 border-[#2496D7] rounded-full 2xl:w-12 2xl:h-12 lg:w-10 kg:h-10 md:w-8 md:h-8 w-6 h-6"
              />
            </div>
            <div>
              <FaInstagram
                className="text-white p-1 border-2 border-[#77AB33] rounded-full 2xl:w-12 2xl:h-12 lg:w-10 kg:h-10 md:w-8 md:h-8 w-6 h-6"
              />
            </div>
            <div>
              <img
                src="/assets/linkedin.svg"
                alt="Linkedin SVG"
                className="p-1 border-2 border-[#77AB33] rounded-full 2xl:w-12 2xl:h-12 lg:w-10 kg:h-10 md:w-8 md:h-8 w-6 h-6"
              />
            </div>
            <div>
              <SiGmail
                className="text-white p-1 border-2 border-[#AF1B1C] rounded-full 2xl:w-12 2xl:h-12 lg:w-10 kg:h-10 md:w-8 md:h-8 w-6 h-6"
              />
            </div>
          </div>
        </div>
        <div className="lg:py-6 self-center flex justify-center items-center">
          <img src="/assets/support.svg" alt="Support Image" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
