import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const ProjectContainer = ({ imgSrc, name, desc, link }) => {
  return (
    <>
      <div className="flex h-auto min-w-[30%] flex-col items-start justify-center space-y-4 rounded-lg pb-4 shadow-lg">
        <div className="h-1/2 w-full">
          <Image
            priority
            src={imgSrc}
            alt={name}
            className="object-cover object-center"
          />
        </div>
        <h4 className="px-4 font-inter text-[10px] font-bold uppercase text-black md:text-xs lg:text-sm 2xl:text-base">
          {name}
        </h4>
        <p className="px-4 font-inter text-[8px] font-normal text-[#868686] md:text-[10px] lg:text-xs 2xl:text-sm">
          {desc}
        </p>
        <Link className="self-center px-4" href={link}>
          <button
            type="button"
            className="cursor-pointer rounded-full border border-[#FFBA6C] p-2 font-opensans text-xs font-bold text-[#FFBA6C] md:text-sm xl:text-base"
          >
            Know More <ArrowRight className="inline" />
          </button>
        </Link>
      </div>
    </>
  );
};

export default ProjectContainer;
