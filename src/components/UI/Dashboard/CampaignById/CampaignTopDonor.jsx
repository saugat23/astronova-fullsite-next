import React from 'react';
import { FaRegUser } from "react-icons/fa";

const CampaignTopDonor = ({name, date, amount}) => {
  return (
    <>
        <div className='w-full p-4 flex justify-between items-center rounded-lg border border-[#d6d6d6]'>
            <div className='flex justify-center items-center space-x-3'>
                <div className='bg-[#eef5fe] p-2 rounded-full'><FaRegUser /></div>
                <div className='flex flex-col justify-center items-start'>
                    <h4 className='text-[#0052a0] font-poppins font-semibold 2xl:text-base lg:text-sm md:text-xs text-[10px]'>{name}</h4>
                    <p className='text-[#8a8998] font-poppins font-semibold 2xl:text-base lg:text-sm md:text-xs text-[10px]'>Donated on {date}</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h3 className='text-[#4a90e2] font-poppins font-semibold 2xl:text-xl xl:text-lg lg:text-base md:text-sm text-xs'>{amount}</h3>
            </div>
        </div>
    </>
  )
}

export default CampaignTopDonor