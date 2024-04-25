"use client";
import React from "react";
import BoardMember from "../BoardMember";
import Experts from "../Experts";
import TeamMembers from "../TeamMembers";
import PartnersTestimonial from "../PartnersTestimonial";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Team = () => {
  return (
    <section className="h-auto max-w-screen overflow-hidden">
      <div data-aos="fade-up" data-aos-duration="400" className="bg-[url('/abouthero.png')] bg-cover h-[50vh] mt-20">
        <div className="hero-container-team w-full h-full flex justify-center items-center 2xl:py-10 lg:py-8 md:py-6 py-4 px-4">
          <h2 className="font-opensans font-bold tracking-tighter 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-white">
            OUR TEAM
          </h2>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="400" className="mx-auto max-w-7xl flex flex-col justify-center items-start space-y-28 xl:px-10 2xl:px-12 md:px-8 px-6 py-6">
        <h3 className="font-opensans font-bold tracking-tight 2xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg text-[#2496D7]">
          Our Leadership
        </h3>
        <div
          className={`w-full flex flex-col md:flex-row justify-center md:justify-between items-center space-y-4 md:space-y-0 h-[40vh]`}
        >
          <div className={`border-l-[30px] border-[#77AB33] w-1/3 h-full`}>
            <img
              src="/kishanbastola.png"
              alt="kishanbastola"
              loading="lazy"
              className={`w-full h-full border-2 border-[#AE0D19]`}
            />
          </div>
          <div className="w-full flex-col justify-center items-start md:w-1/2 space-y-4">
            <h4 className="font-opensans tracking-tighter font-bold text-[#AE0D19] 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-center">
              KISHAN BASTOLA
            </h4>
            <h4 className="font-opensans tracking-tight font-bold text-[#77AB33] 2xl:text-2xl xl:text-xl md:text-lg sm:text-base text-sm text-center">
              FOUNDER AND PRESIDENT
            </h4>
            <p className="font-montserrat font-medium 2xl:text-lg xl:text-base md:text-sm sm:text-xs text-[10px] text-[#042038] text-center">
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
          className={`mt-12 flex flex-col md:flex-row-reverse justify-between items-center space-y-4 md:space-y-0 h-[40vh]`}
        >
          <div className={`border-r-[24px] border-[#77AB33] w-1/3 h-full`}>
            <img
              src="/babatundeayoola.png"
              alt="Babatundeayoola"
              loading="lazy"
              className={`w-full h-full border-2 border-[#AE0D19]`}
            />
          </div>
          <div className="w-full flex-col justify-center items-start md:w-1/2 space-y-4">
            <h4 className="font-opensans tracking-tighter font-bold text-[#AE0D19] 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-center">
              BABATUNDE AYOOLA
            </h4>
            <h4 className="font-opensans tracking-tight font-bold text-[#77AB33] 2xl:text-2xl xl:text-xl md:text-lg sm:text-base text-sm text-center">
              GLOBAL AMBASSADOR
            </h4>
            <p className="font-montserrat font-medium 2xl:text-lg xl:text-base md:text-sm sm:text-xs text-[10px] text-[#042038] text-center">
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
      <div data-aos="fade-up" data-aos-duration="400" className="h-auto overflow-hidden max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center space-y-28 shadow-xl lg:py-12 lg:px-12 w-full">
          <div className="flex justify-center items-center">
            <h3 className="font-opensans font-bold tracking-tight 2xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg text-[#0052A0] text-center">
              OUR BOARD OF <br /> DIRECTORS
            </h3>
          </div>
          <div className="w-full mx-auto flex md:flex-row flex-col space-y-3 md:space-y-0 justify-evenly items-center">
            <BoardMember
              imgSrc="cofounder.png"
              name="Mr. Kishan Bastola"
              position="Co-Founder"
            />
            <BoardMember
              imgSrc="chiefsecretary.png"
              name="Mr. Chreenjeevi Lamichhane"
              position="Chief Secretary"
            />
          </div>
          <div className="md:w-[80%] w-full mx-auto flex md:flex-row flex-col space-y-3 md:space-y-0 justify-around items-center">
            <BoardMember
              imgSrc="treasurer.png"
              name="Er. Aayush Basnet"
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
      <div data-aos="fade-up" data-aos-duration="400" className="h-auto overflow-hidden mt-4 mx-auto max-w-7xl">
        <div className="flex justify-center items-center py-8">
          <h3 className="font-opensans font-bold tracking-tight 2xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg text-[#0052A0] text-center">
            MEET OUR EXPERT MENTORS
          </h3>
        </div>
        <div className="shadow-lg bg-white lg:py-12">
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
            className="w-full flex justify-evenly items-center"
          >
            <SwiperSlide className="py-4">
              <Experts
                imgSrc="/expert1.png"
                name="Dr. Yogesh Chandna"
                profession="Author,Vedic Mathematics, International Trainer, INDIA"
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
                imgSrc="/assets/teamaakashdeo.svg"
                name="Mr. Akash Deo"
                profession="Scientist and Researcher"
              />
            </SwiperSlide>
            <SwiperSlide className="py-4">
              <Experts
                imgSrc="/assets/teampramodghimire.svg"
                name="Mr. Pramod Ghimire"
                profession="Assistant Professor
                Agriculture and Forestry University
                Faculty of Forestry, Hetauda, Nepal"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="400" className="h-auto overflow-hidden mt-4 mx-auto max-w-7xl">
        <div className="bg-[url('/teammemberbg.svg')] bg-[center_bottom_4rem]">
          <div className="flex justify-center items-center py-8">
            <h3 className="font-opensans font-bold tracking-tight 2xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg text-[#0052A0] text-center">
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
            <h3 className="font-opensans font-bold tracking-tight 2xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg text-[#0052A0] text-center">
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
              position="Board Member"
            />
            <TeamMembers
              imgSrc="/rabinpariyar.png"
              name="Mr. Rabin Pariyar"
              position="Graphics Designer"
            />
            <TeamMembers
              imgSrc="/rajuraut.png"
              name="Mr. Raju Raut"
              position="Student Coordinator"
            />
            <TeamMembers
              imgSrc="/riteshprajapati.png"
              name="Mr. Ritesh Prajapati"
              position="Video Editor Intern"
            />
            <TeamMembers
              imgSrc="/dinupbalami.png"
              name="Mr. Dinup Balami"
              position="Campus Ambassador, KU"
            />
            <TeamMembers
              imgSrc="/saugatbartaula.png"
              name="Mr. Saugat Bartaula"
              position="Student Ambassador"
            />
            <TeamMembers
              imgSrc="/nishantsah.png"
              name="Mr. Nishant Shah"
              position="Web Developer Intern"
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
      <div data-aos="fade-up" data-aos-duration="400" className="h-auto w-full overflow-hidden mx-auto max-w-7xl flex justify-center md:justify-evenly 2xl:py-12 lg:py-8 py-4">
        <div className="w-full flex flex-col justify-center items-center space-y-4">
          <h4 className="w-full font-opensans font-semibold 2xl:text-3xl xl:text-2xl md:text-xl sm:text-lg text-base text-center text-[#0052A0]">
            Ground Stories
          </h4>
          <div className="w-full flex justify-center items-center space-x-4">
            <Swiper
              spaceBetween={50}
              navigation={{
                nextEl: ".testimonial-next-slide",
                prevEl: ".testimonial-prev-slide",
              }}
              breakpoints={{
                240: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              modules={[Navigation]}
              className="xl:mt-12 mt-4 mx-auto w-full"
            >
                <div className=".testimonial-prev-slide">
                  <button
                    type="button"
                    className="p-2 rounded-full border border-white text-[#B01B1C]"
                  >
                    &larr;
                  </button>
                </div>
                  <SwiperSlide>
                    <PartnersTestimonial
                      imgSrc="/assets/testimonialaayushnepal.svg"
                      testimonial="“I had been capped on knowledge and Information about Astronomy, cosmology and Astrophysics for years that there wasn't anything left for me to learn on the surface staggering my growth but Astronova opened that cap and exposed me to Boundless ocean of knowledge and experience about Astronomy, cosmology and Astrophysics which is more than enough to satisfy my hunger for Astronomy, cosmology and Astrophysics. 
                  Don't be capped, learn to adapt.”"
                      name="Aayush Nepal"
                      position="Astrophysics & Research Enthusiast"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <PartnersTestimonial
                      imgSrc="/assets/testimonialanujadhikari.svg"
                      testimonial="“Reflecting on my journey with the Astronova Foundation, I am truly amazed by the wealth of knowledge and experiences it has brought into my life. Through my involvement, I've gained invaluable insights, honed essential skills, and formed meaningful connections with like-minded individuals. Each encounter has fueled my passion for making a positive impact and has instilled in me a profound sense of optimism for the future. With the guidance and support of Astronova, I am more determined than ever to contribute to creating a enthusiastic and brighter tomorrow.”"
                      name="Anuj Adhikari"
                      position="Research Enthusiast"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <PartnersTestimonial
                      imgSrc="/assets/testimonialriteshprajapati.svg"
                      testimonial="“Throughout my journey as a passionate video editor, I've explored the art of highlighting key moments, choosing the right sounds, and perfecting color grading and motion graphics. Each project fuels my determination to push creative boundaries, continuously generating new ideas for video creation. I'm always inspired by the endless possibilities of video editing. Here's to embracing the craft and the excitement it brings!”"
                      name="Ritesh Prajapati"
                      position="Video Editor Intern"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <PartnersTestimonial
                      imgSrc="/testimonialdinupbalami.png"
                      testimonial="“Astronova is a platform where creativity thrives and ideas come to life. It has fueled my passion for making a positive impact on the community. Together, we are actively shaping a better future, driven by passion and purpose. It's a privilege to be part of such a dynamic environment, where creativity knows no bounds. I've gained invaluable insights, essential skills, and formed meaningful connections with like-minded people. Here's to Astronova—where the potential for impact is limitless.”"
                      name="Dinup Balami"
                      position="Campus Ambassador,Mechanical Engineering Student,KU"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <PartnersTestimonial
                      imgSrc="/testimonialnamratabartaula.png"
                      testimonial="“For over years, I always felt like people's view and awareness toward arts and culture had quite dip in terms of impact. And as a art enthusiast myself I felt pretty sad about it and felt obligated to change this trend. To my surprise, I find myself here at Astronova where I got the chance I needed to bring that change and leave a permanent mark and impact on people's views from early age. So bring change, starting from early age.”"
                      name="Namrata Bartaula"
                      position="Stone Art and Crafting Intern"
                    />
                  </SwiperSlide>
                <div className=".testimonial-next-slide">
                  <button
                    type="button"
                    className="p-2 rounded-full border border-white text-[#B01B1C]"
                  >
                    &rarr;
                  </button>
                </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
