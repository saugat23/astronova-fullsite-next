"use client";
import React from "react";
import CategoryContainer from "./CategoryContainer";
import WorkWithUs from "./WorkWithUs";

const Careers = () => {
  return (
    <section className="h-auto max-w-screen overflow-hidden">
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="w-full flex flex-col justify-center items-center space-y-4 2xl:py-14 lg:py-10 md:py-6 py-4 bg-[#2496D7] mt-20"
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
        className="w-full flex flex-col justify-center items-center space-y-2 2xl:py-10 lg:py-8 md:py-6 py-4 bg-[#BDB809]"
      >
        <h3 className="font-opensans font-bold tracking-tight 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-white">
          JOIN OUR TEAM AT ASTRONOVA FOUNDATION NEPAL
        </h3>
        <h4 className="font-opensans font-medium tracking-tighter 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-white">
          Welcome to Trion Tech, where talent meets opportunity!
        </h4>
      </div>

      <div data-aos="fade-up" data-aos-duration="400" className="mx-auto max-w-7xl flex flex-col justify-center items-start space-y-16 py-12">
        <h3 className="font-opensans font-medium tracking-tight 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-black">
          JOBS BY <span className="text-[#AE0D19] font-bold">CATEGORY</span>
        </h3>
        <div className="w-full grid grid-cols-3 gap-x-16 gap-y-16">
            <CategoryContainer imgSrc="/careers/designing.svg" title="Designing" description="Bring your creativity and expertise to our team as a UI Designer. Collaborate with cross-functional teams to design visually stunning and user-friendly interfaces. Utilize your skills in layout design, typography, and color theory to create engaging digital experiences that leave a lasting impression."/>
            <CategoryContainer imgSrc="/careers/development.svg" title="Development" description="Bring your creativity and expertise to our team as a UI Designer. Collaborate with cross-functional teams to design visually stunning and user-friendly interfaces. Utilize your skills in layout design, typography, and color theory to create engaging digital experiences that leave a lasting impression."/>
            <CategoryContainer imgSrc="/careers/designing.svg" title="Digital Marketing" description="Bring your creativity and expertise to our team as a UI Designer. Collaborate with cross-functional teams to design visually stunning and user-friendly interfaces. Utilize your skills in layout design, typography, and color theory to create engaging digital experiences that leave a lasting impression."/>
            <CategoryContainer imgSrc="/careers/teacher.svg" title="Fellow Teacher" description="Bring your creativity and expertise to our team as a UI Designer. Collaborate with cross-functional teams to design visually stunning and user-friendly interfaces. Utilize your skills in layout design, typography, and color theory to create engaging digital experiences that leave a lasting impression."/>
            <CategoryContainer imgSrc="/careers/volunteer.svg" title="Program Volunteer" description="Bring your creativity and expertise to our team as a UI Designer. Collaborate with cross-functional teams to design visually stunning and user-friendly interfaces. Utilize your skills in layout design, typography, and color theory to create engaging digital experiences that leave a lasting impression."/>
            <CategoryContainer imgSrc="/careers/designing.svg" title="College Ambassador" description="Bring your creativity and expertise to our team as a UI Designer. Collaborate with cross-functional teams to design visually stunning and user-friendly interfaces. Utilize your skills in layout design, typography, and color theory to create engaging digital experiences that leave a lasting impression."/>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="400" className="bg-[#F4F4F4] mt-16 py-12">
        <div className="mx-auto max-w-7xl flex flex-col justify-center items-start space-y-16">
            <div className="w-1/4">
                <button type="button" className="w-full bg-[#3AA0DB] py-4 px-auto rounded-lg hover:bg-[#1d506e] hover:duration-300 text-white font-inter font-medium xl:text-xl lg:text-lg md:text-base text-sm">Why Work With Us</button>
            </div>
            <div className="grid grid-cols-2 gap-16">
                <WorkWithUs title="Innovative and Impactful Projects" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" color="#3AA0DE"/>
                <WorkWithUs title="Supportive Environment" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" color="#77AB33"/>
                <WorkWithUs title="Continuous Learning and Growth" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" color="#AE0D19"/>
                <WorkWithUs title="Challenging and Rewarding Work" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" color="#AE0D19"/>
            </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="400" className="w-full">
        <div className="bg-[#3AA0DB] py-8 flex justify-center items-center">
            <h3 className="font-opensans font-bold tracking-tight 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-white">JOIN OUR TEAM</h3>
        </div>
        <div className="h-[60vh] bg-[url('/joinbg.png')] bg-cover bg-[top_20rem]"></div>
      </div>
    </section>
  );
};

export default Careers;
