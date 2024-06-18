import React from "react";
import Image from "next/image";

const TeamMembers = ({ imgSrc, name, position }) => {
  return (
    <>
      <div className="flex h-80 max-h-80 min-h-80 w-60 min-w-60 flex-col items-center justify-center space-y-2">
        <div className="relative mx-auto h-4/5 w-full rounded-md">
          <Image
            priority
            quality={80}
            src={imgSrc}
            alt={name}
            className="relative h-full w-full object-cover object-center"
            fill
          />
        </div>
        <div className="flex flex-col items-center justify-center space-y-1">
          <h4 className="font-kumbhsans text-xl font-semibold text-[#0052a0]">
            {name}
          </h4>
          <h4 className="font-kumbhsans text-sm font-semibold text-[#0052a0]">
            {position}
          </h4>
        </div>
      </div>
    </>
  );
};

export default TeamMembers;
