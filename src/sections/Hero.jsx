import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Slide1hero from "../../public/slide1hero.webp";
import Slide2heroMobile from "../../public/slide2heromobile.webp";
import Slide2hero from "../../public/slide2hero.webp";
import Slide3heroMoblie from "../../public/slide3heromobile.webp";
import Slide3hero from "../../public/slide3hero.webp";

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <>
      <section
        data-aos="fade-down"
        data-aos-duration="700"
        className="max-w-screen h-screen min-h-screen overflow-hidden"
      >
        <div className="embla !mt-16">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="!md:hidden embla__container !flex">
              <div className="embla__slide">
                <Image
                  priority
                  fill
                  className="heroslider1 relative h-full w-full object-cover object-center"
                  src={Slide1hero}
                  alt="Slide 1 Hero BG"
                />
              </div>
              <div className="embla__slide">
                <Image
                  priority
                  fill
                  className="heroslider2 relative h-full w-full object-cover object-center"
                  src=""
                  alt="Slide 2 Hero BG"
                />
              </div>
              <div className="embla__slide">
                <Image
                  priority
                  fill
                  className="heroslider3 relative h-full w-full object-cover object-center"
                  src=""
                  alt="Slide 3 Hero BG"
                />
              </div>
            </div>
            <div className="!md:flex embla__container !hidden">
              <div className="embla__slide">
                <Image
                  priority
                  fill
                  className="heroslider1 relative h-full w-full object-cover object-right"
                  src={Slide1hero}
                  alt="Slide 1 Hero BG"
                />
              </div>
              <div className="embla__slide">
                <Image
                  priority
                  fill
                  className="heroslider2 relative h-full w-full object-cover object-center"
                  src=""
                  alt="Slide 2 Hero BG"
                />
              </div>
              <div className="embla__slide">
                <Image
                  priority
                  fill
                  className="heroslider3 relative h-full w-full object-cover object-center"
                  src=""
                  alt="Slide 3 Hero BG"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
