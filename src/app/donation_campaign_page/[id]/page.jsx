import React from "react";
import dynamic from "next/dynamic";
import { getCampaignById } from "../../services/api";
import TransitionEffect from "../../../components/UI/TransitionEffect";

const CampaignById = dynamic(
  () =>
    import(
      "../../../components/UI/Dashboard/Campaign/CampaignById/CampaignById"
    ),
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

const Page = async ({ params }) => {
  const id = params;
  const data = await getCampaignById(id);

  return (
    <>
      <TransitionEffect />
      <Navbar />
      <div className="bg-[#f6f6f6]">
        <CampaignById params={params} data={data} />
      </div>
      <Footer />
    </>
  );
};

export default Page;
