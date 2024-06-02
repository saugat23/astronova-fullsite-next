import React from "react";
import PartnersTestimonial from "../components/UI/PartnersTestimonial";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const Partners = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  return (
    <section className="h-auto max-w-screen overflow-hidden mx-auto 2xl:py-12 lg:py-8 md:py-6 py-4 xl:mt-12 lg:mt-8">
      <div className="xl:mt-20 lg:mt-18 flex flex-col justify-center items-center xl:space-y-12 lg:space-y-10">
        <h3 className="font-opensans font-bold text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-[#0B77A5] tracking-tight relative after:bg-[#0B77A5] after:absolute after:h-[4px] after:w-0 after:-bottom-[2px] after:left-0 hover:after:w-full after:transition-all after:duration-300">
          OUR PARTNERS IN CHARGE
        </h3>
        <div className="bg-[#00000005] xl:py-10 lg:py-8 w-full md:py-6 py-4">
          <div className="logos">
            <div className="logos-slide">
              <Image
                priority
                quality={90}
                src="/triontech.svg"
                alt="Trion Tech Image"
                width={40}
                height={30}
                className="sm:w-12 md:w-16 lg:w-20 xl:w-24 2xl:w-32"
              />
              <Image
                priority
                quality={90}
                src="/nationalnoc.png"
                alt="National NIC Image"
                width={80}
                height={60}
                className="sm:w-12 md:w-16 lg:w-20 xl:w-28 2xl:w-40"
              />
              <Image
                priority
                quality={90}
                src="/neema.png"
                alt="Neema Image"
                width={80}
                height={60}
                className="sm:w-12 md:w-16 lg:w-20 xl:w-28 2xl:w-40"
              />
              <Image
                priority
                quality={90}
                src="/thesquad.png"
                alt="The Squad Image"
                width={80}
                height={60}
                className=" sm:w-12 md:w-16 lg:w-20 xl:w-28 2xl:w-40"
              />
              <Image
                priority
                quality={90}
                src="/brainycube.png"
                alt="Brainy Cube Image"
                width={80}
                height={60}
                className=" sm:w-12 md:w-16 lg:w-20 xl:w-28 2xl:w-40"
              />
              <Image
                priority
                quality={90}
                src="/neo.svg"
                alt="NEO Image"
                width={40}
                height={30}
                className=" sm:w-12 md:w-16 lg:w-20 xl:w-24 2xl:w-32"
              />
              <Image
                priority
                quality={90}
                src="/creativecafe.svg"
                alt="Creative Cafe Image"
                width={40}
                height={30}
                className=" sm:w-12 md:w-16 lg:w-20 xl:w-24 2xl:w-32"
              />
              <Image
                priority
                quality={90}
                src="/man.svg"
                alt="MAN Image"
                width={40}
                height={30}
                className="sm:w-12 md:w-16 lg:w-20 xl:w-24 2xl:w-32"
              />
              {/* <h2 className="font-inter font-bold text-2xl text-black transform scale-100 hover:scale-110 transition-transform">
                EduCompass
              </h2> */}
              <Image
                priority
                quality={90}
                src="/dur.svg"
                alt="Dursikshya Image"
                width={40}
                height={30}
                className="sm:w-12 md:w-16 lg:w-20 xl:w-24 2xl:w-32"
              />

              <Image
                priority
                quality={90}
                src="/triontech.svg"
                alt="Trion Tech Image"
                width={40}
                height={30}
                className="sm:w-12 md:w-16 lg:w-20 xl:w-24 2xl:w-32"
              />
              <Image
                priority
                quality={90}
                src="/nationalnoc.png"
                alt="National NIC Image"
                width={80}
                height={60}
                className="sm:w-12 md:w-16 lg:w-20 xl:w-28 2xl:w-40"
              />
              <Image
                priority
                quality={90}
                src="/neema.png"
                alt="Neema Image"
                width={80}
                height={60}
                className="sm:w-12 md:w-16 lg:w-20 xl:w-28 2xl:w-40"
              />
              <Image
                priority
                quality={90}
                src="/thesquad.png"
                alt="The Squad Image"
                width={80}
                height={60}
                className=" sm:w-12 md:w-16 lg:w-20 xl:w-28 2xl:w-40"
              />
              <Image
                priority
                quality={90}
                src="/brainycube.png"
                alt="Brainy Cube Image"
                width={80}
                height={60}
                className=" sm:w-12 md:w-16 lg:w-20 xl:w-28 2xl:w-40"
              />
              <Image
                priority
                quality={90}
                src="/neo.svg"
                alt="NEO Image"
                width={40}
                height={30}
                className=" sm:w-12 md:w-16 lg:w-20 xl:w-24 2xl:w-32"
              />
              <Image
                priority
                quality={90}
                src="/creativecafe.svg"
                alt="Creative Cafe Image"
                width={40}
                height={30}
                className=" sm:w-12 md:w-16 lg:w-20 xl:w-24 2xl:w-32"
              />
              <Image
                priority
                quality={90}
                src="/man.svg"
                alt="MAN Image"
                width={40}
                height={30}
                className="sm:w-12 md:w-16 lg:w-20 xl:w-24 2xl:w-32"
              />
              {/* <h2 className="font-inter font-bold text-2xl text-black transform scale-100 hover:scale-110 transition-transform">
                EduCompass
              </h2> */}
              <Image
                priority
                quality={90}
                src="/dur.svg"
                alt="Dursikshya Image"
                width={40}
                height={30}
                className="sm:w-12 md:w-16 lg:w-20 xl:w-24 2xl:w-32"
              />
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
          className="bg-[#2496D7] xl:py-12 lg:py-10 w-full flex flex-col justify-center items-center space-y-6"
        >
          <div className="mx-auto max-w-6xl px-4 flex flex-col justify-center items-center space-y-4">
            <h3 className="font-opensans tracking-[-0.07em] text-white text-center font-bold xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-xl">
              JOIN THE JOURNEY
            </h3>
            <h3 className="font-kumbhsans tracking-wider text-center text-white font-bold xl:text-2xl lg:text-xl md:text-lg text-base">
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
          <div className="w-full mx-auto flex md:flex-row flex-col space-y-4 md:space-y-0 justify-around items-center md:items-start text-white max-w-6xl">
            <Link
              data-aos="fade-up"
              data-aos-duration="900"
              href="https://forms.gle/3uCVNnSz6MvqeGfn8"
              target="_blank"
              className="bg-[#0012FF] hover:scale-105 py-2 px-6 font-opensans font-bold tracking-tighter rounded-lg xl:text-2xl lg:text-xl md:text-lg text-base cursor-pointer hover:bg-white hover:text-[#0012FF] hover:duration-200"
            >
              JOIN AS VOLUNTEER
            </Link>
            <Link
              data-aos="fade-up"
              data-aos-duration="1100"
              href="/mentor_registration"
              className="bg-[#EC008C] hover:scale-105 py-2 px-6 font-opensans font-bold tracking-tighter rounded-lg xl:text-2xl lg:text-xl md:text-lg text-base cursor-pointer hover:bg-white hover:text-[#EC008C] hover:duration-200"
            >
              BECOME A TEAM MEMBER
            </Link>
            <Button
              data-aos="fade-up"
              data-aos-duration="1300"
              type="button"
              onPress={onOpen}
              className="bg-[#F26522] hover:scale-105 py-3 px-6 font-opensans font-bold tracking-tighter rounded-lg xl:text-2xl lg:text-xl md:text-lg text-base text-white cursor-pointer hover:bg-white hover:text-[#F26522] hover:duration-200"
            >
              MAKE A DONATION
            </Button>
          </div>
        </div>
      </div>

      <h3 className="xl:mt-12 mt-4 font-opensans font-bold w-auto text-center text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-[#0B77A5] tracking-tight">
        GROUND STORIES
      </h3>
      <Carousel
        opts={{
          align: "center",
          loop: false,
        }}
        className="w-full mx-auto max-w-7xl px-12"
      >
        <CarouselContent className="py-6 lg:py-10">
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-[#639a1b] mx-4">
            <PartnersTestimonial
              imgSrc="/assets/testimonialaayushnepal.svg"
              testimonial="“I had been capped on knowledge and Information about Astronomy, cosmology and Astrophysics for years that there wasn't anything left for me to learn on the surface staggering my growth but Astronova opened that cap and exposed me to Boundless ocean of knowledge and experience about Astronomy, cosmology and Astrophysics which is more than enough to satisfy my hunger for Astronomy, cosmology and Astrophysics. 
                  Don't be capped, learn to adapt.”"
              name="Aayush Nepal"
              position="Astrophysics & Research Enthusiast"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-[#aeab3b] mx-4">
            <PartnersTestimonial
              imgSrc="/assets/testimonialanujadhikari.svg"
              testimonial="“Reflecting on my journey with the Astronova Foundation, I am truly amazed by the wealth of knowledge and experiences it has brought into my life. Through my involvement, I've gained invaluable insights, honed essential skills, and formed meaningful connections with like-minded individuals. Each encounter has fueled my passion for making a positive impact and has instilled in me a profound sense of optimism for the future. With the guidance and support of Astronova, I am more determined than ever to contribute to creating a enthusiastic and brighter tomorrow.”"
              name="Anuj Adhikari"
              position="Research Enthusiast"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-[#639a1b] mx-4">
            <PartnersTestimonial
              imgSrc="/assets/testimonialriteshprajapati.svg"
              testimonial="“Throughout my journey as a passionate video editor, I've explored the art of highlighting key moments, choosing the right sounds, and perfecting color grading and motion graphics. Each project fuels my determination to push creative boundaries, continuously generating new ideas for video creation. I'm always inspired by the endless possibilities of video editing. Here's to embracing the craft and the excitement it brings!”"
              name="Ritesh Prajapati"
              position="Video Editor Intern"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-[#ae0d19] mx-4">
            <PartnersTestimonial
              imgSrc="/testimonialdinupbalami.png"
              testimonial="“Astronova is a platform where creativity thrives and ideas come to life. It has fueled my passion for making a positive impact on the community. Together, we are actively shaping a better future, driven by passion and purpose. It's a privilege to be part of such a dynamic environment, where creativity knows no bounds. I've gained invaluable insights, essential skills, and formed meaningful connections with like-minded people. Here's to Astronova—where the potential for impact is limitless.”"
              name="Dinup Balami"
              position="Campus Ambassador,Mechanical Engineering Student,KU"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-[#2496d7] mx-4">
            <PartnersTestimonial
              imgSrc="/testimonialnamratabartaula.png"
              testimonial="“For over years, I always felt like people's view and awareness toward arts and culture had quite dip in terms of impact. And as a art enthusiast myself I felt pretty sad about it and felt obligated to change this trend. To my surprise, I find myself here at Astronova where I got the chance I needed to bring that change and leave a permanent mark and impact on people's views from early age. So bring change, starting from early age.”"
              name="Namrata Bartaula"
              position="Stone Art and Crafting Intern"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="ml-12" />
        <CarouselNext className="mr-12" />
      </Carousel>

      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className="w-full flex justify-between h-auto items-center bg-gradient-to-br from-yellow-400 to-green-900"
      >
        <div className="hidden h-full md:block md:w-1/2">
          <Image
            priority
            quality={80}
            src="/childrens.png"
            alt="Childrens Image"
            width={1000}
            height={1000}
            className="h-full object-center object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 xl:p-8 lg:p-6 flex flex-col justify-center items-center">
          <h3 className="font-opensans tracking-tighter font-extrabold 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-lg text-white text-center">
            NURTURING CHILDREN’S CURIOSITY, IGNITING THEIR POTENTIAL
          </h3>
          <div className="h-3/4">
            <Link href="mailto:info@astronovafoundation@gmail.com">
              <Image
                priority
                quality={100}
                src="/mail.svg"
                alt="Mail Image"
                width={1000}
                height={1200}
                className="h-full w-full object-center object-cover"
              />
            </Link>
          </div>
          <h3 className="font-opensans tracking-tighter font-extrabold xl:text-3xl lg:text-2xl text-white">
            REACH OUT TO US
          </h3>
        </div>
      </div>

      <Modal
        size="5xl"
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        className=""
      >
        <ModalContent>
          {(onClose) => (
            <div>
              <ModalBody className="flex w-auto h-auto justify-center items-center">
                <Image
                  priority
                  src="/supportmodal.png"
                  alt="Support Modal"
                  className="w-full h-auto bg-cover object-cover"
                  width={2000}
                  height={1200}
                />
              </ModalBody>
            </div>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};

export default Partners;
