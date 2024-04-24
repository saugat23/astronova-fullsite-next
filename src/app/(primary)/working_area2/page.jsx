import React from 'react'
import dynamic from 'next/dynamic'

const NESEP = dynamic(() => import("../../../components/UI/WorkingField/NESEP"), {
    loading: ()=> <p> </p>
})

const page = () => {
  return (
    <NESEP />
  )
}

export default page