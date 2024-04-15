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
      className="h-auto max-w-screen overflow-hidden xl:py-12 xl:px-12 lg:py-8 lg:px-8"
    >
      <div className="flex flex-col justify-center items-center space-y-6">
        <h3 className="font-opensans font-bold text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-[#0B77A5] tracking-tight">
          MEDIA PUBLICATION
        </h3>
        <div className="flex justify-center items-center lg:space-x-3 xl:space-x-4">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            centeredSlides={true}
            breakpoints={{
              310: {
                slidesPerView: 1,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 2,
                centeredSlides: true,
              },
              1024: {
                slidesPerView: 3,
                centeredSlides: true,
              },
              1280: {
                slidesPerView: 4,
                centeredSlides: false,
              },
            }}
            className="w-screen flex justify-center items-center"
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
                logoSrc="/nepallogo.png"
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
