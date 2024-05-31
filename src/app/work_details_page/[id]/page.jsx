import React from "react";
import dynamic from "next/dynamic";
import { getAllWorks, getWorkById } from "../../services/api";
import TransitionEffect from "../../../components/UI/TransitionEffect";

const WorkById = dynamic(
  () => import("../../../components/UI/Works/WorkById/WorkById"),
  {
    loading: () => <p> </p>,
  },
);

const Navbar = dynamic(() => import("../../../sections/Navbar"), {
  loading: () => <p> </p>,
});

const Footer = dynamic(() => import("../../../sections/Footer"), {
  loading: () => <p> </p>,
});

const Page = async ({ params }) => {
  const id = params;
  const data = await getWorkById(id);

  const allWorks = await getAllWorks();
  return (
    <>
      <TransitionEffect />
      <Navbar />
      <div className="bg-[#f6f6f6]">
        <WorkById params={params} data={data} allWorks={allWorks} />
      </div>
      <Footer />
    </>
  );
};

export default Page;
