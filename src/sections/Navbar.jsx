"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../components/ui/hover-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const Navbar = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleListClick() {
    setIsMenuOpen(false);
  }

  return (
    <header
      data-aos="fade-down"
      data-aos-duration="500"
      className="fixed z-50 h-auto w-full bg-[#048FB7]"
    >
      <nav className="flex w-full items-center justify-between px-4 py-4 lg:px-4 xl:px-8 2xl:px-12 2xl:pt-4">
        <div className="flex items-center justify-center">
          <Link href="/">
            <Image
              src="/assets/navbarlogo.svg"
              alt="Navbar Logo"
              width={120}
              height={60}
              priority
              className="md:w-30 cursor-pointer lg:w-32 xl:w-36 2xl:w-40"
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:w-full lg:items-center lg:justify-end">
          <ul className="flex items-center justify-evenly font-poppins text-[10px] font-semibold uppercase leading-[25.2px] text-white md:text-xs lg:space-x-5 lg:text-sm xl:text-base 2xl:space-x-8 2xl:text-lg">
            <li>
              <Link
                href="/"
                className={`relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#F2CE24] after:transition-all after:duration-300 hover:text-[#F2CE24] hover:duration-300 hover:after:w-full ${pathname === "/" && "text-[#F2CE24] after:w-full"
                  }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#F2CE24] after:transition-all after:duration-300 hover:text-[#F2CE24] hover:duration-300 hover:after:w-full ${pathname.includes("about") && "text-[#F2CE24] after:w-full"
                  }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/team"
                className={`relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#F2CE24] after:transition-all after:duration-300 hover:text-[#F2CE24] hover:duration-300 hover:after:w-full ${pathname.includes("team") && "text-[#F2CE24] after:w-full"
                  }`}
              >
                Our Team
              </Link>
            </li>
            <li>
              <HoverCard>
                <HoverCardTrigger>
                  <Link
                    href="#"
                    className={`relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#F2CE24] after:transition-all after:duration-300 hover:text-[#F2CE24] hover:duration-300 hover:after:w-full ${pathname.includes("projects") &&
                      "text-[#F2CE24] after:w-full"
                      }`}
                  >
                    Our Project
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent className="mt-2 lg:ml-16 xl:ml-20">
                  <nav className="flex w-full flex-col items-start justify-center text-sm font-medium xl:text-base">
                    <Link href="/short_term_projects" className="p-2 w-full text-left hover:bg-[#F2CE24] hover:text-white hover:duration-300 hover:ease-in-out">
                      Short Term Projects
                      <span className="float-right">&gt;</span>
                    </Link>
                    <Link href="/middle_term_projects" className="p-2 w-full text-left hover:bg-[#F2CE24] hover:text-white hover:duration-300 hover:ease-in-out">
                      Middle Term Projects
                      <span className="float-right">&gt;</span>
                    </Link>
                    <Link href="/long_term_projects" className="p-2 w-full text-left hover:bg-[#F2CE24] hover:text-white hover:duration-300 hover:ease-in-out">
                      Long Term Projects
                      <span className="float-right">&gt;</span>
                    </Link>
                  </nav>
                </HoverCardContent>
              </HoverCard>
            </li>
            <li>
              <Link
                href="/works"
                className={`relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#F2CE24] after:transition-all after:duration-300 hover:text-[#F2CE24] hover:duration-300 hover:after:w-full ${pathname.includes("works") && "text-[#F2CE24] after:w-full"
                  }`}
              >
                Our Works
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className={`relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#F2CE24] after:transition-all after:duration-300 hover:text-[#F2CE24] hover:duration-300 hover:after:w-full ${pathname.includes("blogs") && "text-[#F2CE24] after:w-full"
                  }`}
              >
                Blogs & News
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className={`relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#F2CE24] after:transition-all after:duration-300 hover:text-[#F2CE24] hover:duration-300 hover:after:w-full ${pathname.includes("careers") && "text-[#F2CE24] after:w-full"
                  }`}
              >
                Careers
              </Link>
            </li>
            <div className="flex items-center justify-center">
              <Button
                type="button"
                className="rounded-lg bg-[#F2CE24] px-4 py-2 font-poppins text-base font-semibold leading-[25.2px] text-black hover:scale-105 hover:bg-black hover:text-[#F2CE24] md:px-4 md:py-4 lg:text-lg xl:px-6 2xl:px-8 2xl:py-6 2xl:text-xl"
                onPress={onOpen}
              >
                SUPPORT US
              </Button>
            </div>
          </ul>
        </div>
        <div className="flex lg:hidden">
          <button onClick={handleToggleMenu}>
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.375 4.75H16.625V6.33333H2.375V4.75ZM2.375 8.70833H16.625V10.2917H2.375V8.70833ZM2.375 12.6667H16.625V14.25H2.375V12.6667Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-0 z-50 flex h-screen w-screen flex-col items-start justify-start space-y-6 overflow-y-scroll bg-[#048FB7] py-6 font-poppins text-sm font-semibold text-white sm:py-8 lg:hidden"
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.25 }}
            exit={{ y: -250, opacity: 0 }}
          >
            <a
              to="#"
              onClick={handleToggleMenu}
              className="self-end px-6 md:px-10"
            >
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3002 0.70998C13.2077 0.617276 13.0978 0.543728 12.9768 0.493547C12.8559 0.443366 12.7262 0.417535 12.5952 0.417535C12.4643 0.417535 12.3346 0.443366 12.2136 0.493547C12.0926 0.543728 11.9827 0.617276 11.8902 0.70998L7.00022 5.58998L2.11022 0.699979C2.01764 0.607397 1.90773 0.533957 1.78677 0.483852C1.6658 0.433747 1.53615 0.407959 1.40522 0.407959C1.27429 0.407959 1.14464 0.433747 1.02368 0.483852C0.902716 0.533957 0.792805 0.607397 0.700223 0.699979C0.607642 0.792561 0.534202 0.902472 0.484097 1.02344C0.433992 1.1444 0.408203 1.27405 0.408203 1.40498C0.408203 1.53591 0.433992 1.66556 0.484097 1.78652C0.534202 1.90749 0.607642 2.0174 0.700223 2.10998L5.59022 6.99998L0.700223 11.89C0.607642 11.9826 0.534202 12.0925 0.484097 12.2134C0.433992 12.3344 0.408203 12.464 0.408203 12.595C0.408203 12.7259 0.433992 12.8556 0.484097 12.9765C0.534202 13.0975 0.607642 13.2074 0.700223 13.3C0.792805 13.3926 0.902716 13.466 1.02368 13.5161C1.14464 13.5662 1.27429 13.592 1.40522 13.592C1.53615 13.592 1.6658 13.5662 1.78677 13.5161C1.90773 13.466 2.01764 13.3926 2.11022 13.3L7.00022 8.40998L11.8902 13.3C11.9828 13.3926 12.0927 13.466 12.2137 13.5161C12.3346 13.5662 12.4643 13.592 12.5952 13.592C12.7262 13.592 12.8558 13.5662 12.9768 13.5161C13.0977 13.466 13.2076 13.3926 13.3002 13.3C13.3928 13.2074 13.4662 13.0975 13.5163 12.9765C13.5665 12.8556 13.5922 12.7259 13.5922 12.595C13.5922 12.464 13.5665 12.3344 13.5163 12.2134C13.4662 12.0925 13.3928 11.9826 13.3002 11.89L8.41022 6.99998L13.3002 2.10998C13.6802 1.72998 13.6802 1.08998 13.3002 0.70998Z"
                    fill="#FFFFFF"
                  />
                </svg>
              </button>
            </a>
            <Link
              href="/"
              className={`relative px-6 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#F2CE24] after:transition-all after:duration-300 hover:text-[#F2CE24] hover:duration-300 hover:after:w-full md:px-10 ${pathname === "/" && "text-[#F2CE24]"
                }`}
              onClick={handleListClick}
            >
              Home
            </Link>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="px-6 md:px-10">
                  <Link
                    href="/about"
                    className={`relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#F2CE24] after:transition-all after:duration-300 hover:text-[#F2CE24] hover:duration-300 hover:after:w-full ${pathname === "/about" && "text-[#F2CE24]"
                      }`}
                    onClick={handleListClick}
                  >
                    About Us
                  </Link>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="mt-4 flex flex-col items-start justify-center space-y-4 bg-[#0052A0] py-4">
                    <li className="px-6 md:px-10">
                      <Link
                        href="#"
                        classname="font-poppins font-semibold text-sm text-white z-50"
                      >
                        Vision and Mission
                      </Link>
                    </li>
                    <li className="px-6 md:px-10">
                      <Link
                        href="#"
                        classname="font-poppins font-semibold text-sm text-white z-50"
                      >
                        History
                      </Link>
                    </li>
                    <li className="px-6 md:px-10">
                      <Link
                        href="#"
                        classname="font-poppins font-semibold text-sm text-white z-50"
                      >
                        CVS
                      </Link>
                    </li>
                    <li className="px-6 md:px-10">
                      <Link
                        href="#"
                        classname="font-poppins font-semibold text-sm text-white z-50"
                      >
                        Organization Governance
                      </Link>
                    </li>
                    <li className="px-6 md:px-10">
                      <Link
                        href="#"
                        classname="font-poppins font-semibold text-sm text-white z-50"
                      >
                        Financial Transparency
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="px-6 md:px-10">
                  <Link
                    href="/team"
                    className={`relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#F2CE24] after:transition-all after:duration-300 hover:text-[#F2CE24] hover:duration-300 hover:after:w-full ${pathname === "/team" && "text-[#F2CE24]"
                      }`}
                    onClick={handleListClick}
                  >
                    Our Team
                  </Link>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="mt-4 flex flex-col items-start justify-center bg-[#0052A0] py-4">
                    <li className="px-6 pb-4 text-[#FF9013] md:px-10">
                      <Link
                        href="#"
                        classname="font-poppins font-semibold text-sm text-[#FF9013] z-50"
                      >
                        SUBSCIDIARIES
                      </Link>
                    </li>
                    <li className="px-6 py-1 md:px-10">
                      <Link
                        href="#"
                        classname="font-poppins font-semibold text-sm text-white z-50"
                      >
                        Astro E-commerce
                      </Link>
                    </li>
                    <li className="px-6 py-1 md:px-10">
                      <Link
                        href="#"
                        classname="font-poppins font-semibold text-sm text-white z-50 py-2"
                      >
                        E-Learning
                      </Link>
                    </li>
                    <li className="px-6 py-1 md:px-10">
                      <Link
                        href="#"
                        classname="font-poppins font-semibold text-sm text-white z-50"
                      >
                        Startups
                      </Link>
                    </li>
                    <li className="px-6 py-4 text-[#FF9013] md:px-10">
                      <Link
                        href="#"
                        classname="font-poppins font-semibold text-sm text-[#FF9013] z-50"
                      >
                        INNOVATION
                      </Link>
                    </li>
                    <li href="#" className="px-6 py-2 md:px-10">
                      <Link
                        href="#"
                        classname="font-poppins font-semibold text-sm text-[#FF9013] z-50"
                      >
                        Science and Technology
                      </Link>
                    </li>
                    <li className="px-6 py-1 md:px-10">
                      <Link
                        href="#"
                        classname="font-poppins font-semibold text-sm text-[#FF9013] z-50"
                      >
                        Research and Developement
                      </Link>
                    </li>
                    <li className="px-6 py-2 md:px-10">
                      <Link
                        href="#"
                        classname="font-poppins font-semibold text-sm text-[#FF9013] z-50"
                      >
                        Startups and Enterpreneurship
                      </Link>
                    </li>
                    <li className="px-6 py-2 md:px-10">
                      <Link
                        href="#"
                        classname="font-poppins font-semibold text-sm text-[#FF9013] z-50"
                      >
                        Ventures and Seed Money
                      </Link>
                    </li>
                    <li className="px-6 py-4 text-[#FF9013] md:px-10">
                      <Link
                        href="#"
                        classname="font-poppins font-semibold text-sm text-[#FF9013] z-50 mt-2"
                      >
                        INFRASTRUCTURE
                      </Link>
                    </li>
                    <li className="px-6 py-1 md:px-10">
                      <Link
                        href="#"
                        classname="font-poppins font-semibold text-sm text-[#FF9013] z-50"
                      >
                        IT Labs
                      </Link>
                    </li>
                    <li className="px-6 py-1 md:px-10">
                      <Link
                        href="#"
                        classname="font-poppins font-semibold text-sm text-[#FF9013] z-50"
                      >
                        Science Museum
                      </Link>
                    </li>
                    <li className="px-6 py-1 md:px-10">
                      <Link
                        href="#"
                        classname="font-poppins font-semibold text-sm text-[#FF9013] z-50"
                      >
                        Old Age School
                      </Link>
                    </li>
                    <li className="px-6 py-1 md:px-10">
                      <Link
                        href="#"
                        classname="font-poppins font-semibold text-sm text-[#FF9013] z-50"
                      >
                        Inucbation and Startups
                      </Link>
                    </li>
                    <li className="px-6 py-1 md:px-10">
                      <Link
                        href="#"
                        classname="font-poppins font-semibold text-sm text-[#FF9013] z-50"
                      >
                        Observatory
                      </Link>
                    </li>
                    <li className="px-6 py-1 md:px-10">
                      <Link
                        href="#"
                        classname="font-poppins font-semibold text-sm text-[#FF9013] z-50"
                      >
                        Knowledge Park
                      </Link>
                    </li>
                    <li className="px-6 py-1 md:px-10">
                      <Link
                        href="#"
                        classname="font-poppins font-semibold text-sm text-[#FF9013] z-50"
                      >
                        Workshop
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="px-6 md:px-10">
                  <Link
                    href="#"
                    className={`relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#F2CE24] after:transition-all after:duration-300 hover:text-[#F2CE24] hover:duration-300 hover:after:w-full ${pathname === "/projects" && "text-[#F2CE24]"
                      }`}
                    onClick={handleListClick}
                  >
                    Our Project
                  </Link>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="mt-2 flex flex-col items-start justify-center bg-[#0052A0] py-4">
                    <li className="px-6 pb-4 pt-3 text-[#FF9013] md:px-10">
                      <Link
                        href="/short_term_projects"
                        classname="font-poppins font-semibold text-sm text-[#FF9013] z-50"
                      >
                        SHORT TERM PROJECTS
                      </Link>
                    </li>
                    <li className="px-6 py-1 md:px-10">
                      <Link
                        href="/short_term_projects/ghar_ghar_ma_gyan_ghar_ghar_ma_vigyan"
                        classname="font-poppins font-semibold text-sm text-white z-50"
                      >
                        Ghar Ghar ma Gyan Ghar Ghar ma Vigyan
                      </Link>
                    </li>
                    <li className="px-6 py-1 md:px-10">
                      <Link
                        href="/short_term_projects/establishing_workshop_lab"
                        classname="font-poppins font-semibold text-sm text-white z-50 py-2"
                      >
                        The Workshop Lab
                      </Link>
                    </li>
                    <li className="px-6 py-1 md:px-10">
                      <Link
                        href="/short_term_projects/creative_cafe"
                        classname="font-poppins font-semibold text-sm text-white z-50"
                      >
                        Creative Cafe
                      </Link>
                    </li>
                    <li className="px-6 pb-4 pt-3 text-[#FF9013] md:px-10">
                      <Link
                        href="/middle_term_projects"
                        classname="font-poppins font-semibold text-sm text-[#FF9013] z-50"
                      >
                        MIDDLE TERM PROJECTS
                      </Link>
                    </li>
                    <li className="px-6 py-1 md:px-10">
                      <Link
                        href="/middle_term_projects/establishing_observatory"
                        classname="font-poppins font-semibold text-sm text-[#FF9013] z-50"
                      >
                        Establishing Workshop Laboratory
                      </Link>
                    </li>
                    <li className="px-6 py-1 md:px-10">
                      <Link
                        href="/middle_term_projects/hetauda_innovation"
                        classname="font-poppins font-semibold text-sm text-[#FF9013] z-50"
                      >
                        Hetauda Research and Innovation Center
                      </Link>
                    </li>
                    <li className="px-6 py-1 md:px-10">
                      <Link
                        href="/middle_term_projects/national_expo"
                        classname="font-poppins font-semibold text-sm text-[#FF9013] z-50"
                      >
                        National Expo for Science Projects
                      </Link>
                    </li>
                    <li className="px-6 py-3 pb-4 text-[#FF9013] md:px-10">
                      <Link
                        href="/long_term_projects"
                        classname="font-poppins font-semibold text-sm text-[#FF9013] z-50"
                      >
                        LONG TERM PROJECTS
                      </Link>
                    </li>
                    <li className="px-6 py-1 md:px-10">
                      <Link
                        href="/long_term_projects/planetarium"
                        classname="font-poppins font-semibold text-sm text-[#FF9013] z-50"
                      >
                        Planetarium
                      </Link>
                    </li>
                    <li className="px-6 py-1 md:px-10">
                      <Link
                        href="/long_term_projects/establishing_workshop_lab"
                        classname="font-poppins font-semibold text-sm text-[#FF9013] z-50"
                      >
                        Establishing Workshop Lab
                      </Link>
                    </li>
                    <li className="px-6 py-1 md:px-10">
                      <Link
                        href="/long_term_projects/creative_cafe"
                        classname="font-poppins font-semibold text-sm text-[#FF9013] z-50"
                      >
                        Creative Cafe
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Link
              href="/works"
              className={`relative px-6 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#F2CE24] after:transition-all after:duration-300 hover:text-[#F2CE24] hover:duration-300 hover:after:w-full md:px-10 ${pathname === "/works" && "text-[#F2CE24]"
                }`}
              onClick={handleListClick}
            >
              Our Works
            </Link>

            <Link
              href="/blogs"
              className={`relative px-6 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#F2CE24] after:transition-all after:duration-300 hover:text-[#F2CE24] hover:duration-300 hover:after:w-full md:px-10 ${pathname === "/blogs" && "text-[#F2CE24]"
                }`}
              onClick={handleListClick}
            >
              Blogs & News
            </Link>
            <Link
              href="/careers"
              className={`relative px-6 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#F2CE24] after:transition-all after:duration-300 hover:text-[#F2CE24] hover:duration-300 hover:after:w-full md:px-10 ${pathname === "/careers" && "text-[#F2CE24]"
                }`}
              onClick={handleListClick}
            >
              Careers
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

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
    </header>
  );
};

export default Navbar;
