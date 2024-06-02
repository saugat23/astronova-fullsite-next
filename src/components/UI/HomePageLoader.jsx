"use client";

import React from "react";
import Lottie from "lottie-react";
import RocketLoader from "./rocket.json";

function Page() {
  return (
    <>
      <main className="h-screen w-screen flex justify-center items-center">
        <Lottie
          animationData={RocketLoader}
          loop={true}
          className="w-60 h-60"
        />
      </main>
    </>
  );
}

export default Page;
