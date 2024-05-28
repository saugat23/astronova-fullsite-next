import React from "react";
import dynamic from "next/dynamic";
import { getAllBlogs } from "../services/api";

const Blogs = dynamic(() => import("../../components/UI/Blogs/Blogs"), {
  loading: () => <p> </p>,
  ssr: false,
});

const Navbar = dynamic(() => import("../../sections/Navbar"), {
  loading: () => <p> </p>,
});

const Footer = dynamic(() => import("../../sections/Footer"), {
  loading: () => <p> </p>,
});

const page = async () => {
  const data = await getAllBlogs();
  return (
    <>
      <Navbar />
      <Blogs data={data} />
      <Footer />
    </>
  );
};

export default page;
