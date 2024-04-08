import React from "react";
import PartnersTestimonial from "../components/UI/PartnersTestimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Marquee from "react-fast-marquee";

const Partners = () => {
  return (
    <section className="h-auto max-w-screen overflow-hidden xl:mt-20 lg:mt-16">
      <Swiper
        spaceBetween={100}
        navigation={{
          nextEl: ".testimonials-swiper-button-next",
          prevEl: ".testimonials-swiper-button-prev",
        }}
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

      <div className="xl:mt-20 lg:mt-18 flex flex-col justify-center items-center xl:space-y-12 lg:space-y-10">
        <h3 className="font-inter font-bold xl:text-5xl lg:text-4xl text-[#2496D7D4] relative after:bg-[#2496D7D4] after:absolute after:h-[4px] after:w-0 after:-bottom-4 after:left-0 hover:after:w-full after:transition-all after:duration-300">
          OUR PARTNERS IN CHARGE
        </h3>
        <div className="bg-[#00000005] xl:py-20 xl:px-12 lg:py-18 lg:px-10 xl:-mx-12 lg:-mx-8 w-full">
          <Marquee className="flex justify-around items-center xl:space-x-10 lg:space-x-8">
            <div className="flex justify-center items-center mx-12">
              <img src="/triontech.png" alt="Trion Tech Image" />
            </div>
            <div className="flex justify-center items-center mx-12">
              <img src="/neo.png" alt="NEO Image" />
            </div>
            <div className="flex justify-center items-center mx-12">
              <img src="/creativecafe.png" alt="Creative Cafe Image" />
            </div>
            <div className="flex justify-center items-center mx-12">
              <img src="/man.png" alt="MAN Image" />
            </div>
            <div className="flex justify-center items-center mx-12">
              <h2 className="font-inter font-bold text-2xl text-black">
                EduCompass
              </h2>
            </div>
            <div className="flex justify-center items-center">
              <img src="/dursikshya.png" alt="Dursikshya Image" />
            </div>
          </Marquee>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="700" className="xl:mt-10 lg:mt-8 flex flex-col justify-center items-center">
        <div className="bg-[url('/joinbg.png')] bg-cover flex flex-col justify-start items-center w-full p-6 h-[75vh]">
          <h3 className="font-opensans tracking-tighter text-[#EC008C] font-bold xl:text-6xl lg:text-5xl">
            JOIN THE JOURNEY
          </h3>
          <h3 className="font-opensans tracking-tight text-[#0012FF] font-bold xl:text-3xl lg:text-2xl">
            Be the change you want to see
          </h3>
        </div>
        <div data-aos="fade-up" data-aos-duration="700" className="bg-[#2496D7] xl:py-12 lg:py-10 xl:px-12 lg:px-10 flex flex-col justify-center items-center space-y-6">
          <div className="w-[80%] mx-auto">
            <p className="font-opensans font-normal xl:text-2xl lg:text-xl text-white text-center">
              We are working to create an environment where students can receive
              support, mentorship, guidance and access to tools and facilities
              to explore their curiosity so that they could be able to develop
              practical & soft skills, entrepreneurial skill and turn their
              ideas into reality and provide them national and international
              exposure to explore their innovative research ideas. Together
              let’s make a community of change makers.
            </p>
          </div>
          <div className="w-[80%] mx-auto flex justify-around items-center text-white">
            <button data-aos="fade-right" data-aos-duration="900"
              type="button"
              className="bg-[#0012FF] p-4 font-opensans font-extrabold tracking-tighter xl:text-3xl lg:text-2xl"
            >
              JOIN AS VOLUNTEER
            </button>
            <button data-aos="fade-right" data-aos-duration="1100"
              type="button"
              className="bg-[#EC008C] p-4 font-opensans font-extrabold tracking-tighter xl:text-3xl lg:text-2xl"
            >
              BECOME A TEAM MEMBER
            </button>
            <button data-aos="fade-right" data-aos-duration="1300"
              type="button"
              className="bg-[#F26522] p-4 font-opensans font-extrabold tracking-tighter xl:text-3xl lg:text-2xl"
            >
              MAKE A DONATION
            </button>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="700" className="w-full flex justify-between items-center">
        <div className="w-1/2">
          <img src="/childrens.png" alt="Childrens Image" className="h-full w-full" />
        </div>
        <div className="w-1/2 xl:p-10 lg:p-8 bg-[#575504C9] flex flex-col justify-center items-center">
          <h3 className="font-opensans tracking-tighter font-extrabold xl:text-6xl lg:text-5xl text-[#AE0D19EB] text-center">
            NURTURING CHILDREN’S CURIOSITY, IGNITING THEIR POTENTIAL
          </h3>
          <div>
            <img src="/mail.png" alt="Mail Image" />
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
