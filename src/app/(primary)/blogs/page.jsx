import React from "react";
import dynamic from "next/dynamic";

const Blogs = dynamic(() => import("../../../components/UI/Blogs/Blogs"),{
  loading: () => <p> </p>,
})

const page = () => {
  return (
    <Blogs />
  );
};

export default page;
