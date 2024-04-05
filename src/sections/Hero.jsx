import React from "react";
import Image from "next/image";
import "aos/dist/aos.css";

const Hero = () => {
  return (
    <>
      <section data-aos="fade-down" data-aos-duration="700" className="h-auto max-w-screen overflow-hidden">
        <div className="h-full w-full lg:px-8 bg-gradient-to-t from-white via-[#69BCD4] to-[#048FB7] flex justify-between items-center">
          <div className="w-3/4 flex flex-col justify-center items-center space-y-2">
            <div>
              <img src="/herobrain.png" alt="Hero Brain Image" className="" />
            </div>
            <div>
              <img src="/heropolicy.png" alt="Hero Policy Image" />
            </div>
            <h3 className="font-inter font-semibold xs:text-text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-justify text-black">
              Nurture the student&apos;s
            </h3>
            <h4 className="font-inter font-extrabold xs:text-3xl sm:text-5xl md:text-7xl lg:text-[5.625rem] text-[#BDB809]">
              Talents And Curiosities
            </h4>
            <div className="">
              <button
                type="button"
                className="px-4 py-3 bg-[#AE0D19] font-inter font-extrabold text-2xl text-white hover:bg-[#57070d] hover:shadow-xl hover:scale-105"
              >
                Apply Student Startup Fund
              </button>
            </div>
          </div>
          <div className="w-auto h-full self-end">
            <Image
              src="/heroimage.png"
              alt="Hero Image"
              width={200}
              height={100}
              className="w-[50vw] h-[72vh]"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
