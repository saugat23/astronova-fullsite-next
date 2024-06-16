import { Progress } from "@nextui-org/react";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const SupportStudent = ({ id, imgSrc, project, desc, achieved, target }) => {
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
        className="mb-3 flex h-auto min-h-full w-auto flex-col justify-center space-y-4 rounded-lg border border-[#e0d8ff] bg-white p-2 shadow-xl xl:space-y-5"
      >
        <div className="h-1/2">
          <Image
            priority
            quality={75}
            width={600}
            height={400}
            src={imgSrc}
            alt={project}
            className="h-full w-full rounded-lg object-cover object-center"
          />
        </div>
        <div className="flex flex-col justify-center space-y-3">
          <h3 className="w-full text-wrap font-poppins text-base font-bold text-black xl:text-lg">
            {project}
          </h3>
          <p className="w-full text-wrap font-poppins text-[10px] font-normal text-[#1F1F1F] xl:text-xs">
            {desc}
          </p>
          <Progress
            size="md"
            aria-label="Loading..."
            color={color}
            value={progressValue}
            className="w-full"
          />
          <div className="flex w-full items-center justify-around">
            <div className="flex flex-col items-start justify-center space-y-3">
              <p className="font-poppins text-lg font-semibold text-[#7926ED] md:text-xl lg:text-2xl 2xl:text-3xl">
                {progressValue}%
              </p>
              <p className="font-poppins text-[8px] font-normal text-black lg:text-[10px] 2xl:text-xs">
                Pledge so far
              </p>
            </div>
            <div className="flex flex-col items-start justify-center space-y-3">
              <p className="font-poppins text-[8px] font-medium text-black lg:text-[10px] 2xl:text-xs">
                Achieved  {achieved}
              </p>
              <p className="font-poppins text-[8px] font-semibold text-black lg:text-[10px] 2xl:text-xs">
                Target  {target}
              </p>
            </div>
          </div>
          <div className="mt-0 flex w-full items-center justify-center lg:mt-4">
            <Link
              href={`/donation_campaign_page/${id}`}
              target="_blank"
              className="border-2 border-[#7926ED] bg-white px-8 py-2 font-poppins font-semibold tracking-wider text-black hover:bg-[#7926ED] hover:text-white hover:shadow-2xl lg:text-sm xl:text-base"
            >
              DONATE
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportStudent;
