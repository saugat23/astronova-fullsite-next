import React from "react";

const BoardMember = ({ imgSrc, name, position }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-2 h-auto px-2">
        <div className="h-full">
          <img src={imgSrc} alt={name} className="h-[98%] border border-[#AE0D19]" />
        </div>
        <h4 className="font-montserrat font-semibold 2xl:text-xl xl:text-lg md:text-base sm:text-sm text-xs text-[#0052A0]">
          {name}
        </h4>
        <h4 className="font-montserrat font-semibold 2xl:text-xl xl:text-lg md:text-base sm:text-sm text-xs text-[#0052A0]">
          {position}
        </h4>
      </div>
    </>
  );
};

export default BoardMember;
