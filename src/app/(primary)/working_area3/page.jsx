import React from 'react'
import dynamic from 'next/dynamic'

const Startup = dynamic(() => import("../../../components/UI/WorkingField/Startup"), {
    loading: ()=> <p> </p>
})

const page = () => {
  return (
    <Startup />
  )
}

export default page