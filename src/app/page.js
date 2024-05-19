"use client";
import { useEffect } from "react";
import Home from "../sections/Home";
import { Toaster } from "sonner";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Page() {
  useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <>
      <Toaster richColors position="top-right" />
      <Home />
    </>
  );
}
