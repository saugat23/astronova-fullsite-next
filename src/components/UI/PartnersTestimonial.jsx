import Image from "next/image";
import React from "react";

const PartnersTestimonial = ({ imgSrc, testimonial, name, position }) => {
  return (
    <>
      <div className="flex flex-col justify-around items-center lg:space-y-5 xl:p-6 lg:p-4 px-2 space-y-3">
        <div className="flex justify-center items-center relative">
          <Image src={imgSrc} alt={`${name} Image`} width={80} height={80} />
          <Image
            src="/assets/testimonialicon.svg"
            alt="Testimonial Icon SVG"
            width={30}
            height={18}
            className="absolute bottom-0 right-0 bg-[#72D8D8] rounded-full"
          />
        </div>
        <p className="font-kumbhsans font-normal xl:text-base md:text-sm text-xs text-center text-white">
          {testimonial}
        </p>
        <h4 className="font-inter font-bold xl:text-lg lg:text-base md:text-sm text-xs text-white">
          {name}
        </h4>
        <h4 className="font-kumbhsans font-normal text-center lg:text-sm xl:text-base md:text-xs text-[10px] text-white">
          {position}
        </h4>
      </div>
    </>
  );
};

export default PartnersTestimonial;
