"use client";
import React, { useState, useEffect } from "react";
import SupportStudent from "../components/UI/SupportStudent";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "../components/ui/skeleton";
import { getAllCampaigns } from "../app/services/api";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

const About = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await getAllCampaigns();
        setCampaigns(response.campaigns);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section className='max-w-screen mx-auto h-auto overflow-hidden bg-[url("/aboutsection.png")] bg-cover py-4 md:py-6 lg:py-8 2xl:py-12'>
      <div className="mx-auto mt-4 flex w-full max-w-6xl flex-col items-center justify-center space-x-0 md:mt-8 md:flex-row md:space-x-4">
        <div className="flex h-auto flex-col items-center justify-center border-[#DB8114] md:w-full xl:border-r-4 xl:pr-8">
          <Image
            src="/assets/logo.png"
            alt=""
            width={180}
            height={120}
            className="h-auto py-4 md:w-full"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="flex flex-col items-start justify-center space-y-4"
        >
          <h3 className="px-3 font-opensans text-base font-bold tracking-tight text-[#33A4C6] md:text-lg lg:px-0 lg:text-xl xl:text-2xl 2xl:text-3xl">
            About Us
          </h3>
          <p className="px-3 font-opensans text-xs font-normal md:text-sm lg:px-0 lg:text-base xl:text-lg 2xl:text-lg">
            The{" "}
            <span className="font-bold text-[#BDB809]">
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
        className="my-auto mt-4 h-auto bg-[#D9D9D97D] py-3 md:mt-8 xl:py-8"
      >
        <div className="mx-auto flex h-full w-full max-w-6xl flex-col items-center justify-between space-y-3 px-4 lg:flex-row lg:space-y-0">
          <div className="flex w-full flex-col items-center justify-evenly space-y-6 border-[#DB8114] lg:w-1/3 xl:border-r-5 xl:px-4 xl:py-4">
            <h3 className="font-opensans text-base font-bold tracking-wider text-[#0B77A5] md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              OUR MAJOR WORKING AREA
            </h3>
            <p className="text-left font-opensans text-xs font-normal text-black md:text-sm lg:text-base xl:text-lg">
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

          <div className="flex w-screen grow px-4 pt-4 sm:px-6 md:w-[60%] md:px-8 lg:w-[55%] lg:px-10 xl:px-16">
            <div className="z-20 mx-auto my-4 flex h-auto w-full flex-col rounded-full border-5 border-white">
              <div className="-mt-8 h-auto w-20 self-center justify-self-start sm:w-24 md:w-36 lg:w-40">
                <Link
                  href={{ pathname: "/working_area", query: { work: "asw" } }}
                  className="mx-auto flex flex-col items-center justify-center space-y-2 rounded-lg bg-[#2496D7] p-2 text-center font-opensans text-[10px] font-medium tracking-tighter text-white hover:scale-105 hover:duration-400 sm:text-xs md:text-sm xl:text-base"
                >
                  <Image
                    src="/assets/afterschool.svg"
                    alt=""
                    priority
                    width="80"
                    height="80"
                    className="w-16 lg:w-24"
                  />
                  AFTER SCHOOL PROGRAM
                </Link>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="h-auto w-20 self-start sm:w-24 md:-ml-6 md:w-36 lg:w-40">
                  <Link
                    href={{
                      pathname: "/working_area",
                      query: { work: "startup" },
                    }}
                    className="mx-auto flex flex-col items-center justify-center space-y-2 rounded-lg bg-[#AE0D19] p-2 text-center font-opensans text-[10px] font-medium tracking-tighter text-white hover:scale-105 hover:duration-400 sm:text-xs md:text-sm xl:text-base"
                  >
                    <Image
                      src="/assets/startup.svg"
                      alt=""
                      priority
                      width="80"
                      height="80"
                      className="w-16 lg:w-24"
                    />
                    STARTUP & INNOVATION
                  </Link>
                </div>
                <div className="mt-2 h-auto w-48 self-start sm:w-56 md:w-64 lg:w-80">
                  <Link href="#" className="hover:scale-105 hover:duration-400">
                    <Image
                      src="/assets/teachers.svg"
                      alt="Teachers Workfield SVG"
                      width="200"
                      height="200"
                      className="w-full"
                    />
                  </Link>
                </div>
                <div className="h-auto w-20 self-start sm:w-24 md:-mr-6 md:w-36 lg:w-40">
                  <Link
                    href={{
                      pathname: "/working_area",
                      query: { work: "nesep" },
                    }}
                    className="mx-auto flex flex-col items-center justify-center space-y-2 rounded-lg bg-[#DB8114] p-2 text-center font-opensans text-[10px] font-medium tracking-tighter text-white hover:scale-105 hover:duration-400 sm:text-xs md:text-sm xl:text-base"
                  >
                    <Image
                      src="/assets/scienceexpo.svg"
                      alt=""
                      priority
                      width="80"
                      height="80"
                      className="w-16 lg:w-24"
                    />
                    SCIENCE EXPO
                  </Link>
                </div>
              </div>

              {/*<div className="justify-self-center self-center h-auto w-40 md:w-60 lg:w-80 -mt-20 md:-mt-0 lg:-mt-24">
                <Link
                  href="#"
                  className="bg-[#77ab33] font-opensans font-medium xl:text-base md:text-sm text-xs tracking-tighter mx-auto text-center flex flex-col justify-center items-center space-y-2 rounded-lg hover:scale-105 hover:duration-400 text-white"
                >
                  <Image
                    src="/assets/teachers.svg"
                    alt=""
                    width="40"
                    height="40"
                    className="w-12 lg:w-40"
                  />
                  TEACHERS PRO DEVELOPMENT, SKILL DEVELOPMENT & SOCIAL SKILLS
                </Link> 
               
              </div>*/}
              <div className="mt-4 flex w-full items-center justify-around">
                <div className="h-auto w-20 self-start justify-self-end sm:w-24 md:w-36 lg:w-40">
                  <Link
                    href={{
                      pathname: "/working_area",
                      query: { field: "steam" },
                    }}
                    className="mx-auto flex flex-col items-center justify-center space-y-2 rounded-lg bg-white p-2 text-center font-opensans text-[10px] font-medium tracking-tighter text-white hover:scale-105 hover:duration-400 sm:text-xs md:text-sm xl:text-base"
                  >
                    <Image
                      src="/assets/steam.svg"
                      alt=""
                      width="320"
                      height="180"
                      className="h-28 w-32 lg:h-36 lg:w-40"
                    />
                  </Link>
                </div>
                <div className="h-auto w-20 self-end justify-self-end sm:w-24 md:w-36 lg:w-40">
                  <Link
                    href={{
                      pathname: "/working_area",
                      query: { field: "research" },
                    }}
                    className="mx-auto flex flex-col items-center justify-center space-y-2 rounded-lg bg-[#BD8809] p-2 text-center font-opensans text-[10px] font-medium tracking-tighter text-white hover:scale-105 hover:duration-400 sm:text-xs md:text-sm xl:text-base"
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
      <div className="w-full bg-white py-6">
        <div className="mx-auto flex h-full w-full max-w-6xl flex-col items-center justify-between space-y-8 px-4">
          <h3 className="font-opensans text-base font-bold tracking-tight text-[#0B77A5] md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            SUPPORT FOR STUDENTS
          </h3>
          {loading && (
            <div className="mt-4 flex h-[60vh] w-full space-x-3 py-4">
              <div className="flex h-full flex-col items-center justify-center">
                <Skeleton className="h-1/2 w-full"></Skeleton>
                <div className="flex h-1/2 flex-col">
                  <Skeleton className="h-1/4 w-3/4"></Skeleton>
                  <Skeleton className="h-1/2 w-full"></Skeleton>
                  <Skeleton className="h-1/4 w-3/4"></Skeleton>
                </div>
              </div>
              <div className="hidden h-full flex-col items-center justify-center sm:flex">
                <Skeleton className="h-1/2 w-full"></Skeleton>
                <div className="flex h-1/2 flex-col">
                  <Skeleton className="h-1/4 w-3/4"></Skeleton>
                  <Skeleton className="h-1/2 w-full"></Skeleton>
                  <Skeleton className="h-1/4 w-3/4"></Skeleton>
                </div>
              </div>
              <div className="hidden h-full flex-col items-center justify-center xl:flex">
                <Skeleton className="h-1/2 w-full"></Skeleton>
                <div className="flex h-1/2 flex-col">
                  <Skeleton className="h-1/4 w-3/4"></Skeleton>
                  <Skeleton className="h-1/2 w-full"></Skeleton>
                  <Skeleton className="h-1/4 w-3/4"></Skeleton>
                </div>
              </div>
            </div>
          )}
          <div className="w-full">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full px-8 py-4"
            >
              <CarouselContent className="py-4">
                {campaigns.map((campaign) => {
                  return (
                    <CarouselItem
                      key={campaign.id}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <SupportStudent
                        data-aos="fade-right"
                        data-aos-duration="500"
                        id={campaign.id}
                        imgSrc={campaign.featured_img}
                        project={campaign.title}
                        desc={campaign.description.substr(0, 60) + " ..."}
                        achieved={campaign.achieved}
                        target={campaign.international_fund}
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
      </div>
    </section>
  );
};

export default About;
