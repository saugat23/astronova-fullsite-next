import React from 'react';

const CampaignDonationContainer = ({ title, description, imgSrc, amount}) => {
  return (
    <>
    <div className='p-4 bg-[#eef5fe] shadow-md flex justify-center items-center space-x-2 rounded-xl'>
        <div className='w-4/5 flex flex-col justify-center items-start space-y-3'>
            <h3 className='font-poppins font-semibold 2xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs text-[#0052a0]'>{title}</h3>
            <p className='text-[#798798] font-poppins font-semibold 2xl:text-lg lg:text-base md:text-sm sm:text-xs text-[10px]'>{description}</p>
            <button className='w-1/2 py-3 px-auto text-white bg-[#4A90E2] hover:bg-[#2c5688] hover:duration-300 2xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs font-poppins font-medium rounded-lg'>Donate ${amount}</button>
        </div>
        <div className='w-1/5 h-full flex flex-col justify-center items-center'>
            <img src={imgSrc} alt={title} className='w-full h-1/2'/>
        </div>
    </div>
    </>
  )
}

export default CampaignDonationContainer 