"use client";

import React from "react";
import { MdPhoneCallback } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Logo from "../../public/assets/logo.png";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutubeSquare,
} from "react-icons/fa";
import SupportImage from "../../public/assets/support.svg";
import Lottie from "lottie-react";
import GlobeLottie from "./globe-lottie.json";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="700"
      className="max-w-screen h-auto overflow-hidden bg-[#190e08] font-opensans text-[#9e9e9e]"
    >
      <div className="mx-auto flex max-w-lg flex-col items-center justify-center space-y-4 py-6">
        <div className="flex w-full flex-col items-center justify-center space-y-3">
          <Lottie
            animationData={GlobeLottie}
            loop={true}
            className="h-3/4 w-3/4"
          />
          <h2 className="font-poppins text-lg font-bold tracking-wider text-[#1d92c9] md:text-xl lg:text-2xl xl:text-3xl">
            Donate for Astronova Globe
          </h2>
          <p className="text-center text-sm font-normal tracking-wider lg:text-base">
            Make your dreams come true with astronova foundation,Make your
            dreams come true with astronova foundation
          </p>
        </div>
        <div className="flex w-full flex-col items-center justify-center space-y-3">
          <h2 className="font-poppins text-lg font-semibold tracking-wide text-white md:text-xl lg:text-2xl xl:text-3xl">
            Contact Us:
          </h2>
          <p className="flex w-full items-center justify-center space-x-4">
            <MdPhoneCallback className="h-4 w-4 fill-[#1d92c9]" />
            <span className="text-xs">+977-9855028369, 9855028369</span>
          </p>
          <p className="flex w-full items-center justify-center space-x-4">
            <IoMdMail className="h-4 w-4 fill-[#1d92c9]" />
            <span className="text-xs">info@astronovafoundation.com</span>
          </p>
          <p className="flex w-full items-center justify-center space-x-4">
            <FaLocationDot className="h-4 w-4 fill-[#1d92c9]" />
            <span className="flex flex-col items-center justify-center text-xs">
              <span>44100 Lattinath Marg(Opposite</span>
              <span>to SC Aggrawal Audit Co)</span>
              <span>Hetauda, Makwanpur, Nepal</span>
            </span>
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col-reverse items-center justify-center space-y-6 lg:flex-col">
        <div className="flex items-center justify-center lg:py-6">
          <Image
            priority
            src="/assets/support.svg"
            alt="Support Image"
            width={600}
            height={300}
          />
        </div>
        <div className="flex w-full flex-col items-center justify-between py-6 lg:flex-row">
          <div className="flex w-full flex-col items-center justify-center space-y-2 border-none px-8 text-white lg:w-3/5 lg:border-r lg:border-r-[#9e9e9e] lg:px-0">
            <Image src={Logo} alt="Logo" priority width={80} height={80} />
            <div>
              <p className="text-base font-normal tracking-[0.3em] lg:text-xl xl:text-2xl">
                ASTRONOVA
              </p>
              <p className="text-xs font-light tracking-[0.3em] lg:text-base">
                Foundation Nepal
              </p>
            </div>
            <p className="text-sm font-semibold lg:text-base xl:text-lg">
              astroinf369@gmail.com
            </p>
            <p className="mx-auto max-w-md text-center text-xs lg:text-sm xl:text-base">
              The Astronova Foundation Nepal is a non-profit organization based
              in Nepal. Its primary mission is to foster creativity, innovation,
              and entrepreneurial thinking among school and college students
            </p>
            <div className="flex w-full max-w-md items-center justify-center space-x-3 py-3">
              <Link href="https://www.facebook.com/astroinf369">
                <FaFacebookF className="h-8 w-8 rounded-lg border border-white fill-white p-2" />
              </Link>
              <Link href="https://www.linkedin.com/company/astro369">
                <FaLinkedin className="h-8 w-8 rounded-lg border border-white fill-white p-2" />
              </Link>
              <Link href="https://www.instagram.com/astroinf369">
                <FaInstagram className="h-8 w-8 rounded-lg border border-white fill-white p-2" />
              </Link>
              <Link href="https://www.facebook.com/astroinf369">
                <FaTwitter className="h-8 w-8 rounded-lg border border-white fill-white p-2" />
              </Link>
              <Link href="https://www.youtube.com/@astroinf369">
                <FaYoutubeSquare className="h-8 w-8 rounded-lg border border-white fill-white p-2" />
              </Link>
            </div>
          </div>
          <div className="flex w-full flex-col justify-between px-14 py-8 lg:w-2/5 lg:flex-row lg:px-8 lg:py-0">
            <div className="flex flex-col items-start justify-center">
              <h4 className="py-3 text-sm font-bold text-[#77AB33] sm:text-base xl:text-lg">
                About Us
              </h4>
              <ul className="flex flex-col items-start justify-center space-y-2 text-xs font-normal lg:text-sm">
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
              <h4 className="py-3 text-sm font-bold text-[#ae0d19] sm:text-base xl:text-lg">
                Our Subsidiaries
              </h4>
              <ul className="flex flex-col items-start justify-center space-y-2 text-xs font-normal lg:text-sm">
                <li>
                  <Link href="#">Astro E-commerce</Link>
                </li>
                <li>
                  <Link href="#">E-Learning</Link>
                </li>
              </ul>
              <h4 className="py-3 text-sm font-bold text-white sm:text-base xl:text-lg">
                Support Students
              </h4>
              <ul className="flex flex-col items-start justify-center space-y-2 text-xs font-normal lg:text-sm">
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
            <div>
              <h4 className="py-3 text-sm font-bold text-[#BDB809] sm:text-base xl:text-lg">
                Competitions
              </h4>
              <ul className="flex flex-col items-start justify-center space-y-2 text-xs font-normal lg:text-sm">
                <li>
                  <Link href="#">National Science and Expo</Link>
                </li>
                <li>
                  <Link href="#">Best Teacher Award</Link>
                </li>
              </ul>
              <h4 className="py-3 text-sm font-bold text-[#DB8114] sm:text-base xl:text-lg">
                Outreach
              </h4>
              <ul className="flex flex-col items-start justify-center space-y-2 text-xs font-normal lg:text-sm">
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
            <div>
              <h4 className="py-3 text-sm font-bold text-[#2496D7] sm:text-base xl:text-lg">
                Get Involved
              </h4>
              <ul className="flex flex-col items-start justify-center space-y-2 text-xs font-normal lg:text-sm">
                <li>
                  <Link
                    href="https://forms.gle/3uCVNnSz6MvqeGfn8"
                    target="_blank"
                  >
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
              <h4 className="py-3 text-sm font-bold text-[#2496D7] sm:text-base xl:text-lg">
                Opportunities
              </h4>
              <ul className="flex flex-col items-start justify-center space-y-2 text-xs font-normal lg:text-sm">
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
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center space-y-4 border-t border-t-[#9e9e9e] px-3 py-6 text-xs lg:px-6">
        <p>Copyright &copy; 2024 Astronova Foundation. All Rights Reserved.</p>
        <div className="flex flex-col items-center justify-center">
          <p className="text-center">
            44100,Lattinath Marg,Bagmati Province,Hetauda,Makawanpur,Nepal
          </p>
          <p className="text-center">
            Astronova Foundation Nepal is a Nonprofit organization.
          </p>
        </div>
        <p>Privacy Policy & Terms and Condition</p>
      </div>
    </section>
  );
};

export default Footer;
