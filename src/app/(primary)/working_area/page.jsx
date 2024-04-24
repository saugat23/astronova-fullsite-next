import React from 'react'
import dynamic from 'next/dynamic'

const ASW = dynamic(() => import("../../../components/UI/WorkingField/ASW"), {
    loading: ()=> <p> </p>
})

const page = () => {
  return (
    <ASW />
  )
}

export default page