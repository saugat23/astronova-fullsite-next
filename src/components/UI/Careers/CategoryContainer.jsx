import Image from "next/image";
import React from "react";

const CategoryContainer = ({ imgSrc, title, description }) => {
  return (
    <>
      <div className="h-auto w-auto flex flex-col justify-center items-start space-y-2">
        <div className="flex justify-start items-center space-x-3">
          <div className="w-12 h-12 md:w-16 md:h-16 xl:w-22 xl:h-22 p-3 bg-[#77AB33] rounded-full flex justify-center items-center">
            <Image
              src={imgSrc}
              alt={title}
              className="h-10 w-10 md:w-14 md:h-14 xl:h-20 xl:w-20"
            />
          </div>
          <h3 className="text-[#77AB33] font-opensans font-bold xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm tracking-tight">
            {title}
          </h3>
        </div>
        <p className="self-end font-inter font-normal text-justify xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs text-black">
          {description}
        </p>
        <div className="self-end w-full">
          <button
            type="button"
            className="w-full bg-[#77AB33] py-2 px-auto text-white xl:text-base md:text-sm text-xs rounded-lg hover:bg-[#47671f] hover:duration-300"
          >
            Know More
          </button>
        </div>
      </div>
    </>
  );
};

export default CategoryContainer;
