import React from "react";
import EstablishingObservatory from "../../../components/UI/middleTermProjects/EstablishingObservatory/EstablishingObservatory";
import TransitionEffect from "../../../components/UI/TransitionEffect";
import Navbar from "../../../sections/Navbar";
import Footer from "../../../sections/Footer";

function page() {
  return (
    <>
      <TransitionEffect />
      <Navbar />
      <EstablishingObservatory />
      <Footer />
    </>
  );
}

export default page;
