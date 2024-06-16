import React from "react";
import EstablishingWorkshopLab from "../../../components/UI/longTermProjects/EstablishingWorkshopLab/EstablishingWorkshopLab";
import TransitionEffect from "../../../components/UI/TransitionEffect";
import Navbar from "../../../sections/Navbar";
import Footer from "../../../sections/Footer";

function page() {
  return (
    <>
      <TransitionEffect />
      <Navbar />
      <EstablishingWorkshopLab />
      <Footer />
    </>
  );
}

export default page;
