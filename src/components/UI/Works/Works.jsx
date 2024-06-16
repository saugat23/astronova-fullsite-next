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
    <section className="max-w-screen h-auto">
      <div className="m-0 h-[50vh] w-full lg:h-auto">
        <Image
          priority
          src="/works/bg.svg"
          alt="Works Background"
          width={2000}
          height={1200}
          className="h-full w-full bg-cover"
        />
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center space-x-0 space-y-4 px-4 lg:flex-row lg:items-start lg:space-x-4 lg:space-y-0 xl:space-x-16 xl:py-12">
        <div className="mt-4 flex w-full flex-col items-start justify-center space-y-5 lg:w-1/2">
          <h3 className="self-start font-opensans text-base font-semibold text-black sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
            Our Work
          </h3>
          <p className="self-start font-opensans text-xs font-normal text-black sm:text-sm md:text-base xl:text-lg">
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
        <div className="z-30 mx-auto flex h-auto w-1/2 flex-col items-center justify-center rounded-xl px-4 lg:-mt-40 xl:-mt-60">
          <div className="flex w-full flex-col items-center justify-center rounded-t-xl bg-white px-12 py-6 drop-shadow-[0_0_0.75rem_white]">
            <div className="h-auto w-1/2">
              <Image
                priority
                quality={90}
                src="/logo.png"
                alt="Logo"
                className="h-full w-full"
                width={80}
                height={80}
              />
            </div>
            <h3 className="font-inter text-sm font-normal tracking-widest text-black sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              ASTRONOVA
            </h3>
            <h3 className="font-inter text-[10px] font-normal tracking-wide text-black sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
              FOUNDATION NEPAL
            </h3>
          </div>
          <div className="flex items-start justify-center rounded-b-xl bg-[#4455C0] px-4 py-8">
            <p className="font-poppins text-[10px] font-medium text-white sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
              At Astronova, we are dedicated to fostering education and driving
              innovation across various domains. Our multifaceted approach
              encompasses a wide range of initiatives that empower individuals
              and communities to thrive in the ever-evolving landscape of Astr
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 w-full bg-[#f8f8f8] py-4 sm:py-6 md:py-8 xl:py-12">
        <div className="mx-auto flex w-full flex-col items-center justify-center space-y-5 md:w-3/4 xl:w-3/5">
          <h3 className="self-center font-inter text-sm font-extrabold text-[#0B77A5] sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            Event and Function
          </h3>
          <div className="mt-4 w-full">
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
                      className="mx-3 flex flex-col items-start justify-center space-y-4 rounded-xl bg-white py-4 shadow-xl md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="h-1/2 w-full">
                        <Image
                          priority
                          quality={80}
                          src={work.cover_img}
                          alt={work.title}
                          className="h-full w-full"
                          width={400}
                          height={450}
                        />
                      </div>
                      <h2 className="px-2 font-poppins text-xs font-semibold text-black sm:text-sm md:text-base xl:text-lg">
                        {work.title}
                      </h2>
                      <p className="px-2 font-poppins text-[10px] font-medium text-gray-800 sm:text-xs md:text-sm xl:text-base">
                        {work.long_description}
                      </p>
                      <div className="flex w-full items-center justify-center">
                        <Link
                          href={`/work_details_page/${work.id}`}
                          target="_blank"
                          className="rounded-lg bg-[#4455C0] px-12 py-3 font-poppins text-[10px] font-normal text-white sm:text-xs md:text-sm xl:text-base"
                        >
                          READ MORE
                        </Link>
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
