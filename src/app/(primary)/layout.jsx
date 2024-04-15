import React from 'react'
import Navbar from "../../sections/Navbar";
import Footer from "../../sections/Footer";

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