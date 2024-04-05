"use client";

import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init();
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  );
}
