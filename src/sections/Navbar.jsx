"use client";

import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";

const Navbar = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

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
      className="h-auto bg-[#048FB7] sticky"
    >
      <nav className="w-full flex justify-between items-center py-4 px-4 lg:px-4 xl:px-8 2xl:px-12 2xl:pt-4">
        <div className="flex justify-center items-center">
          <Link href="/">
            <Image
              src="/assets/navbarlogo.svg"
              alt="Navbar Logo"
              width={120}
              height={60}
              priority
              className="cursor-pointer 2xl:w-40 xl:w-36 lg:w-32 md:w-30"
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:items-center lg:justify-end lg:w-full">
          <ul className="flex justify-evenly items-center lg:space-x-4 2xl:space-x-8 text-white font-ibmplex font-semibold text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl uppercase leading-[25.2px]">
            <li>
              <Link
                href="/"
                className="relative after:bg-white after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="relative after:bg-white after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/team"
                className="relative after:bg-white after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300"
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="relative after:bg-white after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300"
              >
                Our Project
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="relative after:bg-white after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300"
              >
                Science Expo
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="relative after:bg-white after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300"
              >
                Opportunity
              </Link>
            </li>
            <div className="flex justify-center items-center">
              <Button
                type="button"
                className="bg-[#F2CE24] rounded-lg px-4 py-2 2xl:px-12 xl:px-8 md:px-4 md:py-4 2xl:py-6 text-black font-ibmplex font-semibold text-base lg:text-lg 2xl:text-xl leading-[25.2px] hover:scale-105 hover:bg-black hover:text-[#F2CE24]"
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
            className="absolute top-0 h-[60vh] overflow-hidden w-screen bg-[#048FB7] flex flex-col justify-evenly items-center px-12 z-30 sm:px-14 md:px-16 py-6 sm:py-8 lg:hidden font-opensans font-semibold text-sm text-white"
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.25 }}
            exit={{ y: -250, opacity: 0 }}
          >
            <a to="#" onClick={handleToggleMenu} className="self-end">
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
                className="relative after:bg-white after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300"
              >
                Home
              </Link>
            
              <Link
                href="/about"
                className="relative after:bg-white after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300"
              >
                About Us
              </Link>
            
              <Link
                href="/team"
                className="relative after:bg-white after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300"
              >
                Our Team
              </Link>
              <Link
                href="#"
                className="relative after:bg-white after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300"
              >
                Our Project
              </Link>
            
              <Link
                href="#"
                className="relative after:bg-white after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300"
              >
                Science Expo
              </Link>
            
              <Link
                href="#"
                className="relative after:bg-white after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300"
              >
                Opportunity
              </Link>
            
          </motion.div>
        )}
      </AnimatePresence>

      <Modal isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <div>
              <ModalBody className="flex justify-evenly items-center">
                <div className="lg:px-6 lg:py-6 border-r-3 border-white flex justify-center items-center">
                  <h2 className="font-opensans font-extrabold xl:text-8xl lg:text-7xl tracking-tighter">
                    MAKE A DONATION TOWARDS STUDENT’S INNOVATION
                  </h2>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </div>
          )}
        </ModalContent>
      </Modal>
    </header>
  );
};

export default Navbar;
