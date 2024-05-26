import React from "react";
import dynamic from "next/dynamic";
import { getAllCampaigns } from "../../services/api";

const Campaign = dynamic(() => import("../../../components/UI/Dashboard/Campaign/Campaign"), {
  loading: () => <p> </p>,
});

const Page = async () => {
  const data = await getAllCampaigns();

  return (
    <Campaign data={data}/>
  )
};

export default Page;
