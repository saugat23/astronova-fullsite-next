"use client"

import React from "react";
import dynamic from "next/dynamic";

const LongTermProjects = dynamic(() => import("../../components/UI/longTermProjects/longTermProjects"), {
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
    <LongTermProjects />
    <Footer />
    </>
  );
};

export default Page;