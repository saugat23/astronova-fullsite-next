"use client";
import React from "react";
import Image from "next/image";
import ProjectBG from "../../../../../public/projects/OrganizingNationalExpoonScienceandEngineering.webp";
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
          Organizing National Expo on Science and Engineering
        </h1>
        <p className="font-inter text-xs font-medium text-[#093494] md:text-sm xl:text-base">
          At our National Expo on Science and Engineering, we are proud to host
          an event that not only showcases groundbreaking exhibitions and
          workshops but also serves as a beacon for innovation and ingenuity in
          the fields of science and engineering. Our expo goes beyond mere
          display; it is a celebration of creativity, excellence, and the
          limitless possibilities of human achievement.
          <br />
          <br />
          <b>Highlighting Innovation through National Competitions</b>
          <br />
          <br />
          Central to our expo are the national competitions designed to
          highlight and celebrate the brightest minds in science and
          engineering. These competitions provide a platform for students,
          researchers, and professionals alike to showcase their talents and
          ideas on a national stage. It is our mission to recognize and reward
          the innovative spirit that drives progress in these vital fields.
          <br />
          <br />
          <b>Pathway to Success: Talent Selection Process</b>
          <br />
          <br />
          Our talent selection process begins at the grassroots level, with
          school-level expos serving as the initial platform for budding
          innovators to shine. From there, participants progress to
          district-level and province-level competitions, each stage refining
          their ideas and honing their skills. Finally, the most promising
          talents are selected to compete at the national level, where their
          achievements are celebrated and recognized on a grand scale.
          <br />
          <br />
          <b>Expanding Horizons: International Expo Opportunity</b>
          <br />
          <br />
          Beyond the national stage, we aspire to take our expo to the global
          arena. By organizing international expos, we seek to showcase the
          diverse talents and perspectives of curious minds from around the
          world. Through a rigorous selection process, we identify and invite
          participants whose innovations have the potential to make a lasting
          impact on the global stage.
          <br />
          <br />
          <b>Making the Program a Resounding Success</b>
          <br />
          <br />
          The success of our program hinges on our ability to identify, nurture,
          and celebrate talent at every level. From the grassroots initiatives
          to the grandeur of international expos, we are committed to providing
          a platform where creativity knows no bounds and innovation flourishes.
          It is our collective dream to see these talented individuals thrive
          and make significant contributions to the advancement of science and
          engineering on a global scale.
          <br />
          <br />
          <b>3.2.2 Establishing Observatory</b>
          <br />
          <br />
          Our organization is getting ready to build a special place called an
          observatory. It&apos;s going to have tools like telescopes and
          binoculars so students can look up at the stars and planets. We want
          to use these tools to learn more about space and the things in it.
          <br />
          <br />
          We will invite students to come and visit the observatory.
          They&apos;ll get to use the telescopes and binoculars to look at the
          stars and planets up close. We will provide chance for them to see
          things they might never have seen before and learn new things about
          space and how it all works.
          <br />
          <br />
          Our goal with the observatory isn&apos;t just to do science. We also
          want to make exploring space fun for everyone. We&apos;re going to
          have events and activities whether people are kids or grown-ups.
          <br />
          <br />
          At the heart of our mission is a commitment to nurturing the curiosity
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
