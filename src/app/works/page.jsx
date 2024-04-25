import React from 'react'
import dynamic from 'next/dynamic'

const Works = dynamic(() => import("../../components/UI/Works/Works"), {
  loading: () => <p> </p>
});

const Navbar = dynamic(() => import("../../sections/Navbar"),{
  loading: () => <p> </p> 
});

const Footer = dynamic(() => import("../../sections/Footer"),{
  loading: () => <p> </p>
});

const page = () => {
  return (
    <>
    <Navbar />
    <Works />
    <Footer />
    </>
  )
}

export default page