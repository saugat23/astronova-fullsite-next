import React from "react";
import dynamic from "next/dynamic";
import { getCampaignById } from "../../../../services/api";

const EditCampaign = dynamic(
  () =>
    import(
      "../../../../../components/UI/Dashboard/Campaign/EditCampaign/EditCampaign"
    ),
  {
    loading: () => <p> </p>,
  },
);

async function page({ params }) {
  const id = params;
  const data = await getCampaignById(id);

  return <EditCampaign data={data} />;
}

export default page;
