import React from 'react';
import dynamic from 'next/dynamic'

const Quiz1 = dynamic(() => import('../../../components/UI/Evaluation/Quiz1'), {
     loading: () => <p> </p>,
});

function page() {
  return (
    <>
    <Quiz1 />
    </>
  )
}

export default page