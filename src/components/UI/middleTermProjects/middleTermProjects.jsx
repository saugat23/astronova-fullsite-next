"use client";
import React from "react";
import ProjectContainer from "../Projects/ProjectContainer";
import MiddleTermProjectBG from "../../../../public/projects/MiddleTermProjectBG.webp";
import MiddleTermProject1 from "../../../../public/projects/middletermproject1.webp";
import MiddleTermProject2 from "../../../../public/projects/middletermproject2.webp";
import MiddleTermProject3 from "../../../../public/projects/middletermproject3.webp";
import DonationCampaign from "../../../../public/assets/donation-campaign-donation.svg";
import Gap from "../../../../public/projects/gap.svg";
import Image from "next/image";

const middleTermProjects = () => {
  return (
    <section className="max-w-screen h-auto overflow-hidden">
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="mt-16 bg-cover lg:h-[70vh]"
      >
        <div className="hero-container-team relative h-full w-full">
          <Image
            priority
            layout="fill"
            className="h-full w-full object-cover object-center"
            src={MiddleTermProjectBG}
            alt="Short Term Project BG"
          />
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="mx-auto flex max-w-7xl flex-col items-start justify-center px-4 py-4 md:py-6 lg:py-8 2xl:py-10"
      >
        <div
          id="middletermhome"
          className="flex flex-col items-start justify-center space-y-8"
        >
          <h3 className="font-opensans text-base font-semibold tracking-tighter text-[#3DD47E] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            Middle-Term Projects
          </h3>
          <p className="font-opensans text-xs font-normal tracking-tight text-[#8B8B8B] sm:text-sm md:text-base lg:text-lg 2xl:text-xl">
            Before diving into the details of our short-term projects, it&apos;s
            essential to recognize their significance within our organization.
            These projects serve as catalysts for innovation, driving rapid
            progress and yielding tangible results within a condensed time
            frame. By focusing our efforts on short-term initiatives, we
            demonstrate agility, adaptability, and a commitment to addressing
            immediate challenges and opportunities. Now, let&apos;s explore the
            exciting endeavors underway in our short-term project section.
          </p>
          <div className="flex w-full flex-col items-center justify-stretch space-x-0 space-y-3 md:flex-row md:items-start md:space-x-4 md:space-y-0">
            <ProjectContainer
              imgSrc={MiddleTermProject1}
              name="Our Vision"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non sem nunc. Quisque a egestas ipsum. Donec pellentesque est maximus, ornare lorem... "
              link="/middle_term_projects/establishing_observatory"
            />
            <ProjectContainer
              imgSrc={MiddleTermProject2}
              name="Our Mission"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non sem nunc. Quisque a egestas ipsum. Donec pellentesque est maximus, ornare lorem... "
              link="/middle_term_projects/hetauda_innovation"
            />
            <ProjectContainer
              imgSrc={MiddleTermProject3}
              name="Get Involved"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non sem nunc. Quisque a egestas ipsum. Donec pellentesque est maximus, ornare lorem... "
              link="/middle_term_projects/national_expo"
            />
          </div>
        </div>
        <div className="h-32 w-auto self-center px-4 md:px-6 lg:px-8 2xl:px-10">
          <Image src={Gap} alt="Gap SVG" className="h-full w-24" />
        </div>
      </div>
      <div className="flex h-auto w-full items-center justify-center space-x-12 bg-[#ffba6c] p-4">
        <Image
          src={DonationCampaign}
          alt="Donation Campaign Image"
          className="object-cover object-center"
        />
        <h2 className="text-wrap font-inter text-xs font-semibold capitalize text-black md:text-sm xl:text-base">
          contribute to our middle term projects
        </h2>
      </div>
    </section>
  );
};

export default middleTermProjects;
