import React from "react";
import Publications from "../components/UI/Publications";
import useEmblaCarousel from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

const Media = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    loop: "true",
    align: "center",
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="700"
      className="max-w-screen h-auto overflow-hidden"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center space-y-6 px-4 py-4 md:mt-4 lg:py-6 2xl:py-8">
        <h3 className="font-opensans text-xl font-bold tracking-tight text-[#0B77A5] lg:text-2xl xl:text-3xl">
          MEDIA PUBLICATION
        </h3>
        <div className="w-full">
          <div className="embla_homepage">
            <div className="embla__viewport_homepage" ref={emblaRef}>
              <div className="embla__container_homepage">
                <div className="embla__slide_homepage">
                  <Publications
                    imgSrc="/kathmandupost.png"
                    logoSrc="/kathmandupostlogo.png"
                    title="lorem ipsum dolor sit amet, consectetur adipiscing"
                    article="Astronova provides a global platform for consumers to donate and suppliers to invest in campaigns, workshops, and infrastructure, empowering young"
                  />
                </div>
                <div className="embla__slide_homepage">
                  <Publications
                    imgSrc="/kathmandupost.png"
                    logoSrc="/kathmandupostlogo.png"
                    title="lorem ipsum dolor sit amet, consectetur adipiscing"
                    article="Astronova provides a global platform for consumers to donate and suppliers to invest in campaigns, workshops, and infrastructure, empowering young"
                  />
                </div>
                <div className="embla__slide_homepage">
                  <Publications
                    imgSrc="/kathmandupost.png"
                    logoSrc="/nayapatrikalogo.png"
                    title="lorem ipsum dolor sit amet, consectetur adipiscing"
                    article="Astronova provides a global platform for consumers to donate and suppliers to invest in campaigns, workshops, and infrastructure, empowering young"
                  />
                </div>
                <div className="embla__slide_homepage">
                  <Publications
                    imgSrc="/kathmandupost.png"
                    logoSrc="/nayapatrikalogo.png"
                    title="lorem ipsum dolor sit amet, consectetur adipiscing"
                    article="Astronova provides a global platform for consumers to donate and suppliers to invest in campaigns, workshops, and infrastructure, empowering young"
                  />
                </div>
              </div>
            </div>
            <div className="embla__controls_homepage">
              <div className="embla__buttons_homepage">
                <PrevButton
                  onClick={onPrevButtonClick}
                  disabled={prevBtnDisabled}
                />
                <NextButton
                  onClick={onNextButtonClick}
                  disabled={nextBtnDisabled}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;
