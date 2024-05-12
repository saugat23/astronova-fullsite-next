import React from "react";
import PartnersTestimonial from "../components/UI/PartnersTestimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel";

const Partners = () => {
  return (
    <section className="h-auto max-w-screen overflow-hidden mx-auto 2xl:py-12 lg:py-8 md:py-6 py-4 xl:mt-12 lg:mt-8">
      <div className="xl:mt-20 lg:mt-18 flex flex-col justify-center items-center xl:space-y-12 lg:space-y-10">
        <h3 className="font-opensans font-bold text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-[#0B77A5] tracking-tight relative after:bg-[#0B77A5] after:absolute after:h-[4px] after:w-0 after:-bottom-[2px] after:left-0 hover:after:w-full after:transition-all after:duration-300">
          OUR PARTNERS IN CHARGE
        </h3>
        <div className="bg-[#00000005] xl:py-20 lg:py-18 xl:-mx-12 lg:-mx-8 w-full md:py-8 py-6">
          <div className="marquee py-2 flex items-center">
            <div className="track">
              <div className="content flex">
                <Image
                  src="/triontech.svg"
                  alt="Trion Tech Image"
                  width={40}
                  height={30}
                  className="transform scale-100 hover:scale-110 transition-transform sm:w-12 md:w-16 lg:w-20 xl:w-24 2xl:w-32"
                />
                <Image
                  src="/nationalnoc.png"
                  alt="National NIC Image"
                  width={80}
                  height={60}
                  className="transform scale-100 hover:scale-110 transition-transform sm:w-12 md:w-16 lg:w-20 xl:w-28 2xl:w-40"
                />
                <Image
                  src="/neema.png"
                  alt="Neema Image"
                  width={80}
                  height={60}
                  className="transform scale-100 hover:scale-110 transition-transform sm:w-12 md:w-16 lg:w-20 xl:w-28 2xl:w-40"
                />
                <Image
                  src="/thesquad.png"
                  alt="The Squad Image"
                  width={80}
                  height={60}
                  className="transform scale-100 hover:scale-110 transition-transform sm:w-12 md:w-16 lg:w-20 xl:w-28 2xl:w-40"
                />
                <Image
                  src="/brainycube.png"
                  alt="Brainy Cube Image"
                  width={80}
                  height={60}
                  className="transform scale-100 hover:scale-110 transition-transform sm:w-12 md:w-16 lg:w-20 xl:w-28 2xl:w-40"
                />
                <Image
                  src="/neo.svg"
                  alt="NEO Image"
                  width={40}
                  height={30}
                  className="transform scale-100 hover:scale-110 transition-transform sm:w-12 md:w-16 lg:w-20 xl:w-24 2xl:w-32"
                />
                <Image
                  src="/creativecafe.svg"
                  alt="Creative Cafe Image"
                  width={40}
                  height={30}
                  className="transform scale-100 hover:scale-110 transition-transform sm:w-12 md:w-16 lg:w-20 xl:w-24 2xl:w-32"
                />
                <Image
                  src="/man.svg"
                  alt="MAN Image"
                  width={40}
                  height={30}
                  className="transform scale-100 hover:scale-110 transition-transform sm:w-12 md:w-16 lg:w-20 xl:w-24 2xl:w-32"
                />
                <h2 className="font-inter font-bold text-2xl text-black transform scale-100 hover:scale-110 transition-transform">
                  EduCompass
                </h2>
                <Image
                  src="/dur.svg"
                  alt="Dursikshya Image"
                  width={40}
                  height={30}
                  className="transform scale-100 hover:scale-110 transition-transform sm:w-12 md:w-16 lg:w-20 xl:w-24 2xl:w-32"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className="xl:mt-10 lg:mt-8 flex flex-col justify-center items-center"
      >
        <div className="bg-[url('/joinbg.png')] bg-cover flex flex-col justify-start items-center w-full p-6 h-[75vh]"></div>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="bg-[#2496D7] xl:py-12 lg:py-10 xl:px-12 lg:px-10 py-2 px-2 flex flex-col justify-center items-center space-y-6"
        >
          <div className="w-[80%] mx-auto flex flex-col justify-center items-center space-y-4">
            <h3 className="font-opensans tracking-[-0.07em] text-white text-center font-bold xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-xl">
              JOIN THE JOURNEY
            </h3>
            <h3 className="font-montserrat tracking-wider text-center text-white font-bold xl:text-2xl lg:text-xl md:text-lg text-base">
              Be the change you want to see
            </h3>
            <p className="font-opensans font-normal xl:text-lg lg:text-base md:text-sm text-xs text-white text-center py-2">
              We are working to create an environment where students can receive
              support, mentorship, guidance and access to tools and facilities
              to explore their curiosity so that they could be able to develop
              practical & soft skills, entrepreneurial skill and turn their
              ideas into reality and provide them national and international
              exposure to explore their innovative research ideas. Together
              let’s make a community of change makers.
            </p>
          </div>
          <div className="w-full mx-auto flex md:flex-row flex-col space-y-4 md:space-y-0 justify-around items-center md:items-start text-white max-w-7xl">
            <button
              data-aos="fade-up"
              data-aos-duration="900"
              type="button"
              className="bg-[#0012FF] hover:scale-105 p-4 px-6 font-opensans font-bold tracking-tighter rounded-lg xl:text-2xl lg:text-xl md:text-lg text-base cursor-pointer hover:bg-white hover:text-[#0012FF] hover:duration-200"
            >
              JOIN AS VOLUNTEER
            </button>
            <button
              data-aos="fade-up"
              data-aos-duration="1100"
              type="button"
              className="bg-[#EC008C] hover:scale-105 p-4 px-6 font-opensans font-bold tracking-tighter rounded-lg xl:text-2xl lg:text-xl md:text-lg text-base cursor-pointer hover:bg-white hover:text-[#EC008C] hover:duration-200"
            >
              BECOME A TEAM MEMBER
            </button>
            <button
              data-aos="fade-up"
              data-aos-duration="1300"
              type="button"
              className="bg-[#F26522] hover:scale-105 p-4 px-6 font-opensans font-bold tracking-tighter rounded-lg xl:text-2xl lg:text-xl md:text-lg text-base cursor-pointer hover:bg-white hover:text-[#F26522] hover:duration-200"
            >
              MAKE A DONATION
            </button>
          </div>
        </div>
      </div>

      <h3 className="xl:mt-12 mt-4 font-opensans font-bold w-auto text-center text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-[#0B77A5] tracking-tight">
        GROUND STORIES
      </h3>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full mx-auto max-w-7xl px-4"
      >
        <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <PartnersTestimonial
                imgSrc="/assets/testimonialaayushnepal.svg"
                testimonial="“I had been capped on knowledge and Information about Astronomy, cosmology and Astrophysics for years that there wasn't anything left for me to learn on the surface staggering my growth but Astronova opened that cap and exposed me to Boundless ocean of knowledge and experience about Astronomy, cosmology and Astrophysics which is more than enough to satisfy my hunger for Astronomy, cosmology and Astrophysics. 
                  Don't be capped, learn to adapt.”"
                name="Aayush Nepal"
                position="Astrophysics & Research Enthusiast"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">

              <PartnersTestimonial
                imgSrc="/assets/testimonialanujadhikari.svg"
                testimonial="“Reflecting on my journey with the Astronova Foundation, I am truly amazed by the wealth of knowledge and experiences it has brought into my life. Through my involvement, I've gained invaluable insights, honed essential skills, and formed meaningful connections with like-minded individuals. Each encounter has fueled my passion for making a positive impact and has instilled in me a profound sense of optimism for the future. With the guidance and support of Astronova, I am more determined than ever to contribute to creating a enthusiastic and brighter tomorrow.”"
                name="Anuj Adhikari"
                position="Research Enthusiast"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">

              <PartnersTestimonial
                imgSrc="/assets/testimonialriteshprajapati.svg"
                testimonial="“Throughout my journey as a passionate video editor, I've explored the art of highlighting key moments, choosing the right sounds, and perfecting color grading and motion graphics. Each project fuels my determination to push creative boundaries, continuously generating new ideas for video creation. I'm always inspired by the endless possibilities of video editing. Here's to embracing the craft and the excitement it brings!”"
                name="Ritesh Prajapati"
                position="Video Editor Intern"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <PartnersTestimonial
                imgSrc="/testimonialdinupbalami.png"
                testimonial="“Astronova is a platform where creativity thrives and ideas come to life. It has fueled my passion for making a positive impact on the community. Together, we are actively shaping a better future, driven by passion and purpose. It's a privilege to be part of such a dynamic environment, where creativity knows no bounds. I've gained invaluable insights, essential skills, and formed meaningful connections with like-minded people. Here's to Astronova—where the potential for impact is limitless.”"
                name="Dinup Balami"
                position="Campus Ambassador,Mechanical Engineering Student,KU"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <PartnersTestimonial
                imgSrc="/testimonialnamratabartaula.png"
                testimonial="“For over years, I always felt like people's view and awareness toward arts and culture had quite dip in terms of impact. And as a art enthusiast myself I felt pretty sad about it and felt obligated to change this trend. To my surprise, I find myself here at Astronova where I got the chance I needed to bring that change and leave a permanent mark and impact on people's views from early age. So bring change, starting from early age.”"
                name="Namrata Bartaula"
                position="Stone Art and Crafting Intern"
              />
            </CarouselItem>    
        </CarouselContent>
        <CarouselPrevious className="ml-8"/>
            <CarouselNext className="mr-8"/>
      </Carousel>

      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className="w-full flex justify-between h-auto items-center bg-gradient-to-br from-yellow-400 to-green-900"
      >
        <div className="hidden h-full md:block md:w-1/2">
          <img
            src="/childrens.png"
            alt="Childrens Image"
            className="h-full w-full"
          />
        </div>
        <div className="w-full md:w-1/2 xl:p-10 lg:p-8 py-4 flex flex-col justify-center items-center">
          <h3 className="font-opensans tracking-tighter font-extrabold 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-lg text-white text-center">
            NURTURING CHILDREN’S CURIOSITY, IGNITING THEIR POTENTIAL
          </h3>
          <div>
            <Link href="mailto:info@astronovafoundation@gmail.com">
            <Image
              src="/mail.svg"
              alt="Mail Image"
              width={180}
              height={120}
              className="sm:w-72 md:w-80 lg:w-96 xl:w-[30rem] 2xl:w-[34rem]"
            />
            </Link>
          </div>
          <h3 className="font-opensans tracking-tighter font-extrabold xl:text-3xl lg:text-2xl text-white">
            REACH OUT TO US
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Partners;
