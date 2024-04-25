import React from 'react'
import dynamic from 'next/dynamic'

const NESEP = dynamic(() => import("../../components/UI/WorkingField/NESEP"), {
    loading: ()=> <p> </p>
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
    <NESEP />
    <Footer />
    </>
  )
}

export default page