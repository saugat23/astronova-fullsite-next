"use client"
import React from 'react'

const WorkById = ({id}) => {
    const eventId = id;

  return (
    <section className="h-auto max-w-screen overflow-hidden xl:pt-12 lg:pt-10 pt-8 mx-auto w-[70%]">
        <div className='mt-16 font-poppins font-semibold text-2xl text-center mx-auto py-8'>WorkById : {eventId}</div>
    </section>
  )
}

export default WorkById