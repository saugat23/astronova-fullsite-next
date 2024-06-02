import React from "react";
import dynamic from "next/dynamic";
import TransitionEffect from "../../components/UI/TransitionEffect";

const Navbar = dynamic(() => import("../../sections/Navbar"), {
  loading: () => <p> </p>,
});
const MentorRegistration = dynamic(
  () => import("../../components/UI/MentorRegistration/MentorRegistration"),
  {
    loading: () => <p> </p>,
  },
);

function page() {
  return (
    <>
      <TransitionEffect />
      <Navbar />
      <MentorRegistration />
    </>
  );
}
export default page;
