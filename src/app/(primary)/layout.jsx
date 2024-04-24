import React from 'react'
import dynamic from 'next/dynamic';

const Navbar = dynamic(
  () => import("../../sections/Navbar"),
  {
    loading: () => <p> </p>
  }
);
const Footer = dynamic(
  () => import("../../sections/Footer"),
  {
    loading: () => <p> </p>
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