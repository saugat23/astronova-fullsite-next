"use client";
import React from "react";
import BoardMember from "../BoardMember";
import Experts from "../Experts";
import TeamMembers from "../TeamMembers";
import PartnersTestimonial from "../PartnersTestimonial";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import { IoMdMail } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLongArrowAltDown } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Team = () => {
  return (
    <section className="h-auto max-w-screen overflow-hidden">
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="bg-[url('/abouthero.png')] bg-cover lg:h-[70vh] mt-16"
      >
        <div className="hero-container-team h-full w-full flex flex-col justify-end items-center lg:space-y-6 py-16 2xl:px-40 lg:px-32 md:px-24 sm:px-20 px-16">
          <h2 className="font-opensans font-bold tracking-tighter 2xl:text-4xl lg:text-3xl sm:text-2xl text-xl text-white">
            OUR TEAM
          </h2>
          <div className="">
            <Link href="#teamhome">
              <FaLongArrowAltDown className="fill-white stroke-2 h-8 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="mx-auto flex flex-col justify-center items-start px-4 max-w-6xl py-6"
      >
        <h3
          id="teamhome"
          className="font-opensans font-medium tracking-tight 2xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg text-[#2496D7]"
        >
          OUR LEADERSHIP
        </h3>
        <div
          className={`mt-8 w-full flex flex-col md:flex-row justify-center md:justify-between items-center space-y-4 md:space-y-0 h-[40vh]`}
        >
          <div
            className={`border-l-[12px] lg:border-l-[30px] border-[#77AB33] lg:w-1/3 w-1/2 h-full`}
          >
            <Image
              priority
              quality={80}
              src="/kishanbastola.png"
              alt="kishanbastola"
              width={600}
              height={600}
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
            <p className="font-kumbhsans font-medium 2xl:text-lg lg:text-base md:text-sm sm:text-xs text-[10px] text-[#042038] text-center">
              Astronova Science Foundation is an officially registered as a
              non-profit organization under the name of &quot;Astronova
              Foundation Nepal&quot;(Companies Act, 2006), Office of the Company
              Register, Tripureshwor, Kathmandu .As we believe the development
              of the nation and the world is all about the education system of
              the nation
            </p>
            <div className="mt-4 w-full flex justify-center items-center space-x-4">
              <div className="bg-[#77AB33] rounded-full p-1">
                <Link href="#">
                  <FaFacebook className="fill-white w-6 h-6" />
                </Link>
              </div>
              <div className="bg-[#77AB33] rounded-full p-1">
                <Link href="#">
                  <FaInstagram className="fill-white w-6 h-6" />
                </Link>
              </div>
              <div className="bg-[#77AB33] rounded-full p-1">
                <Link href="#">
                  <IoMdMail className="fill-white w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`mt-12 flex flex-col md:flex-row-reverse justify-between items-center space-y-4 md:space-y-0 h-[40vh]`}
        >
          <div
            className={`border-r-[12px] lg:border-r-[30px] border-[#77AB33] lg:w-1/3 w-1/2 h-full`}
          >
            <Image
              priority
              quality={80}
              src="/babatundeayoola.png"
              alt="Babatundeayoola"
              width={600}
              height={600}
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
            <p className="font-kumbhsans font-medium 2xl:text-lg xl:text-base md:text-sm sm:text-xs text-[10px] text-[#042038] text-center">
              Astronova Science Foundation is an officially registered as a
              non-profit organization under the name of &quot;Astronova
              Foundation Nepal&quot;(Companies Act, 2006), Office of the Company
              Register, Tripureshwor, Kathmandu .As we believe the development
              of the nation and the world is all about the education system of
              the nation
            </p>
            <div className="mt-4 w-full flex justify-center items-center space-x-4">
              <div className="bg-[#77AB33] rounded-full p-1">
                <Link href="#">
                  <FaFacebook className="fill-white w-6 h-6" />
                </Link>
              </div>
              <div className="bg-[#77AB33] rounded-full p-1">
                <Link href="#">
                  <FaInstagram className="fill-white w-6 h-6" />
                </Link>
              </div>
              <div className="bg-[#77AB33] rounded-full p-1">
                <Link href="#">
                  <IoMdMail className="fill-white w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="h-auto overflow-hidden max-w-6xl mx-auto"
      >
        <div className="flex flex-col justify-center items-center lg:space-y-28 space-y-10 sm:space-y-14 shadow-xl lg:py-12 lg:px-12 w-full mt-8 lg:mt-0">
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
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="h-auto overflow-hidden mt-4 mx-auto max-w-6xl"
      >
        <div className="flex justify-center items-center py-8">
          <h3 className="font-opensans font-bold tracking-tight 2xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg text-[#0052A0] text-center">
            MEET OUR EXPERT MENTORS
          </h3>
        </div>
        <div className="shadow-lg bg-white lg:py-12">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full px-14"
          >
            <CarouselContent>
              <CarouselItem className="py-4 md:basis-1/2 lg:basis-1/4">
                <Experts
                  imgSrc="/expert1.png"
                  name="Dr. Yogesh Chandna"
                  profession="Author,Vedic Mathematics, International Trainer, INDIA"
                />
              </CarouselItem>
              <CarouselItem className="py-4 md:basis-1/2 lg:basis-1/4">
                <Experts
                  imgSrc="/expert2.png"
                  name="Mr. Babatunde Ayoola"
                  profession="Child Psychologist"
                />
              </CarouselItem>
              <CarouselItem className="py-4 md:basis-1/2 lg:basis-1/4">
                <Experts
                  imgSrc="/assets/teamaakashdeo.svg"
                  name="Mr. Akash Deo"
                  profession="Scientist and Researcher"
                />
              </CarouselItem>
              <CarouselItem className="py-4 md:basis-1/2 lg:basis-1/4">
                <Experts
                  imgSrc="/assets/teampramodghimire.svg"
                  name="Mr. Pramod Ghimire"
                  profession="Assistant Professor
                Agriculture and Forestry University
                Faculty of Forestry, Hetauda, Nepal"
                />
              </CarouselItem>
              <CarouselItem className="py-4 md:basis-1/2 lg:basis-1/4">
                <Experts
                  imgSrc="/expert3.png"
                  name="Mr. Dikshan Kharel"
                  profession="Huawei Chief Expert in 
                Customer Experience Management"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="ml-12" />
            <CarouselNext className="mr-12" />
          </Carousel>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="h-auto overflow-hidden mt-4"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex justify-center items-center py-8">
            <h3 className="font-opensans font-bold tracking-tight 2xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg text-[#0052A0] text-center">
              LEGAL ADVISOR
            </h3>
          </div>
          <div className="shadow-lg bg-transparent lg:py-12 lg:px-12 grid grid-cols-1 grid-rows-1 place-content-center place-items-center">
            <div className="flex flex-col justify-center items-center space-y-2 h-auto">
              <div className="h-full rounded-md">
                <Image
                  priority
                  quality={80}
                  src="/bishnuprasaddhakal.png"
                  alt="Bishnu Prasad Dhakal"
                  width={200}
                  height={200}
                  className="h-full border border-[#AE0D19] object-center object-cover"
                />
              </div>
              <h4 className="font-kumbhsans font-semibold text-xl text-[#1A1728]">
                Bishnu Prasad Dhakal
              </h4>
              <h4 className="font-kumbhsans font-semibold text-sm text-[#1A1728B5]">
                Legal Practitioner
              </h4>
            </div>
          </div>
          <div className="flex justify-center items-center py-8">
            <h3 className="font-opensans font-bold tracking-tight 2xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg text-[#0052A0] text-center">
              OUR TEAM MEMBERS
            </h3>
          </div>
          <div className="hidden shadow-lg bg-transparent lg:py-8 lg:px-8 lg:block">
            <div className="lg:grid grid-cols-4 gap-x-4 gap-y-6">
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
            </div>
            <div className="flex w-full justify-around items-center mt-4">
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
              <TeamMembers
                imgSrc="/niranjanbikramthakuri.png"
                name="Mr. Niranajan Bikram Thakuri"
                position="International Relational Manager, Seoul,South Korea"
              />
            </div>
          </div>

          <div className="shadow-lg bg-transparent py-2 block lg:hidden">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full px-14"
            >
              <CarouselContent>
                <CarouselItem>
                  <TeamMembers
                    imgSrc="/aayushbasnet.png"
                    name="Er. Aayush Basnet"
                    position="Program Director"
                  />
                </CarouselItem>
                <CarouselItem>
                  <TeamMembers
                    imgSrc="/anmolpant.png"
                    name="Mr. Anmol Pant"
                    position="Project Coordinator"
                  />
                </CarouselItem>
                <CarouselItem>
                  <TeamMembers
                    imgSrc="/dikshyakharel.png"
                    name="Mrs. Dikshya Kharel"
                    position="Finance Officer"
                  />
                </CarouselItem>
                <CarouselItem>
                  <TeamMembers
                    imgSrc="/ishanacharya.png"
                    name="Mr. Ishan Acharya"
                    position="Event Manger, Podcast Host"
                  />
                </CarouselItem>
                <CarouselItem>
                  <TeamMembers
                    imgSrc="/aayushnepal.png"
                    name="Mr. Aayush Nepal"
                    position="Astrophysics Research Intern"
                  />
                </CarouselItem>
                <CarouselItem>
                  <TeamMembers
                    imgSrc="/anujadhikari.png"
                    name="Mr. Anuj Adhikari"
                    position="Reserch Coordinator Intern"
                  />
                </CarouselItem>
                <CarouselItem>
                  <TeamMembers
                    imgSrc="/namratabartaula.png"
                    name="Ms. Namrata Bartaula"
                    position="Stone Art & Crafting Intern"
                  />
                </CarouselItem>
                <CarouselItem>
                  <TeamMembers
                    imgSrc="/rojinabastola.png"
                    name="Ms. Rojina Bastola"
                    position="Finance Coordinator"
                  />
                </CarouselItem>
                <CarouselItem>
                  <TeamMembers
                    imgSrc="/rabinpariyar.png"
                    name="Mr. Rabin Pariyar"
                    position="Graphics Designer"
                  />
                </CarouselItem>
                <CarouselItem>
                  <TeamMembers
                    imgSrc="/riteshprajapati.png"
                    name="Mr. Ritesh Prajapati"
                    position="Video Editor Intern"
                  />
                </CarouselItem>
                <CarouselItem>
                  <TeamMembers
                    imgSrc="/riteshprajapati.png"
                    name="Mr. Ritesh Prajapati"
                    position="Student Ambassador"
                  />
                </CarouselItem>
                <CarouselItem>
                  <TeamMembers
                    imgSrc="/nishantsah.png"
                    name="Mr. Nishant Shah"
                    position="Web Developer Intern"
                  />
                </CarouselItem>
                <CarouselItem>
                  <TeamMembers
                    imgSrc="/rajuraut.png"
                    name="Mr. Raju Raut"
                    position="Student Coordinator"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="ml-12" />
              <CarouselNext className="mr-12" />
            </Carousel>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="h-auto w-full overflow-hidden mx-auto max-w-7xl flex justify-center md:justify-evenly 2xl:py-12 lg:py-8 py-4"
      >
        <div className="w-full flex flex-col justify-center items-center space-y-4">
          <h3 className="xl:mt-12 mt-4 font-opensans font-bold w-auto text-center text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-[#0B77A5] tracking-tight">
            GROUND STORIES
          </h3>
          <Carousel
            opts={{
              align: "center",
              loop: false,
            }}
            className="w-full mx-auto max-w-7xl px-12"
          >
            <CarouselContent className="py-6 lg:py-10">
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-[#639a1b] mx-4">
                <PartnersTestimonial
                  imgSrc="/assets/testimonialaayushnepal.svg"
                  testimonial="“I had been capped on knowledge and Information about Astronomy, cosmology and Astrophysics for years that there wasn't anything left for me to learn on the surface staggering my growth but Astronova opened that cap and exposed me to Boundless ocean of knowledge and experience about Astronomy, cosmology and Astrophysics which is more than enough to satisfy my hunger for Astronomy, cosmology and Astrophysics. 
                  Don't be capped, learn to adapt.”"
                  name="Aayush Nepal"
                  position="Astrophysics & Research Enthusiast"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-[#aeab3b] mx-4">
                <PartnersTestimonial
                  imgSrc="/assets/testimonialanujadhikari.svg"
                  testimonial="“Reflecting on my journey with the Astronova Foundation, I am truly amazed by the wealth of knowledge and experiences it has brought into my life. Through my involvement, I've gained invaluable insights, honed essential skills, and formed meaningful connections with like-minded individuals. Each encounter has fueled my passion for making a positive impact and has instilled in me a profound sense of optimism for the future. With the guidance and support of Astronova, I am more determined than ever to contribute to creating a enthusiastic and brighter tomorrow.”"
                  name="Anuj Adhikari"
                  position="Research Enthusiast"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-[#639a1b] mx-4">
                <PartnersTestimonial
                  imgSrc="/assets/testimonialriteshprajapati.svg"
                  testimonial="“Throughout my journey as a passionate video editor, I've explored the art of highlighting key moments, choosing the right sounds, and perfecting color grading and motion graphics. Each project fuels my determination to push creative boundaries, continuously generating new ideas for video creation. I'm always inspired by the endless possibilities of video editing. Here's to embracing the craft and the excitement it brings!”"
                  name="Ritesh Prajapati"
                  position="Video Editor Intern"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-[#ae0d19] mx-4">
                <PartnersTestimonial
                  imgSrc="/testimonialdinupbalami.png"
                  testimonial="“Astronova is a platform where creativity thrives and ideas come to life. It has fueled my passion for making a positive impact on the community. Together, we are actively shaping a better future, driven by passion and purpose. It's a privilege to be part of such a dynamic environment, where creativity knows no bounds. I've gained invaluable insights, essential skills, and formed meaningful connections with like-minded people. Here's to Astronova—where the potential for impact is limitless.”"
                  name="Dinup Balami"
                  position="Campus Ambassador,Mechanical Engineering Student,KU"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-[#2496d7] mx-4">
                <PartnersTestimonial
                  imgSrc="/testimonialnamratabartaula.png"
                  testimonial="“For over years, I always felt like people's view and awareness toward arts and culture had quite dip in terms of impact. And as a art enthusiast myself I felt pretty sad about it and felt obligated to change this trend. To my surprise, I find myself here at Astronova where I got the chance I needed to bring that change and leave a permanent mark and impact on people's views from early age. So bring change, starting from early age.”"
                  name="Namrata Bartaula"
                  position="Stone Art and Crafting Intern"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="ml-12" />
            <CarouselNext className="mr-12" />
          </Carousel>
        </div>
      </div>
      <div className="mt-8 flex justify-center items-center bg-gradient-to-b from-[#027c4f] to-[#bcbe37] h-72">
        <div className="w-screen  flex flex-col justify-center items-center space-y-3">
          <h3 className="text-white tracking-wider font-inter font-semibold xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-center w-full">
            DREAM BIG, SHINE BRIGHT
          </h3>
          <button
            type="button"
            className="font-inter w-64 mx-auto font-semibold bg-blue-600 text-white hover:bg-white hover:text-blue-600 hover:duration-300 py-2 px-6 rounded-xl"
          >
            JOIN OUR TEAM
          </button>
        </div>
        <div className="ml-auto h-full">
          <Image
            src="/assets/teamfooter.svg"
            alt="Team Footer Child SVG"
            priority
            quality={90}
            width={400}
            height={600}
            className="justify-self-end h-full w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
