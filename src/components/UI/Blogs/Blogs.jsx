"use client";

import React from "react";
import BlogCard from "./BlogCard";
import Image from "next/image";
import BlogTrendingCard from "./BlogTrendingCard";
import BGImage from "../../../../public/blogs/page1.svg";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import BlogAuthorImage from "../../../../public/blogs/blogauthor.svg";

const Blogs = ({ data }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const stripHtmlTags = (html) => {
    const div = document.createElement("span");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  const blogs = data.blogs;
  return (
    <section className="max-w-screen h-auto overflow-hidden bg-[#F6F2FF]">
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <div className="relative flex h-full w-screen flex-col items-start justify-center space-y-4">
                <Image
                  layout="fill"
                  priority={true}
                  src={BGImage}
                  alt="Background SVG"
                  className="pointer-events-none object-cover object-center"
                />
                <div className="z-20 flex h-full w-full flex-col items-center justify-center space-y-4 bg-gradient-to-b from-transparent to-black px-4 py-4 opacity-75 sm:px-6 sm:py-6 md:items-start md:justify-end md:px-8 md:py-8 lg:px-10 lg:py-10 xl:px-12 xl:py-12 2xl:px-14 2xl:py-14">
                  <h3 className="font-kumbhsans text-sm font-semibold text-white sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                    Lorem ipsum dolor sit amet,
                  </h3>
                  <h3 className="font-kumbhsans text-sm font-semibold text-white sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                    consectetur adipiscing
                  </h3>
                  <div>
                    <button
                      type="button"
                      className="bg-[#2438B8] px-4 py-2 font-kumbhsans text-xs font-semibold text-white hover:bg-white hover:text-[#2438B8] hover:duration-300 sm:text-sm md:px-12 md:py-4 md:text-base lg:text-lg 2xl:text-xl"
                    >
                      READ
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="embla__slide">
              <div className="relative flex h-[50vh] w-screen flex-col items-start justify-center space-y-4 md:h-[60vh] xl:h-[70vh]">
                <Image
                  layout="fill"
                  priority={true}
                  src={BGImage}
                  alt="Background SVG"
                  className="pointer-events-none object-cover object-center"
                />
                <div className="z-20 flex h-full w-full flex-col items-center justify-center space-y-4 bg-gradient-to-b from-transparent to-black px-4 py-4 opacity-75 sm:px-6 sm:py-6 md:items-start md:justify-end md:px-8 md:py-8 lg:px-10 lg:py-10 xl:px-12 xl:py-12 2xl:px-14 2xl:py-14">
                  <h3 className="font-kumbhsans text-sm font-semibold text-white sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                    Lorem ipsum dolor sit amet,
                  </h3>
                  <h3 className="font-kumbhsans text-sm font-semibold text-white sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                    consectetur adipiscing
                  </h3>
                  <div>
                    <button
                      type="button"
                      className="bg-[#2438B8] px-4 py-2 font-kumbhsans text-xs font-semibold text-white hover:bg-white hover:text-[#2438B8] hover:duration-300 sm:text-sm md:px-12 md:py-4 md:text-base lg:text-lg 2xl:text-xl"
                    >
                      READ
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="embla__slide">
              <div className="relative flex h-[50vh] w-screen flex-col items-start justify-center space-y-4 md:h-[60vh] xl:h-[70vh]">
                <Image
                  layout="fill"
                  priority={true}
                  src={BGImage}
                  alt="Background SVG"
                  className="pointer-events-none object-cover object-center"
                />
                <div className="z-20 flex h-full w-full flex-col items-center justify-center space-y-4 bg-gradient-to-b from-transparent to-black px-4 py-4 opacity-75 sm:px-6 sm:py-6 md:items-start md:justify-end md:px-8 md:py-8 lg:px-10 lg:py-10 xl:px-12 xl:py-12 2xl:px-14 2xl:py-14">
                  <h3 className="font-kumbhsans text-sm font-semibold text-white sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                    Lorem ipsum dolor sit amet,
                  </h3>
                  <h3 className="font-kumbhsans text-sm font-semibold text-white sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                    consectetur adipiscing
                  </h3>
                  <div>
                    <button
                      type="button"
                      className="bg-[#2438B8] px-4 py-2 font-kumbhsans text-xs font-semibold text-white hover:bg-white hover:text-[#2438B8] hover:duration-300 sm:text-sm md:px-12 md:py-4 md:text-base lg:text-lg 2xl:text-xl"
                    >
                      READ
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="mx-auto flex max-w-6xl flex-col items-start justify-center px-4 py-4 md:py-6 lg:py-8 2xl:py-10"
      >
        <div className="flex flex-col items-start justify-center space-y-4">
          <h3 className="py-4 font-opensans text-base font-semibold tracking-tighter text-black sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            Blogs & News
          </h3>
        </div>
        <div className="grid h-auto gap-x-6 gap-y-6 md:grid-cols-2">
          {blogs.map((blog) => {
            return (
              <BlogCard
                key={blog.id}
                id={blog.id}
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
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="mx-auto flex max-w-6xl flex-col items-start justify-center px-4 py-4 md:py-6 lg:py-8 2xl:py-10"
      >
        <div className="flex flex-col items-start justify-center space-y-4">
          <h3 className="py-4 font-opensans text-base font-semibold tracking-tighter text-black sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            Trending Now
          </h3>
        </div>
        <div className="grid h-auto gap-x-6 gap-y-6 md:grid-cols-3">
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
        <div className="mt-4 flex w-full items-center justify-center py-4">
          <button
            type="button"
            className="border border-[#E0D8FF] bg-white px-12 py-4 font-poppins text-xs font-medium shadow-lg md:text-sm lg:text-base 2xl:text-lg"
          >
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
