"use client";

import React from "react";
import Image from "next/image";

const NESEP = () => {
  return (
    <section className="max-w-screen h-auto overflow-hidden">
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className='mt-16 flex h-[70vh] flex-col items-center justify-center space-y-4 bg-[url("/working_area/nesep.png")] bg-cover'
      >
        <div>
          <Image
            src="/working_area/nesep.svg"
            alt="NESEP logo"
            width={128}
            height={128}
          />
        </div>
        <h3 className="mx-auto w-1/2 text-center font-poppins text-base font-extrabold leading-loose text-white sm:text-lg md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl">
          NATIONAL EXPO
        </h3>
        <h3 className="mx-auto w-1/2 text-center font-poppins text-xs font-extrabold leading-loose text-white sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          FOR SCIENCE AND
        </h3>
        <h3 className="mx-auto w-1/2 text-center font-poppins text-sm font-extrabold leading-loose text-white sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          ENGINEERING PROJECTS
        </h3>
        <h3 className="mx-auto w-1/2 text-center font-poppins text-base font-extrabold leading-loose text-white sm:text-lg md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl">
          (NESEP)
        </h3>
      </div>
      <div className="mx-auto mt-6 flex max-w-6xl flex-col items-start justify-center space-y-8 px-2 py-4">
        <div
          data-aos="fade-up"
          data-aos-duration="400"
          className="flex flex-col items-start justify-center space-y-6"
        >
          <h4 className="font-inter text-base font-bold text-[#bdb809] md:text-lg lg:text-xl 2xl:text-2xl">
            Introduction:
          </h4>
          <p className="font-inter text-xs font-medium text-[#091747] md:text-sm lg:text-base xl:text-lg">
            We are thrilled to introduce our inaugural Science Expo, an
            extraordinary event poised to illuminate the wonders of science and
            ignite a passion for discovery. More than just a gathering of
            exhibits and presentations, the Science Expo represents a
            celebration of human ingenuity, a testament to our collective
            curiosity, and a beacon of hope for the future. At the Science Expo,
            we work hard to make science and technology fun and fascinating for
            everyone. We set up lots of cool exhibits that show off the latest
            gadgets, discoveries, and ideas from different fields like science,
            engineering, and technology. These exhibits are like mini science
            adventures that make you go &quot;Wow!&quot; But it&apos;s not just
            about looking at stuff – we also have workshops and activities where
            you can try things out for yourself. Experts and scientists are
            there to guide you through fun experiments and teach you very new
            skills. It&apos;s like learning while having a blast! The Science
            Expo isn&apos;t just for fun – it&apos;s also about bringing people
            together. We invite schools, businesses, and anyone interested to
            join in. By sharing knowledge and working together, we believe we
            can make the world a better place through science and innovation.
            So, come join us at the Science Expo and let&apos;s explore the
            amazing world of science together! As we wrap up preparations for
            the Science Expo, we&apos;re thrilled to bring together a
            captivating showcase of innovation and discovery. With our hands-on
            exhibits, interactive workshops, and commitment to fostering
            curiosity, we&apos;re paving the way for a transformative
            experience. We will celebrate the wonders of science and technology,
            inspiring minds and shaping the future. The Science Expo isn&apos;t
            just an event – it&apos;s our passion, our commitment, and our
            vision for a brighter tomorrow.
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="h-auto w-full bg-[#77AB33] p-8"
      >
        <div className="mx-auto flex w-3/5 items-center justify-center">
          <div className="h-full w-1/2">
            <Image
              priority
              src="/assets/donation-campaign-donation.svg"
              alt="Donation Campign Image"
              width={500}
              height={500}
              className="h-full w-full"
            />
          </div>
          <h2 className="w-1/2 px-10 text-center font-inter text-base font-bold text-white md:text-lg lg:text-xl 2xl:text-2xl">
            CONTRIBUTE TO SPONSOR NATIONAL EXPO PROGRAM
          </h2>
        </div>
      </div>
    </section>
  );
};

export default NESEP;
