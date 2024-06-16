import React from "react";
import NationalExpo from "../../../components/UI/middleTermProjects/NationalExpo/NationalExpo";
import TransitionEffect from "../../../components/UI/TransitionEffect";
import Navbar from "../../../sections/Navbar";
import Footer from "../../../sections/Footer";

function page() {
  return (
    <>
      <TransitionEffect />
      <Navbar />
      <NationalExpo />
      <Footer />
    </>
  );
}

export default page;
