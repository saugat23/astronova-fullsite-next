import React from "react";
import dynamic from "next/dynamic";
import TransitionEffect from "../../components/UI/TransitionEffect";

const Navbar = dynamic(() => import("../../sections/Navbar"), {
  loading: () => <p> </p>,
});

const IhaveAnIdeaForm = dynamic(
  () => import("../../components/UI/IhaveAnIdeaForm/IhaveAnIdeaForm"),
  {
    loading: () => <p> </p>,
  },
);

function page() {
  return (
    <>
      <TransitionEffect />
      <Navbar />
      <IhaveAnIdeaForm />
    </>
  );
}

export default page;
