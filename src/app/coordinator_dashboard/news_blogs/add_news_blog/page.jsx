import React from 'react'
import dynamic from 'next/dynamic'

const AddNewsBlogs = dynamic(() => import('../../../../components/UI/Dashboard/NewsBlogs/Add/AddNewsBlogs'), {
   loading: () => <p> </p>,
});

function page() {
  return (
    <AddNewsBlogs />
  )
}

export default page