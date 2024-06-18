import React from "react";
import dynamic from "next/dynamic";
import { getBlogById } from "../../../../services/api";

const EditBlog = dynamic(
  () =>
    import("../../../../../components/UI/Dashboard/Blogs/EditBlog/EditBlog"),
  {
    loading: () => <p> </p>,
  },
);

async function page({ params }) {
  const { id } = params;
  const data = await getBlogById(id);

  return <EditBlog data={data} />;
}

export default page;
