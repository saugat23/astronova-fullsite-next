"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getAllEvents } from "../../../app/services/api";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import Image from "next/image";

const Works = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await getAllEvents();
        // setEvents(response.events);
        // console.log(response);
        // console.log(events);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="h-auto max-w-screen overflow-hidden">
      <div className="w-full lg:h-auto h-[50vh] m-0">
        <Image
          priority
          src="/works/bg.svg"
          alt="Works Background"
          width={2000}
          height={1200}
          className="h-full w-full bg-cover"
        />
      </div>
      <div className="mx-auto px-4 sm:px-6 md:px-0 w-full md:w-3/5 max-w-6xl xl:py-12 mt-4 flex lg:flex-row flex-col justify-center items-center lg:items-start xl:space-x-16 lg:space-x-4 space-x-0 space-y-4 lg:space-y-0">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-5">
          <h3 className="font-opensans self-start font-semibold 2xl:text-3xl xl:text-2xl md:text-xl sm:text-lg text-base text-black">
            Our Work
          </h3>
          <p className="font-opensans self-start font-normal xl:text-lg md:text-base sm:text-sm text-xs text-black">
            At Astronova, we are dedicated to fostering education and driving
            innovation across various domains. Our multifaceted approach
            encompasses a wide range of initiatives that empower individuals and
            communities to thrive in the ever-evolving landscape of Astro
            E-commerce, E-Learning, Startups, Science & Technology, Research and
            development, Startups and Entrepreneurship, Ventures and Seed Money
            IT Labs, Science Museum, Old Age School, Incubation and Startups,
            Observatory, Knowledge Park and Workshops.
          </p>
        </div>
        <div className="mx-auto lg:mx-0 h-auto w-64 lg:w-72 xl:80 2xl:w-96 lg:-mt-60 xl:-mt-72 hidden lg:flex flex-col justify-center items-center rounded-xl z-30">
          <div className="w-full bg-white flex flex-col justify-center items-center py-6 px-12 rounded-t-xl drop-shadow-[0_0_0.75rem_white]">
            <div className="w-1/2 h-auto">
              <Image
                priority
                src="/logo.png"
                alt="Logo"
                className="w-full h-full"
                width={80}
                height={80}
              />
            </div>
            <h3 className="font-inter font-normal tracking-widest 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-black">
              ASTRONOVA
            </h3>
            <h3 className="font-inter font-normal tracking-wide 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs text-[10px] text-black">
              FOUNDATION NEPAL
            </h3>
          </div>
          <div className="bg-[#4455C0] py-8 px-4 flex justify-center items-start rounded-b-xl">
            <p className="font-roboto font-medium text-white 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs text-[10px]">
              At Astronova, we are dedicated to fostering education and driving
              innovation across various domains. Our multifaceted approach
              encompasses a wide range of initiatives that empower individuals
              and communities to thrive in the ever-evolving landscape of Astr
            </p>
          </div>
        </div>
      </div>
      <div className="w-full xl:py-12 md:py-8 sm:py-6 py-4 mt-4 bg-[#f8f8f8]">
        <div className="mx-auto xl:w-3/5 md:w-3/4 w-full flex flex-col justify-center items-center space-y-5">
          <h3 className="font-inter self-center font-extrabold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-[#0B77A5]">
            Event and Function
          </h3>
          <div className="w-full mt-4">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full px-12"
            >
              {/* {events.map((event) => {
                return ( */}
              <CarouselContent>
                <CarouselItem className="p-4 pt-4 flex flex-col justify-center items-center space-y-4 bg-white rounded-xl shadow-xl md:basis-1/2 lg:basis-1/3">
                  {/* <div className="h-1/2"><img src={event.image} alt={event.title} className="w-full h-full" /></div>
                    <h2 className="font-poppins font-medium text-black xl:text-lg md:text-base sm:text-sm text-xs">{event.title}</h2>
                    <div className="flex justify-center items-center w-full">
                        <button type="button" className="px-12 py-3 font-poppins font-normal text-white bg-[#4455C0] xl:text-base md:text-sm sm:text-xs text-[10px] rounded-lg">
                        <Link href={`/works/details_page/${event.event_id}`}>SEE MORE</Link>
                        </button>
                    </div> */}
                  <div className="h-1/2">
                    <Image
                      priority
                      src="/supportstudents.png"
                      alt="Support Students"
                      className="w-full h-full"
                      width={150}
                      height={150}
                    />
                  </div>
                  <h2 className="font-poppins font-medium text-black xl:text-lg md:text-base sm:text-sm text-xs">
                    Some Title
                  </h2>
                  <p className="font-poppins font-normal text-black xl:text-base md:text-sm text-xs">
                    Research Seminar Program by Astronova Foundation Nepal at
                    Navodaya Shishu Sadan English Secondary School.
                  </p>
                  <div className="flex justify-center items-center w-full">
                    <button
                      type="button"
                      className="px-12 py-3 font-poppins font-normal text-white bg-[#4455C0] xl:text-base md:text-sm sm:text-xs text-[10px] rounded-lg"
                    >
                      <Link href={`/works/details_page/1`}>SEE MORE</Link>
                    </button>
                  </div>
                </CarouselItem>
                <CarouselItem className="p-4 pt-4 flex flex-col justify-center items-center space-y-4 bg-white rounded-xl shadow-xl md:basis-1/2 lg:basis-1/3">
                  <div className="h-1/2">
                    <Image
                      priority
                      src="/supportstudents.png"
                      alt="Support Students"
                      className="w-full h-full"
                      width={150}
                      height={150}
                    />
                  </div>
                  <h2 className="font-poppins font-medium text-black xl:text-lg md:text-base sm:text-sm text-xs">
                    Some Title
                  </h2>
                  <p className="font-poppins font-normal text-black xl:text-base md:text-sm text-xs">
                    Research Seminar Program by Astronova Foundation Nepal at
                    Navodaya Shishu Sadan English Secondary School.
                  </p>
                  <div className="flex justify-center items-center w-full">
                    <button
                      type="button"
                      className="px-12 py-3 font-poppins font-normal text-white bg-[#4455C0] xl:text-base md:text-sm sm:text-xs text-[10px] rounded-lg"
                    >
                      <Link href={`/works/details_page/1`}>SEE MORE</Link>
                    </button>
                  </div>
                </CarouselItem>
                <CarouselItem className="p-4 pt-4 flex flex-col justify-center items-center space-y-4 bg-white rounded-xl shadow-xl md:basis-1/2 lg:basis-1/3">
                  <div className="h-1/2">
                    <Image
                      priority
                      src="/supportstudents.png"
                      alt="Support Students"
                      className="w-full h-full"
                      width={150}
                      height={150}
                    />
                  </div>
                  <h2 className="font-poppins font-medium text-black xl:text-lg md:text-base sm:text-sm text-xs">
                    Some Title
                  </h2>
                  <p className="font-poppins font-normal text-black xl:text-base md:text-sm text-xs">
                    Research Seminar Program by Astronova Foundation Nepal at
                    Navodaya Shishu Sadan English Secondary School.
                  </p>
                  <div className="flex justify-center items-center w-full">
                    <button
                      type="button"
                      className="px-12 py-3 font-poppins font-normal text-white bg-[#4455C0] xl:text-base md:text-sm sm:text-xs text-[10px] rounded-lg"
                    >
                      <Link href={`/works/details_page/1`}>SEE MORE</Link>
                    </button>
                  </div>
                </CarouselItem>
                <CarouselItem className="p-4 pt-4 flex flex-col justify-center items-center space-y-4 bg-white rounded-xl shadow-xl md:basis-1/2 lg:basis-1/3">
                  <div className="h-1/2">
                    <Image
                      priority
                      src="/supportstudents.png"
                      alt="Support Students"
                      className="w-full h-full"
                      width={150}
                      height={150}
                    />
                  </div>
                  <h2 className="font-poppins font-medium text-black xl:text-lg md:text-base sm:text-sm text-xs">
                    Some Title
                  </h2>
                  <p className="font-poppins font-normal text-black xl:text-base md:text-sm text-xs">
                    Research Seminar Program by Astronova Foundation Nepal at
                    Navodaya Shishu Sadan English Secondary School.
                  </p>
                  <div className="flex justify-center items-center w-full">
                    <button
                      type="button"
                      className="px-12 py-3 font-poppins font-normal text-white bg-[#4455C0] xl:text-base md:text-sm sm:text-xs text-[10px] rounded-lg"
                    >
                      <Link href={`/works/details_page/1`}>SEE MORE</Link>
                    </button>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="ml-12" />
              <CarouselNext className="mr-12" />
              {/* ); */}
              {/* })} */}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
