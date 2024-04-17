import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section data-aos="fade-down" data-aos-duration="700" className="h-auto max-w-screen overflow-hidden">
        <div className="h-full w-full lg:px-8 bg-gradient-to-t from-white via-[#69BCD4] to-[#048FB7] flex justify-between items-center">
          <div className="w-full md:w-[70%] flex flex-col justify-center items-center space-y-2">
            <div>
              <Image src="/herobrain.png" alt="Hero Brain Image" priority width={180} height={180} className="md:w-52 lg:w-60 xl:w-64 2xl:w-72" />
            </div>
            <div>
              <Image src="/heropolicy.png" alt="Hero Policy Image" priority width={180} height={180} className="md:w-52 lg:w-60 xl:w-64 2xl:w-72"/>
            </div>
            <h3 className="font-inter font-semibold xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-justify text-black">
              Nurture the student&apos;s
            </h3>
            <h4 className="font-inter font-extrabold text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-[#BDB809]">
              Talents And Curiosities
            </h4>
            <div className="">
              <button
                type="button"
                className="px-4 py-3 mt-2 bg-[#AE0D19] font-inter font-extrabold rounded-lg text-base md:text-lg lg:text-xl 2xl:text-2xl text-white hover:bg-[#57070d] hover:shadow-xl hover:scale-105"
              >
                Apply Student Startup Fund
              </button>
            </div>
          </div>
          <div className="hidden md:block md:w-[30%] w-0 h-full self-end">
            <Image
              src="/heroimage.svg"
              alt="Hero Image"
              width={800}
              height={400}
              className="w-[60vw] h-[72vh]"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
