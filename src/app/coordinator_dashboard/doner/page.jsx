"use client";
import React from "react";
import dynamic from "next/dynamic";

const Donor = dynamic(() => import("../../../components/UI/Dashboard/Donor"), {
  loading: () => <p> </p>,
});

const Page = () => {
  return (
  <Donor />
  );
};

export default Page;
