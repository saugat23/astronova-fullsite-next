"use client";
import React from "react";
import Image from "next/image";
import ProjectBG from "../../../../../public/projects/EstablishingObservatory.webp";
import ProjectDonation from "../../../../../public/projects/makedonation.jpeg";

export default function Page() {
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
            src={ProjectBG}
            alt="Short Term Project BG"
          />
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center space-y-4 px-4 py-6 xl:py-8">
        <h1 className="font-inter text-base font-semibold text-[#bdb809] md:text-lg xl:text-xl">
          Establishing Observatory
        </h1>
        <p className="font-inter text-xs font-medium text-[#093494] md:text-sm xl:text-base">
          Our organization is getting ready to build a special place called an
          observatory. It&apos;s going to have tools like telescopes and
          binoculars so students can look up at the stars and planets. We want
          to use these tools to learn more about space and the things in it. We
          will invite students to come and visit the observatory. They&apos;ll
          get to use the telescopes and binoculars to look at the stars and
          planets up close. We will provide chance for them to see things they
          might never have seen before and learn new things about space and how
          it all works.
          <br />
          <br />
          Our goal with the observatory isn&apos;t just to do science. We also
          want to make exploring space fun for everyone. We&apos;re going to
          have events and activities whether people are kids or grown-ups. At
          the heart of our mission is a commitment to nurturing the curiosity
          and passion of enthusiastic students. We prioritize providing
          opportunities for these eager learners to delve into the realms of the
          unknown and explore the awe-inspiring wonders of the universe. Just as
          we embark on our journey of discovery, we extend a special invitation
          to these enthusiastic students to join us in our quest for knowledge
          and exploration.
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="mt-4 bg-cover lg:h-[70vh]"
      >
        <div className="hero-container-team relative h-full w-full">
          <Image
            priority
            fill
            className="relative h-full w-full object-cover object-center"
            src={ProjectDonation}
            alt="Project Donation"
          />
        </div>
      </div>
    </section>
  );
}
