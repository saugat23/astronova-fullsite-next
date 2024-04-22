"use client";

import React from "react";
import dynamic from "next/dynamic";
const Works = dynamic(() => import("../../../components/UI/Dashboard/Works"), {
  loading: () => <p> </p>,
});


const Page = () => {
  return (
    <Works />
  )
};

export default Page;
