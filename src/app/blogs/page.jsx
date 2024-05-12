"use client"

import React from "react";
import dynamic from "next/dynamic";

const Blogs = dynamic(() => import("../../components/UI/Blogs/Blogs"),{
  loading: () => <p> </p>,
  ssr: false,
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
    <Blogs />
    <Footer />
    </>
  );
};

export default page;
