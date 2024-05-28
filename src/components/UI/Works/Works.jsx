"use client";
import React from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import Image from "next/image";

const Works = ({ data }) => {
  const works = data.works;

  return (
    <section className="h-auto max-w-screen">
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
      <div className="mx-auto px-4 w-full max-w-6xl xl:py-12 flex lg:flex-row flex-col justify-center items-center lg:items-start xl:space-x-16 lg:space-x-4 space-x-0 space-y-4 lg:space-y-0">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-5 mt-4">
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
        <div className="mx-auto px-4 h-auto w-1/2 lg:-mt-40 xl:-mt-60 flex flex-col justify-center items-center rounded-xl z-30">
          <div className="w-full bg-white flex flex-col justify-center items-center py-6 px-12 rounded-t-xl drop-shadow-[0_0_0.75rem_white]">
            <div className="w-1/2 h-auto">
              <Image
                priority
                quality={90}
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
            <p className="font-poppins font-medium text-white 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs text-[10px]">
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
              <CarouselContent className="py-3">
                {works.map((work) => {
                  return (
                    <CarouselItem
                      key={work.id}
                      className="py-4 flex flex-col justify-center items-start space-y-4 bg-white rounded-xl shadow-xl md:basis-1/2 lg:basis-1/3 mx-3"
                    >
                      <div className="h-1/2 w-full">
                        <Image
                          priority
                          quality={80}
                          src={work.cover_img}
                          alt={work.title}
                          className="w-full h-full"
                          width={400}
                          height={450}
                        />
                      </div>
                      <h2 className="font-poppins font-semibold text-black xl:text-lg md:text-base sm:text-sm text-xs px-2">
                        {work.title}
                      </h2>
                      <p className="font-poppins font-medium text-gray-800 xl:text-base md:text-sm sm:text-xs text-[10px] px-2">
                        {work.long_description}
                      </p>
                      <div className="flex justify-center items-center w-full">
                        <button
                          type="button"
                          className="px-12 py-3 font-poppins font-normal text-white bg-[#4455C0] xl:text-base md:text-sm sm:text-xs text-[10px] rounded-lg"
                        >
                          <Link
                            href={`/work_details_page/${work.id}`}
                            target="_blank"
                          >
                            READ MORE
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
  );
};

export default Works;
