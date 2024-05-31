import React from "react";
import { getBlogById } from "../../../services/api";
import dynamic from "next/dynamic";
import TransitionEffect from "../../../../components/UI/TransitionEffect";
const BlogById = dynamic(
  () => import("../../../../components/UI/Blogs/BlogById/BlogById"),
  {
    loading: () => <p> </p>,
  },
);
const Navbar = dynamic(() => import("../../../../sections/Navbar"), {
  loading: () => <p> </p>,
});
const Footer = dynamic(() => import("../../../../sections/Footer"), {
  loading: () => <p> </p>,
});

async function page({ params }) {
  const { id } = params;
  const data = await getBlogById(id);

  return (
    <>
      <TransitionEffect />
      <Navbar />
      <BlogById data={data} />
      <Footer />
    </>
  );
}

export default page;
