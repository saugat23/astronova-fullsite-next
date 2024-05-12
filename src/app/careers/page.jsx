"use client" 

import React from "react";
import dynamic from "next/dynamic";

const Careers = dynamic(() => import("../../components/UI/Careers/Careers"),{
  loading: () => <p> </p>,
});

const Navbar = dynamic(() => import("../../sections/Navbar"),{
  loading: () => <p> </p> 
});

const Footer = dynamic(() => import("../../sections/Footer"),{
  loading: () => <p> </p>
});


const page = () => {
  return (
    <>
    <Navbar />
    <Careers />
    <Footer />
    </>
  );
};

export default page;
