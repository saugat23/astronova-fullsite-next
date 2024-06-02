import React from "react";
import dynamic from "next/dynamic";
import TransitionEffect from "../../components/UI/TransitionEffect";

const Navbar = dynamic(() => import("../../sections/Navbar"), {
  loading: () => <p> </p>,
});
const SchoolEventRegistration = dynamic(
  () =>
    import(
      "../../components/UI/SchoolEventRegistration/SchoolEventRegistration"
    ),
  {
    loading: () => <p> </p>,
  },
);

function page() {
  return (
    <>
      <TransitionEffect />
      <Navbar />
      <SchoolEventRegistration />
    </>
  );
}
export default page;
