import React from 'react'
import dynamic from 'next/dynamic'

const Invoice = dynamic(() => import('../../../components/UI/Dashboard/Invoice/Invoice'), {
   loading: () => <p> </p>,
});

function page() {
  return (
    <Invoice />
  )
}

export default page