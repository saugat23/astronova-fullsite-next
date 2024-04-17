import React from "react";

const Experts = ({ imgSrc, name, profession}) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-3 md:w-auto w-[90%] px-2">
        <div>
          <img
            src={imgSrc}
            alt={name}
            className="rounded-md lg:h-60 lg:w-60"
          />
        </div>
        <h3 className="font-inter font-semibold 2xl:text-3xl xl:text-2xl md:text-xl sm:text-lg text-base text-[#0052A0] leading-tight">
          {name}
        </h3>
        <h3 className="font-inter font-normal 2xl:text-2xl xl:text-xl md:text-lg sm:text-base text-sm text-[#0052A0]">
          {profession}
        </h3>
      </div>
    </>
  );
};

export default Experts;
