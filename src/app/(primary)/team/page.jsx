"use client";

import React from "react";
import BoardMember from "../../../components/UI/BoardMember";
import Experts from "../../../components/UI/Experts";
import TeamMembers from "../../../components/UI/TeamMembers";
import TestimonialsDiv from "../../../components/UI/TestimonialsDiv";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const page = () => {
  return (
    <section className="h-auto max-w-screen overflow-hidden">
      <div className="bg-[#77AB33] flex justify-center items-center py-4 px-4">
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
          <div className="shadow-lg bg-transparent lg:py-12 lg:px-12 grid grid-cols-4 gap-x-4 gap-y-6">
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
        <div className="hidden md:block self-start">
          <svg
            width="24"
            height="24"
            viewBox="0 0 108 97"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:w-10 md:w-12 lg:w-14 xl:w-16 2xl:w-20"
          >
            <path
              d="M97 97C99.8511 97 102.585 95.8674 104.601 93.8514C106.617 91.8354 107.75 89.1011 107.75 86.25V59.9985C107.75 57.1474 106.617 54.4131 104.601 52.3971C102.585 50.3811 99.8511 49.2485 97 49.2485H82.079C82.079 45.4717 82.3012 41.6948 82.7455 37.918C83.412 33.919 84.5228 30.3643 86.078 27.254C87.6332 24.1437 89.6363 21.6962 92.0873 19.9118C94.5239 17.9123 97.6343 16.9125 101.418 16.9125V0.25C95.1976 0.25 89.7509 1.583 85.0783 4.249C80.4379 6.8814 76.4511 10.5265 73.4145 14.913C70.3573 19.7414 68.1062 25.035 66.7495 30.5865C65.3776 36.7112 64.7068 42.9721 64.75 49.2485V86.25C64.75 89.1011 65.8826 91.8354 67.8986 93.8514C69.9146 95.8674 72.6489 97 75.5 97H97ZM32.5 97C35.3511 97 38.0854 95.8674 40.1014 93.8514C42.1174 91.8354 43.25 89.1011 43.25 86.25V59.9985C43.25 57.1474 42.1174 54.4131 40.1014 52.3971C38.0854 50.3811 35.3511 49.2485 32.5 49.2485H17.579C17.579 45.4717 17.8012 41.6948 18.2455 37.918C18.9192 33.919 20.03 30.3643 21.578 27.254C23.1332 24.1437 25.1363 21.6962 27.5873 19.9118C30.0239 17.9123 33.1343 16.9125 36.9183 16.9125V0.25C30.6976 0.25 25.2509 1.583 20.5783 4.249C15.9379 6.8814 11.9511 10.5265 8.91451 14.913C5.85732 19.7414 3.60624 25.035 2.24951 30.5865C0.87763 36.7112 0.206818 42.9721 0.250007 49.2485V86.25C0.250007 89.1011 1.38259 91.8354 3.39861 93.8514C5.41462 95.8674 8.14893 97 11 97H32.5Z"
              fill="#1F67AB"
              fillOpacity="0.19"
            />
          </svg>
        </div>
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
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="w-screen flex justify-start items-center"
            >
              <SwiperSlide>
                <TestimonialsDiv
                  imgSrc="/aayushnepal2.png"
                  name="Aayush Nepal"
                  position="Astrophysics & Research Enthusiast"
                  desc="“I had been capped on knowledge and Information about Astronomy, cosmology and Astrophysics for years that there wasn't anything left for me to learn on the surface staggering my growth but Astronova opened that cap and exposed me to Boundless ocean of knowledge and experience about Astronomy, cosmology and Astrophysics which is more than enough to satisfy my hunger for Astronomy, cosmology and Astrophysics. 
              Don't be capped, learn to adapt.”"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialsDiv
                  imgSrc="/anujadhikari.png"
                  name="Anuj Adhikari"
                  position="Research Enthusiast"
                  desc="“Reflecting on my journey with the Astronova Foundation, I am truly amazed by the wealth of knowledge and experiences it has brought into my life. Through my involvement, I've gained invaluable insights, honed essential skills, and formed meaningful connections with like-minded individuals. Each encounter has fueled my passion for making a positive impact and has instilled in me a profound sense of optimism for the future. With the guidance and support of Astronova, I am more determined than ever to contribute to creating a enthusiastic and brighter tomorrow.”"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialsDiv
                  imgSrc="/riteshprajapati.png"
                  name="Ritesh Prajapati"
                  position="Video Editor Intern"
                  desc="“Throughout my journey as a passionate video editor, I've explored the art of highlighting key moments, choosing the right sounds, and perfecting color grading and motion graphics. Each project fuels my determination to push creative boundaries, continuously generating new ideas for video creation. I'm always inspired by the endless possibilities of video editing. Here's to embracing the craft and the excitement it brings!”"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="hidden md:block self-end">
          <svg
            width="24"
            height="24"
            viewBox="0 0 108 97"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:w-10 md:w-12 lg:w-14 xl:w-16 2xl:w-20"
          >
            <path
              d="M11 0C8.14892 0 5.41461 1.13259 3.3986 3.14861C1.38258 5.16462 0.249992 7.89893 0.249992 10.75V37.0015C0.249992 39.8526 1.38258 42.5869 3.3986 44.6029C5.41461 46.6189 8.14892 47.7515 11 47.7515H25.921C25.921 51.5283 25.6988 55.3052 25.2545 59.082C24.588 63.081 23.4772 66.6357 21.922 69.746C20.3668 72.8563 18.3637 75.3038 15.9127 77.0882C13.4761 79.0877 10.3657 80.0875 6.58174 80.0875V96.75C12.8024 96.75 18.2491 95.417 22.9217 92.751C27.5621 90.1186 31.5489 86.4735 34.5855 82.087C37.6427 77.2586 39.8938 71.965 41.2505 66.4135C42.6224 60.2888 43.2932 54.0279 43.25 47.7515V10.75C43.25 7.89893 42.1174 5.16462 40.1014 3.14861C38.0854 1.13259 35.3511 0 32.5 0L11 0ZM75.5 0C72.6489 0 69.9146 1.13259 67.8986 3.14861C65.8826 5.16462 64.75 7.89893 64.75 10.75L64.75 37.0015C64.75 39.8526 65.8826 42.5869 67.8986 44.6029C69.9146 46.6189 72.6489 47.7515 75.5 47.7515H90.421C90.421 51.5283 90.1988 55.3052 89.7545 59.082C89.0808 63.081 87.97 66.6357 86.422 69.746C84.8668 72.8563 82.8637 75.3038 80.4127 77.0882C77.9761 79.0877 74.8657 80.0875 71.0817 80.0875V96.75C77.3024 96.75 82.7491 95.417 87.4217 92.751C92.0621 90.1186 96.0489 86.4735 99.0855 82.087C102.143 77.2586 104.394 71.965 105.75 66.4135C107.122 60.2888 107.793 54.0279 107.75 47.7515V10.75C107.75 7.89893 106.617 5.16462 104.601 3.14861C102.585 1.13259 99.8511 0 97 0L75.5 0Z"
              fill="#1F67AB"
              fillOpacity="0.19"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default page;
