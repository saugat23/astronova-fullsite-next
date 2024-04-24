import React from "react";
import dynamic from "next/dynamic";

const Team = dynamic(() => import("../../../components/UI/Team/Team"), {
  loading: () => <p> </p>
})

const page = () => {
  return (
    <Team />
  );
};

export default page;
