"use client";
import React from "react";
import Image from "next/image";
import ProjectBG from "../../../../../public/projects/shorttermproject1bg.svg";
import ProjectDonation from "../../../../../public/projects/makedonation.jpeg";

function Page() {
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
          src={ProjectBG}
          alt="Short Term Project BG"
        />
      </div>
    </div>
    <div className="max-w-6xl px-4 mx-auto py-6 xl:py-8 flex flex-col justify-center items-center">
      <h1 className="font-inter font-semibold xl:text-lg md:text-base text-sm text-[#bdb809]">
        Ghar Ghar ma Gyan Ghar Ghar ma Vigyan
      </h1>
      <p className="font-inter font-medium xl:text-base md:text-sm text-xs text-[#093494]">
        &quot;Knowledge in every home, science in every home,&quot; or
        &quot;Ghar ghar ma gyan, ghar ghar ma bigyan,&quot; describes an
        important concept emphasizing the value of education and scientific
        investigation in every household. Parents may help their children
        develop a love of learning and exploration in addition to teaching
        useful life skills. For kids, simple activities like cooking, gardening,
        or housework provide a wealth of opportunities for education. For
        instance, youngsters can assist in food preparation while learning about
        measurements, and the science of cooking in the kitchen. They learn
        about ecosystems, plant life cycles, and the value of environmental
        preservation through gardening. Tasks around the house that involve
        sorting clothes, arranging bookcases, or preparing the table help to
        foster ideas of responsibilities, cooperation, and organization. <br />
        Furthermore, engaging in creative and imaginative activities like puzzle
        solving, reading aloud, or arts and crafts fosters imagination and
        creativity. By engaging in practical investigation and testing, kids can
        build self-assurance, adaptability, and a curiosity about their
        surroundings.
        <br /> Its main goal is to encourage students to have Technical,
        innovative, and creative mindset by creating a platform where students
        can explore their curiosity with support, guidance, mentoring, and
        access to resources and facilities. This will enable them to develop
        entrepreneurial skills, practical and soft skills, and the ability to
        turn their ideas into reality.
      </p>
    </div>
    <div
      data-aos="fade-up"
      data-aos-duration="400"
      className=" bg-cover lg:h-[70vh] mt-4"
    >
      <div className="hero-container-team w-full h-full relative">
        <Image
          priority
          layout="fill"
          className="object-center object-cover w-full h-full"
          src={ProjectDonation}
          alt="Project Donation"
        />
      </div>
    </div>
  </section>;
}

export default Page;
