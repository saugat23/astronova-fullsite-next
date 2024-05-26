import React from 'react'
import dynamic from 'next/dynamic'

const AddCampaign = dynamic(() => import('../../../../components/UI/Dashboard/Campaign/Add/AddCampaign'), {
   loading: () => <p> </p>,
});

function page() {
  return (
    <AddCampaign />
  )
}

export default page