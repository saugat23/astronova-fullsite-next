import React from "react";
import Publications from "../components/UI/Publications";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Media = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="700"
      className="h-auto max-w-screen overflow-hidden mx-auto 2xl:py-12 lg:py-8 md:py-6 py-4 px-4 w-full md:w-[90%] xl:w-[80%] md:mt-8 mt-4"
    >
      <div className="flex flex-col justify-center items-center space-y-6">
        <h3 className="font-opensans font-bold text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-[#0B77A5] tracking-tight">
          MEDIA PUBLICATION
        </h3>
        <div className="w-full flex justify-center items-center lg:space-x-3 xl:space-x-4">
          <Swiper
            spaceBetween={30}
            modules={[Navigation]}
            navigation={true}
            breakpoints={{
              310: {
                slidesPerView: 1,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 1,
                centeredSlides: true,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="w-full flex justify-start items-center"
          >
            <SwiperSlide className="py-4">
              <Publications
                imgSrc="/kathmandupost.png"
                logoSrc="/kathmandupostlogo.png"
                title="lorem ipsum dolor sit amet, consectetur adipiscing"
                article="Astronova provides a global platform for consumers to donate and suppliers to invest in campaigns, workshops, and infrastructure, empowering young"
              />
            </SwiperSlide>
            <SwiperSlide className="py-4">
              <Publications
                imgSrc="/kathmandupost.png"
                logoSrc="/kathmandupostlogo.png"
                title="lorem ipsum dolor sit amet, consectetur adipiscing"
                article="Astronova provides a global platform for consumers to donate and suppliers to invest in campaigns, workshops, and infrastructure, empowering young"
              />
            </SwiperSlide>
            <SwiperSlide className="py-4">
              <Publications
                imgSrc="/kathmandupost.png"
                logoSrc="/nayapatrikalogo.png"
                title="lorem ipsum dolor sit amet, consectetur adipiscing"
                article="Astronova provides a global platform for consumers to donate and suppliers to invest in campaigns, workshops, and infrastructure, empowering young"
              />
            </SwiperSlide>
            <SwiperSlide className="py-4">
              <Publications
                imgSrc="/kathmandupost.png"
                logoSrc="/nayapatrikalogo.png"
                title="lorem ipsum dolor sit amet, consectetur adipiscing"
                article="Astronova provides a global platform for consumers to donate and suppliers to invest in campaigns, workshops, and infrastructure, empowering young"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Media;
