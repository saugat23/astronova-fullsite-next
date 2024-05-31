import React from "react";
import dynamic from "next/dynamic";

const Quiz2 = dynamic(() => import("../../../components/UI/Evaluation/Quiz2"), {
  loading: () => <p> </p>,
});

function page() {
  return (
    <>
      <Quiz2 />
    </>
  );
}

export default page;
