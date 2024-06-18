import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Slide1hero from "../../public/slide1hero.webp";
import Slide2hero from "../../public/slide2hero.webp";
import Slide3hero from "../../public/slide3hero.webp";

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <>
      <section
        data-aos="fade-down"
        data-aos-duration="700"
        className="max-w-screen h-[75vh] min-h-[75vh] overflow-hidden"
      >
        <div className="embla !mt-16">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              <div className="embla__slide">
                <Image
                  priority
                  fill
                  className="relative h-full w-full object-cover object-center"
                  src={Slide1hero}
                  alt="Slide 1 Hero BG"
                />
              </div>
              <div className="embla__slide">
                <Image
                  priority
                  fill
                  className="relative h-full w-full object-cover object-center"
                  src={Slide2hero}
                  alt="Slide 2 Hero BG"
                />
              </div>
              <div className="embla__slide">
                <Image
                  priority
                  fill
                  className="relative h-full w-full object-cover object-center"
                  src={Slide3hero}
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
