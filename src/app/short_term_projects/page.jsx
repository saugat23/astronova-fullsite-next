"use client"

import React from "react";
import dynamic from "next/dynamic";

const ShortTermProjects = dynamic(() => import("../../components/UI/shortTermProjects/shortTermProjects"), {
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
    <ShortTermProjects />
    <Footer />
    </>
  );
};

export default Page;