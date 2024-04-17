import React from 'react';
import Image from 'next/image';

const LeadersIntroduction = ({reverse, imgSrc, name, position, desc, fb, web, instagram, gmail}) => {
  return (
    <>
        <div className={`xl:mx-auto xl:w-[80%] flex flex-col md:${reverse === true ? 'flex-row-reverse' : 'flex-row'} justify-between items-center space-y-4`}>
            <div className={`${reverse === true ? 'border-r-8' : 'border-l-8'} border-[#77AB33] md:w-1/2`}><Image src={imgSrc} alt={name} width={200} height={200} priority className={`2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-56 border-2 border-[#AE0D19]`}/></div>
            <div className='flex-col justify-center items-start w-1/2 space-y-4'>
                <h4 className='font-opensans tracking-tighter font-bold text-[#AE0D19] 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl'>{name}</h4>
                <h4 className='font-opensans tracking-tighter font-bold text-[#77AB33] 2xl:text-3xl xl:text-2xl md:text-xl sm:text-lg text-base'>{position}</h4>
                <p className='font-montserrat font-medium 2xl:text-3xl xl:text-2xl md:text-xl sm:text-lg text-base text-[#042038]'>{desc}</p>
                <div className='mt-4 w-full flex justify-center items-center space-x-4'>
                    <div className='border border-[#DB8114] rounded-full'><a href={fb}><img src="/assets/facebook.svg" alt='Facebook'/></a></div>
                    <div className='border border-[#2496D7] rounded-full'><a href={web}><img src="/assets/web.svg" alt='Web'/></a></div>
                    <div className='border border-[#77AB33] rounded-full'><a href={instagram}><img src="/assets/instagram.svg" alt='Instagram'/></a></div>
                    <div className='border border-[#AF1B1C] rounded-full'><a href={gmail}><img src="/assets/gmail.svg" alt='Gmail'/></a></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default LeadersIntroduction