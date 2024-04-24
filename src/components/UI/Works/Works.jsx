"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { getAllEvents } from "../../../app/services/api";

const Works = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllEvents();
        setEvents(response.events);
        console.log(response);
        console.log(events);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="h-auto max-w-screen overflow-hidden">
      <div className='relative w-full h-[50vh] bg-[url("/works/bg.svg")] bg-cover bg-no-repeat'>
        <div className="h-auto w-96 absolute top-[30rem] left-[46%] -translate-y-1/2 translate-x-1/2 flex flex-col justify-center items-center rounded-xl z-30">
          <div className="w-full bg-white flex flex-col justify-center items-center py-6 px-12 rounded-t-xl drop-shadow-[0_0_0.75rem_white]">
            <div className="w-1/2 h-auto">
              <img src="/logo.png" alt="Logo" className="w-full h-full" />
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
      <div className="mx-auto xl:w-3/5 md:w-3/4 w-4/5 xl:py-12 mt-4">
        <div className=" w-1/2 flex flex-col justify-center items-start space-y-5">
          <h3 className="font-opensans self-start font-semibold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-black">
            Our Work
          </h3>
          <p className="font-opensans self-start font-normal xl:text-lg md:text-sm sm:text-xs text-[10px] text-black">
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
      </div>
      <div className="w-full xl:py-12 mt-4 bg-[#f8f8f8]">
        <div className="mx-auto xl:w-3/5 md:w-3/4 w-4/5 flex flex-col justify-center items-center space-y-5">
          <h3 className="font-opensans self-center font-semibold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-black">
            Events and Function
          </h3>
          <div className="w-full mt-4">
            <Swiper
              spaceBetween={30}
              modules={[Navigation]}
              navigation={true}
              breakpoints={{
                310: {
                  slidesPerView: 1,
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              className="w-full flex justify-start items-center"
            >
              {events.map((event) => {
                return (
                <SwiperSlide key={event.event_id} className="p-4 pt-4 flex flex-col justify-center items-center space-y-4 bg-white rounded-xl shadow-xl">
                    <div className="h-1/2"><img src={event.image} alt={event.title} className="w-full h-full" /></div>
                    <h2 className="font-poppins font-medium text-black xl:text-lg md:text-base sm:text-sm text-xs">{event.title}</h2>
                    <div className="flex justify-center items-center w-full">
                        <button type="button" className="px-12 py-3 font-poppins font-normal text-white bg-[#4455C0] xl:text-base md:text-sm sm:text-xs text-[10px] rounded-lg">
                        <Link href={`/works/details_page/${event.event_id}`}>SEE MORE</Link>
                        </button>
                    </div>
                </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
