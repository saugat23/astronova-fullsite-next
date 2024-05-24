"use client";
import React, { useState, useEffect } from "react";
import WorkDetailBG from "../../../../../public/assets/worksdetailbg.svg";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../ui/carousel";
import { getAllWorks } from "../../../../app/services/api";

function WorkById(id) {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllWorks();
        setWorks(response.works);
        console.log(response.works);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="h-auto max-w-screen overflow-hidden">
        <div className="w-full lg:h-auto h-[50vh] m-0">
          <Image
            priority
            src={WorkDetailBG}
            alt="Works Background"
            width={2000}
            height={1200}
            className="h-full w-full bg-cover"
          />
        </div>
        <div className="mx-auto px-4 sm:px-6 md:px-0 w-full md:w-3/5 max-w-6xl xl:py-12 mt-4 flex lg:flex-row flex-col justify-center items-center lg:items-start xl:space-x-16 lg:space-x-4 space-x-0 space-y-4 lg:space-y-0">
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-5">
            <div className="w-full font-opensans self-start font-semibold 2xl:text-3xl xl:text-2xl md:text-xl sm:text-lg text-base text-black">
              <Image
                priority
                src="/supportstudents.png"
                alt="image"
                width={1400}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <p className="font-opensans self-start font-normal xl:text-lg md:text-base sm:text-sm text-xs text-black">
              At Astronova, we are dedicated to fostering education and driving
              innovation across various domains. Our multifaceted approach
              encompasses a wide range of initiatives that empower individuals
              and communities to thrive in the ever-evolving landscape of Astro
              E-commerce, E-Learning, Startups, Science & Technology, Research
              and development, Startups and Entrepreneurship, Ventures and Seed
              Money IT Labs, Science Museum, Old Age School, Incubation and
              Startups, Observatory, Knowledge Park and Workshops.
            </p>
          </div>
          <div className="mx-auto lg:mx-0 h-auto w-64 lg:w-72 xl:80 2xl:w-96 lg:-mt-60 xl:-mt-72 hidden lg:flex flex-col justify-between items-center rounded-xl space-y-4 z-30">
            <div>
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
                  At Astronova, we are dedicated to fostering education and
                  driving innovation across various domains. Our multifaceted
                  approach encompasses a wide range of initiatives that empower
                  individuals and communities to thrive in the ever-evolving
                  landscape of Astr
                </p>
              </div>
            </div>
            <div
              className="bg-[#4adede] p-3 rounded-tr-3xl
              rounded-bl-3xl flex flex-col justify-center items-center space-y-3"
            >
              <h3 className="font-inter font-semibold xl:text-lg md:text-base sm:text-sm text-xs text-black">
                Research Seminar Program at ...
              </h3>
              <div className="py-4">{/* Image */}</div>
              <button
                type="button"
                className="bg-[#0205d3] text-white xl:text-sm text-xs font-inter py-3 px-6 rounded-lg"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 flex flex-col justify-center items-center space-y-3">
          <h3 className="text-[#091747] font-inter tracking-wider font-semibold xl:text-xl md:text-lg sm:text-base text-sm">
            Gallery
          </h3>
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full px-8"
          >
            <CarouselContent>
              <CarouselItem className="md:basis-1/2">
                <Image
                  priority
                  src="/supportstudents.png"
                  alt="image"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2">
                <Image
                  priority
                  src="/supportstudents.png"
                  alt="image"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2">
                <Image
                  priority
                  src="/supportstudents.png"
                  alt="image"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2">
                <Image
                  priority
                  src="/supportstudents.png"
                  alt="image"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="z-50" />
            <CarouselNext className="z-50" />
          </Carousel>
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
                <CarouselContent>
                  {works.map((work) => {
                    return (
                      <CarouselItem
                        key={work.id}
                        className="p-4 pt-4 flex flex-col justify-center items-center space-y-4 bg-white rounded-xl shadow-xl md:basis-1/2 lg:basis-1/3"
                      >
                        <div className="h-1/2">
                          <Image
                            src={work.cover_img}
                            alt={work.title}
                            className="w-full h-full"
                            width={400}
                            height={450}
                          />
                        </div>
                        <h2 className="font-poppins font-medium text-black xl:text-lg md:text-base sm:text-sm text-xs">
                          {work.title}
                        </h2>
                        <div className="flex justify-center items-center w-full">
                          <button
                            type="button"
                            className="px-12 py-3 font-poppins font-normal text-white bg-[#4455C0] xl:text-base md:text-sm sm:text-xs text-[10px] rounded-lg"
                          >
                            <Link href={`/works/details_page/${work.id}`}>
                              SEE MORE
                            </Link>
                          </button>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <CarouselPrevious className="ml-12" />
                <CarouselNext className="mr-12" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WorkById;
