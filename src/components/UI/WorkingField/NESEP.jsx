"use client";
import React from "react";

const NESEP = () => {
  return (
    <section className="h-auto max-w-screen overflow-hidden">
      <div className='h-[70vh] bg-[url("/working_area/nesep.png")] bg-cover flex flex-col space-y-4 justify-center items-center'>
        <div>
          <img src="/working_area/nesep.svg" alt="" className="w-32 h-32" />
        </div>
        <h3 className="w-1/2 mx-auto text-white font-poppins font-extrabold 2xl:text-5xl xl:text-4xl lg:text-2xl md:text-xl sm:text-lg text-base text-center leading-loose">
          NATIONAL EXPO
        </h3>
        <h3 className="w-1/2 mx-auto text-white font-poppins font-extrabold 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs text-center leading-loose">
          FOR SCIENCE AND
        </h3>
        <h3 className="w-1/2 mx-auto text-white font-poppins font-extrabold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-center leading-loose">
          ENGINEERING PROJECTS
        </h3>
        <h3 className="w-1/2 mx-auto text-white font-poppins font-extrabold 2xl:text-5xl xl:text-4xl lg:text-2xl md:text-xl sm:text-lg text-base text-center leading-loose">
          (NESEP)
        </h3>
      </div>
      <div className="mx-auto max-w-6xl flex flex-col justify-center items-start space-y-8 mt-6 py-4">
        <div className="flex flex-col justify-center items-start space-y-6">
          <h4 className="text-[#bdb809] font-inter font-bold 2xl:text-2xl lg:text-xl md:text-lg text-base">
            Introduction:
          </h4>
          <p className="text-[#091747] font-inter font-medium xl:text-lg lg:text-base md:text-sm text-xs">
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
      <div className="bg-[#77AB33] p-8 w-full h-auto">
        <div className="mx-auto w-3/5 flex justify-center items-center">
          <div className="w-1/2 h-full">
            <img
              src="/assets/donation-campaign-donation.svg"
              alt=""
              className="w-full h-full"
            />
          </div>
          <h2 className="w-1/2 text-center px-10 font-inter font-bold 2xl:text-2xl lg:text-xl md:text-lg text-base text-white">
            CONTRIBUTE TO SPONSOR NATIONAL EXPO PROGRAM
          </h2>
        </div>
      </div>
    </section>
  );
};

export default NESEP;
