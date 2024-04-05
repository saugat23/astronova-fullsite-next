import React from "react";
import Image from "next/image";

const ValuesContainer = ({ svg, title, desc }) => {
  return (
    <>
      <div className="lg:py-4 lg:px-4 bg-[#E7F3FF] flex flex-col space-y-4 justify-center items-center border-t-[5px] border-[#F28459] w-[25%] h-auto min-h-[30vh]">
        <div>
          <Image src={`/${svg}`} alt={`${title} Icon`} width={40} height={40} />
        </div>
        <h4 className="font-montserrat font-bold text-xl text-justify text-[#0052A0]">
          {title}
        </h4>
        <p className="text-opensans font-normal text-base text-[#042038]">
          {desc}
        </p>
      </div>
    </>
  );
};

export default ValuesContainer;
