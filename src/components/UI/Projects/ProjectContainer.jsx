import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const ProjectContainer = ({ imgSrc, name, desc, link }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-start space-y-4 rounded-lg h-auto min-w-[30%] shadow-lg pb-4">
        <div className="w-full h-1/2">
          <Image src={imgSrc} alt={name} className="w-full h-full" />
        </div>
        <h4 className="px-4 font-inter font-bold text-black 2xl:text-base lg:text-sm md:text-xs text-[10px] uppercase">
          {name}
        </h4>
        <p className="px-4 font-inter font-normal 2xl:text-sm lg:text-xs md:text-[10px] text-[8px] text-[#868686]">
          {desc}
        </p>
        <Link className="px-4 self-center" href={link}>
          <button
            type="button"
            className="font-opensans font-bold xl:text-base md:text-sm text-xs cursor-pointer text-[#FFBA6C] p-2 border border-[#FFBA6C] rounded-full"
          >
            Know More <ArrowRight className="inline" />
          </button>
        </Link>
      </div>
    </>
  );
};

export default ProjectContainer;
