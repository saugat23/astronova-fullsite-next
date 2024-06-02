import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slide1hero from "../../public/slide1hero.webp";
import Slide2hero from "../../public/slide2hero.webp";
import Slide3hero from "../../public/slide3hero.webp";

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
        className="h-screen max-w-screen overflow-hidden"
      >
        <Carousel
          data-aos="fade-up"
          data-aos-duration="400"
          swipeable={true}
          draggable={true}
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
          className="mt-12 h-full"
        >
          <div data-aos="fade-up" data-aos-duration="400" className="h-screen">
            <div className="w-full h-full relative">
              <Image
                priority
                layout="fill"
                className="object-center object-cover w-full h-full"
                src={Slide1hero}
                alt="Slide 1 Hero BG"
              />
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="400" className="h-screen">
            <div className="w-full h-full relative">
              <Image
                priority
                layout="fill"
                className="object-center object-cover w-full h-full"
                src={Slide2hero}
                alt="Slide 2 Hero BG"
              />
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="400" className="h-screen">
            <div className="w-full h-full relative">
              <Image
                priority
                layout="fill"
                className="object-center object-cover w-full h-full"
                src={Slide3hero}
                alt="Slide 3 Hero BG"
              />
            </div>
          </div>
        </Carousel>
      </section>
    </>
  );
};

export default Hero;
