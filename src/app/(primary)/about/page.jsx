"use client";

import React from "react";
import dynamic from "next/dynamic";

const About = dynamic(() => import("../../../components/UI/About/About"), {
  loading: () => <p> </p>,
});

const Page = () => {
  return (
    <About />
  );
};

export default Page;
