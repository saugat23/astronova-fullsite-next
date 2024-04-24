"use client"
import React, { useState, useCallback, useRef, useEffect } from "react";
import SupportStudent from "../components/UI/SupportStudent";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { getAllCampaign } from "../app/services/api";

const About = () => {
  const sliderRef = useRef(null);
  const [campaigns, setCampaigns] = useState([]);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

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
      <div className="flex md:flex-row flex-col justify-center items-center md:space-x-4 space-x-0 mx-auto w-full md:w-[90%] xl:w-[80%] md:mt-8 mt-4">
        <div className="h-auto flex flex-col justify-center items-center xl:pr-8 xl:border-r-4 border-[#DB8114] md:w-full">
          <Image
            src="/assets/logo.png"
            alt=""
            width={100}
            height={80}
            className="py-4 md:w-full h-auto"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="flex flex-col justify-center space-y-4 items-start"
        >
          <h3 className="font-opensans font-bold text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-[#33A4C6] tracking-tight">
            About Us
          </h3>
          <p className="font-opensans text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-normal">
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
        className="xl:py-8 bg-[#D9D9D9] md:mt-8 mt-4"
      >
        <div className="flex md:flex-row flex-col justify-between items-center bg-[#D9D9D94D] mx-auto w-full md:w-[90%] xl:w-[80%]">
          <div className="w-full md:w-1/3 flex flex-col justify-evenly items-center space-y-6 xl:py-4 xl:px-4 xl:border-r-4 border-[#DB8114]">
            <h3 className="font-opensans font-bold text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-[#0B77A5] tracking-tight">
              OUR MAJOR WORKING AREA
            </h3>
            <p className="font-opensans font-normal text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-black text-center">
              We are actively involving various working area. However, our major
              focusing working area are as below.
            </p>
          </div>
          <div className="grow p-4 h-[70vh] flex justify-center items-center">
            <div className="relative bg-transparent border-[10px] border-white rounded-full mx-auto h-3/4 w-[55%] z-20 my-auto flex justify-center items-center">
              <div className="w-[45%] h-1/2 rounded-full bg-white flex justify-center items-center">
                <h3 className="font-opensans font-bold 2xl:text-2xl xl:text-xl lg:text-lg md:text-base text-sm w-3/4 mx-auto text-center">
                  OUR MAJOR WORKING AREA
                </h3>
              </div>
              <Link
                href={{ pathname: "/working_area"}}
                className="absolute -top-[45%] translate-y-1/2 left-1/2 -translate-x-1/2 h-auto w-[35%] bg-[#2496D7] font-opensans font-medium 2xl:text-lg lg:text-base md:text-sm text-xs tracking-tighter mx-auto text-center flex flex-col justify-center items-center space-y-2 rounded-lg hover:scale-105 hover:duration-400 text-white p-4"
              >
                <Image
                  src="/assets/afterschool.svg"
                  alt=""
                  width="120"
                  height="120"
                />
                AFTER SCHOOL PROGRAM
              </Link>
              <Link
                href={{ pathname: "/working_area3"}}
                className="absolute -top-1/4 translate-y-1/2 left-0 -translate-x-1/2 h-auto w-[35%] bg-[#AE0D19] font-opensans font-medium 2xl:text-lg lg:text-base md:text-sm text-xs tracking-tighter mx-auto text-center flex flex-col justify-center items-center space-y-2 rounded-lg hover:scale-105 hover:duration-400 text-white p-4"
              >
                <Image
                  src="/assets/startup.svg"
                  alt=""
                  width="100"
                  height="100"
                />
                STARTUP & INNOVATION
              </Link>
              <Link
                href={{ pathname: "/working_area2"}}
                className="absolute -top-1/4 translate-y-1/2 left-full -translate-x-1/2 h-auto w-[35%] bg-[#DB8114] font-opensans font-medium 2xl:text-lg lg:text-base md:text-sm text-xs tracking-tighter mx-auto text-center flex flex-col justify-center items-center space-y-2 rounded-lg hover:scale-105 hover:duration-400 text-white p-4"
              >
                <Image
                  src="/assets/scienceexpo.svg"
                  alt=""
                  width="120"
                  height="120"
                />
                SCIENCE EXPO
              </Link>
              <Link
                href={{ pathname: "/working_area", query: {field: 'steam'}}}
                className="absolute bottom-[40%] translate-y-1/2 left-0 -translate-x-1/2 h-auto w-[35%] bg-white font-opensans font-medium 2xl:text-lg lg:text-base md:text-sm text-xs tracking-tighter mx-auto text-center flex flex-col justify-center items-center space-y-2 rounded-lg hover:scale-105 hover:duration-400 text-white p-4"
              >
                <Image
                  src="/assets/steam.svg"
                  alt=""
                  width="120"
                  height="160"
                />
              </Link>
              <Link
                href={{ pathname: "/working_area", query: {field: 'research'}}}
                className="absolute bottom-[40%] translate-y-1/2 left-full -translate-x-1/2 h-auto w-[35%] bg-[#BD8809] font-opensans font-medium 2xl:text-lg lg:text-base md:text-sm text-xs tracking-tighter mx-auto text-center flex flex-col justify-center items-center space-y-2 rounded-lg hover:scale-105 hover:duration-400 text-white p-4"
              >
                <Image
                  src="/assets/research.svg"
                  alt=""
                  width="80"
                  height="80"
                />
                RESEARCH & INNOVATION
              </Link>
              <Link
                href="#"
                className="absolute -bottom-4 translate-y-1/2 left-1/2 -translate-x-1/2 h-auto w-[35%] bg-[#2496D7] font-opensans font-medium 2xl:text-lg lg:text-base md:text-sm text-xs tracking-tighter mx-auto text-center flex flex-col justify-center items-center space-y-2 rounded-lg hover:scale-105 hover:duration-400 text-white p-4"
              >
                <Image
                  src="/assets/teachers.svg"
                  alt=""
                  width="40"
                  height="40"
                />
                TEACHERS PRO DEVELOPMENT, SKILL DEVELOPMENT & SOCIAL SKILLS
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full flex flex-col justify-between items-center space-y-12 mt-8 mx-auto w-full md:w-[90%] xl:w-[80%]">
        <h3 className="font-opensans font-bold text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-[#0B77A5] tracking-tight">
          SUPPORT FOR STUDENTS
        </h3>
        <div className="mt-4 w-full flex justify-center items-center">
          <Swiper
            spaceBetween={20}
            modules={[Navigation]}
            navigation={true}
            ref={sliderRef}
            breakpoints={{
              310: {
                slidesPerView: 1,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 1,
                centeredSlides: true,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="w-full flex justify-evenly items-center space-x-4"
          >
            <div className="swiper-button-prev" onClick={handlePrev}></div>
            {campaigns.map((campaign) => {
              return (
                <SwiperSlide className="py-4" key={campaign.campaign_id}>
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
                </SwiperSlide>
              )
            })}
            <div className="swiper-button-next" onClick={handleNext}></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default About;
