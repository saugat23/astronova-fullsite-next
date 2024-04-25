import React from 'react'
import dynamic from 'next/dynamic'

const Startup = dynamic(() => import("../../components/UI/WorkingField/Startup"), {
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
    <Startup />
    <Footer />
    </>
  )
}

export default page