import React from 'react'
import dynamic from 'next/dynamic'

const Blogs = dynamic(() => import('../../../components/UI/Dashboard/Blogs/Blogs'), {
     loading: () => <p> </p>,
});

function page() {
  return (
    <Blogs />
  )
}

export default page