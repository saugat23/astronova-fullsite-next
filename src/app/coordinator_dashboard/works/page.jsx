import React from "react";
import dynamic from "next/dynamic";
import { getAllWorks } from "../../services/api";
const Works = dynamic(() => import("../../../components/UI/Dashboard/Works/Works"), {
  loading: () => <p> </p>,
});


const Page = async () => {
  const data = await getAllWorks();

  return (
    <Works data={data}/>
  )
};

export default Page;
