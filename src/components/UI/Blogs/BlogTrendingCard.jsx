"use client";

import Image from "next/image";
import React from "react";

const BlogTrendingCard = ({
  imgSrc,
  title,
  desc,
  authorImgSrc,
  author,
  time,
}) => {
  return (
    <>
      <div className="w-full h-auto flex flex-col justify-center items-start space-y-4 shadow-xl p-2 bg-white">
        <div className="w-full h-1/2">
          <Image
            priority={true}
            src={imgSrc}
            alt={title}
            className="h-full w-full"
            width={500}
            height={400}
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start space-y-3 px-2">
          <h2 className="font-inter font-bold 2xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-gray-800">
            {title}
          </h2>
          <p className="font-inter font-normal 2xl:text-lg lg:text-base md:text-sm sm:text-xs text-[10px] text-[#6E6E6E]">
            {desc}
          </p>
          <div className="w-full flex justify-start items-center">
            <div className="flex justify-start items-center space-x-4">
              <div>
                <Image
                  priority={true}
                  src={authorImgSrc}
                  alt={author}
                  className="rounded-full w-12 h-12"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col justify-center items-start space-y-1 font-inter">
                <h4 className="font-inter font-bold xl:text-sm md:text-xs text-[10px]">
                  {author}
                </h4>
                <h4 className="font-inter font-bold xl:text-sm md:text-xs text-[10px]">
                  {time}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogTrendingCard;
