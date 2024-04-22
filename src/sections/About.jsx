import React, { useCallback, useRef } from "react";
import SupportStudent from "../components/UI/SupportStudent";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TrendingUpIcon } from "lucide-react";

const About = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className='h-auto max-w-screen overflow-hidden bg-[url("/aboutsection.png")] bg-cover mx-auto 2xl:py-12 lg:py-8 md:py-6 py-4 px-4 w-full md:w-[90%] xl:w-[80%] md:mt-8 mt-4'>
      <div className="w-full flex md:flex-row flex-col justify-center items-center md:space-x-4 space-x-0">
        <div className="h-auto flex flex-col justify-center items-center xl:pr-8 xl:border-r-4 border-[#DB8114] md:w-full">
          <Image src="/assets/logo.png" alt="" width={100} height={80} className="py-4 md:w-full h-auto"/>
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
        className="flex md:flex-row flex-col justify-between items-center mt-8 xl:py-8"
      >
        <div className="w-full md:w-1/3 flex flex-col justify-evenly items-start space-y-6">
          <h3 className="font-opensans font-bold text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-[#0B77A5] tracking-tight">
            OUR MAJOR WORKING AREA
          </h3>
          <p className="font-opensans font-normal text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-black text-start">
            We are actively involving various working area. However, our major
            focusing working area are as below.
          </p>
        </div>
        <div className="grow p-4">
          <Image
            src="/workingarea.svg"
            alt="Working Area Image"
            width={260}
            height={140}
            className="md:w-[36rem] lg:w-[48rem] xl:w-[60rem] xl:h-[40rem]"
          />
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-between items-center space-y-12 mt-8">
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
            <SwiperSlide className="py-4">
              <SupportStudent
                data-aos="fade-right"
                data-aos-duration="500"
                imgSrc="/supportbroadcast.png"
                project="Broadcast"
                desc="Explore the latest trends shaping our world and discover 
              how these transformations will impact our future. Join us for 
              insightful discussions on technological advancements..."
                progressValue="80"
                achieved="$40000000"
                target="$80000000"
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <SupportStudent
                data-aos="fade-right"
                data-aos-duration="700"
                imgSrc="/supportstudents.png"
                project="Tinkering Labs Project"
                desc="Step into the world of Tinkering Labs, where creativity knows no
              bounds! Our tinkering spaces are designed to ignite curiosity,
              foster innovation, and unleash the imagination of..."
                progressValue="25"
                achieved="$14000000"
                target="$41000000"
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <SupportStudent
                data-aos="fade-right"
                data-aos-duration="900"
                imgSrc="/supportplanterium.png"
                project="Planterium Labs"
                desc="Embark on a cosmic adventure with Planetorium Labs! Our 
            cutting-edge facilities bring the wonders of the universe to 
            life through state-of-the-art technology. Join us for an..."
                progressValue="10"
                achieved="$56000"
                target="$560000000"
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <SupportStudent
                data-aos="fade-right"
                data-aos-duration="1100"
                imgSrc="/supportplanterium.png"
                project="Planterium Labs"
                desc="Embark on a cosmic adventure with Planetorium Labs! Our 
            cutting-edge facilities bring the wonders of the universe to 
            life through state-of-the-art technology. Join us for an..."
                progressValue="10"
                achieved="$56000"
                target="$560000000"
              />
            </SwiperSlide>
            <div className="swiper-button-next" onClick={handleNext}></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default About;
