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

function WorkById({ params, data, allWorks }) {
  const id = params;
  console.log("allworks: ", allWorks);
  const works = allWorks.works;
  const singleWork = data;

  return (
    <>
      <section className="max-w-screen h-auto overflow-hidden">
        <div className="m-0 h-[50vh] w-full lg:h-auto">
          <Image
            priority
            src={WorkDetailBG}
            alt="Works Background"
            width={2000}
            height={1200}
            className="h-full w-full bg-cover"
          />
        </div>
        <div className="mx-auto mt-4 flex w-full max-w-6xl flex-col items-center justify-center space-x-0 space-y-4 px-4 sm:px-6 md:w-3/5 md:px-0 lg:flex-row lg:items-start lg:space-x-4 lg:space-y-0 xl:space-x-16 xl:py-12">
          <div className="flex w-full flex-col items-start justify-center space-y-5 lg:w-1/2">
            <div className="w-full self-start font-opensans text-base font-semibold text-black sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
              <Image
                priority
                src={singleWork.cover_img}
                alt="image"
                width={1400}
                height={500}
                className="h-auto w-full"
              />
            </div>
            <p className="self-start font-opensans text-xs font-normal text-black sm:text-sm md:text-base xl:text-lg">
              {singleWork.long_description}
            </p>
          </div>
          <div className="xl:80 z-30 mx-auto hidden h-auto w-64 flex-col items-center justify-between space-y-4 rounded-xl lg:mx-0 lg:-mt-60 lg:flex lg:w-72 xl:-mt-72 2xl:w-96">
            <div>
              <div className="flex w-full flex-col items-center justify-center rounded-t-xl bg-white px-12 py-6 drop-shadow-[0_0_0.75rem_white]">
                <div className="h-auto w-1/2">
                  <Image
                    priority
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
                  At Astronova, we are dedicated to fostering education and
                  driving innovation across various domains. Our multifaceted
                  approach encompasses a wide range of initiatives that empower
                  individuals and communities to thrive in the ever-evolving
                  landscape of Astr
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 rounded-bl-3xl rounded-tr-3xl bg-[#4adede] p-3">
              <h3 className="font-inter text-xs font-semibold text-black sm:text-sm md:text-base xl:text-lg">
                {singleWork.sub_description}
              </h3>
              <div className="py-4">
                <Image
                  src={singleWork.cover_img}
                  alt="cover image"
                  width={600}
                  height={400}
                  className="h-auto w-full"
                />
              </div>
              <button
                type="button"
                className="rounded-lg bg-[#0205d3] px-6 py-3 font-inter text-xs text-white xl:text-sm"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center space-y-3 px-4">
          <h3 className="font-inter text-sm font-semibold tracking-wider text-[#091747] sm:text-base md:text-lg xl:text-xl">
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
                  src={singleWork.gallery[0]}
                  alt="image"
                  width={1200}
                  height={800}
                  quality={75}
                  className="h-full w-full object-cover object-center"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2">
                <Image
                  priority
                  src={singleWork.gallery[1]}
                  alt="image"
                  width={1200}
                  height={800}
                  quality={75}
                  className="h-full w-full object-cover object-center"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2">
                <Image
                  priority
                  src={singleWork.gallery[2]}
                  alt="image"
                  width={1200}
                  height={800}
                  quality={75}
                  className="h-full w-full object-cover object-center"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2">
                <Image
                  priority
                  src={singleWork.gallery[3]}
                  alt="image"
                  width={1200}
                  height={800}
                  quality={75}
                  className="h-full w-full object-cover object-center"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="z-50" />
            <CarouselNext className="z-50" />
          </Carousel>
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
                <CarouselContent>
                  {works.map((work) => {
                    return (
                      <CarouselItem
                        key={work.id}
                        className="flex flex-col items-center justify-center space-y-4 rounded-xl bg-white p-4 pt-4 shadow-xl md:basis-1/2 lg:basis-1/3"
                      >
                        <div className="h-1/2">
                          <Image
                            src={work.cover_img}
                            alt={work.title}
                            className="h-full w-full"
                            width={400}
                            height={450}
                          />
                        </div>
                        <h2 className="font-poppins text-xs font-medium text-black sm:text-sm md:text-base xl:text-lg">
                          {work.title}
                        </h2>
                        <div className="flex w-full items-center justify-center">
                          <Link
                            href={`/works/details_page/${work.id}`}
                            className="rounded-lg bg-[#4455C0] px-12 py-3 font-poppins text-[10px] font-normal text-white sm:text-xs md:text-sm xl:text-base"
                          >
                            SEE MORE
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
    </>
  );
}

export default WorkById;
