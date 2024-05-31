import React from "react";
import dynamic from "next/dynamic";
import TransitionEffect from "../../components/UI/TransitionEffect";

const CoordinatorLogin = dynamic(
  () => import("../../components/UI/Auth/CoordinatorLogin"),
  {
    loading: () => <p> </p>,
  },
);

const Page = () => {
  return (
    <>
      <TransitionEffect />
      <CoordinatorLogin />
    </>
  );
};

export default Page;
