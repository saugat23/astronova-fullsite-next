"use client";

import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Media from "../sections/Media";
import Impact from "../sections/Impact";
import Partners from "../sections/Partners";
import Footer from "../sections/Footer";
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
      <Media />
      <Impact />
      <Partners />
      <Footer />
    </>
  );
}
