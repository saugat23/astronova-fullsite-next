import React from "react";
import dynamic from 'next/dynamic'

const CoordinatorLogin = dynamic(() => import('../../components/UI/Auth/CoordinatorLogin'), {
   loading: () => <p> </p>,
});

const Page = () => {

  return (
    <>
      <CoordinatorLogin />
    </>
  );
};

export default Page;
