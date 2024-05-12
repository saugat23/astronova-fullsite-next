import { Progress } from "@nextui-org/react";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const SupportStudent = ({
  id,
  imgSrc,
  project,
  desc,
  achieved,
  target,
}) => {
  var color = "";
  var progressValue = achieved === null ? 0 : (achieved / target) * 100;
  if (progressValue < 25) {
    color = "danger";
  } else if (progressValue >= 25 && progressValue <= 50) {
    color = "warning";
  } else if (progressValue > 50 && progressValue <= 75) {
    color = "primary";
  } else {
    color = "success";
  }

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        className="p-3 flex flex-col justify-center items-center xl:space-y-6 space-y-4 h-[40rem] w-auto shadow-2xl"
      >
        <div className="h-1/2">
          <img src={imgSrc} alt={project} className="h-full"/>
        </div>
        <h3 className="font-poppins font-bold text-base w-full xl:text-lg text-wrap text-black text-center">
          {project}
        </h3>
        <p className="font-poppins font-normal w-full xl:text-xs text-[10px] text-wrap text-[#1F1F1F]">
          {desc}
        </p>
        <Progress
          size="md"
          aria-label="Loading..."
          color={color}
          value={progressValue}
          className="w-full"
        />
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col justify-center items-start space-y-3">
            <p className="font-poppins font-semibold text-base lg:text-xl 2xl:text-2xl text-[#7926ED]">
              {progressValue}%
            </p>
            <p className="font-poppins font-normal 2xl:text-xs lg:text-[10px] text-[8px] text-black">
              Pledge so far
            </p>
          </div>
          <div className="flex flex-col justify-center items-start space-y-3">
            <p className="font-poppins font-medium 2xl:text-xs lg:text-[10px] text-[8px] text-black">
              Achieved  {achieved}
            </p>
            <p className="font-poppins font-semibold 2xl:text-xs lg:text-[10px] text-[8px] text-black">
              Target  {target}
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-0 lg:mt-4">
          <button
            type="button"
            className="bg-white border-2 border-[#7926ED] py-2 px-8 font-poppins font-semibold lg:text-sm xl:text-base text-black tracking-wider hover:bg-[#7926ED] hover:text-white hover:shadow-2xl"
          >
            <Link href={`/donation_campaign_page/${id}`} target="_blank">DONATE</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default SupportStudent;
