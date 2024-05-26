import React from 'react'
import dynamic from 'next/dynamic'
import { getAllWorks } from '../services/api';

const Works = dynamic(() => import("../../components/UI/Works/Works"), {
  loading: () => <p> </p>
});

const Navbar = dynamic(() => import("../../sections/Navbar"),{
  loading: () => <p> </p> 
});

const Footer = dynamic(() => import("../../sections/Footer"),{
  loading: () => <p> </p>
});

const page = async() => {
  const data = await getAllWorks();
  return (
    <>
    <Navbar />
    <Works data={data}/>
    <Footer />
    </>
  )
}

export default page