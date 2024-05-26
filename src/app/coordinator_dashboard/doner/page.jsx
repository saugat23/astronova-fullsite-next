import React from "react";
import dynamic from "next/dynamic";
// import {getAllDonors} from "../../services/api";
const Donor = dynamic(() => import("../../../components/UI/Dashboard/Donor/Donor"), {
  loading: () => <p> </p>,
});

const Page = async () => {
  return (
  <Donor 
  //data={data}
  />
  );
};

export default Page;
