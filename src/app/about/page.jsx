"use client";

import React from "react";
import dynamic from "next/dynamic";

const About = dynamic(() => import("../../components/UI/About/About"), {
  loading: () => <p> </p>,
});

const Navbar = dynamic(() => import("../../sections/Navbar"),{
  loading: () => <p> </p> 
});

const Footer = dynamic(() => import("../../sections/Footer"),{
  loading: () => <p> </p>
});

const Page = () => {
  return (
    <>
    <Navbar />
    <About />
    <Footer />
    </>
  );
};

export default Page;
