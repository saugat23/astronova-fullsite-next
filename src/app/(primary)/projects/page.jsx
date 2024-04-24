import React from "react";
import dynamic from "next/dynamic";

const Projects = dynamic(() => import("../../../components/UI/Projects/Projects"), {
  loading: () => <p> </p>,
})

const page = () => {
  return (
    <Projects />
  );
};

export default page;
