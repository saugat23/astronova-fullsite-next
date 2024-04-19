"use client";

import React from "react";
import BoardMember from "../../../components/UI/BoardMember";
import Experts from "../../../components/UI/Experts";
import TeamMembers from "../../../components/UI/TeamMembers";
import PartnersTestimonial from "../../../components/UI/PartnersTestimonial";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const page = () => {
  return (
    <section className="h-auto max-w-screen overflow-hidden">
      <div className="bg-[#77AB33] flex justify-center items-center 2xl:py-10 lg:py-8 md:py-6 py-4 px-4">
        <h2 className="font-opensans font-bold tracking-tighter 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-white">
          OUR TEAM
        </h2>
      </div>
      <div className="flex flex-col justify-center items-start space-y-8 xl:px-10 2xl:px-12 md:px-8 px-6 py-6">
        <h3 className="font-opensans font-bold tracking-tighter 2xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-[#2496D7]">
          Our Leadership
        </h3>
        <div
          className={`xl:mx-auto xl:w-[80%] w-full flex flex-col md:flex-row justify-center md:justify-between items-center space-y-4`}
        >
          <div className={`border-l-[24px] border-[#77AB33] w-1/2`}>
            <Image
              src="/kishanbastola.png"
              alt="kishanbastola"
              width={200}
              height={200}
              priority
              className={`2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-56 border-2 border-[#AE0D19]`}
            />
          </div>
          <div className="flex-col justify-center items-start w-full md:w-1/2 space-y-4">
            <h4 className="font-opensans tracking-tighter font-bold text-[#AE0D19] 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-center">
              KISHAN BASTOLA
            </h4>
            <h4 className="font-opensans tracking-tighter font-bold text-[#77AB33] 2xl:text-3xl xl:text-2xl md:text-xl sm:text-lg text-base text-center">
              FOUNDER AND PRESIDENT
            </h4>
            <p className="font-montserrat font-medium 2xl:text-2xl xl:text-xl md:text-lg sm:text-base text-sm text-[#042038] text-center">
              Astronova Science Foundation is an officially registered as a
              non-profit organization under the name of &quot;Astronova
              Foundation Nepal&quot;(Companies Act, 2006), Office of the Company
              Register, Tripureshwor, Kathmandu .As we believe the development
              of the nation and the world is all about the education system of
              the nation
            </p>
            <div className="mt-4 w-full flex justify-center items-center space-x-4">
              <div className="border border-[#DB8114] rounded-full">
                <a href="#">
                  <img
                    src="/assets/facebook.svg"
                    alt="Facebook"
                    className="fill-[#77AB33] w-6"
                  />
                </a>
              </div>
              <div className="border border-[#2496D7] rounded-full">
                <a href="#">
                  <img
                    src="/assets/web.svg"
                    alt="Web"
                    className="fill-[#77AB33] w-6"
                  />
                </a>
              </div>
              <div className="border border-[#77AB33] rounded-full">
                <a href="#">
                  <img
                    src="/assets/instagram.svg"
                    alt="Instagram"
                    className="fill-[#77AB33] w-6"
                  />
                </a>
              </div>
              <div className="border border-[#AF1B1C] rounded-full">
                <a href="#">
                  <img
                    src="/assets/gmail.svg"
                    alt="Gmail"
                    className="fill-[#77AB33] w-6"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`xl:mx-auto xl:w-[80%] flex flex-col md:flex-row-reverse justify-between items-center space-y-4`}
        >
          <div className={`border-r-[24px] border-[#77AB33] md:w-1/2`}>
            <Image
              src="/babatundeayoola.png"
              alt="Babatundeayoola"
              width={200}
              height={200}
              priority
              className={`2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-56 border-2 border-[#AE0D19] ml-auto`}
            />
          </div>
          <div className="flex-col justify-center items-start md:w-1/2 space-y-4">
            <h4 className="font-opensans tracking-tighter font-bold text-[#AE0D19] 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-center">
              BABATUNDE AYOOLA
            </h4>
            <h4 className="font-opensans tracking-tighter font-bold text-[#77AB33] 2xl:text-3xl xl:text-2xl md:text-xl sm:text-lg text-base text-center">
              GLOBAL AMBASSADOR
            </h4>
            <p className="font-montserrat font-medium 2xl:text-2xl xl:text-xl md:text-lg sm:text-base text-sm text-[#042038] text-center">
              Astronova Science Foundation is an officially registered as a
              non-profit organization under the name of &quot;Astronova
              Foundation Nepal&quot;(Companies Act, 2006), Office of the Company
              Register, Tripureshwor, Kathmandu .As we believe the development
              of the nation and the world is all about the education system of
              the nation
            </p>
            <div className="mt-4 w-full flex justify-center items-center space-x-4">
              <div className="border border-[#DB8114] rounded-full">
                <a href="#">
                  <img
                    src="/assets/facebook.svg"
                    alt="Facebook"
                    className="fill-[#77AB33] w-6"
                  />
                </a>
              </div>
              <div className="border border-[#2496D7] rounded-full">
                <a href="#">
                  <img
                    src="/assets/web.svg"
                    alt="Web"
                    className="fill-[#77AB33] w-6"
                  />
                </a>
              </div>
              <div className="border border-[#77AB33] rounded-full">
                <a href="#">
                  <img
                    src="/assets/instagram.svg"
                    alt="Instagram"
                    className="fill-[#77AB33] w-6"
                  />
                </a>
              </div>
              <div className="border border-[#AF1B1C] rounded-full">
                <a href="#">
                  <img
                    src="/assets/gmail.svg"
                    alt="Gmail"
                    className="fill-[#77AB33] w-6"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto overflow-hidden">
        <div className="flex flex-col justify-center items-center space-y-8 shadow-xl lg:py-12 lg:px-12 w-full">
          <div className="flex justify-center items-center">
            <h3 className="font-opensans tracking-tighter font-extrabold 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-justify text-[#0052A0]">
              OUR BOARD OF DIRECTORS
            </h3>
          </div>
          <div className="md:w-[60%] w-full mx-auto flex md:flex-row flex-col space-y-3 md:space-y-0 justify-around items-center">
            <BoardMember
              imgSrc="cofounder.png"
              name="Mr. Kishan Bastola"
              position="Co-Founder"
            />
            <BoardMember
              imgSrc="chiefsecretary.png"
              name="Mr. Kishan Bastola"
              position="Chief Secretary"
            />
          </div>
          <div className="md:w-[80%] w-full mx-auto flex md:flex-row flex-col space-y-3 md:space-y-0 justify-around items-center">
            <BoardMember
              imgSrc="treasurer.png"
              name="Mr. Kishan Bastola"
              position="Treasurer"
            />
            <BoardMember
              imgSrc="boardmember1.png"
              name="Mr. Sandip Dahal"
              position="Board Member"
            />
            <BoardMember
              imgSrc="boardmember2.png"
              name="Ms. Rojina Bastola"
              position="Board Member"
            />
          </div>
        </div>
      </div>
      <div className="h-auto overflow-hidden mt-4">
        <div className="flex justify-center items-center py-8">
          <h3 className="font-opensans tracking-tighter font-extrabold lg:text-[2.5rem] text-justify text-[#0052A0]">
            EXPERT MENTORS
          </h3>
        </div>
        <div className="shadow-lg bg-white lg:py-12 lg:px-12 grid grid-cols-4 grid-rows-1 gap-x-4">
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
                slidesPerView: 4,
              },
            }}
            className="w-screen flex justify-start items-center"
          >
            <SwiperSlide className="py-4">
              <Experts
                imgSrc="/expert1.png"
                name="Dr. Yogesh Chandna"
                profession="Author,Vedic Mathematics"
              />
            </SwiperSlide>
            <SwiperSlide className="py-4">
              <Experts
                imgSrc="/expert2.png"
                name="Mr. Babatunde Ayoola"
                profession="Child Psychologist"
              />
            </SwiperSlide>
            <SwiperSlide className="py-4">
              <Experts
                imgSrc="/kapilpaudel.png"
                name="Kapil Paudel"
                profession="Scientist"
              />
            </SwiperSlide>
            <SwiperSlide className="py-4">
              <Experts
                imgSrc="/chhabiadhikari.png"
                name="Mr. Chhabi Adhikari"
                profession="NLP Trainer"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="h-auto overflow-hidden mt-4">
        <div className="bg-[url('/teammemberbg.svg')] bg-[center_bottom_4rem]">
          <div className="flex justify-center items-center py-8">
            <h3 className="font-opensans tracking-tighter font-extrabold lg:text-[2.5rem] text-justify text-[#0052A0]">
              LEGAL ADVISOR
            </h3>
          </div>
          <div className="shadow-lg bg-transparent lg:py-12 lg:px-12 grid grid-cols-1 grid-rows-1 place-content-center place-items-center">
            <div className="flex flex-col justify-center items-center space-y-2 h-auto">
              <div className="h-full rounded-md">
                <img
                  src="bishnuprasaddhakal.png"
                  alt="Bishnu Prasad Dhakal"
                  className="h-full border border-[#AE0D19]"
                />
              </div>
              <h4 className="font-montserrat font-semibold text-xl text-[#1A1728]">
                Bishnu Prasad Dhakal
              </h4>
              <h4 className="font-montserrat font-semibold text-sm text-[#1A1728B5]">
                Legal Practitioner
              </h4>
            </div>
          </div>
          <div className="flex justify-center items-center py-8">
            <h3 className="font-opensans tracking-tighter font-extrabold lg:text-[2.5rem] text-justify text-[#0052A0]">
              OUR TEAM MEMBERS
            </h3>
          </div>
          <div className="hidden shadow-lg bg-transparent lg:py-12 lg:px-12 lg:grid grid-cols-4 gap-x-4 gap-y-6">
            <TeamMembers
              imgSrc="/aayushbasnet.png"
              name="Er. Aayush Basnet"
              position="Program Director"
            />
            <TeamMembers
              imgSrc="/anmolpant.png"
              name="Mr. Anmol Pant"
              position="Project Coordinator"
            />
            <TeamMembers
              imgSrc="/dikshyakharel.png"
              name="Mrs. Dikshya Kharel"
              position="Finance Officer"
            />
            <TeamMembers
              imgSrc="/ishanacharya.png"
              name="Mr. Ishan Acharya"
              position="Event Manger, Podcast Host"
            />
            <TeamMembers
              imgSrc="/aayushnepal.png"
              name="Mr. Aayush Nepal"
              position="Astrophysics Research Intern"
            />
            <TeamMembers
              imgSrc="/anujadhikari.png"
              name="Mr. Anuj Adhikari"
              position="Reserch Coordinator Intern"
            />
            <TeamMembers
              imgSrc="/namratabartaula.png"
              name="Ms. Namrata Bartaula"
              position="Stone Art & Crafting Intern"
            />
            <TeamMembers
              imgSrc="/rojinabastola.png"
              name="Ms. Rojina Bastola"
              position="Finance Coordinator"
            />
            <TeamMembers
              imgSrc="/rabinpariyar.png"
              name="Mr. Rabin Pariyar"
              position="Graphics Designer"
            />
            <TeamMembers
              imgSrc="/riteshprajapati.png"
              name="Mr. Ritesh Prajapati"
              position="Video Editor Intern"
            />
            <TeamMembers
              imgSrc="/riteshprajapati.png"
              name="Mr. Ritesh Prajapati"
              position="Student Ambassador"
            />
            <TeamMembers
              imgSrc="/nishantsah.png"
              name="Mr. Nishant Shah"
              position="Web Developer Intern"
            />
            <TeamMembers
              imgSrc="/rajuraut.png"
              name="Mr. Raju Raut"
              position="Student Coordinator"
            />
          </div>
          <div className="shadow-lg bg-transparent py-2 block lg:hidden">
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
              className="w-screen flex justify-start items-center"
            >
              <SwiperSlide>
                <TeamMembers
                  imgSrc="/aayushbasnet.png"
                  name="Er. Aayush Basnet"
                  position="Program Director"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamMembers
                  imgSrc="/anmolpant.png"
                  name="Mr. Anmol Pant"
                  position="Project Coordinator"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamMembers
                  imgSrc="/dikshyakharel.png"
                  name="Mrs. Dikshya Kharel"
                  position="Finance Officer"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamMembers
                  imgSrc="/ishanacharya.png"
                  name="Mr. Ishan Acharya"
                  position="Event Manger, Podcast Host"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamMembers
                  imgSrc="/aayushnepal.png"
                  name="Mr. Aayush Nepal"
                  position="Astrophysics Research Intern"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamMembers
                  imgSrc="/anujadhikari.png"
                  name="Mr. Anuj Adhikari"
                  position="Reserch Coordinator Intern"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamMembers
                  imgSrc="/namratabartaula.png"
                  name="Ms. Namrata Bartaula"
                  position="Stone Art & Crafting Intern"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamMembers
                  imgSrc="/rojinabastola.png"
                  name="Ms. Rojina Bastola"
                  position="Finance Coordinator"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamMembers
                  imgSrc="/rabinpariyar.png"
                  name="Mr. Rabin Pariyar"
                  position="Graphics Designer"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamMembers
                  imgSrc="/riteshprajapati.png"
                  name="Mr. Ritesh Prajapati"
                  position="Video Editor Intern"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamMembers
                  imgSrc="/riteshprajapati.png"
                  name="Mr. Ritesh Prajapati"
                  position="Student Ambassador"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamMembers
                  imgSrc="/nishantsah.png"
                  name="Mr. Nishant Shah"
                  position="Web Developer Intern"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamMembers
                  imgSrc="/rajuraut.png"
                  name="Mr. Raju Raut"
                  position="Student Coordinator"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="h-auto w-full overflow-hidden flex justify-center md:justify-evenly 2xl:space-x-20 xl:space-x-16 md:space-x-12 sm:space-x-10 space-x-6 2xl:py-12 lg:py-8 py-4 2xl:px-12 lg:px-8 md:px-6 px-2 bg-[#2496D72E]">
        <div className="flex flex-col self-start justify- items-center space-y-4">
          <h4 className="w-full font-opensans tracking-tighter font-semibold 2xl:text-3xl xl:text-2xl md:text-xl sm:text-lg text-base text-center text-[#0052A0]">
            Testimonials
          </h4>
          <div className="flex justify-center items-center 2xl:space-x-12 lg:space-x-8 md:space-x-6 space-x-4">
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
              }}
              className="w-screen flex justify-start items-center"
            >
              <SwiperSlide>
                <PartnersTestimonial
                  imgSrc="/pushpajimee.png"
                  testimonial="When I ask my students about their dreams and what they want to become in the future, most of them tell me they want to become a teacher like me. Knowing that I am their ideal teacher is something that I am most proud of and this is what inspires me to give my best every day."
                  name="Pushpa Jimee"
                  position="Community Teacher, UWS Kharang"
                />
              </SwiperSlide>
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
              <SwiperSlide>
                <PartnersTestimonial
                  imgSrc="/pushpajimee.png"
                  testimonial="When I ask my students about their dreams and what they want to become in the future, most of them tell me they want to become a teacher like me. Knowing that I am their ideal teacher is something that I am most proud of and this is what inspires me to give my best every day."
                  name="Pushpa Jimee"
                  position="Community Teacher, UWS Kharang"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
