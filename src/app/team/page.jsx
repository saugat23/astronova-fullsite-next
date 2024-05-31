import React from "react";
import dynamic from "next/dynamic";
import TransitionEffect from "../../components/UI/TransitionEffect";

const Team = dynamic(() => import("../../components/UI/Team/Team"), {
  loading: () => <p> </p>,
});

const Navbar = dynamic(() => import("../../sections/Navbar"), {
  loading: () => <p> </p>,
});

const Footer = dynamic(() => import("../../sections/Footer"), {
  loading: () => <p> </p>,
});

const page = () => {
  return (
    <>
      <TransitionEffect />
      <Navbar />
      <Team />
      <Footer />
    </>
  );
};

export default page;
