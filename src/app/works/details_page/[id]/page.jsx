import React from "react";
import dynamic from "next/dynamic";

const WorkById = dynamic(
  () => import("../../../../components/UI/Works/WorkById/WorkById"),
  {
    loading: () => <p> </p>,
  }
);

const Navbar = dynamic(() => import("../../sections/Navbar"), {
  loading: () => <p> </p>,
});

const Footer = dynamic(() => import("../../sections/Footer"), {
  loading: () => <p> </p>,
});

const Page = ({ params }) => {
  const id = params.id;
  console.log("id :", id);
  return (
    <>
      <Navbar />
      <div className="bg-[#f6f6f6]">
        <WorkById id={id} />
      </div>
      <Footer />
    </>
  );
};

export default Page;
