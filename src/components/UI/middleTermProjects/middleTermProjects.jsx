"use client";
import React from "react";
import ProjectContainer from "../Projects/ProjectContainer";
import ShortTermProjects from "../../../../public/projects/shorttermproject.svg";
import Gap from "../../../../public/projects/gap.svg";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltDown } from "react-icons/fa";

const middleTermProjects = () => {
  return (
    <section className="h-auto max-w-screen overflow-hidden">
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="bg-[url('/abouthero.png')] bg-cover lg:h-[50vh] mt-16"
      >
        <div className="hero-container-team w-full h-full flex flex-col justify-end items-center lg:space-y-6 py-16 2xl:px-40 lg:px-32 md:px-24 sm:px-20 px-16">
          <h2 className="font-opensans font-bold tracking-tighter 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-white">
            OUR PROJECTS
          </h2>
          <div className="">
            <Link href="#middletermhome">
              <FaLongArrowAltDown className="fill-white stroke-2 h-8 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="mx-auto max-w-7xl flex flex-col justify-center items-start py-4 px-4 md:py-6 lg:py-8 2xl:py-10"
      >
        <div
          id="middletermhome"
          className="flex flex-col justify-center items-start space-y-8"
        >
          <h3 className="font-opensans tracking-tighter font-semibold 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-[#3DD47E]">
            Middle-Term Projects
          </h3>
          <p className="font-opensans tracking-tight font-normal 2xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs text-[#8B8B8B]">
            Before diving into the details of our short-term projects, it&apos;s
            essential to recognize their significance within our organization.
            These projects serve as catalysts for innovation, driving rapid
            progress and yielding tangible results within a condensed time
            frame. By focusing our efforts on short-term initiatives, we
            demonstrate agility, adaptability, and a commitment to addressing
            immediate challenges and opportunities. Now, let&apos;s explore the
            exciting endeavors underway in our short-term project section.
          </p>
          <div className="w-full flex md:flex-row flex-col justify-stretch items-center md:items-start md:space-x-4 space-x-0 space-y-3 md:space-y-0">
            <ProjectContainer
              imgSrc={ShortTermProjects}
              name="Our Vision"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non sem nunc. Quisque a egestas ipsum. Donec pellentesque est maximus, ornare lorem... "
            />
            <ProjectContainer
              imgSrc={ShortTermProjects}
              name="Our Mission"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non sem nunc. Quisque a egestas ipsum. Donec pellentesque est maximus, ornare lorem... "
            />
            <ProjectContainer
              imgSrc={ShortTermProjects}
              name="Get Involved"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non sem nunc. Quisque a egestas ipsum. Donec pellentesque est maximus, ornare lorem... "
            />
          </div>
        </div>
        <div className="2xl:px-10 lg:px-8 md:px-6 px-4 h-48 w-auto self-center">
          <Image src={Gap} alt="Gap SVG" className="h-full w-48" />
        </div>
      </div>
    </section>
  );
};

export default middleTermProjects;
