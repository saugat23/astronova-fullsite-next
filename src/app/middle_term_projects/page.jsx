import React from "react";
import dynamic from "next/dynamic";
import TransitionEffect from "../../components/UI/TransitionEffect";

const MiddleTermProjects = dynamic(
  () => import("../../components/UI/middleTermProjects/middleTermProjects"),
  {
    loading: () => <p> </p>,
  },
);

const Navbar = dynamic(() => import("../../sections/Navbar"), {
  loading: () => <p> </p>,
});

const Footer = dynamic(() => import("../../sections/Footer"), {
  loading: () => <p> </p>,
});

const Page = () => {
  return (
    <>
      <TransitionEffect />
      <Navbar />
      <MiddleTermProjects />
      <Footer />
    </>
  );
};

export default Page;
