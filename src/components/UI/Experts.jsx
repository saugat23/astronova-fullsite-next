import React from "react";
import Image from "next/image";

const Experts = ({ imgSrc, name, profession }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-3 md:w-auto w-[90%] px-2">
        <div>
          <Image
            priority
            quality={80}
            width={400}
            height={400}
            src={imgSrc}
            alt={name}
            className="rounded-md lg:h-60 lg:w-60 object-center object-cover"
          />
        </div>
        <div className="flex flex-col justify-center items-center space-y-1">
          <h3 className="font-inter font-semibold 2xl:text-xl xl:text-lg md:text-base sm:text-sm text-xs text-[#0052A0] leading-tight">
            {name}
          </h3>
          <h3 className="font-inter tracking-tighter text-center font-medium 2xl:text-base lg:text-sm md:text-xs text-[10px] text-[#0052A0]">
            {profession}
          </h3>
        </div>
      </div>
    </>
  );
};

export default Experts;
