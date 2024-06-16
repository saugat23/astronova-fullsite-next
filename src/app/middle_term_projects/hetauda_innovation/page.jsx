import React from "react";
import HetaudaInnovation from "../../../components/UI/middleTermProjects//HetaudaInnovation/HetaudaInnovation";
import TransitionEffect from "../../../components/UI/TransitionEffect";
import Navbar from "../../../sections/Navbar";
import Footer from "../../../sections/Footer";

function page() {
  return (
    <>
      <TransitionEffect />
      <Navbar />
      <HetaudaInnovation />
      <Footer />
    </>
  );
}

export default page;
