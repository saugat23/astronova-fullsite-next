import Image from "next/image";
import React from "react";

const TestimonialsDiv = ({ imgSrc, name, position, desc }) => {
  return (
    <>
      <div className="bg-[#0052A0CF] px-6 py-6 flex-1 flex flex-col justify-center items-center space-y-4">
        <div>
          <Image
            src={imgSrc}
            alt={name}
            className="rounded-full border border-white w-24 h-24"
          />
        </div>
        <p className="font-kumbhsans font-normal text-xs text-white">{desc}</p>
        <p className="self-end font-kumbhsans font-bold text-[10px] text-white">
          {`- ${name}, ${position}`}
        </p>
      </div>
    </>
  );
};

export default TestimonialsDiv;
