"use client";

import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Media from "./Media";
import Impact from "./Impact";
import Partners from "./Partners";
import Footer from "./Footer";
import "aos/dist/aos.css";
import AOS from "aos";

const Home = () => {
  const [showPopup, setShowPopup] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };

  useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded",
      once: true,
      offset: 50,
    });
  }, []);

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
        <Modal isOpen={isOpen} onClose={onClose} className="popup-donation">
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
