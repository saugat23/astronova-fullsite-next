import React from 'react'
import Navbar from "../../sections/Navbar"

const layout = ({children}) => {
  return (
    <>
        <Navbar />
        {children}
    </>
  )
}

export default layout