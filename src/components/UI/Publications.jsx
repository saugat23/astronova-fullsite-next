import React from "react";

const Publications = ({ imgSrc, logoSrc, title, article }) => {
  return (
    <>
      <div data-aos="fade-right" data-aos-duration="700" className="flex flex-col justify-center items-center lg:space-y-4 h-auto border border-black rounded-lg">
        <div className="w-full">
          <img src={imgSrc} alt={title} loading="lazy" className="w-full" />
        </div>
        <div className="p-4 flex flex-col justify-center items-center lg:space-y-5">
          <div>
            <img src={logoSrc} alt={title} loading="lazy" />
          </div>
          <h3 className="font-montserrat font-bold xl:text-4xl lg:text-3xl">
            {title}
          </h3>
          <p className="font-roboto font-normal xl:text-2xl lg:text-xl text-[#6E6E6E]">
            {article}
          </p>
        </div>
      </div>
    </>
  );
};

export default Publications;
