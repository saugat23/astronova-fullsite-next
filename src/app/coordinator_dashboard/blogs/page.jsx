import React from "react";
import dynamic from "next/dynamic";
import { getAllBlogs } from "../../services/api";

const Blogs = dynamic(
  () => import("../../../components/UI/Dashboard/Blogs/Blogs"),
  {
    loading: () => <p> </p>,
  },
);

const Page = async () => {
  const data = await getAllBlogs();

  return <Blogs data={data} />;
};

export default Page;
