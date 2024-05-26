import React from 'react'
import dynamic from 'next/dynamic'
import { getAllEvents } from '../../services/api';

const Events = dynamic(() => import('../../../components/UI/Dashboard/Events/Events'), {
   loading: () => <p> </p>,
});

async function page() {
  const data = await getAllEvents();

  return (
    <Events data={data}/>
  )
}

export default page