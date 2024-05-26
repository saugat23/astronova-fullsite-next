import React from 'react'
import dynamic from 'next/dynamic';
import { getAllNews } from '../../services/api';

const NewsBlogs = dynamic(() => import('../../../components/UI/Dashboard/NewsBlogs/NewsBlogs'), {
   loading: () => <p> </p>,
});

async function page() {
  const data = await getAllNews();

  return (
    <NewsBlogs data={data}/>
  )
}

export default page