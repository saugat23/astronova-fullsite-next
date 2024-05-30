"use client";
import React from "react";
import ProjectContainer from "../Projects/ProjectContainer";
import ShortTermProject1 from "../../../../public/projects/shorttermproject1.jpg";
import ShortTermProject2 from "../../../../public/projects/shorttermproject2.jpg";
import ShortTermProject3 from "../../../../public/projects/shorttermproject3.jpg";
import Gap from "../../../../public/projects/gap.svg";
import Image from "next/image";
import DonationCampaign from "../../../../public/assets/donation-campaign-donation.svg";
import ShortTermProjectBG from "../../../../public/projects/shorttermprojectsbg.jpg";

const shortTermProjects = () => {
  return (
    <section className="h-auto max-w-screen overflow-hidden">
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className=" bg-cover lg:h-[70vh] mt-16"
      >
        <div className="hero-container-team w-full h-full relative">
          <Image
            priority
            layout="fill"
            className="object-center object-cover w-full h-full"
            src={ShortTermProjectBG}
            alt="Short Term Project BG"
          />
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="mx-auto flex flex-col justify-center items-start max-w-6xl py-4 px-4 md:py-6 lg:py-8 2xl:py-10"
      >
        <div
          id="shorttermhome"
          className="flex flex-col justify-center items-start space-y-8"
        >
          <h3 className="font-opensans tracking-tighter font-semibold 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-[#3DD47E]">
            Short-Term Projects
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
              imgSrc={ShortTermProject1}
              name="Our Vision"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non sem nunc. Quisque a egestas ipsum. Donec pellentesque est maximus, ornare lorem... "
              link="/short_term_projects/ghar_ghar_ma_gyan_ghar_ghar_ma_bigyan"
            />
            <ProjectContainer
              imgSrc={ShortTermProject2}
              name="Our Mission"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non sem nunc. Quisque a egestas ipsum. Donec pellentesque est maximus, ornare lorem... "
              link="#"
            />
            <ProjectContainer
              imgSrc={ShortTermProject3}
              name="Get Involved"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non sem nunc. Quisque a egestas ipsum. Donec pellentesque est maximus, ornare lorem... "
              link="#"
            />
          </div>
        </div>
        <div className="2xl:px-10 lg:px-8 md:px-6 px-4 h-32 py-4 w-auto self-center">
          <Image src={Gap} alt="Gap SVG" className="h-full w-24" />
        </div>
      </div>
      <div className="w-full flex justify-center space-x-12 items-center h-auto p-4 bg-[#ffba6c]">
        <Image
          src={DonationCampaign}
          alt="Donation Campaign Image"
          className="object-center object-cover"
        />
        <h2 className="text-black font-inter font-semibold capitalize xl:text-base md:text-sm text-xs text-wrap">
          contribute to our short term projects
        </h2>
      </div>
    </section>
  );
};

export default shortTermProjects;
