import React from "react";

const TeamMembers = ({imgSrc, name, position}) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-2 h-auto">
        <div className="relative h-full rounded-md">
          <img src={imgSrc} alt={name} className=" h-[98%] border border-[#AE0D19]" />
        </div>
        <h4 className="font-montserrat font-semibold text-xl text-[#1A1728]">
          {name}
        </h4>
        <h4 className="font-montserrat font-semibold text-sm text-[#1A1728B5]">
          {position}
        </h4>
      </div>
    </>
  );
};

export default TeamMembers;
