import React from "react";
import GharGharMaGyan from "../../../components/UI/shortTermProjects/GharGharMaGyan/GharGharMaGyan";
import TransitionEffect from "../../../components/UI/TransitionEffect";
import Navbar from "../../../sections/Navbar";
import Footer from "../../../sections/Footer";

function page() {
  return (
    <>
      <TransitionEffect />
      <Navbar />
      <GharGharMaGyan />
      <Footer />
    </>
  );
}

export default page;
