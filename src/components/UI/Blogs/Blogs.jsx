"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BlogCard from "./BlogCard";
import Image from "next/image";
import BlogTrendingCard from "./BlogTrendingCard";
import BGImage from "../../../../public/blogs/page1.svg";
import CardImage from "../../../../public/blogs/cardimage.svg";
import TrendingImage from "../../../../public/blogs/trending.svg";
import BlogAuthorImage from "../../../../public/blogs/blogauthor.svg";

const Blogs = ({ data }) => {
  const stripHtmlTags = (html) => {
    const div = document.createElement("span");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

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

  const blogs = data.blogs;
  return (
    <section className="h-auto max-w-screen overflow-hidden bg-[#F6F2FF]">
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
        <div className="w-screen h-[50vh] md:h-[60vh] xl:h-[70vh] relative flex flex-col justify-center items-start space-y-4">
          <Image
            layout="fill"
            priority={true}
            src={BGImage}
            alt="Background SVG"
            className="object-center object-cover pointer-events-none"
          />
          <div className="w-full h-full 2xl:px-14 xl:px-12 lg:px-10 md:px-8 sm:px-6 px-4 2xl:py-14 xl:py-12 lg:py-10 md:py-8 sm:py-6 py-4 z-20 bg-gradient-to-b from-transparent to-black opacity-75 flex flex-col justify-center items-center md:justify-end md:items-start space-y-4">
            <h3 className="font-kumbhsans font-semibold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-white">
              Lorem ipsum dolor sit amet,
            </h3>
            <h3 className="font-kumbhsans font-semibold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm  text-white">
              consectetur adipiscing
            </h3>
            <div>
              <button
                type="button"
                className="font-kumbhsans font-semibold 2xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs bg-[#2438B8] text-white md:py-4 md:px-12 py-2 px-4 hover:bg-white hover:text-[#2438B8] hover:duration-300"
              >
                READ
              </button>
            </div>
          </div>
        </div>
        <div className="w-screen h-[50vh] md:h-[60vh] xl:h-[70vh] relative flex flex-col justify-center items-start space-y-4">
          <Image
            layout="fill"
            priority={true}
            src={BGImage}
            alt="Background SVG"
            className="object-center object-cover pointer-events-none"
          />
          <div className="w-full h-full 2xl:px-14 xl:px-12 lg:px-10 md:px-8 sm:px-6 px-4 2xl:py-14 xl:py-12 lg:py-10 md:py-8 sm:py-6 py-4 z-20 bg-gradient-to-b from-transparent to-black opacity-75 flex flex-col justify-center items-center md:justify-end md:items-start space-y-4">
            <h3 className="font-kumbhsans font-semibold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-white">
              Lorem ipsum dolor sit amet,
            </h3>
            <h3 className="font-kumbhsans font-semibold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm  text-white">
              consectetur adipiscing
            </h3>
            <div>
              <button
                type="button"
                className="font-kumbhsans font-semibold 2xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs bg-[#2438B8] text-white md:py-4 md:px-12 py-2 px-4 hover:bg-white hover:text-[#2438B8] hover:duration-300"
              >
                READ
              </button>
            </div>
          </div>
        </div>
        <div className="w-screen h-[50vh] md:h-[60vh] xl:h-[70vh] relative flex flex-col justify-center items-start space-y-4">
          <Image
            layout="fill"
            priority={true}
            src={BGImage}
            alt="Background SVG"
            className="object-center object-cover pointer-events-none"
          />
          <div className="w-full h-full 2xl:px-14 xl:px-12 lg:px-10 md:px-8 sm:px-6 px-4 2xl:py-14 xl:py-12 lg:py-10 md:py-8 sm:py-6 py-4 z-20 bg-gradient-to-b from-transparent to-black opacity-75 flex flex-col justify-center items-center md:justify-end md:items-start space-y-4">
            <h3 className="font-kumbhsans font-semibold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm  text-white">
              Lorem ipsum dolor sit amet,
            </h3>
            <h3 className="font-kumbhsans font-semibold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-white">
              consectetur adipiscing
            </h3>
            <div>
              <button
                type="button"
                className="font-kumbhsans font-semibold 2xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs bg-[#2438B8] text-white md:py-4 md:px-12 py-2 px-4 hover:bg-white hover:text-[#2438B8] hover:duration-300"
              >
                READ
              </button>
            </div>
          </div>
        </div>
      </Carousel>
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="mx-auto max-w-6xl px-4 flex flex-col justify-center items-start py-4 md:py-6 lg:py-8 2xl:py-10"
      >
        <div className="flex flex-col justify-center items-start space-y-4">
          <h3 className="font-opensans tracking-tighter font-semibold 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-black py-4">
            Blogs & News
          </h3>
        </div>
        <div className="h-auto grid md:grid-cols-2 gap-x-6 gap-y-6">
          {blogs.map((blog) => {
            return (
              <BlogCard
                key={blog.id}
                imgSrc={blog.featured_img}
                title={blog.title}
                desc={stripHtmlTags(blog.description)}
                authorImgSrc={BlogAuthorImage}
                author="John Doe"
                time="24th April 2024, 12:40 PM"
              />
            );
          })}
          ;
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="mx-auto max-w-6xl px-4 flex flex-col justify-center items-start py-4 md:py-6 lg:py-8 2xl:py-10"
      >
        <div className="flex flex-col justify-center items-start space-y-4">
          <h3 className="font-opensans tracking-tighter font-semibold 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base text-black py-4">
            Trending Now
          </h3>
        </div>
        <div className="h-auto grid md:grid-cols-3 gap-x-6 gap-y-6">
          {blogs.map((blog) => {
            return (
              <BlogTrendingCard
                key={blog.id}
                imgSrc={blog.featured_img}
                title={blog.title}
                desc={stripHtmlTags(blog.description)}
                authorImgSrc={BlogAuthorImage}
                author="John Doe"
                time="24th April 2024, 12:40 PM"
              />
            );
          })}
        </div>
        <div className="w-full flex justify-center items-center py-4 mt-4">
          <button
            type="button"
            className="font-poppins font-medium 2xl:text-lg lg:text-base md:text-sm text-xs bg-white border border-[#E0D8FF] py-4 px-12 shadow-lg"
          >
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
