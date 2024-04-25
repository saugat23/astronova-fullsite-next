import React from 'react'

const WorkWithUs = ({title, description, color}) => {
  return (
    <>
    <div className='h-auto w-auto flex flex-col justify-center items-start space-y-8'>
        <div className={`w-full flex justify-start py-2 items-center border-b-3 border-[${color}]`}>
            <h3 className='font-poppins font-semibold text-black xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm'>{title}</h3>
        </div>
        <p className='font-inter font-normal text-justify xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs text-black'>
        {description}
        </p>
    </div>
    </>
  )
}

export default WorkWithUs