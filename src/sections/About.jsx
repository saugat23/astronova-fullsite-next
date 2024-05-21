"use client";
import React, { useState, useEffect } from "react";
import SupportStudent from "../components/UI/SupportStudent";
import Image from "next/image";
import Link from "next/link";
import { getAllCampaign } from "../app/services/api";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

const About = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllCampaign();
        setCampaigns(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className='h-auto max-w-screen overflow-hidden bg-[url("/aboutsection.png")] bg-cover mx-auto 2xl:py-12 lg:py-8 md:py-6 py-4 '>
      <div className="flex md:flex-row flex-col justify-center items-center md:space-x-4 space-x-0 mx-auto w-full px-4 max-w-7xl  md:mt-8 mt-4">
        <div className="h-auto flex flex-col justify-center items-center xl:pr-8 xl:border-r-4 border-[#DB8114] md:w-full">
          <Image
            src="/assets/logo.png"
            alt=""
            width={160}
            height={120}
            className="py-4 md:w-full h-auto"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="flex flex-col justify-center space-y-4 items-start"
        >
          <h3 className="px-4 lg:px-0 font-opensans font-bold text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-[#33A4C6] tracking-tight">
            About Us
          </h3>
          <p className="font-opensans text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-normal px-4 lg:px-0">
            The{" "}
            <span className="text-[#BDB809] font-bold">
              Astronova Foundation Nepal
            </span>{" "}
            is officially registered as non-profit organization. It&apos;s
            primary mission is to foster creative, innovative & entrepreneurial
            mindset among school/college students from their early ages. We are
            working to create an environment where students can receive support,
            mentorship, guidance and access to tools and facilities to explore
            their curiosity so that they could be able to develop practical &
            soft skills, entrepreneurial skill and turn their ideas into reality
            and provide them national and international exposure to explore
            their innovative research ideas. Recognizing that many young minds
            possess innovative ideas and energy that often remain untapped due
            to financial constraints and a lack of resources, the foundation
            aims to bridge this gap. The foundation believes that none of the
            creative curiosities should be killed just because of lack of money
            and the resources and moves ahead accordingly.
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className="xl:py-8 py-3 bg-[#D9D9D9] md:mt-8 mt-4 h-auto my-auto"
      >
        <div className="flex h-full lg:flex-row flex-col justify-between space-y-3 lg:space-y-0 items-center bg-[#D9D9D94D] mx-auto w-full max-w-7xl px-4">
          <div className="w-full lg:w-1/3 flex flex-col justify-evenly items-center space-y-6 xl:py-4 xl:px-4 xl:border-r-4 border-[#DB8114]">
            <h3 className="font-opensans font-bold text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-[#0B77A5] tracking-tight">
              OUR MAJOR WORKING AREA
            </h3>
            <p className="font-opensans font-normal text-xs md:text-sm lg:text-base xl:text-lg  text-black text-left">
              We are actively involving various working area. However, our major
              focusing working area are as below.
            </p>
          </div>
          {/* <div className="w-full lg:w-auto grow p-4  flex justify-center items-center">
            <div className="relative bg-transparent px-4 lg:py-10 lg:px-6 border-[8px] border-white rounded-full mx-auto h-full sm:h-3/4 w-full sm:w-3/4 z-20 my-auto flex justify-center items-center">
              <div className="p-6 lg:p-9 rounded-full bg-white">
                <h3 className="font-opensans rounded-full font-bold 2xl:text-xl xl:text-lg lg:text-base md:text-sm text-xs w-3/4 mx-auto text-center">
                  OUR MAJOR WORKING AREA
                </h3>
              </div>
              <Link
                href={{ pathname: "/working_area", query: { work: "asw" } }}
                className="absolute top-12 lg:-top-14 -translate-y-1/2 left-1/2 -translate-x-1/2 h-auto w-[35%] bg-[#2496D7] font-opensans font-medium 2xl:text-lg lg:text-base md:text-sm text-xs tracking-tighter mx-auto text-center flex flex-col justify-center items-center space-y-2 rounded-lg hover:scale-105 hover:duration-400 text-white p-4"
              >
                <Image
                  src="/assets/afterschool.svg"
                  alt=""
                  width="80"
                  height="80"
                  className="w-16 lg:w-24"
                />
                AFTER SCHOOL PROGRAM
              </Link>
              <Link
                href={{ pathname: "/working_area", query: { work: "startup" } }}
                className="absolute top-32 lg:-top-8 -translate-y-1/2 left-6 -translate-x-1/2 h-auto w-[35%] bg-[#AE0D19] font-opensans font-medium 2xl:text-lg lg:text-base md:text-sm text-xs tracking-tighter mx-auto text-center flex flex-col justify-center items-center space-y-2 rounded-lg hover:scale-105 hover:duration-400 text-white p-4"
              >
                <Image
                  src="/assets/startup.svg"
                  alt=""
                  width="80"
                  height="80"
                  className="w-16 lg:w-24"
                />
                STARTUP & INNOVATION
              </Link>
              <Link
                href={{ pathname: "/working_area", query: { work: "nesep" } }}
                className="absolute top-32 lg:-top-8 -translate-y-1/2 right-6 translate-x-1/2 h-auto w-[35%] bg-[#DB8114] font-opensans font-medium 2xl:text-lg lg:text-base md:text-sm text-xs tracking-tighter mx-auto text-center flex flex-col justify-center items-center space-y-2 rounded-lg hover:scale-105 hover:duration-400 text-white p-4"
              >
                <Image
                  src="/assets/scienceexpo.svg"
                  alt=""
                  width="80"
                  height="80"
                  className="w-16 lg:w-24"
                />
                SCIENCE EXPO
              </Link>
              <Link
                href={{ pathname: "/working_area", query: { field: "steam" } }}
                className="absolute bottom-32 lg:-bottom-8 translate-y-1/2 left-6 -translate-x-1/2 h-auto w-[35%] bg-white font-opensans font-medium 2xl:text-lg lg:text-base md:text-sm text-xs tracking-tighter mx-auto text-center flex flex-col justify-center items-center space-y-2 rounded-lg hover:scale-105 hover:duration-400 text-white p-4"
              >
                <Image
                  src="/assets/steam.svg"
                  alt=""
                  width="120"
                  height="120"
                  className="w-20 lg:w-28"
                />
              </Link>
              <Link
                href={{
                  pathname: "/working_area",
                  query: { field: "research" },
                }}
                className="absolute bottom-32 lg:-bottom-8 translate-y-1/2 right-6 translate-x-1/2 h-auto w-[35%] bg-[#BD8809] font-opensans font-medium 2xl:text-lg lg:text-base md:text-sm text-xs tracking-tighter mx-auto text-center flex flex-col justify-center items-center space-y-2 rounded-lg hover:scale-105 hover:duration-400 text-white p-4"
              >
                <Image
                  src="/assets/research.svg"
                  alt=""
                  width="80"
                  height="80"
                  className="w-16 lg:w-24"
                />
                RESEARCH & INNOVATION
              </Link>
              <Link
                href="#"
                className="absolute bottom-12 lg:-bottom-14 translate-y-1/2 left-1/2 -translate-x-1/2 h-auto w-[35%] bg-[#2496D7] font-opensans font-medium 2xl:text-lg lg:text-base md:text-sm text-xs tracking-tighter mx-auto text-center flex flex-col justify-center items-center space-y-2 rounded-lg hover:scale-105 hover:duration-400 text-white p-4"
              >
                <Image
                  src="/assets/teachers.svg"
                  alt=""
                  width="40"
                  height="40"
                  className="w-8 lg:w-12"
                />
                TEACHERS PRO DEV, SKILL DEV & SOCIAL SKILLS
              </Link>
            </div>
          </div> */}

          <div className="w-full lg:w-auto grow p-4 flex">
            <div className="p-auto w-[40rem] h-[28rem] md:h-[34rem] lg:h-[40rem] border-5 border-white rounded-full mx-auto z-20 my-4 flex flex-col">
              <div className="justify-self-start self-center h-auto w-[30%] ">
                <Link
                  href={{ pathname: "/working_area", query: { work: "asw" } }}
                  className=" bg-[#2496D7] font-opensans font-medium 2xl:text-lg lg:text-base md:text-sm text-xs tracking-tighter mx-auto text-center flex flex-col justify-center items-center space-y-2 rounded-lg hover:scale-105 hover:duration-400 text-white p-4"
                >
                  <Image
                    src="/assets/afterschool.svg"
                    alt=""
                    width="80"
                    height="80"
                    className="w-16 lg:w-24"
                  />
                  AFTER SCHOOL PROGRAM
                </Link>
              </div>
              <div className="flex w-full justify-between items-center justify-self-start -mt-8 md:-mt-0 lg:-mt-6">
                <div className="justify-self-start self-start h-auto w-[30%]">
                  <Link
                    href={{
                      pathname: "/working_area",
                      query: { work: "startup" },
                    }}
                    className="bg-[#AE0D19] font-opensans font-medium 2xl:text-lg lg:text-base md:text-sm text-xs tracking-tighter mx-auto text-center flex flex-col justify-center items-center space-y-2 rounded-lg hover:scale-105 hover:duration-400 text-white p-4"
                  >
                    <Image
                      src="/assets/startup.svg"
                      alt=""
                      width="80"
                      height="80"
                      className="w-16 lg:w-24"
                    />
                    STARTUP & INNOVATION
                  </Link>
                </div>
                <div className="justify-self-start self-end  h-auto w-[30%]">
                  <Link
                    href={{
                      pathname: "/working_area",
                      query: { work: "nesep" },
                    }}
                    className="bg-[#DB8114] font-opensans font-medium 2xl:text-lg lg:text-base md:text-sm text-xs tracking-tighter mx-auto text-center flex flex-col justify-center items-center space-y-2 rounded-lg hover:scale-105 hover:duration-400 text-white p-4"
                  >
                    <Image
                      src="/assets/scienceexpo.svg"
                      alt=""
                      width="80"
                      height="80"
                      className="w-16 lg:w-24"
                    />
                    SCIENCE EXPO
                  </Link>
                </div>
              </div>

              <div className="justify-self-center self-center h-auto w-[30%] -mt-16 md:-mt-0 lg:-mt-12">
                <Link
                  href="#"
                  className="bg-[#77ab33] font-opensans font-medium 2xl:text-base lg:text-sm md:text-xs text-[10px] tracking-tighter mx-auto text-center flex flex-col justify-center items-center space-y-2 rounded-lg hover:scale-105 hover:duration-400 text-white p-4"
                >
                  <Image
                    src="/assets/teachers.svg"
                    alt=""
                    width="40"
                    height="40"
                    className="w-12 lg:w-16"
                  />
                  TEACHERS PRO DEVELOPMENT, SKILL DEVELOPMENT & SOCIAL SKILLS
                </Link>
              </div>
              <div className="flex w-full justify-evenly items-center justify-self-end md:mt-6 mt-6">
                <div className="justify-self-end self-start h-auto w-[30%]">
                  <Link
                    href={{
                      pathname: "/working_area",
                      query: { field: "steam" },
                    }}
                    className="bg-white font-opensans font-medium 2xl:text-lg lg:text-base md:text-sm text-xs tracking-tighter mx-auto text-center flex flex-col justify-center items-center space-y-2 rounded-lg hover:scale-105 hover:duration-400 text-white px-4 py-6"
                  >
                    <Image
                      src="/assets/steam.svg"
                      alt=""
                      width="120"
                      height="120"
                      className="w-20 lg:w-28"
                    />
                  </Link>
                </div>
                <div className="justify-self-end self-end h-auto w-[30%]">
                  <Link
                    href={{
                      pathname: "/working_area",
                      query: { field: "research" },
                    }}
                    className=" bg-[#BD8809] font-opensans font-medium 2xl:text-lg lg:text-base md:text-sm text-xs tracking-tighter mx-auto text-center flex flex-col justify-center items-center space-y-2 rounded-lg hover:scale-105 hover:duration-400 text-white p-4"
                  >
                    <Image
                      src="/assets/research.svg"
                      alt=""
                      width="80"
                      height="80"
                      className="w-16 lg:w-24"
                    />
                    RESEARCH & INNOVATION
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full flex flex-col justify-between items-center space-y-12 mt-8 mx-auto w-full px-4 max-w-7xl">
        <h3 className="font-opensans font-bold text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-[#0B77A5] tracking-tight">
          SUPPORT FOR STUDENTS
        </h3>
        <div className="mt-4 w-full">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full px-4"
          >
            <CarouselContent>
              {campaigns.map((campaign) => {
                return (
                  <CarouselItem
                    key={campaign.campaign_id}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <SupportStudent
                      data-aos="fade-right"
                      data-aos-duration="500"
                      id={campaign.campaign_id}
                      imgSrc={campaign.featured_image}
                      project={campaign.title}
                      desc={campaign.short_description.substr(0, 60) + " ..."}
                      achieved={campaign.achieved_fund}
                      target={campaign.target_fund_dollars}
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="ml-8" />
            <CarouselNext className="mr-8" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default About;
