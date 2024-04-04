import React from "react";

const BoardMember = ({ imgSrc, name, position }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-2 h-80">
        <div className="relative p-2 bg-gradient-to-b from-blue-900 to-yellow-400 h-[60%]">
          <img src={imgSrc} alt={name} className="p-1 h-[98%]" />
        </div>
        <h4 className="font-montserrat font-semibold text-xl text-[#0052A0]">
          {name}
        </h4>
        <h4 className="font-montserrat font-semibold text-sm text-[#0052A0]">
          {position}
        </h4>
      </div>
    </>
  );
};

export default BoardMember;
