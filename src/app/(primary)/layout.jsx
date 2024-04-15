"use client"
import React from 'react'
import dynamic from 'next/dynamic';
const Navbar = dynamic(
  () => import("../../sections/Navbar"),
  {
    ssr: false,
  }
);
const Footer = dynamic(
  () => import("../../sections/Footer"),
  {
    ssr: false,
  }
);

const layout = ({children}) => {
  return (
    <>
        <Navbar />
        {children}
        <Footer />
    </>
  )
}

export default layout