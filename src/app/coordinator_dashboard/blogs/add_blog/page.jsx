import React from "react";
import dynamic from "next/dynamic";

const AddBlog = dynamic(
  () => import("../../../../components/UI/Dashboard/Blogs/AddBlog/AddBlog"),
  {
    loading: () => <p> </p>,
  },
);

function page() {
  return <AddBlog />;
}

export default page;
