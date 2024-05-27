"use client";
import React from "react";
import Image from "next/image";
import ValuesContainer from "../ValuesContainer";
import Link from "next/link";
import {
  FaLongArrowAltDown,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import AboutUSImage from "../../../../public/assets/aboutusimage.svg";

const About = () => {
  return (
    <section className="h-auto max-w-screen overflow-hidden">
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="bg-[url('/abouthero.png')] bg-cover lg:h-[70vh] w-full mt-12"
      >
        <div className="hero-container-about h-full w-full flex flex-col justify-end items-center lg:space-y-6 py-16 2xl:px-40 lg:px-32 md:px-24 sm:px-20 px-16">
          <h4 className="font-opensans font-medium 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-justify text-white">
            WHO ARE WE?
          </h4>
          <h4 className="w-4/5 lg:w-2/5 font-opensans tracking-tighter font-bold 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg text-center text-[#F28459]">
            A Nonprofit Committed to Education and Innovation
          </h4>
          <div className="">
            <Link href="#abouthome">
              <FaLongArrowAltDown className="fill-white stroke-2 h-8 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="h-auto py-12 bg-[#F0F6FB]"
      >
        <div className="mx-auto max-w-7xl px-4">
          <h2
            className="font-opensans text-[#0052A0D4] font-normal text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
            id="abouthome"
          >
            Who <span className="font-bold">Are We?</span>
          </h2>
          <p className="mt-4 font-light font-inter text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-[#042038] text-justify">
            Astronova Science Foundation is an officially registered as a
            non-profit organization under the name of &quot;
            <span className="font-normal text-[#F28459]">
              Astronova Foundation Nepal
            </span>
            &quot;(Companies Act, 2006), Office of the Company Register,
            Tripureshwor, Kathmandu. As we believe the development of the nation
            and the world is all about the education system of the nation. To
            get developed, the country have to develop their economy, To develop
            economy, country need to be able to utilize its natural and human
            resources in optimum level, To utilize human resources in optimum
            level, country should be able to create more and more businesses and
            services within its territory. To create businesses and services,
            people in the country must have scientific and entrepreneurial
            mindset. To develop mindset, we have to work from school level. And
            importantly, the mindset can be developed by external factor by
            creating a different learning environment. Therefore, our main
            objective is to work in the field of{" "}
            <span className="font-normal text-[#F28459]">
              Science, Information Technology , Research, Innovation and
              Entrepreneurship
            </span>{" "}
            to change the mindset of students from their early ages. In short,
            we are a group of believers willing to work together to provide
            various opportunities to explore and unleash students’ potential in
            national and international level.
          </p>
          <div className="mx-auto w-full flex justify-center items-center space-x-4 mt-4">
            <Link href="https://www.facebook.com/astroinf369">
              <FaFacebook className="fill-black w-6 h-6" />
            </Link>
            <Link href="https://www.linkedin.com/company/astro369/">
              <FaLinkedin className="fill-black w-6 h-6" />
            </Link>
            <Link href="https://www.youtube.com/@AstronovasLearniverse">
              <FaYoutube className="fill-black w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="mx-auto max-w-7xl px-4 h-auto w-full mt-4"
      >
        <div className="flex w-full justify-between items-center lg:flex-row flex-col space-y-5 lg:space-y-0">
          <div className="">
            <Image
              src={AboutUSImage}
              alt="ABout us Image"
              priority
              className="hover:scale-105 hover:duration-300"
            />
          </div>
          <div className="flex flex-col justify-center items-end space-y-6 lg:px-24 px-4">
            <div className="flex flex-col justify-center items-center space-y-3">
              <h2 className="font-inter font-bold 2xl:text-2xl lg:text-xl md:text-lg text-base">
                Our Mission
              </h2>
              <p className="font-inter font-medium text-[#333333] 2xl:text-lg lg:text-base md:text-sm text-xs">
                Our mission and goal is to establish a well-equipped
                laboratories as a ‘junior Research & Innovation Centre’ where
                students can join various After-School STEAMESIR Workshops.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center space-y-3">
              <h2 className="font-inter font-bold 2xl:text-2xl lg:text-xl md:text-lg text-base">
                Our Vision
              </h2>
              <p className="font-inter font-medium text-[#333333] 2xl:text-lg lg:text-base md:text-sm text-xs">
                Astronova Science Foundation is on a mission to revolutionize
                education by deploying STEAMESIR Science, Technology,
                Engineering, Arts, Mathematics, Entrepreneurship, Soft-Skills,
              </p>
            </div>
            <button className="bg-[#0012FF] hover:bg-[#000db3] hover:scale-105 hover:duration-300 text-white font-inter font-semibold xl:text-lg md:text-base text-sm block self-start p-3">
              JOIN AS VOLUNTEER
            </button>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="h-auto mx-auto max-w-7xl 2xl:py-12 lg:py-8 md:py-6 py-4 mt-8 bg-[#F0F6FB]"
      >
        <div className="h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <ValuesContainer
            svg="assets/collaboration.svg"
            bgColor="#77AB33"
            title="Vision"
            desc="Ultimately, our vision is to plug students’ energy in production and services so that they can."
          />
          <ValuesContainer
            svg="assets/teamwork.svg"
            bgColor="#BDB809"
            title="Team Work"
            desc="We believe in Team work. team work is key point to the success of any organization."
          />
          <ValuesContainer
            svg="assets/knowledgetransfer.svg"
            bgColor="#AE0D19"
            title="Knowledge Transfer"
            desc="We believe that knowledge should be transferred to the next generation in proper way."
          />
          <ValuesContainer
            svg="assets/collaboration.svg"
            bgColor="#77AB33"
            title="Sustainability"
            desc="We work on the field which is sustainable in all the way."
          />
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="mx-auto max-w-7xl px-4 h-auto w-full mt-4"
      >
        <h3 className="font-inter font-semibold 2xl:text-2xl lg:text-xl md:text-lg text-base text-[#AE0D19] text-center">
          SHARING SUCCESS TOGETHER
        </h3>
        <div className="flex w-full justify-between items-center lg:flex-row flex-col py-8 space-y-4 lg:space-y-0">
          <div className="w-full lg:w-1/2">
            <Image
              src="/aboutusimage2.png"
              alt="About us Image"
              loading="lazy"
              width={600}
              height={650}
              className="w-full hover:scale-105 hover:duration-300"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-end space-y-6 lg:px-24 lg:w-1/2">
            <p className="font-inter font-semibold text-[#616161] 2xl:text-lg lg:text-base md:text-sm text-xs">
              At Astronova, we believe in the power of collaboration and
              collective achievement. Through our shared commitment to
              excellence, we foster an environment where success is not only
              celebrated individually but embraced collectively. Together, we
              empower each other to reach new heights, overcome challenges, and
              make a meaningful impact in our communities and beyond. Join us as
              we embark on a journey of collaboration, growth, and shared
              success, creating a brighter future for all.
            </p>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className='max-w-3xl h-auto mx-auto bg-[url("/childrens.png")] bg-black/25 bg-cover rounded-t-xl mt-8 z-40'
      >
        <div className="w-full h-full bg-black/70 lg:py-12 py-8 flex flex-col justify-center items-center space-y-12 lg:rounded-xl">
          <div className="flex flex-col space-y-4">
            <h2 className="text-white font-inter font-semibold 2xl:text-xl lg:text-lg md:text-base text-sm text-center">
              JOIN THE JOURNEY
            </h2>
            <h2 className="text-white font-inter font-semibold 2xl:text-base lg:text-sm text-xs text-center">
              Be the Change you want to see.
            </h2>
          </div>
          <div className="flex flex-col space-y-2 text-center">
            <p className="text-white font-medium 2xl:text-base lg:text-sm text-xs">
              Join as Volunteer
            </p>
            <p className="text-white font-medium 2xl:text-base lg:text-sm text-xs">
              Become a Team Member
            </p>
            <p className="text-white font-medium 2xl:text-base lg:text-sm text-xs">
              Make a Donation
            </p>
          </div>
          <button className="bg-[#FF9013] hover:bg-white text-white hover:text-blue-700 hover:duration lg:text-base text-sm py-3 px-6 font-semibold">
            JOIN AS VOLUNTEEER
          </button>
        </div>
      </div>
      <div className="w-full bg-[#291f19] h-20 z-30 -mt-20"></div>
    </section>
  );
};

export default About;
