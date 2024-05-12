import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const ProjectContainer = ({imgSrc, name, desc}) => {
  return (
    <>
    <div className='flex flex-col justify-center items-start space-y-2 h-auto min-w-[30%] shadow-lg pb-4'>
        <div className='w-full h-1/2'><Image src={imgSrc} alt={name} className='w-full h-full'/></div>
        <h4 className='px-4 font-inter font-bold text-black 2xl:text-base lg:text-sm md:text-xs text-[10px] uppercase'>
            {name}
        </h4>
        <p className='px-4 font-inter font-normal 2xl:text-sm lg:text-xs md:text-[10px] text-[8px] text-[#868686]'>
            {desc}
        </p>
        <div className='px-4 self-start'>
            <button type='button' className='font-opensans font-bold 2xl:text-lg lg:text-base md:text-sm text-xs cursor-pointer text-[#FFBA6C] p-2 border border-[#FFBA6C] rounded-full'>Know More <ArrowRight className="inline"/></button>
        </div>
    </div>
    </>
  )
}

export default ProjectContainer