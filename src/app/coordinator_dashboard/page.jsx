"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {

  const router = useRouter();

  return (
    <section className="h-auto max-w-screen overflow-hidden">
      {router.forward("/dashboard")}
    </section>
  );
};

export default Page;
