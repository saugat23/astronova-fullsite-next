import React from "react";
import dynamic from "next/dynamic";

const CampaignById = dynamic(() => import("../../../../components/UI/Dashboard/CampaignById/CampaignById"), {
  loading: () => <p> </p>,
});


const Page = ({ params }) => {
    const id = params.id;
    console.log("id :" ,id);
  return (
   <div className="bg-[#f6f6f6]">
    <CampaignById id={id}/>
   </div> 
  )
}

export default Page