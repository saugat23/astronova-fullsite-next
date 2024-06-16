import React from "react";
import CreativeCafe from "../../../components/UI/longTermProjects/CreativeCafe/CreativeCafe";
import TransitionEffect from "../../../components/UI/TransitionEffect";
import Navbar from "../../../sections/Navbar";
import Footer from "../../../sections/Footer";

function page() {
  return (
    <>
      <TransitionEffect />
      <Navbar />
      <CreativeCafe />
      <Footer />
    </>
  );
}

export default page;
