"use client";

import React from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const CampaignById = dynamic(
  () => import("../../../components/UI/Dashboard/CampaignById/CampaignById"),
  {
    loading: () => <p>Loading...</p>,
  },
);

const Navbar = dynamic(() => import("../../../sections/Navbar"), {
  loading: () => <p></p>,
});

const Footer = dynamic(() => import("../../../sections/Footer"), {
  loading: () => <p></p>,
});

const Page = () => {
  const pathname = usePathname();
  const id = pathname;
  console.log("pathname : ", pathname);

  if (!id) {
    return <div>Error: ID not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="bg-[#f6f6f6]">
        <CampaignById id={id} />
      </div>
      <Footer />
    </>
  );
};

export default Page;
