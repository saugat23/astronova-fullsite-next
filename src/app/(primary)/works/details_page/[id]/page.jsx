import React from "react";
import dynamic from "next/dynamic";

const WorkById = dynamic(() => import("../../../../../components/UI/Works/WorkById/WorkById"), {
  loading: () => <p> </p>,
});


const Page = ({ params }) => {
    const id = params.id;
    console.log("id :" ,id);
  return (
   <div className="bg-[#f6f6f6]">
    <WorkById id={id}/>
   </div> 
  )
}

export default Page