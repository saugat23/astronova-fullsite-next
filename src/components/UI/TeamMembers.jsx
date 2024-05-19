import React from "react";
import Image from "next/image";

const TeamMembers = ({ imgSrc, name, position }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-2 h-auto">
        <div className="relative w-3/4 rounded-md">
          <Image
            priority
            src={imgSrc}
            alt={name}
            className="w-full border border-[#AE0D19]"
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-col justify-center items-center space-y-1">
          <h4 className="font-montserrat font-semibold text-xl text-[#0052a0]">
            {name}
          </h4>
          <h4 className="font-montserrat font-semibold text-sm text-[#0052a0]">
            {position}
          </h4>
        </div>
      </div>
    </>
  );
};

export default TeamMembers;
