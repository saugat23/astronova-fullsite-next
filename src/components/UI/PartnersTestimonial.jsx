import React from "react";

const PartnersTestimonial = ({imgSrc, testimonial, name, position}) => {
  return (
    <>
      <div className="flex flex-col justify-around items-center lg:space-y-5 xl:p-6 lg:p-4">
        <div className="flex justify-center items-center relative">
          <img src={imgSrc} alt={`${name} Image`} />
          <img
            src="/assets/testimonialicon.svg"
            alt="Testimonial Icon SVG"
            className="absolute bottom-0 right-0 bg-[#72D8D8] rounded-full"
          />
        </div>
        <p className="font-kumbhsans font-normal lg:text-lg text-center text-[#1D3677]">
          {testimonial}
        </p>
        <h4 className="font-inter font-bold xl:text-lg lg:text-base text-[#1D3677]">{name}</h4>
        <h4 className="font-kumbhsans font-normal lg:text-sm xl:text-base text-[#747577]">{position}</h4>
      </div>
    </>
  );
};

export default PartnersTestimonial;
