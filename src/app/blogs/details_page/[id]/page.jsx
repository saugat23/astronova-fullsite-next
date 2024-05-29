import React from "react";
import { getBlogById } from "../../../services/api";
import BlogById from "../../../../components/UI/Blogs/BlogById/BlogById";

async function page({ params }) {
  const id = params;
  const data = await getBlogById(id);

  return <BlogById data={data} />;
}

export default page;
