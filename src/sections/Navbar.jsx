import React from "react";
import Image from "next/image";
import Link from "next/link";
import "aos/dist/aos.css";
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

  return (
    <header
      data-aos="fade-down"
      data-aos-duration="500"
      className="h-auto bg-[#048FB7] py-4 px-4 lg:px-4 xl:px-8 2xl:px-12 2xl:pt-12"
    >
      <nav className="w-full flex justify-between items-center">
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
          <ul className="flex justify-evenly items-center lg:space-x-6 2xl:space-x-8 text-white font-ibmplex font-semibold text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl uppercase leading-[25.2px]">
            <li>
              <Link
                href="#"
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
            <li>
              <Link
                href="#"
                className="relative after:bg-white after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300"
              >
                Blogs & News
              </Link>
            </li>
            <div className="flex justify-center items-center">
              <Button type="button" className="bg-[#F2CE24] rounded-lg px-4 py-2 2xl:px-12 xl:px-8 md:px-4 md:py-6 2xl:py-7 text-black font-ibmplex font-semibold text-lg lg:text-xl 2xl:text-2xl leading-[25.2px] hover:shadow-2xl hover:scale-105">
                SUPPORT US
              </Button>
            </div>
          </ul>
        </div>
        <div className="flex lg:hidden">
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
        </div>
      </nav>
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
