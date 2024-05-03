import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <>
      <section
        data-aos="fade-down"
        data-aos-duration="700"
        className="h-screen max-w-screen overflow-hidden"
      >
        {/* <div className="h-full w-full lg:px-8 bg-gradient-to-t from-white via-[#69BCD4] to-[#048FB7] flex justify-between items-center pt-8 md:pt-4 lg:pt-0">
          <div className="w-full md:w-[70%] flex flex-col justify-center items-center space-y-6">
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
          <div className="hidden md:block md:w-[40%] w-0 h-full self-end">
            <Image
              src="/heroimage.svg"
              alt="Hero Image"
              width={800}
              height={400}
              className="w-[80vw] h-[90vh]"
              priority
            />
          </div>
        </div> */}
        <Swiper
          data-aos="fade-up"
          data-aos-duration="400"
          pagination={true}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            310: {
              slidesPerView: 1,
              centeredSlides: true,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="w-full h-full"
        >
          <SwiperSlide>
            <div className="slidetwobackground h-auto w-full bg-[url('/slide2bg.png')] relative bg-cover bg-no-repeat flex flex-col justify-evenly lg:px-10 px-4 py-4 lg:py-4">
              <div className="w-full flex lg:justify-start justify-center items-center pt-10 z-40">
                <div>
                  <img src="/slide2nric.svg" alt="NRIC Image" />
                </div>
              </div>
              <div className="w-full flex lg:flex-row flex-col-reverse lg:justify-between justify-center lg:items-end items-center space-y-6 lg:space-y-0">
                <div className="w-full lg:w-2/5 lg:h-[70vh] h-[40vh] bg-[url('/slide2rocket.svg')] bg-cover bg-no-repeat flex flex-col justify-end lg:items-start items-center">
                  <h2 className="font-montserrat font-semibold 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-lg text-center lg:text-left">
                    KEY Assistance
                  </h2>
                  <div className="flex justify-center items-center lg:space-x-8 space-x-3 mt-6 -mb-8">
                    <div className="w-24 h-24 bg-white p-6 rounded-full font-semibold flex justify-center items-center text-center">
                      Curio Money
                    </div>
                    <div className="w-24 h-24 bg-white p-6 rounded-full font-semibold flex justify-center items-center text-center">
                      Proto Money
                    </div>
                    <div className="w-24 h-24 bg-white p-6 rounded-full font-semibold flex justify-center items-center text-center">
                      Seed Money
                    </div>
                    <div className="w-24 h-24 bg-white p-6 rounded-full font-semibold flex justify-center items-center text-center">
                      Idea Validation
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center lg:items-end items-center space-y-4 lg:w-2/5 w-full">
                  <h3 className="font-montserrat font-normal 2xl:text-7xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl tracking-wider lg:text-right text-center text-white">
                    Do you have{" "}
                    <span className="font-semibold">Innovation Idea?</span>
                  </h3>
                  <img
                    src="/slide2hr.svg"
                    alt="Section Divider"
                    className="float-right mt-6"
                  ></img>
                  <h3 className="font-montserrat font-normal 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base  lg:text-right text-center lg:text-white text-white">
                    Hetauda Research & Innovation Center <br />{" "}
                    <span className="font-semibold">
                      announces call for Applications
                    </span>{" "}
                    for funding opportunities under
                  </h3>
                  <img
                    src="/slide2hr.svg"
                    alt="Section Divider"
                    className="float-right"
                  ></img>
                  <h3 className="font-montserrat font-semibold 2xl:text-7xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl   lg:text-right text-center text-white">
                    Student Startup & Innovation Policy <br /> SSIP 1.0
                  </h3>
                </div>
              </div>
            </div>
            <div className="h-auto flex justify-center items-center lg:p-6 py-10 px-2 font-poppins font-semibold 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-xs bg-[#6960E1] text-white">
              JOIN US TO ESTABLISH HETAUDA RESEARCH & INNOVATION CENTER
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full flex lg:flex-row flex-col lg:justify-center justify-start items-start overflow-hidden">
              <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center space-y-0">
                <div className="h-full lg:h-[55%] w-full">
                  <img
                    src="/slide1childimage.png"
                    alt="Children Image"
                    className="h-full w-full"
                  />
                </div>
                <div className="h-[45%] w-full hidden bg-[#9C0F1A] lg:flex flex-col justify-center items-center">
                  <h1 className="font-poppins font-bold text-white w-1/2 text-center 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl">
                    HAMRO VABISHYA
                  </h1>
                  <h1 className="font-poppins font-bold text-white w-1/2 text-center 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-lg mt-3">
                      हाम्रो भबिष्य 
                  </h1>
                </div>
              </div>
              <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center space-y-0">
                <div className="h-[45%] w-full bg-[#25A6D9] flex flex-col justify-center items-center p-4">
                  <h1 className="font-poppins font-bold text-white w-1/2 text-center 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl">
                    HAMRA VIDYARTHI
                  </h1>
                  <h1 className="font-poppins font-bold text-white w-1/2 text-center 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-lg mt-3">
                      हाम्रा विद्यार्थी
                  </h1>
                </div>
                <div className="h-[55%] w-full relative">
                  <img
                    src="/slide1child-support.png"
                    alt="Children Image"
                    className="h-full w-full"
                  />
                  <div className="absolute bottom-0 -right-[28rem] w-full h-80 bg-white -rotate-45 flex flex-col space-y-3">
                    <h2 className="font-poppins font-semibold xl:text-2xl md:text-xl text-lg text-[#25A6D9] text-center rotate-45 mt-12 mr-28">Support Us</h2>
                    <h2 className="font-poppins font-normal xl:text-sm text-xs text-[#25A6D9] text-center rotate-45 mt-16 mr-28">To Establish</h2>
                    <h2 className="font-poppins font-semibold xl:text-xl md:text-lg text-base text-[#F46803] text-center rotate-45 mt-12 mr-40">Hetauda Research & <br />Innovation Center</h2>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Hero;
