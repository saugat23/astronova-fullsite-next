"use client";

import Home from "../sections/Home";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init();
    });
  }, []);

  return (
    <>
      <Home />
    </>
  );
}
