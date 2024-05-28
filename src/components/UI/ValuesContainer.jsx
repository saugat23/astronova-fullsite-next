import React from "react";
import Image from "next/image";

const ValuesContainer = ({ bgColor, svg, title, desc }) => {
  return (
    <>
      <div
        className={`py-4 px-4 w-full flex flex-col space-y-4 justify-center items-center h-auto hover:scale-110 hover:duration-250`}
      >
        <div>
          <Image
            src={`/${svg}`}
            alt={`${title} Icon`}
            width={40}
            height={40}
            className={`fill-[${bgColor}] text-[${bgColor}] stroke-[${bgColor}]`}
          />
        </div>
        <h4
          className={`font-kumbhsans font-bold text-xl text-justify text-[${bgColor}]`}
        >
          {title}
        </h4>
        <p className="text-opensans font-light text-base text-black text-center">
          {desc}
        </p>
      </div>
    </>
  );
};

export default ValuesContainer;
