import React from "react";
import dynamic from "next/dynamic";
import TransitionEffect from "../../components/UI/TransitionEffect";

const ShortTermProjects = dynamic(
  () => import("../../components/UI/shortTermProjects/shortTermProjects"),
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
      <ShortTermProjects />
      <Footer />
    </>
  );
};

export default Page;
