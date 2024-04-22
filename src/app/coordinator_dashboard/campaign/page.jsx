"use client";
import React from "react";
import dynamic from "next/dynamic";

const Campaign = dynamic(() => import("../../../components/UI/Dashboard/Campaign"), {
  loading: () => <p> </p>,
});

const Page = () => {
  return (
    <Campaign />
  )
};

export default Page;
