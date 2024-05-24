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

const Page = ({ params }) => {
  return (
    <>
      <Navbar />
      <div className="bg-[#f6f6f6]">
        <CampaignById params={params} />
      </div>
      <Footer />
    </>
  );
};

export default Page;
