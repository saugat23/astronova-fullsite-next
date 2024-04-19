"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BlogCard from "../../../components/UI/Blogs/BlogCard";
import BlogTrendingCard from "../../../components/UI/Blogs/BlogTrendingCard";

const page = () => {
  return (
    <section className="h-auto max-w-screen overflow-hidden bg-[#F6F2FF]">
      <Swiper
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
        className="w-full"
      >
        <SwiperSlide>
          <div className="2xl:h-[70vh] xl:h-[60vh] lg:h-[50vh] md:h-[40vh] h-[30vh] w-full bg-[url('/blogs/page1.svg')] bg-cover bg-no-repeat xl:bg-[center_top_-6rem] flex flex-col justify-center items-start space-y-4">
            <div className="w-full h-full 2xl:px-14 xl:px-12 lg:px-10 md:px-8 sm:px-6 px-4 2xl:py-14 xl:py-12 lg:py-10 md:py-8 sm:py-6 py-4 z-20 bg-gradient-to-b from-transparent to-black opacity-75 flex flex-col justify-center items-center md:justify-end md:items-start space-y-4">
              <h3 className="font-montserrat font-semibold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-white">
                Lorem ipsum dolor sit amet,
              </h3>
              <h3 className="font-montserrat font-semibold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm  text-white">
                consectetur adipiscing
              </h3>
              <div>
                <button
                  type="button"
                  className="font-montserrat font-semibold 2xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs bg-[#2438B8] text-white md:py-4 md:px-12 py-2 px-4 hover:bg-white hover:text-[#2438B8] hover:duration-300"
                >
                  READ
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="2xl:h-[70vh] xl:h-[60vh] lg:h-[50vh] md:h-[40vh] h-[30vh] w-full bg-[url('/blogs/page1.svg')] bg-cover bg-no-repeat xl:bg-[center_top_-6rem] flex flex-col justify-center items-start space-y-4">
            <div className="w-full h-full 2xl:px-14 xl:px-12 lg:px-10 md:px-8 sm:px-6 px-4 2xl:py-14 xl:py-12 lg:py-10 md:py-8 sm:py-6 py-4 z-20 bg-gradient-to-b from-transparent to-black opacity-75 flex flex-col justify-center items-center md:justify-end md:items-start space-y-4">
              <h3 className="font-montserrat font-semibold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-white">
                Lorem ipsum dolor sit amet,
              </h3>
              <h3 className="font-montserrat font-semibold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm  text-white">
                consectetur adipiscing
              </h3>
              <div>
                <button
                  type="button"
                  className="font-montserrat font-semibold 2xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs bg-[#2438B8] text-white md:py-4 md:px-12 py-2 px-4 hover:bg-white hover:text-[#2438B8] hover:duration-300"
                >
                  READ
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="2xl:h-[70vh] xl:h-[60vh] lg:h-[50vh] md:h-[40vh] h-[30vh] w-full bg-[url('/blogs/page1.svg')] bg-cover bg-no-repeat xl:bg-[center_top_-6rem] flex flex-col justify-center items-start space-y-4">
            <div className="w-full h-full 2xl:px-14 xl:px-12 lg:px-10 md:px-8 sm:px-6 px-4 2xl:py-14 xl:py-12 lg:py-10 md:py-8 sm:py-6 py-4 z-20 bg-gradient-to-b from-transparent to-black opacity-75 flex flex-col justify-center items-center md:justify-end md:items-start space-y-4">
              <h3 className="font-montserrat font-semibold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm  text-white">
                Lorem ipsum dolor sit amet,
              </h3>
              <h3 className="font-montserrat font-semibold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-white">
                consectetur adipiscing
              </h3>
              <div>
                <button
                  type="button"
                  className="font-montserrat font-semibold 2xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs bg-[#2438B8] text-white md:py-4 md:px-12 py-2 px-4 hover:bg-white hover:text-[#2438B8] hover:duration-300"
                >
                  READ
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="mx-auto w-[80%] max-w-[80%] flex flex-col justify-center items-start py-4 md:py-6 lg:py-8 2xl:py-10">
        <div className="flex flex-col justify-center items-start space-y-4">
          <h3 className="font-opensans tracking-tighter font-semibold 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-black py-4">
            Blogs & News
          </h3>
        </div>
        <div className="h-auto grid md:grid-cols-2 gap-x-6 gap-y-6">
            <BlogCard imgSrc="/blogs/cardimage.svg" title="Lorem ipsum dolor sit amet" desc="Astronova provides a global platform for consumers to donate and suppliers to invest in campaigns, workshops, and infrastructure, empowering young scientists, researchers, and tech-savvy entrepreneurs worldwide." authorImgSrc="/blogs/blogauthor.svg" author="John Doe" time="24th April 2024, 12:40 PM" />
            <BlogCard imgSrc="/blogs/cardimage.svg" title="Lorem ipsum dolor sit amet" desc="Astronova provides a global platform for consumers to donate and suppliers to invest in campaigns, workshops, and infrastructure, empowering young scientists, researchers, and tech-savvy entrepreneurs worldwide." authorImgSrc="/blogs/blogauthor.svg" author="John Doe" time="24th April 2024, 12:40 PM" />
            <BlogCard imgSrc="/blogs/cardimage.svg" title="Lorem ipsum dolor sit amet" desc="Astronova provides a global platform for consumers to donate and suppliers to invest in campaigns, workshops, and infrastructure, empowering young scientists, researchers, and tech-savvy entrepreneurs worldwide." authorImgSrc="/blogs/blogauthor.svg" author="John Doe" time="24th April 2024, 12:40 PM" />
            <BlogCard imgSrc="/blogs/cardimage.svg" title="Lorem ipsum dolor sit amet" desc="Astronova provides a global platform for consumers to donate and suppliers to invest in campaigns, workshops, and infrastructure, empowering young scientists, researchers, and tech-savvy entrepreneurs worldwide." authorImgSrc="/blogs/blogauthor.svg" author="John Doe" time="24th April 2024, 12:40 PM" />
        </div>
      </div>

      <div className="mx-auto w-[80%] max-w-[80%] flex flex-col justify-center items-start py-4 md:py-6 lg:py-8 2xl:py-10">
        <div className="flex flex-col justify-center items-start space-y-4">
          <h3 className="font-opensans tracking-tighter font-semibold 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-black py-4">
            Trending Now
          </h3>
        </div>
        <div className="h-auto grid md:grid-cols-3 gap-x-6 gap-y-6">
            <BlogTrendingCard imgSrc="/blogs/trending.svg" title="Lorem ipsum dolor sit amet" desc="Astronova provides a global platform for consumers to donate and suppliers to invest in campaigns, workshops, and infrastructure, empowering young scientists, researchers, and tech-savvy entrepreneurs worldwide." authorImgSrc="/blogs/blogauthor.svg" author="John Doe" time="24th April 2024, 12:40 PM" />
            <BlogTrendingCard imgSrc="/blogs/trending.svg" title="Lorem ipsum dolor sit amet" desc="Astronova provides a global platform for consumers to donate and suppliers to invest in campaigns, workshops, and infrastructure, empowering young scientists, researchers, and tech-savvy entrepreneurs worldwide." authorImgSrc="/blogs/blogauthor.svg" author="John Doe" time="24th April 2024, 12:40 PM" />
            <BlogTrendingCard imgSrc="/blogs/trending.svg" title="Lorem ipsum dolor sit amet" desc="Astronova provides a global platform for consumers to donate and suppliers to invest in campaigns, workshops, and infrastructure, empowering young scientists, researchers, and tech-savvy entrepreneurs worldwide." authorImgSrc="/blogs/blogauthor.svg" author="John Doe" time="24th April 2024, 12:40 PM" />
            <BlogTrendingCard imgSrc="/blogs/trending.svg" title="Lorem ipsum dolor sit amet" desc="Astronova provides a global platform for consumers to donate and suppliers to invest in campaigns, workshops, and infrastructure, empowering young scientists, researchers, and tech-savvy entrepreneurs worldwide." authorImgSrc="/blogs/blogauthor.svg" author="John Doe" time="24th April 2024, 12:40 PM" />
            <BlogTrendingCard imgSrc="/blogs/trending.svg" title="Lorem ipsum dolor sit amet" desc="Astronova provides a global platform for consumers to donate and suppliers to invest in campaigns, workshops, and infrastructure, empowering young scientists, researchers, and tech-savvy entrepreneurs worldwide." authorImgSrc="/blogs/blogauthor.svg" author="John Doe" time="24th April 2024, 12:40 PM" />
            <BlogTrendingCard imgSrc="/blogs/trending.svg" title="Lorem ipsum dolor sit amet" desc="Astronova provides a global platform for consumers to donate and suppliers to invest in campaigns, workshops, and infrastructure, empowering young scientists, researchers, and tech-savvy entrepreneurs worldwide." authorImgSrc="/blogs/blogauthor.svg" author="John Doe" time="24th April 2024, 12:40 PM" />
        </div>
        <div className="w-full flex justify-center items-center py-4 mt-4">
          <button type="button" className="font-roboto font-medium 2xl:text-lg lg:text-base md:text-sm text-xs bg-white border border-[#E0D8FF] py-4 px-12 shadow-lg">Load More</button>
        </div>
      </div>
    </section>
  );
};

export default page;
