"use client";
import React from "react";
import BoardMember from "../BoardMember";
import Experts from "../Experts";
import TeamMembers from "../TeamMembers";
import PartnersTestimonial from "../PartnersTestimonial";
import useEmblaCarousel from "embla-carousel-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../../../sections/EmblaCarouselArrowButtons";
import { IoMdMail } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLongArrowAltDown } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Team = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    loop: "true",
    align: "center",
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="max-w-screen h-auto overflow-hidden">
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="mt-16 bg-[url('/abouthero.png')] bg-cover lg:h-[70vh]"
      >
        <div className="hero-container-team flex h-full w-full flex-col items-center justify-end px-16 py-16 sm:px-20 md:px-24 lg:space-y-6 lg:px-32 2xl:px-40">
          <h2 className="font-opensans text-xl font-bold tracking-tighter text-white sm:text-2xl lg:text-3xl 2xl:text-4xl">
            OUR TEAM
          </h2>
          <div className="">
            <Link href="#teamhome">
              <FaLongArrowAltDown className="h-8 cursor-pointer fill-white stroke-2" />
            </Link>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="mx-auto flex max-w-6xl flex-col items-start justify-center space-y-4 px-4 py-6"
      >
        <h3
          id="teamhome"
          className="font-opensans text-lg font-medium tracking-tight text-[#2496D7] sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl"
        >
          OUR LEADERSHIP
        </h3>
        <div
          className={`mt-8 flex h-auto w-full flex-col items-center justify-center space-y-4 md:flex-row md:justify-between md:space-y-0`}
        >
          <div
            className={`h-full w-1/2 border-l-[12px] border-[#77AB33] lg:w-1/3 lg:border-l-[30px]`}
          >
            <Image
              priority
              quality={80}
              src="/kishanbastola.png"
              alt="kishanbastola"
              width={600}
              height={600}
              className={`h-full w-full border-2 border-[#AE0D19]`}
            />
          </div>
          <div className="w-full flex-col items-start justify-center space-y-4 md:w-1/2">
            <h4 className="text-center font-opensans text-base font-bold tracking-tighter text-[#AE0D19] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              KISHAN BASTOLA
            </h4>
            <h4 className="text-center font-opensans text-sm font-bold tracking-tight text-[#77AB33] sm:text-base md:text-lg xl:text-xl 2xl:text-2xl">
              FOUNDER AND PRESIDENT
            </h4>
            <p className="text-center font-kumbhsans text-[10px] font-medium text-[#042038] sm:text-xs md:text-sm lg:text-base 2xl:text-lg">
              Astronova Science Foundation is an officially registered as a
              non-profit organization under the name of &quot;Astronova
              Foundation Nepal&quot;(Companies Act, 2006), Office of the Company
              Register, Tripureshwor, Kathmandu .As we believe the development
              of the nation and the world is all about the education system of
              the nation
            </p>
            <div className="mt-4 flex w-full items-center justify-center space-x-4">
              <div className="rounded-full bg-[#77AB33] p-1">
                <Link href="#">
                  <FaFacebook className="h-6 w-6 fill-white" />
                </Link>
              </div>
              <div className="rounded-full bg-[#77AB33] p-1">
                <Link href="#">
                  <FaInstagram className="h-6 w-6 fill-white" />
                </Link>
              </div>
              <div className="rounded-full bg-[#77AB33] p-1">
                <Link href="#">
                  <IoMdMail className="h-6 w-6 fill-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`mt-12 flex h-auto flex-col items-center justify-between space-y-4 md:flex-row-reverse md:space-y-0`}
        >
          <div
            className={`h-full w-1/2 border-r-[12px] border-[#77AB33] lg:w-1/3 lg:border-r-[30px]`}
          >
            <Image
              priority
              quality={80}
              src="/babatundeayoola.png"
              alt="Babatundeayoola"
              width={600}
              height={600}
              className={`h-full w-full border-2 border-[#AE0D19]`}
            />
          </div>
          <div className="w-full flex-col items-start justify-center space-y-4 md:w-1/2">
            <h4 className="text-center font-opensans text-base font-bold tracking-tighter text-[#AE0D19] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              BABATUNDE AYOOLA
            </h4>
            <h4 className="text-center font-opensans text-sm font-bold tracking-tight text-[#77AB33] sm:text-base md:text-lg xl:text-xl 2xl:text-2xl">
              GLOBAL AMBASSADOR
            </h4>
            <p className="text-center font-kumbhsans text-[10px] font-medium text-[#042038] sm:text-xs md:text-sm xl:text-base 2xl:text-lg">
              Astronova Science Foundation is an officially registered as a
              non-profit organization under the name of &quot;Astronova
              Foundation Nepal&quot;(Companies Act, 2006), Office of the Company
              Register, Tripureshwor, Kathmandu .As we believe the development
              of the nation and the world is all about the education system of
              the nation
            </p>
            <div className="mt-4 flex w-full items-center justify-center space-x-4">
              <div className="rounded-full bg-[#77AB33] p-1">
                <Link href="#">
                  <FaFacebook className="h-6 w-6 fill-white" />
                </Link>
              </div>
              <div className="rounded-full bg-[#77AB33] p-1">
                <Link href="#">
                  <FaInstagram className="h-6 w-6 fill-white" />
                </Link>
              </div>
              <div className="rounded-full bg-[#77AB33] p-1">
                <Link href="#">
                  <IoMdMail className="h-6 w-6 fill-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="mx-auto h-auto max-w-6xl overflow-hidden"
      >
        <div className="mt-8 flex w-full flex-col items-center justify-center space-y-10 shadow-xl sm:space-y-14 lg:mt-0 lg:space-y-28 lg:px-12 lg:py-12">
          <div className="flex items-center justify-center">
            <h3 className="text-center font-opensans text-lg font-bold tracking-tight text-[#0052A0] sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
              OUR BOARD OF <br /> DIRECTORS
            </h3>
          </div>
          <div className="mx-auto flex w-full flex-col items-center justify-evenly space-y-3 md:flex-row md:space-y-0">
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
          <div className="mx-auto flex w-full flex-col items-center justify-around space-y-3 md:w-[80%] md:flex-row md:space-y-0">
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
        className="mx-auto mt-4 h-auto max-w-6xl overflow-hidden"
      >
        <div className="flex items-center justify-center py-8">
          <h3 className="text-center font-opensans text-lg font-bold tracking-tight text-[#0052A0] sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
            MEET OUR EXPERT MENTORS
          </h3>
        </div>
        <div className="bg-white shadow-lg lg:py-12">
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
        className="mt-4 h-auto overflow-hidden"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-center py-8">
            <h3 className="text-center font-opensans text-lg font-bold tracking-tight text-[#0052A0] sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
              LEGAL ADVISOR
            </h3>
          </div>
          <div className="grid grid-cols-1 grid-rows-1 place-content-center place-items-center bg-transparent shadow-lg lg:px-12 lg:py-12">
            <div className="flex h-auto flex-col items-center justify-center space-y-2">
              <div className="h-full rounded-md">
                <Image
                  priority
                  quality={80}
                  src="/bishnuprasaddhakal.png"
                  alt="Bishnu Prasad Dhakal"
                  width={200}
                  height={200}
                  className="h-full border border-[#AE0D19] object-cover object-center"
                />
              </div>
              <h4 className="font-kumbhsans text-xl font-semibold text-[#1A1728]">
                Bishnu Prasad Dhakal
              </h4>
              <h4 className="font-kumbhsans text-sm font-semibold text-[#1A1728B5]">
                Legal Practitioner
              </h4>
            </div>
          </div>
          <div className="flex items-center justify-center py-8">
            <h3 className="text-center font-opensans text-lg font-bold tracking-tight text-[#0052A0] sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
              OUR TEAM MEMBERS
            </h3>
          </div>
          <div className="hidden bg-transparent shadow-lg lg:block lg:px-8 lg:py-8">
            <div className="grid-cols-4 gap-x-4 gap-y-6 lg:grid">
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
            <div className="mt-4 flex w-full items-center justify-around">
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
                name="Niranajan Bikram Thakuri"
                position="International Relational Manager, Seoul,South Korea"
              />
            </div>
          </div>

          <div className="block bg-transparent py-2 shadow-lg lg:hidden">
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
                <CarouselItem>
                  <TeamMembers
                    imgSrc="/niranjanbikramthakuri.png"
                    name="Niranjan Bikram Thakuri"
                    position="International Relational Manager, Seoul South Korea"
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
        className="mx-auto flex h-auto w-full max-w-7xl justify-center overflow-hidden py-4 md:justify-evenly lg:py-8 2xl:py-12"
      >
        <div className="flex w-full flex-col items-center justify-center space-y-4">
          <h3 className="mt-4 w-auto text-center font-opensans text-xl font-bold tracking-tight text-[#0B77A5] lg:text-2xl xl:mt-12 xl:text-3xl">
            GROUND STORIES
          </h3>
          <div className="mx-auto w-full max-w-6xl px-3 pt-4">
            <div className="embla_homepage">
              <div className="embla__viewport_homepage" ref={emblaRef}>
                <div className="embla__container_homepage">
                  <div className="embla__slide_homepage">
                    <PartnersTestimonial
                      imgSrc="/assets/testimonialaayushnepal.svg"
                      testimonial="“I had been capped on knowledge and Information about Astronomy, cosmology and Astrophysics for years that there wasn't anything left for me to learn on the surface staggering my growth but Astronova opened that cap and exposed me to Boundless ocean of knowledge and experience about Astronomy, cosmology and Astrophysics which is more than enough to satisfy my hunger for Astronomy, cosmology and Astrophysics. 
                  Don't be capped, learn to adapt.”"
                      name="Aayush Nepal"
                      position="Astrophysics & Research Enthusiast"
                      bgColor="green"
                    />
                  </div>
                  <div className="embla__slide_homepage">
                    <PartnersTestimonial
                      imgSrc="/assets/testimonialanujadhikari.svg"
                      testimonial="“Reflecting on my journey with the Astronova Foundation, I am truly amazed by the wealth of knowledge and experiences it has brought into my life. Through my involvement, I've gained invaluable insights, honed essential skills, and formed meaningful connections with like-minded individuals. Each encounter has fueled my passion for making a positive impact and has instilled in me a profound sense of optimism for the future. With the guidance and support of Astronova, I am more determined than ever to contribute to creating a enthusiastic and brighter tomorrow.”"
                      name="Anuj Adhikari"
                      position="Research Enthusiast"
                      bgColor="yellow"
                    />
                  </div>
                  <div className="embla__slide_homepage">
                    <PartnersTestimonial
                      imgSrc="/assets/testimonialriteshprajapati.svg"
                      testimonial="“Throughout my journey as a passionate video editor, I've explored the art of highlighting key moments, choosing the right sounds, and perfecting color grading and motion graphics. Each project fuels my determination to push creative boundaries, continuously generating new ideas for video creation. I'm always inspired by the endless possibilities of video editing. Here's to embracing the craft and the excitement it brings!”"
                      name="Ritesh Prajapati"
                      position="Video Editor Intern"
                      bgColor="green"
                    />
                  </div>
                  <div className="embla__slide_homepage">
                    <PartnersTestimonial
                      imgSrc="/testimonialdinupbalami.png"
                      testimonial="“Astronova is a platform where creativity thrives and ideas come to life. It has fueled my passion for making a positive impact on the community. Together, we are actively shaping a better future, driven by passion and purpose. It's a privilege to be part of such a dynamic environment, where creativity knows no bounds. I've gained invaluable insights, essential skills, and formed meaningful connections with like-minded people. Here's to Astronova—where the potential for impact is limitless.”"
                      name="Dinup Balami"
                      position="Campus Ambassador,Mechanical Engineering Student,KU"
                      bgColor="red"
                    />
                  </div>
                  <div className="embla__slide_homepage">
                    <PartnersTestimonial
                      imgSrc="/testimonialnamratabartaula.png"
                      testimonial="“For over years, I always felt like people's view and awareness toward arts and culture had quite dip in terms of impact. And as a art enthusiast myself I felt pretty sad about it and felt obligated to change this trend. To my surprise, I find myself here at Astronova where I got the chance I needed to bring that change and leave a permanent mark and impact on people's views from early age. So bring change, starting from early age.”"
                      name="Namrata Bartaula"
                      position="Stone Art and Crafting Intern"
                      bgColor="blue"
                    />
                  </div>
                </div>
              </div>
              <div className="embla__controls_homepage">
                <div className="embla__buttons_homepage">
                  <PrevButton
                    onClick={onPrevButtonClick}
                    disabled={prevBtnDisabled}
                  />
                  <NextButton
                    onClick={onNextButtonClick}
                    disabled={nextBtnDisabled}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex h-72 items-center justify-center bg-gradient-to-b from-[#027c4f] to-[#bcbe37]">
        <div className="flex w-screen flex-col items-center justify-center space-y-3">
          <h3 className="w-full text-center font-inter text-sm font-semibold tracking-wider text-white sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            DREAM BIG, SHINE BRIGHT
          </h3>
          <Link
            href="/careers"
            className="mx-auto w-64 rounded-xl bg-blue-600 px-6 py-2 text-center font-inter font-semibold text-white hover:bg-white hover:text-blue-600 hover:duration-300"
          >
            JOIN OUR TEAM
          </Link>
        </div>
        <div className="ml-auto h-full">
          <Image
            src="/assets/teamfooter.svg"
            alt="Team Footer Child SVG"
            priority
            quality={90}
            width={400}
            height={600}
            className="h-full w-auto justify-self-end"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
