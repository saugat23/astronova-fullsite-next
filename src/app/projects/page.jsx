"use client"

import React from "react";
import dynamic from "next/dynamic";

const Projects = dynamic(() => import("../../components/UI/Projects/Projects"), {
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
    <Projects />
    <Footer />
    </>
  );
};

export default page;
