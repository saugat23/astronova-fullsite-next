import React from "react";
import Image from "next/image";

const TeamMembers = ({ imgSrc, name, position }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-2 h-auto">
        <div className="relative w-4/5 rounded-md mx-auto">
          <Image
            priority
            layout="responsive"
            objectFit="cover"
            quality={80}
            src={imgSrc}
            alt={name}
            className="w-full max-h-52 max-w-48 mx-auto"
            width={400}
            height={400}
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
