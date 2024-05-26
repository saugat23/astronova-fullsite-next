import React from 'react'
import dynamic from 'next/dynamic'

const AddEvent = dynamic(() => import('../../../../components/UI/Dashboard/Events/Add/AddEvent'), {
   loading: () => <p> </p>,
});

function page() {
  return (
    <AddEvent />
  )
}

export default page