import React from "react";
import Image from "next/image";

const BoardMember = ({ imgSrc, name, position }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-6 h-auto px-2">
        <div className="w-4/5">
          <Image
            priority
            quality={80}
            src={`/` + imgSrc}
            alt={name}
            className="h-full object-cover object-center"
            width={600}
            height={600}
          />
        </div>
        <div className="flex flex-col justify-center items-center space-y-1">
          <h4 className="font-kumbhsans font-semibold 2xl:text-xl xl:text-lg md:text-base sm:text-sm text-xs text-[#0052A0]">
            {name}
          </h4>
          <h4 className="font-kumbhsans font-semibold 2xl:text-xl xl:text-lg md:text-base sm:text-sm text-xs text-[#0052A0]">
            {position}
          </h4>
        </div>
      </div>
    </>
  );
};

export default BoardMember;
