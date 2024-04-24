import React from 'react'
import dynamic from 'next/dynamic'

const Works = dynamic(() => import("../../../components/UI/Works/Works"), {
  loading: () => <p> </p>
})

const page = () => {
  return (
    <Works />
  )
}

export default page