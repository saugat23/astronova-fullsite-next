"use client";

import React from "react";
import dynamic from "next/dynamic";
import Loader from "../../../components/UI/Loader/Loader";

const WorkById = dynamic(
  () => import("../../../components/UI/Works/WorkById/WorkById"),
  {
    loading: () => <p> </p>,
  },
);

const Navbar = dynamic(() => import("../../../sections/Navbar"), {
  loading: () => <p> </p>,
});

const Footer = dynamic(() => import("../../../sections/Footer"), {
  loading: () => <p> </p>,
});

const Page = ({ params }) => {
  return (
    <>
      <Navbar />
      <div className="bg-[#f6f6f6]">
        <WorkById params={params} />
      </div>
      <Footer />
    </>
  );
};

export default Page;
