import React from "react";
import Image from "next/image";

const ValuesContainer = ({ bgColor, svg, title, desc }) => {
  return (
    <>
      <div className={`py-4 px-4 bg-[${bgColor}] flex flex-col space-y-4 justify-center items-center border border-white w-[90vw] md:w-auto h-auto min-h-[30vh]`}>
        <div>
          <Image src={`/${svg}`} alt={`${title} Icon`} width={40} height={40} />
        </div>
        <h4 className="font-montserrat font-bold text-xl text-justify text-white">
          {title}
        </h4>
        <p className="text-opensans font-normal text-base text-white">
          {desc}
        </p>
      </div>
    </>
  );
};

export default ValuesContainer;
