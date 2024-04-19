import React from 'react'

const BlogTrendingCard = ({imgSrc, title, desc, authorImgSrc, author, time}) => {
  return (
    <>
    <div className='w-full h-auto flex flex-col justify-center items-start space-y-4 shadow-xl pb-6 bg-white'>
        <div className='w-full'>
            <img src={imgSrc} alt={title} />
        </div>
        <div className='w-full flex flex-col justify-center items-start space-y-3 px-6'>
            <h2 className='font-montserrat font-bold 2xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-black'>{title}</h2>
            <p className='font-roboto font-normal 2xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs text-[#6E6E6E]'>{desc}</p>
            <div className='w-full flex justify-start items-center'>
                <div className='flex justify-start items-center space-x-4'>
                    <div><img src={authorImgSrc} alt={author} className='rounded-full'/></div>
                    <div className='flex flex-col justify-center items-start space-y-1 font-inter'>
                        <h4 className='font-inter font-bold xl:text-sm md:text-xs text-[10px]'>{author}</h4>
                        <h4 className='font-inter font-bold xl:text-sm md:text-xs text-[10px]'>{time}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default BlogTrendingCard