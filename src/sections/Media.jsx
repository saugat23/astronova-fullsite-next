import React from "react";
import Publications from "../components/UI/Publications";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

const Media = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="700"
      className="h-auto max-w-screen overflow-hidden mx-auto 2xl:py-8 lg:py-6 py-4 px-4 w-full md:mt-4 max-w-6xl"
    >
      <div className="flex flex-col justify-center items-center space-y-6">
        <h3 className="font-opensans font-bold text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-[#0B77A5] tracking-tight">
          MEDIA PUBLICATION
        </h3>
        <div className="w-full">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full px-14"
          >
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Publications
                  imgSrc="/kathmandupost.png"
                  logoSrc="/kathmandupostlogo.png"
                  title="lorem ipsum dolor sit amet, consectetur adipiscing"
                  article="Astronova provides a global platform for consumers to donate and suppliers to invest in campaigns, workshops, and infrastructure, empowering young"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Publications
                  imgSrc="/kathmandupost.png"
                  logoSrc="/kathmandupostlogo.png"
                  title="lorem ipsum dolor sit amet, consectetur adipiscing"
                  article="Astronova provides a global platform for consumers to donate and suppliers to invest in campaigns, workshops, and infrastructure, empowering young"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Publications
                  imgSrc="/kathmandupost.png"
                  logoSrc="/nayapatrikalogo.png"
                  title="lorem ipsum dolor sit amet, consectetur adipiscing"
                  article="Astronova provides a global platform for consumers to donate and suppliers to invest in campaigns, workshops, and infrastructure, empowering young"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Publications
                  imgSrc="/kathmandupost.png"
                  logoSrc="/nayapatrikalogo.png"
                  title="lorem ipsum dolor sit amet, consectetur adipiscing"
                  article="Astronova provides a global platform for consumers to donate and suppliers to invest in campaigns, workshops, and infrastructure, empowering young"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="ml-8" />
            <CarouselNext className="mr-8" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Media;
