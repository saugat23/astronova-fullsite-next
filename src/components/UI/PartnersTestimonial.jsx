import Image from "next/image";
import React from "react";

const PartnersTestimonial = ({
  imgSrc,
  testimonial,
  name,
  position,
  bgColor,
}) => {
  var backgroundColor = "";
  if (bgColor === "green") {
    backgroundColor = "#639a1b";
  } else if (bgColor === "yellow") {
    backgroundColor = "#aeab3b";
  } else if (bgColor === "red") {
    backgroundColor = "#ae0d19";
  } else if (bgColor === "blue") {
    backgroundColor = "#2496d7";
  }
  return (
    <>
      <div
        className={`flex h-96 max-h-96 flex-col items-center justify-around space-y-3 bg-[url('/partnertestimonialbg.svg')] p-3 lg:h-[38rem] lg:max-h-[38rem] lg:space-y-5 lg:bg-none lg:p-4 xl:p-6`}
        style={{ backgroundColor: backgroundColor }}
      >
        <div className="relative flex items-center justify-center">
          <Image src={imgSrc} alt={`${name} Image`} width={80} height={80} />
          <Image
            src="/assets/testimonialicon.svg"
            alt="Testimonial Icon SVG"
            width={30}
            height={18}
            className="absolute bottom-0 right-0 rounded-full bg-[#72D8D8]"
          />
        </div>
        <p className="text-center font-kumbhsans text-xs font-normal text-white md:text-sm xl:text-base">
          {testimonial}
        </p>
        <h4 className="font-inter text-xs font-bold text-white md:text-sm lg:text-base xl:text-lg">
          {name}
        </h4>
        <h4 className="text-center font-kumbhsans text-[10px] font-normal text-white md:text-xs lg:text-sm xl:text-base">
          {position}
        </h4>
      </div>
    </>
  );
};

export default PartnersTestimonial;
