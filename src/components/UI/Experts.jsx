import React from "react";

const Experts = ({ imgSrc, name, profession}) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-3">
        <div>
          <img
            src={imgSrc}
            alt={name}
            className="rounded-full lg:h-32 lg:w-32 border-[3px] border-[#287896]"
          />
        </div>
        <h3 className="font-inter font-semibold text-3xl text-[#0052A0] leading-tight">
          {name}
        </h3>
        <h3 className="font-inter font-normal text-2xl text-[#0052A0]">
          {profession}
        </h3>
      </div>
    </>
  );
};

export default Experts;
