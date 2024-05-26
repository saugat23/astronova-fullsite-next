import React from 'react';
import dynamic from 'next/dynamic'

const Application = dynamic(() => import('../../../components/UI/Dashboard/Application/Application'), {
   loading: () => <p> </p>,
});

function page() {
  return (
    <Application />
  )
}

export default page