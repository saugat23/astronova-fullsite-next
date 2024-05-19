import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Hero = () => {
  const responsiveCarousel = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <section
        data-aos="fade-down"
        data-aos-duration="700"
        className="h-[120vh] md:h-[110vh] lg:h-screen max-w-screen overflow-hidden"
      >
        <Carousel
          data-aos="fade-up"
          data-aos-duration="400"
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsiveCarousel}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          arrows={false}
          keyBoardControl={false}
          customTransition="transform 500ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          className="mt-8 h-full"
        >
          <div className="h-full w-screen">
            <div className="slidetwobackground h-[90%] w-full bg-[url('/slide2bg.png')] relative bg-cover bg-no-repeat flex flex-col justify-evenly lg:px-10 px-4 py-4 lg:py-4">
              <div className="w-full flex lg:justify-start justify-center items-center pt-10 z-40">
                <div>
                  <Image
                    priority
                    src="/slide2nric.svg"
                    alt="NRIC Image"
                    width={800}
                    height={400}
                  />
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
                  <Image
                    priority
                    src="/slide2hr.svg"
                    alt="Section Divider"
                    className="float-right mt-6"
                    width={600}
                    height={30}
                  />
                  <h3 className="font-montserrat font-normal 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base  lg:text-right text-center lg:text-white text-white">
                    Hetauda Research & Innovation Center <br />{" "}
                    <span className="font-semibold">
                      announces call for Applications
                    </span>{" "}
                    for funding opportunities under
                  </h3>
                  <Image
                    priority
                    src="/slide2hr.svg"
                    alt="Section Divider"
                    className="float-right mt-6"
                    width={600}
                    height={30}
                  />
                  <h3 className="font-montserrat font-semibold 2xl:text-7xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl   lg:text-right text-center text-white">
                    Student Startup & Innovation Policy <br /> SSIP 1.0
                  </h3>
                </div>
              </div>
            </div>
            <div className="h-auto flex justify-center items-center lg:p-6 py-10 px-2 font-poppins font-semibold 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-xs bg-[#6960E1] text-white">
              JOIN US TO ESTABLISH HETAUDA RESEARCH & INNOVATION CENTER
            </div>
          </div>
          <div className="h-full w-screen">
            <div className="h-full w-full flex lg:flex-row flex-col lg:justify-center justify-start items-start overflow-hidden">
              <div className="w-full lg:w-1/2 h-2/5 lg:h-full flex flex-col justify-center items-center space-y-0">
                <div className="h-full lg:h-[55%] w-full">
                  <Image
                    priority
                    src="/slide1childimage.png"
                    alt="Children Image"
                    width={1000}
                    height={800}
                    className="h-full w-full bg-center object-fill"
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
              <div className="w-full lg:w-1/2 h-3/5 lg:h-full flex flex-col justify-center items-center space-y-0">
                <div className="h-1/3 lg:h-[45%] w-full bg-[#25A6D9] flex flex-col justify-center items-center p-4">
                  <h1 className="font-poppins font-bold text-white w-1/2 text-center 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl">
                    HAMRA VIDYARTHI
                  </h1>
                  <h1 className="font-poppins font-bold text-white w-1/2 text-center 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-lg mt-3">
                    हाम्रा विद्यार्थी
                  </h1>
                </div>
                <div className="h-2/3 lg:h-[55%] w-full relative">
                  <Image
                    priority
                    src="/slide1child-support.png"
                    alt="Children Image"
                    width={1000}
                    height={800}
                    className="h-full w-full bg-center object-fill"
                  />
                  <div className="absolute bottom-0 -right-[28rem] w-full h-80 bg-white -rotate-45 flex flex-col space-y-3">
                    <h2 className="font-poppins font-semibold xl:text-2xl md:text-xl text-lg text-[#25A6D9] text-center rotate-45 mt-12 mr-28">
                      Support Us
                    </h2>
                    <h2 className="font-poppins font-normal xl:text-sm text-xs text-[#25A6D9] text-center rotate-45 mt-16 mr-28">
                      To Establish
                    </h2>
                    <h2 className="font-poppins font-semibold xl:text-xl md:text-lg text-base text-[#F46803] text-center rotate-45 mt-12 mr-40">
                      Hetauda Research & <br />
                      Innovation Center
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </section>
    </>
  );
};

export default Hero;
