import { Progress } from "@nextui-org/react";
import React from "react";

const SupportStudent = ({
  imgSrc,
  project,
  desc,
  progressValue,
  achieved,
  target,
}) => {

    var color = "";
    if(progressValue < 25){
        color = "danger"
    }else if(progressValue >= 25 && progressValue <= 50){
        color="warning"
    }else if(progressValue > 50 && progressValue <= 75){
        color="primary"
    }else{
        color="success"
    }

  return (
    <>
      <div data-aos="fade-right" data-aos-duration="500" className="p-3 flex flex-col justify-center items-center xl:space-y-6 h-auto w-auto shadow-2xl">
        <div>
          <img src={imgSrc} alt={project} />
        </div>
        <h3 className="font-poppins font-bold lg:text-base xl:text-lg text-black">
          {project}
        </h3>
        <p className="font-poppins font-normal xl:text-xs lg:text-[10px] text-[#1F1F1F]">
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
            <p className="font-poppins font-semibold lg:text-xl xl:text-2xl text-[#7926ED]">
              {progressValue}%
            </p>
            <p className="font-poppins font-normal xl:text-xs lg:text-[10px] text-black">
              Pledge so far
            </p>
          </div>
          <div className="flex flex-col justify-center items-start space-y-3">
            <p className="font-poppins font-medium lg:text-[10px] xl:text-xs text-black">
              Achieved  {achieved}
            </p>
            <p className="font-poppins font-semibold xl:text-xs lg:text-sm text-black">
              Target  {target}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-4">
          <button
            type="button"
            className="bg-white border-2 border-[#7926ED] py-2 px-8 font-poppins font-semibold lg:text-sm xl:text-base text-black tracking-wider hover:bg-[#7926ED] hover:text-white hover:shadow-2xl"
          >
            DONATE
          </button>
        </div>
      </div>
    </>
  );
};

export default SupportStudent;
