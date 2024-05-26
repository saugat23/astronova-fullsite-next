import React from 'react'
import dynamic from 'next/dynamic'

const AddWork = dynamic(() => import('../../../../components/UI/Dashboard/Works/Add/AddWork'), {
   loading: () => <p> </p>,
});

function page() {
  return (
    <AddWork />
  )
}

export default page