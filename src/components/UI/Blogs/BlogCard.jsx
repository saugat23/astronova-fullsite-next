"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const BlogCard = ({ imgSrc, title, desc, authorImgSrc, author, time, id }) => {
  return (
    <>
      <div className="flex h-auto w-full flex-col items-start justify-center space-y-4 bg-white px-3 py-2 shadow-xl">
        <div className="h-1/2 w-full">
          <Image
            priority={true}
            quality={80}
            src={imgSrc}
            alt={title}
            width={600}
            height={500}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center space-y-3">
          <h2 className="font-inter text-sm font-bold text-gray-800 sm:text-base md:text-lg lg:text-xl 2xl:text-2xl">
            {title}
          </h2>
          <p className="font-inter text-[10px] font-normal text-[#6E6E6E] sm:text-xs md:text-sm lg:text-base 2xl:text-lg">
            {desc}
          </p>
          <div className="flex w-full flex-col items-center space-y-2 md:flex-row md:space-y-0 lg:justify-between">
            <div className="flex items-center justify-start space-x-4">
              <div>
                <Image
                  priority
                  quality={80}
                  src={authorImgSrc}
                  alt={author}
                  width={100}
                  height={100}
                  className="h-16 w-16 rounded-full"
                />
              </div>
              <div className="flex flex-col items-start justify-center space-y-1 font-inter">
                <h4 className="font-inter text-[10px] font-bold md:text-xs xl:text-sm">
                  {author}
                </h4>
                <h4 className="font-inter text-[10px] font-bold md:text-xs xl:text-sm">
                  {time}
                </h4>
              </div>
            </div>
            <div className="w-full md:w-auto">
              <Link href={`/blogs/details_page/${id}`} target="_blank">
                <button
                  type="button"
                  className="w-full rounded-lg bg-[#AE0D19] px-4 py-2 font-inter text-[10px] font-semibold text-white hover:bg-black hover:text-white hover:duration-250 sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
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
