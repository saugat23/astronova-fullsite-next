"use client";

import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Media from "../sections/Media";
import Impact from "../sections/Impact";
import Partners from "../sections/Partners";
import Footer from "../sections/Footer";

const Home = () => {
  const [showPopup, setShowPopup] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("full");

  const sizes = [
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
    "full",
  ];

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleOpen();
    }, 5000);

    return () => clearTimeout(timer);
  },);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Media />
      <Impact />
      <Partners />
      <Footer />
      {showPopup && (
        <Modal
          size={size}
          isOpen={isOpen}
          onClose={onClose}
          className="popup-donation"
        >
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
      )}
    </>
  );
};

export default Home;
