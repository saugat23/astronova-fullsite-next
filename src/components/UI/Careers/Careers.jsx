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
    <section className="h-auto max-w-screen overflow-hidden">
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="w-full flex flex-col justify-center items-center space-y-4 2xl:py-28 lg:py-20 md:py-16 py-12 bg-[#2496D7] mt-[4.5rem]"
      >
        <h3 className="font-opensans font-bold tracking-tight 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-white">
          OPPORTUNITIES ARE AT YOUR DOOR
        </h3>
        <h4 className="font-opensans font-medium tracking-tighter 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-white">
          Find the Best Jobs for you
        </h4>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="w-full flex flex-col justify-center items-center space-y-2 2xl:py-14 lg:py-12 md:py-10 py-6 bg-[#BDB809] px-4"
      >
        <h3 className="font-opensans font-bold tracking-tight 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-white text-center">
          JOIN OUR TEAM AT ASTRONOVA FOUNDATION NEPAL
        </h3>
        <h4 className="font-opensans font-medium tracking-tighter 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-white text-center">
          Welcome to Trion Tech, where talent meets opportunity!
        </h4>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="mx-auto max-w-6xl flex flex-col justify-center items-start lg:space-y-16 space-y-8 py-12 px-2 md:px-4 lg:px-0"
      >
        <h3 className="font-opensans font-medium tracking-tight 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-black">
          JOBS BY <span className="text-[#AE0D19] font-bold">CATEGORY</span>
        </h3>
        <div className="w-full grid md:grid-cols-3 gap-x-16 gap-y-16 sm:grid-cols-2 grid-cols-1">
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
        className="bg-[#F4F4F4] mt-16 py-12 px-2 md:px-4 lg:px-0"
      >
        <div className="mx-auto max-w-6xl flex flex-col justify-center items-start lg:space-y-16 space-y-6">
          <div className="w-auto lg:w-1/4">
            <button
              type="button"
              className="w-full bg-[#3AA0DB] py-4 md:px-8 px-4 lg:px-auto rounded-lg hover:bg-[#1d506e] hover:duration-300 text-white font-inter font-medium xl:text-xl lg:text-lg md:text-base text-sm"
            >
              Why Work With Us
            </button>
          </div>
          <div className="grid sm:grid-cols-2 sm:gap-16 grid-cols-1 gap-6">
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
        className="xl:mt-10 lg:mt-8 flex flex-col justify-center items-center"
      >
        <div className="bg-[url('/joinbg.png')] bg-cover flex flex-col justify-start items-center w-full p-6 h-[75vh]"></div>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="bg-[#2496D7] w-full xl:py-12 lg:py-10  flex flex-col justify-center items-center space-y-6"
        >
          <div className="max-w-6xl px-4 mx-auto flex flex-col justify-center items-center space-y-4">
            <h3 className="font-inter text-white text-center font-bold xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-xl">
              JOIN THE JOURNEY
            </h3>
            <h3 className="font-kumbhsans tracking-wider text-center text-white font-bold xl:text-2xl lg:text-xl md:text-lg text-base">
              Be the change you want to see
            </h3>
            <p className="font-opensans font-normal xl:text-lg lg:text-base md:text-sm text-xs text-white text-center py-2">
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
