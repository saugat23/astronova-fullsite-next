"use client";

import React from "react";
import { usePathname } from "next/navigation";
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

const Page = () => {
  const pathname = usePathname();
  const id = pathname;
  console.log("pathname: ", pathname);

  if (!id) {
    return <div>Error: ID not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="bg-[#f6f6f6]">
        <WorkById id={id} />
      </div>
      <Footer />
    </>
  );
};

export default Page;
