import React from "react";
import Image from "next/image";
import Link from "next/link";

const Publications = ({ imgSrc, logoSrc, title, article }) => {
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="700" className="flex flex-col justify-center items-center space-y-2 h-auto border border-black rounded-lg">
        <div className="w-full">
          <img src={imgSrc} alt={title} className="w-full" />
        </div>
        <div className="p-4 flex flex-col justify-center items-center lg:space-y-3 space-y-2">
          <div>
            <img src={logoSrc} alt={title} priority width={200} height={150} />
          </div>
          <h3 className="font-montserrat font-bold 2xl:text-xl lg:text-lg md:text-base text-sm">
            {title}
          </h3>
          <p className="font-roboto font-normal 2xl:text-base lg:text-sm md:text-xs text-[10px] text-[#6E6E6E]">
            {article}
          </p>
          <Link href="#" className="text-opensans font-medium 2xl:text-lg lg:text-base md:text-sm text-xs text-red-700 font-medium">Read More</Link>
        </div>
      </div>
    </>
  );
};

export default Publications;
