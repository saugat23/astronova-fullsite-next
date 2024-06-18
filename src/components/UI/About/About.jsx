"use client";
import React from "react";
import Image from "next/image";
import ValuesContainer from "../ValuesContainer";
import Link from "next/link";
import {
  FaLongArrowAltDown,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import AboutUSImage from "../../../../public/assets/aboutusimage.svg";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const About = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  return (
    <section className="max-w-screen h-auto overflow-hidden">
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="mt-16 w-full bg-[url('/abouthero.png')] bg-cover lg:h-[70vh]"
      >
        <div className="hero-container-about flex h-full w-full flex-col items-center justify-end px-16 py-16 sm:px-20 md:px-24 lg:space-y-6 lg:px-32 2xl:px-40">
          <h4 className="text-justify font-opensans text-sm font-medium text-white sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            WHO ARE WE?
          </h4>
          <h4 className="max-w-[30rem] text-center font-opensans text-lg font-bold tracking-tighter text-[#F28459] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            A Nonprofit Committed to Education and Innovation
          </h4>
          <div className="">
            <Link href="#abouthome">
              <FaLongArrowAltDown className="h-8 cursor-pointer fill-white stroke-2" />
            </Link>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="h-auto bg-[#F0F6FB] py-12"
      >
        <div className="mx-auto max-w-6xl px-4">
          <h2
            className="font-opensans text-base font-normal text-[#0052A0D4] md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
            id="abouthome"
          >
            Who <span className="font-bold">Are We?</span>
          </h2>
          <p className="mt-4 text-justify font-inter text-xs font-light text-[#042038] md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
            Astronova Science Foundation is an officially registered as a
            non-profit organization under the name of &quot;
            <span className="font-normal text-[#F28459]">
              Astronova Foundation Nepal
            </span>
            &quot;(Companies Act, 2006), Office of the Company Register,
            Tripureshwor, Kathmandu. As we believe the development of the nation
            and the world is all about the education system of the nation. To
            get developed, the country have to develop their economy, To develop
            economy, country need to be able to utilize its natural and human
            resources in optimum level, To utilize human resources in optimum
            level, country should be able to create more and more businesses and
            services within its territory. To create businesses and services,
            people in the country must have scientific and entrepreneurial
            mindset. To develop mindset, we have to work from school level. And
            importantly, the mindset can be developed by external factor by
            creating a different learning environment. Therefore, our main
            objective is to work in the field of{" "}
            <span className="font-normal text-[#F28459]">
              Science, Information Technology , Research, Innovation and
              Entrepreneurship
            </span>{" "}
            to change the mindset of students from their early ages. In short,
            we are a group of believers willing to work together to provide
            various opportunities to explore and unleash students’ potential in
            national and international level.
          </p>
          <div className="mx-auto mt-4 flex w-full items-center justify-center space-x-4">
            <Link href="https://www.facebook.com/astroinf369">
              <FaFacebook className="h-6 w-6 fill-black" />
            </Link>
            <Link href="https://www.linkedin.com/company/astro369/">
              <FaLinkedin className="h-6 w-6 fill-black" />
            </Link>
            <Link href="https://www.youtube.com/@AstronovasLearniverse">
              <FaYoutube className="h-6 w-6 fill-black" />
            </Link>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="mx-auto mt-4 h-auto w-full max-w-6xl px-4"
      >
        <div className="flex w-full flex-col items-center justify-between space-y-5 lg:flex-row lg:space-y-0">
          <div className="">
            <Image
              src={AboutUSImage}
              alt="ABout us Image"
              priority
              className="hover:scale-105 hover:duration-300"
            />
          </div>
          <div className="flex flex-col items-end justify-center space-y-6 px-4 lg:px-24">
            <div className="flex flex-col items-center justify-center space-y-3">
              <h2 className="font-inter text-base font-bold md:text-lg lg:text-xl 2xl:text-2xl">
                Our Mission
              </h2>
              <p className="font-inter text-xs font-medium text-[#333333] md:text-sm lg:text-base 2xl:text-lg">
                Our mission and goal is to establish a well-equipped
                laboratories as a ‘junior Research & Innovation Centre’ where
                students can join various After-School STEAMESIR Workshops.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3">
              <h2 className="font-inter text-base font-bold md:text-lg lg:text-xl 2xl:text-2xl">
                Our Vision
              </h2>
              <p className="font-inter text-xs font-medium text-[#333333] md:text-sm lg:text-base 2xl:text-lg">
                Astronova Science Foundation is on a mission to revolutionize
                education by deploying STEAMESIR Science, Technology,
                Engineering, Arts, Mathematics, Entrepreneurship, Soft-Skills,
              </p>
            </div>
            <Link
              href="https://forms.gle/3uCVNnSz6MvqeGfn8"
              target="_blank"
              className="block self-start bg-[#0012FF] p-3 font-inter text-sm font-semibold text-white hover:scale-105 hover:bg-[#000db3] hover:duration-300 md:text-base xl:text-lg"
            >
              JOIN AS VOLUNTEER
            </Link>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="mx-auto mt-8 h-auto max-w-6xl bg-[#F0F6FB] py-4 md:py-6 lg:py-8 2xl:py-12"
      >
        <div className="grid h-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <ValuesContainer
            svg="assets/collaboration.svg"
            bgColor="#77AB33"
            title="Vision"
            desc="Ultimately, our vision is to plug students’ energy in production and services so that they can."
          />
          <ValuesContainer
            svg="assets/teamwork.svg"
            bgColor="#BDB809"
            title="Team Work"
            desc="We believe in Team work. team work is key point to the success of any organization."
          />
          <ValuesContainer
            svg="assets/knowledgetransfer.svg"
            bgColor="#AE0D19"
            title="Knowledge Transfer"
            desc="We believe that knowledge should be transferred to the next generation in proper way."
          />
          <ValuesContainer
            svg="assets/collaboration.svg"
            bgColor="#77AB33"
            title="Sustainability"
            desc="We work on the field which is sustainable in all the way."
          />
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="mx-auto mt-4 h-auto w-full max-w-6xl px-4"
      >
        <h3 className="text-center font-inter text-base font-semibold text-[#AE0D19] md:text-lg lg:text-xl 2xl:text-2xl">
          SHARING SUCCESS TOGETHER
        </h3>
        <div className="flex w-full flex-col items-center justify-between space-y-4 py-8 lg:flex-row lg:space-y-0">
          <div className="w-full lg:w-1/2">
            <Image
              src="/aboutusimage2.png"
              alt="About us Image"
              width={600}
              height={650}
              className="w-full hover:scale-105 hover:duration-300"
            />
          </div>
          <div className="flex w-full flex-col items-end justify-center space-y-6 lg:w-1/2 lg:px-24">
            <p className="font-inter text-xs font-semibold text-[#616161] md:text-sm lg:text-base 2xl:text-lg">
              At Astronova, we believe in the power of collaboration and
              collective achievement. Through our shared commitment to
              excellence, we foster an environment where success is not only
              celebrated individually but embraced collectively. Together, we
              empower each other to reach new heights, overcome challenges, and
              make a meaningful impact in our communities and beyond. Join us as
              we embark on a journey of collaboration, growth, and shared
              success, creating a brighter future for all.
            </p>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className='z-50 mx-auto mt-8 h-auto max-w-3xl rounded-t-xl bg-black/25 bg-[url("/childrens.png")] bg-cover'
      >
        <div className="flex h-full w-full flex-col items-center justify-center space-y-8 bg-black/70 py-6 lg:rounded-xl lg:py-8">
          <div className="flex flex-col space-y-4">
            <h2 className="text-center font-inter text-sm font-semibold text-white md:text-base lg:text-lg 2xl:text-xl">
              JOIN THE JOURNEY
            </h2>
            <h2 className="text-center font-inter text-xs font-semibold text-white lg:text-sm 2xl:text-base">
              Be the Change you want to see.
            </h2>
          </div>
          <div className="flex flex-col space-y-2 text-center">
            <Link
              data-aos="fade-up"
              data-aos-duration="900"
              href="https://forms.gle/3uCVNnSz6MvqeGfn8"
              target="_blank"
              className="mt-2 cursor-pointer font-opensans text-sm font-bold tracking-tighter text-white hover:scale-105 md:text-base lg:text-lg xl:text-xl"
            >
              JOIN AS VOLUNTEER
            </Link>
            <Link
              data-aos="fade-up"
              data-aos-duration="1100"
              href="/mentor_registration"
              className="mt-2 cursor-pointer font-opensans text-sm font-bold tracking-tighter text-white hover:scale-105 md:text-base lg:text-lg xl:text-xl"
            >
              BECOME A TEAM MEMBER
            </Link>
            <Button
              data-aos="fade-up"
              data-aos-duration="1300"
              type="button"
              onPress={onOpen}
              className="m-0 cursor-pointer bg-transparent p-0 font-opensans text-sm font-bold tracking-tighter text-white hover:scale-105 md:text-base lg:text-lg xl:text-xl"
            >
              MAKE A DONATION
            </Button>
          </div>
        </div>
      </div>
      <div className="z-10 -mt-8 h-20 w-full bg-[#190e08]"></div>

      <Modal
        size="5xl"
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        className=""
      >
        <ModalContent>
          {(onClose) => (
            <div>
              <ModalBody className="flex h-auto w-auto items-center justify-center">
                <Image
                  priority
                  src="/supportmodal.png"
                  alt="Support Modal"
                  className="h-auto w-full bg-cover object-cover"
                  width={2000}
                  height={1200}
                />
              </ModalBody>
            </div>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};

export default About;
