"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const BlogCard = ({ imgSrc, title, desc, authorImgSrc, author, time, id }) => {
  return (
    <>
      <div className="w-full h-auto flex flex-col justify-center items-start space-y-4 shadow-xl px-3 py-2 bg-white">
        <div className="w-full h-1/2">
          <Image
            priority={true}
            quality={80}
            src={imgSrc}
            alt={title}
            width={600}
            height={500}
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start space-y-3">
          <h2 className="font-inter font-bold 2xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-gray-800">
            {title}
          </h2>
          <p className="font-inter font-normal 2xl:text-lg lg:text-base md:text-sm sm:text-xs text-[10px] text-[#6E6E6E]">
            {desc}
          </p>
          <div className="w-full flex md:flex-row flex-col space-y-2 md:space-y-0 lg:justify-between items-center">
            <div className="flex justify-start items-center space-x-4">
              <div>
                <Image
                  priority
                  quality={80}
                  src={authorImgSrc}
                  alt={author}
                  width={100}
                  height={100}
                  className="rounded-full w-16 h-16"
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
            <div className="w-full lg:w-auto">
              <Link href={`/blogs/details_page/${id}`} target="_blank">
                <button
                  type="button"
                  className="bg-[#AE0D19] font-inter text-white font-semibold 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs text-[10px] py-2 px-4 rounded-lg hover:bg-black hover:text-white hover:duration-250"
                >
                  READ
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
