"use client";
import React from "react";
import CategoryContainer from "./CategoryContainer";
import WorkWithUs from "./WorkWithUs";
import DesigningSvg from "../../../../public/careers/designing.svg";
import DevelopmentSvg from "../../../../public/careers/development.svg";
import TeacherSvg from "../../../../public/careers/teacher.svg";
import VolunteerSvg from "../../../../public/careers/volunteer.svg";

const Careers = () => {
  return (
    <section className="max-w-screen h-auto overflow-hidden">
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="mt-[4.5rem] flex w-full flex-col items-center justify-center space-y-4 bg-[#2496D7] py-12 md:py-16 lg:py-20 2xl:py-28"
      >
        <h3 className="font-opensans text-base font-bold tracking-tight text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
          OPPORTUNITIES ARE AT YOUR DOOR
        </h3>
        <h4 className="font-opensans text-sm font-medium tracking-tighter text-white sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          Find the Best Jobs for you
        </h4>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="flex w-full flex-col items-center justify-center space-y-2 bg-[#BDB809] px-4 py-6 md:py-10 lg:py-12 2xl:py-14"
      >
        <h3 className="text-center font-opensans text-base font-bold tracking-tight text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
          JOIN OUR TEAM AT ASTRONOVA FOUNDATION NEPAL
        </h3>
        <h4 className="text-center font-opensans text-sm font-medium tracking-tighter text-white sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          Welcome to Trion Tech, where talent meets opportunity!
        </h4>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="mx-auto flex max-w-6xl flex-col items-start justify-center space-y-8 px-2 py-12 md:px-4 lg:space-y-16 lg:px-0"
      >
        <h3 className="font-opensans text-base font-medium tracking-tight text-black sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
          JOBS BY <span className="font-bold text-[#AE0D19]">CATEGORY</span>
        </h3>
        <div className="grid w-full grid-cols-1 gap-x-16 gap-y-16 sm:grid-cols-2 md:grid-cols-3">
          <CategoryContainer
            imgSrc={DesigningSvg}
            title="Designing"
            description="Bring your creativity and expertise to our team as a UI Designer. Collaborate with cross-functional teams to design visually stunning and user-friendly interfaces. Utilize your skills in layout design, typography, and color theory to create engaging digital experiences that leave a lasting impression."
          />
          <CategoryContainer
            imgSrc={DevelopmentSvg}
            title="Development"
            description="Bring your creativity and expertise to our team as a UI Designer. Collaborate with cross-functional teams to design visually stunning and user-friendly interfaces. Utilize your skills in layout design, typography, and color theory to create engaging digital experiences that leave a lasting impression."
          />
          <CategoryContainer
            imgSrc={DesigningSvg}
            title="Digital Marketing"
            description="Bring your creativity and expertise to our team as a UI Designer. Collaborate with cross-functional teams to design visually stunning and user-friendly interfaces. Utilize your skills in layout design, typography, and color theory to create engaging digital experiences that leave a lasting impression."
          />
          <CategoryContainer
            imgSrc={TeacherSvg}
            title="Fellow Teacher"
            description="Bring your creativity and expertise to our team as a UI Designer. Collaborate with cross-functional teams to design visually stunning and user-friendly interfaces. Utilize your skills in layout design, typography, and color theory to create engaging digital experiences that leave a lasting impression."
          />
          <CategoryContainer
            imgSrc={VolunteerSvg}
            title="Program Volunteer"
            description="Bring your creativity and expertise to our team as a UI Designer. Collaborate with cross-functional teams to design visually stunning and user-friendly interfaces. Utilize your skills in layout design, typography, and color theory to create engaging digital experiences that leave a lasting impression."
          />
          <CategoryContainer
            imgSrc={DesigningSvg}
            title="College Ambassador"
            description="Bring your creativity and expertise to our team as a UI Designer. Collaborate with cross-functional teams to design visually stunning and user-friendly interfaces. Utilize your skills in layout design, typography, and color theory to create engaging digital experiences that leave a lasting impression."
          />
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="mt-16 bg-[#F4F4F4] px-2 py-12 md:px-4 lg:px-0"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-center space-y-6 lg:space-y-16">
          <div className="w-auto lg:w-1/4">
            <button
              type="button"
              className="lg:px-auto w-full rounded-lg bg-[#3AA0DB] px-4 py-4 font-inter text-sm font-medium text-white hover:bg-[#1d506e] hover:duration-300 md:px-8 md:text-base lg:text-lg xl:text-xl"
            >
              Why Work With Us
            </button>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-16">
            <WorkWithUs
              title="Innovative and Impactful Projects"
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
              color="#3AA0DE"
            />
            <WorkWithUs
              title="Supportive Environment"
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
              color="#77AB33"
            />
            <WorkWithUs
              title="Continuous Learning and Growth"
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
              color="#AE0D19"
            />
            <WorkWithUs
              title="Challenging and Rewarding Work"
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
              color="#AE0D19"
            />
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className="flex flex-col items-center justify-center lg:mt-8 xl:mt-10"
      >
        <div className="flex h-[75vh] w-full flex-col items-center justify-start bg-[url('/joinbg.png')] bg-cover p-6"></div>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="flex w-full flex-col items-center justify-center space-y-6 bg-[#2496D7] lg:py-10 xl:py-12"
        >
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-center space-y-4 px-4">
            <h3 className="text-center font-inter text-xl font-bold text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              JOIN THE JOURNEY
            </h3>
            <h3 className="text-center font-kumbhsans text-base font-bold tracking-wider text-white md:text-lg lg:text-xl xl:text-2xl">
              Be the change you want to see
            </h3>
            <p className="py-2 text-center font-opensans text-xs font-normal text-white md:text-sm lg:text-base xl:text-lg">
              We are working to create an environment where students can receive
              support, mentorship, guidance and access to tools and facilities
              to explore their curiosity so that they could be able to develop
              practical & soft skills, entrepreneurial skill and turn their
              ideas into reality and provide them national and international
              exposure to explore their innovative research ideas. Together
              let’s make a community of change makers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
