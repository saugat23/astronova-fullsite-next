import React from 'react'
import dynamic from 'next/dynamic'

const ASW = dynamic(() => import("../../components/UI/WorkingField/ASW"), {
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
    <ASW />
    <Footer />
    </>
  )
}

export default page