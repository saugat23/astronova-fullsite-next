import React from "react";
import Planetarium from "../../../components/UI/longTermProjects/Planetarium/Planetarium";
import TransitionEffect from "../../../components/UI/TransitionEffect";
import Navbar from "../../../sections/Navbar";
import Footer from "../../../sections/Footer";

function page() {
  return (
    <>
      <TransitionEffect />
      <Navbar />
      <Planetarium />
      <Footer />
    </>
  );
}

export default page;
