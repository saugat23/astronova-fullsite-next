import React from 'react'
import dynamic from 'next/dynamic'

const Dashboard = dynamic(() => import('../../../components/UI/Dashboard/Dashboard/Dashboard'), {
   loading: () => <p> </p>,
});

function page() {
  return (
    <Dashboard />
  )
}

export default page