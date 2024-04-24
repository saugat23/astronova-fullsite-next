"use client"
import React from 'react'
import ProjectContainer from "./ProjectContainer";
import PastWork from "./PastWork";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
  return (
    <section className="h-auto max-w-screen overflow-hidden">
      <div className="w-full flex justify-center items-center 2xl:py-10 lg:py-8 md:py-6 py-4 bg-[#2D68A0]">
        <h3 className="font-opensans font-bold tracking-tighter 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg text-white">
          Our Projects
        </h3>
      </div>
      <div className="mx-auto w-[80%] max-w-[80%] flex flex-col justify-center items-start py-4 md:py-6 lg:py-8 2xl:py-10">
        <div className="flex flex-col justify-center items-start space-y-4">
          <h3 className="font-opensans tracking-tighter font-semibold 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-[#3DD47E]">
            Short-Term Projects
          </h3>
          <p className="font-opensans tracking-tight font-normal 2xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs text-[#505050]">
            Our Team are expert to deliver successful websites with multiple
            attractive features promoting your business and increasing
            productivity for your business growth.
          </p>
          <div className="w-full flex md:flex-row flex-col justify-stretch items-center md:items-start md:space-x-4 space-x-0 space-y-3 md:space-y-0">
            <ProjectContainer
              imgSrc="/projects/shorttermproject.svg"
              name="Our Vision"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non sem nunc. "
            />
            <ProjectContainer
              imgSrc="/projects/shorttermproject.svg"
              name="Our Mission"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non sem nunc. "
            />
            <ProjectContainer
              imgSrc="/projects/shorttermproject.svg"
              name="Get Involved"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non sem nunc. "
            />
          </div>
        </div>
        <div className="2xl:px-10 lg:px-8 md:px-6 px-4 h-24 w-auto">
          <img src="/projects/gap.svg" alt="Gap SVG" className="h-full" />
        </div>
        <div className="flex flex-col justify-center items-start space-y-4 bg-[url('/projects/design.svg')] bg-contain bg-no-repeat bg-right">
          <h3 className="font-opensans tracking-tighter font-semibold 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-[#3DD47E]">
            Middle-Term Projects
          </h3>
          <p className="font-opensans tracking-tight font-normal 2xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs text-[#505050]">
            Our Team are expert to deliver successful websites with multiple
            attractive features promoting your business and increasing
            productivity for your business growth.
          </p>
          <div className="w-full flex md:flex-row flex-col justify-stretch items-center md:items-start md:space-x-4 space-x-0 space-y-3 md:space-y-0">
            <ProjectContainer
              imgSrc="/projects/middletermproject.svg"
              name="Our Global Advocacy for Education Equity"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non sem nunc. Quisque a egestas ipsum. Donec pellentesque est maximus, ornare lorem a, consectetur est."
            />
            <ProjectContainer
              imgSrc="/projects/middletermproject.svg"
              name="Our Global Advocacy for Education Equity"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non sem nunc. Quisque a egestas ipsum. Donec pellentesque est maximus, ornare lorem a, consectetur est."
            />
            <ProjectContainer
              imgSrc="/projects/middletermproject.svg"
              name="Our Global Advocacy for Education Equity"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non sem nunc. Quisque a egestas ipsum. Donec pellentesque est maximus, ornare lorem a, consectetur est."
            />
          </div>
        </div>
        <div className="2xl:px-10 lg:px-8 md:px-6 px-4 h-24 w-auto">
          <img src="/projects/gap.svg" alt="Gap SVG" className="h-full" />
        </div>
        <div className="flex flex-col justify-center items-start space-y-4 bg-[url('/projects/design.svg')] bg-contain bg-no-repeat bg-right">
          <h3 className="font-opensans tracking-tighter font-semibold 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-[#3DD47E]">
            Long-Term Projects
          </h3>
          <p className="font-opensans tracking-tight font-normal 2xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs text-[#505050]">
            We do create Solid web solutions for your medium sized business that
            improve your web presence globally and strengthen your market power.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[80%] flex flex-col justify-center items-start space-y-6 max-w-[80%] py-4 md:py-6 lg:py-8 2xl:py-10">
        <h3 className="font-opensans tracking-tighter font-semibold 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-[#3DD47E]">
          Past Work and Achievements
        </h3>
        {/* <div className="w-full md:h-72 xl:h-80 2xl:h-96 h-auto flex md:flex-row flex-col justify-stretch items-center md:items-start md:space-x-4 space-x-0 space-y-3 md:space-y-0"> */}
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
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="w-full md:h-72 xl:h-80 2xl:h-96 h-auto flex md:flex-row flex-col justify-stretch items-center md:items-start md:space-x-4 space-x-0 space-y-3 md:space-y-0"
        >
          <SwiperSlide>
            <PastWork
              imgSrc="/projects/pastwork.svg"
              name="Astronova Global Symposium"
              desc="Hosted the inaugural Astronova Global Symposium, bringing together educators, innovators, and thought leaders from around the world."
            />
          </SwiperSlide>
          <SwiperSlide>
            <PastWork
              imgSrc="/projects/pastwork.svg"
              name="Recognition for STEM Education Impact"
              desc="Received national recognition for Astronova's significant impact on STEM education through awards or commendations."
            />
          </SwiperSlide>
          <SwiperSlide>
            <PastWork
              imgSrc="/projects/pastwork.svg"
              name="Innovation Lab Expansion"
              desc="Widening the reach of hands-on learning opportunities, fostering creativity and innovation among students."
            />
          </SwiperSlide>
          <SwiperSlide>
            <PastWork
              imgSrc="/projects/pastwork.svg"
              name="Recognition for STEM Education Impact"
              desc="Received national recognition for Astronova's significant impact on STEM education through awards or commendations."
            />
          </SwiperSlide>
        </Swiper>
        {/* </div> */}
      </div>
      <div className="mx-auto w-[80%] max-w-[80%] py-4 md:py-6 lg:py-8 2xl:py-10">
        <Swiper
          pagination={true}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            310: {
              slidesPerView: 1,
              centeredSlides: true,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="w-full"
        >
          <SwiperSlide className="">
            <div className="w-full min-h-[60vh] bg-[url('/projects/pagination1.svg')] bg-cover bg-no-repeat flex justify-center items-center">
              <h4 className="font-tinos font-semibold 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, corrupti.</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="w-full min-h-[60vh] bg-[url('/projects/pagination1.svg')] bg-cover bg-no-repeat flex justify-center items-center">
              <h4 className="font-tinos font-semibold 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, corrupti.</h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Projects