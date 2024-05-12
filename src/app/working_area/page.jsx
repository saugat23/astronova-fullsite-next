"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const ASW = dynamic(() => import("../../components/UI/WorkingField/ASW"), {
  loading: () => <p> </p>,
});

const Startup = dynamic(
  () => import("../../components/UI/WorkingField/Startup"),
  {
    loading: () => <p> </p>,
  }
);

const NESEP = dynamic(() => import("../../components/UI/WorkingField/NESEP"), {
  loading: () => <p> </p>,
});

const Navbar = dynamic(() => import("../../sections/Navbar"), {
  loading: () => <p> </p>,
});

const Footer = dynamic(() => import("../../sections/Footer"), {
  loading: () => <p> </p>,
});

const Page = () => {
  const workParams = useSearchParams();
  const work = workParams.get("useSearchParams hook error");

  function RenderWorkSection() {
    if (work == "asw") {
      return <ASW />;
    } else if (work == "startup") {
      return <Startup />;
    } else if (work == "nesep") {
      return <NESEP />;
    } else {
      return "some error";
    }
  }
  return (
    <>
      <Suspense>
        <Navbar />
        <RenderWorkSection />
        <Footer />
      </Suspense>
    </>
  );
};

export default Page;
