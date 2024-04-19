import React from "react";

const PastWork = ({ imgSrc, name, desc }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-start space-y-2 h-auto md:h-full md:min-h-full min-w-[30%] pb-4">
        <div className="w-full h-1/2">
          <img src={imgSrc} alt={name} className="w-full h-full" />
        </div>
        <div className="flex flex-col justify-center items-start shadow-lg -mt-8 px-3 py-3 mx-auto w-[90%]">
          <h4 className="px-4 font-montserrat font-bold text-black 2xl:text-base lg:text-sm md:text-xs text-[10px] uppercase">
            {name}
          </h4>
          <p className="px-4 font-montserrat font-normal 2xl:text-sm lg:text-xs md:text-[10px] text-[8px] text-[#868686]">
            {desc}
          </p>
          <div className="px-4 self-end">
            <button
              type="button"
              className="font-montserrat font-bold 2xl:text-base lg:text-sm md:text-xs text-[10px] cursor-pointer text-[#147DAB]"
            >
              Know More &rarr;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PastWork;
