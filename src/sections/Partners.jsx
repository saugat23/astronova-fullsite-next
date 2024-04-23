import React from "react";
import PartnersTestimonial from "../components/UI/PartnersTestimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { TbRuler } from "react-icons/tb";

const Partners = () => {
  return (
    <section className="h-auto max-w-screen overflow-hidden mx-auto 2xl:py-12 lg:py-8 md:py-6 py-4 xl:mt-12 lg:mt-8">
      <div className="xl:mt-20 lg:mt-18 flex flex-col justify-center items-center xl:space-y-12 lg:space-y-10">
        <h3 className="font-opensans font-bold text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-[#0B77A5] tracking-tight relative after:bg-[#0B77A5] after:absolute after:h-[4px] after:w-0 after:-bottom-[2px] after:left-0 hover:after:w-full after:transition-all after:duration-300">
          OUR PARTNERS IN CHARGE
        </h3>
        <div className="bg-[#00000005] xl:py-20 lg:py-18 xl:-mx-12 lg:-mx-8 w-full md:py-8 py-6">
          <div className="marquee py-2 flex items-center">
            <div className="track">
              <div className="content flex">
                <Image
                  src="/triontech.svg"
                  alt="Trion Tech Image"
                  width={40}
                  height={30}
                  className="transform scale-100 hover:scale-110 transition-transform sm:w-12 md:w-16 lg:w-20 xl:w-24 2xl:w-32"
                />
                <Image
                  src="/neo.svg"
                  alt="NEO Image"
                  width={40}
                  height={30}
                  className="transform scale-100 hover:scale-110 transition-transform sm:w-12 md:w-16 lg:w-20 xl:w-24 2xl:w-32"
                />
                <Image
                  src="/creativecafe.svg"
                  alt="Creative Cafe Image"
                  width={40}
                  height={30}
                  className="transform scale-100 hover:scale-110 transition-transform sm:w-12 md:w-16 lg:w-20 xl:w-24 2xl:w-32"
                />
                <Image
                  src="/man.svg"
                  alt="MAN Image"
                  width={40}
                  height={30}
                  className="transform scale-100 hover:scale-110 transition-transform sm:w-12 md:w-16 lg:w-20 xl:w-24 2xl:w-32"
                />
                <h2 className="font-inter font-bold text-2xl text-black transform scale-100 hover:scale-110 transition-transform">
                  EduCompass
                </h2>
                <Image
                  src="/dur.svg"
                  alt="Dursikshya Image"
                  width={40}
                  height={30}
                  className="transform scale-100 hover:scale-110 transition-transform sm:w-12 md:w-16 lg:w-20 xl:w-24 2xl:w-32"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className="xl:mt-10 lg:mt-8 flex flex-col justify-center items-center"
      >
        <div className="bg-[url('/joinbg.png')] bg-cover flex flex-col justify-start items-center w-full p-6 h-[75vh]"></div>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="bg-[#2496D7] xl:py-12 lg:py-10 xl:px-12 lg:px-10 py-2 px-2 flex flex-col justify-center items-center space-y-6"
        >
          <div className="w-[80%] mx-auto flex flex-col justify-center items-center space-y-4">
            <h3 className="font-opensans tracking-[-0.07em] text-white text-center font-bold xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-xl">
              JOIN THE JOURNEY
            </h3>
            <h3 className="font-montserrat tracking-wider text-center text-white font-bold xl:text-2xl lg:text-xl md:text-lg text-base">
              Be the change you want to see
            </h3>
            <p className="font-opensans font-normal xl:text-lg lg:text-base md:text-sm text-xs text-white text-center py-2">
              We are working to create an environment where students can receive
              support, mentorship, guidance and access to tools and facilities
              to explore their curiosity so that they could be able to develop
              practical & soft skills, entrepreneurial skill and turn their
              ideas into reality and provide them national and international
              exposure to explore their innovative research ideas. Together
              let’s make a community of change makers.
            </p>
          </div>
          <div className="w-full xl:w-[80%] mx-auto flex md:flex-row flex-col space-y-4 md:space-y-0 justify-around items-center md:items-start text-white">
            <button
              data-aos="fade-up"
              data-aos-duration="900"
              type="button"
              className="bg-[#0012FF] hover:scale-105 p-4 px-6 font-opensans font-bold tracking-tighter rounded-lg xl:text-2xl lg:text-xl md:text-lg text-base cursor-pointer hover:bg-white hover:text-[#0012FF] hover:duration-200"
            >
              JOIN AS VOLUNTEER
            </button>
            <button
              data-aos="fade-up"
              data-aos-duration="1100"
              type="button"
              className="bg-[#EC008C] hover:scale-105 p-4 px-6 font-opensans font-bold tracking-tighter rounded-lg xl:text-2xl lg:text-xl md:text-lg text-base cursor-pointer hover:bg-white hover:text-[#EC008C] hover:duration-200"
            >
              BECOME A TEAM MEMBER
            </button>
            <button
              data-aos="fade-up"
              data-aos-duration="1300"
              type="button"
              className="bg-[#F26522] hover:scale-105 p-4 px-6 font-opensans font-bold tracking-tighter rounded-lg xl:text-2xl lg:text-xl md:text-lg text-base cursor-pointer hover:bg-white hover:text-[#F26522] hover:duration-200"
            >
              MAKE A DONATION
            </button>
          </div>
        </div>
      </div>

        <h3 className="xl:mt-12 mt-4 font-opensans font-bold w-auto text-center text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-[#0B77A5] tracking-tight">
          GROUND STORIES
        </h3>
        <Swiper
          spaceBetween={100}
          navigation={true}
          breakpoints={{
            240: {
              slidesPerView: 1,
            },
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            1024: {
              // width: 940,
              slidesPerView: 3,
            },
          }}
          modules={[Navigation]}
          className="xl:mt-12 mt-4  mx-auto w-full md:w-[90%] xl:w-[80%]"
        >
          <div className="flex justify-center items-center lg:space-x-4 xl:py-12 xl:px-12 lg:py-8 lg:px-8">
            <div className="bg-[#639A1B] xl:py-18 xl:px-12 lg:py-16 lg:px-10 flex flex-col justify-center items-center">
              <h4 className="font-inter font-light xl:text-[3.3rem] lg:text-5xl text-white">
                Ground <span className="font-bold text-[#B01B1C]">Stories</span>
              </h4>
              <div className="flex justify-center items-center space-x-2">
                <button
                  type="button"
                  className="testimonials-swiper-button-next p-2 rounded-full border border-white text-[#B01B1C]"
                >
                  &larr;
                </button>
                <button
                  type="button"
                  className="testimonials-swiper-button-prev p-2 rounded-full border border-white text-[#B01B1C]"
                >
                  {" "}
                  &rarr;
                </button>
              </div>
            </div>
            <div>
              <SwiperSlide>
                <PartnersTestimonial
                  imgSrc="/pushpajimee.png"
                  testimonial="When I ask my students about their dreams and what they want to become in the future, most of them tell me they want to become a teacher like me. Knowing that I am their ideal teacher is something that I am most proud of and this is what inspires me to give my best every day."
                  name="Pushpa Jimee"
                  position="Community Teacher, UWS Kharang"
                />
              </SwiperSlide>
            </div>
            <div>
              <SwiperSlide>
                <PartnersTestimonial
                  imgSrc="/uws.png"
                  testimonial="The pad-making training I received from
        UWS Nepal has been incredibly
        impactful. I have been using the pad
        myself, which is better than the
        household pad I used to use. Beyond just
        the pads, the training expanded my
        understanding of menstrual hygiene and
        highlighted the essential role of a
        balanced diet during menstruation."
                  name="Mala"
                  position="Mothers’ Group member, UWS Jaisithok"
                />
              </SwiperSlide>
            </div>
            <div>
              <SwiperSlide>
                <PartnersTestimonial
                  imgSrc="/dilkumarisubba.png"
                  testimonial="I believe encouraging children to express
        and discover their creativity beyond the
        pages of books, we remove the limits
        confining their growth."
                  name="Dil Kumari Subba"
                  position="Head Teacher- UWS Setikanya"
                />
              </SwiperSlide>
            </div>
            <div>
              <SwiperSlide>
                <PartnersTestimonial
                  imgSrc="/pushpajimee.png"
                  testimonial="When I ask my students about their dreams and what they want to become in the future, most of them tell me they want to become a teacher like me. Knowing that I am their ideal teacher is something that I am most proud of and this is what inspires me to give my best every day."
                  name="Pushpa Jimee"
                  position="Community Teacher, UWS Kharang"
                />
              </SwiperSlide>
            </div>
          </div>
        </Swiper>

      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className="w-full flex justify-between h-auto items-center bg-gradient-to-br from-yellow-400 to-green-900"
      >
        <div className="hidden h-full md:block md:w-1/2">
          <img
            src="/childrens.png"
            alt="Childrens Image"
            className="h-full w-full"
          />
        </div>
        <div className="w-full md:w-1/2 xl:p-10 lg:p-8 py-4 flex flex-col justify-center items-center">
          <h3 className="font-opensans tracking-tighter font-extrabold 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-lg text-white text-center">
            NURTURING CHILDREN’S CURIOSITY, IGNITING THEIR POTENTIAL
          </h3>
          <div>
            <Image
              src="/mail.svg"
              alt="Mail Image"
              width={180}
              height={120}
              className="sm:w-72 md:w-80 lg:w-96 xl:w-[30rem] 2xl:w-[34rem]"
            />
          </div>
          <h3 className="font-opensans tracking-tighter font-extrabold xl:text-3xl lg:text-2xl text-white">
            REACH OUT TO US
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Partners;
