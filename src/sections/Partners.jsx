import React from "react";
import PartnersTestimonial from "../components/UI/PartnersTestimonial";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Mail from "../../public/mail.svg";
import MailBell from "../../public/mailbell.svg";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const Partners = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

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
    <section className="max-w-screen mx-auto mt-6 h-auto overflow-hidden lg:mt-8 xl:mt-12">
      <div className="lg:mt-18 flex flex-col items-center justify-center lg:space-y-10 xl:mt-20 xl:space-y-12">
        <h3 className="relative font-opensans text-xl font-bold tracking-tight text-[#0B77A5] after:absolute after:-bottom-[2px] after:left-0 after:h-[4px] after:w-0 after:bg-[#0B77A5] after:transition-all after:duration-300 hover:after:w-full lg:text-2xl xl:text-3xl">
          OUR PARTNERS IN CHARGE
        </h3>
        <div className="my-4 w-full py-8">
          <div className="logos">
            <div className="logos-slide">
              <Image
                priority
                quality={90}
                src="/triontech.svg"
                alt="Trion Tech Image"
                width={40}
                height={30}
                className="h-8 w-8 sm:w-12 md:w-16 lg:w-20 xl:w-24 2xl:w-32"
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
                className="sm:w-12 md:w-16 lg:w-20 xl:w-28 2xl:w-40"
              />
              <Image
                priority
                quality={90}
                src="/brainycube.png"
                alt="Brainy Cube Image"
                width={80}
                height={60}
                className="sm:w-12 md:w-16 lg:w-20 xl:w-28 2xl:w-40"
              />
              <Image
                priority
                quality={90}
                src="/neo.svg"
                alt="NEO Image"
                width={40}
                height={30}
                className="sm:w-12 md:w-16 lg:w-20 xl:w-24 2xl:w-32"
              />
              <Image
                priority
                quality={90}
                src="/creativecafe.svg"
                alt="Creative Cafe Image"
                width={40}
                height={30}
                className="sm:w-12 md:w-16 lg:w-20 xl:w-24 2xl:w-32"
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
                className="sm:w-12 md:w-16 lg:w-20 xl:w-28 2xl:w-40"
              />
              <Image
                priority
                quality={90}
                src="/brainycube.png"
                alt="Brainy Cube Image"
                width={80}
                height={60}
                className="sm:w-12 md:w-16 lg:w-20 xl:w-28 2xl:w-40"
              />
              <Image
                priority
                quality={90}
                src="/neo.svg"
                alt="NEO Image"
                width={40}
                height={30}
                className="sm:w-12 md:w-16 lg:w-20 xl:w-24 2xl:w-32"
              />
              <Image
                priority
                quality={90}
                src="/creativecafe.svg"
                alt="Creative Cafe Image"
                width={40}
                height={30}
                className="sm:w-12 md:w-16 lg:w-20 xl:w-24 2xl:w-32"
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
        className="flex flex-col items-center justify-center lg:mt-8 xl:mt-10"
      >
        <div className="flex min-h-[70vh] w-full flex-col items-center justify-start bg-[url('/joinbg.png')] bg-cover p-6"></div>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="flex w-full flex-col items-center justify-center space-y-6 bg-[#2496D7] py-4 md:py-6 lg:py-10 xl:py-12"
        >
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-center space-y-4 px-4">
            <h3 className="text-center font-opensans text-2xl font-bold text-white lg:text-3xl xl:text-4xl">
              JOIN THE JOURNEY
            </h3>
            <h3 className="text-center font-opensans text-base font-medium text-white md:text-lg lg:text-xl xl:text-2xl">
              Be the change you want to see
            </h3>
            <p className="py-2 text-center font-opensans text-xs font-normal leading-[1.6em] text-white md:text-sm lg:text-base xl:text-lg">
              The Astronova Foundation Nepal is officially registered as
              non-profit organization. It&apos;s primary mission is to foster
              creative, innovative & entrepreneurial mindset among
              school/college students from their early ages. We are working to
              create an environment where students can receive support,
              mentorship, guidance and access to tools and facilities to explore
              their curiosity so that they could be able to develop practical &
              soft skills, entrepreneurial skill and turn their ideas into
              reality and provide them national and international exposure to
              explore their innovative research ideas.
              <br />
              Recognizing that many young minds possess innovative ideas and
              energy that often remain untapped due to financial constraints and
              a lack of resources, the foundation aims to bridge this gap. The
              foundation believes that none of the creative curiosities should
              be killed just because of lack of money and the resources and
              moves ahead accordingly.
            </p>
          </div>
          <div className="mx-auto w-full max-w-6xl">
            <div className="flex w-full flex-col items-center justify-center space-x-0 space-y-4 px-20 text-white md:flex-row md:items-start md:space-x-5 md:space-y-0 md:px-0">
              <Link
                data-aos="fade-up"
                data-aos-duration="900"
                href="https://forms.gle/3uCVNnSz6MvqeGfn8"
                target="_blank"
                className="w-full cursor-pointer bg-[#0012FF] px-6 py-2 text-center font-opensans text-sm font-semibold hover:scale-105 hover:bg-white hover:text-[#0012FF] hover:duration-200 md:w-auto lg:text-base xl:text-lg"
              >
                JOIN AS VOLUNTEER
              </Link>
              <Link
                data-aos="fade-up"
                data-aos-duration="1100"
                href="/mentor_registration"
                className="w-full cursor-pointer bg-[#EC008C] px-6 py-2 text-center font-opensans text-sm font-semibold hover:scale-105 hover:bg-white hover:text-[#EC008C] hover:duration-200 md:w-auto lg:text-base xl:text-lg"
              >
                BECOME A TEAM MEMBER
              </Link>
              <Button
                data-aos="fade-up"
                data-aos-duration="1300"
                type="button"
                onPress={onOpen}
                radius="none"
                className="mt-4 w-full cursor-pointer bg-[#F26522] px-6 font-opensans text-sm font-semibold text-white hover:scale-105 hover:bg-white hover:text-[#F26522] hover:duration-200 md:w-auto lg:text-base xl:text-lg"
              >
                MAKE A DONATION
              </Button>
            </div>
          </div>
        </div>
      </div>

      <h3 className="mt-4 w-auto text-center font-opensans text-xl font-bold tracking-tight text-[#0B77A5] lg:text-2xl xl:mt-12 xl:text-3xl">
        GROUND STORIES
      </h3>
      <div className="mx-auto w-full max-w-6xl px-3 pt-4">
        <div className="embla_homepage">
          <div className="embla__viewport_homepage" ref={emblaRef}>
            <div className="embla__container_homepage">
              <div className="embla__slide_homepage">
                <PartnersTestimonial
                  imgSrc="/assets/testimonialaayushnepal.svg"
                  testimonial="“I had been capped on knowledge and Information about Astronomy, cosmology and Astrophysics for years that there wasn't anything left for me to learn on the surface staggering my growth but Astronova opened that cap and exposed me to Boundless ocean of knowledge and experience about Astronomy, cosmology and Astrophysics which is more than enough to satisfy my hunger for Astronomy, cosmology and Astrophysics. 
                  Don't be capped, learn to adapt.”"
                  name="Aayush Nepal"
                  position="Astrophysics & Research Enthusiast"
                  bgColor="green"
                />
              </div>
              <div className="embla__slide_homepage">
                <PartnersTestimonial
                  imgSrc="/assets/testimonialanujadhikari.svg"
                  testimonial="“Reflecting on my journey with the Astronova Foundation, I am truly amazed by the wealth of knowledge and experiences it has brought into my life. Through my involvement, I've gained invaluable insights, honed essential skills, and formed meaningful connections with like-minded individuals. Each encounter has fueled my passion for making a positive impact and has instilled in me a profound sense of optimism for the future. With the guidance and support of Astronova, I am more determined than ever to contribute to creating a enthusiastic and brighter tomorrow.”"
                  name="Anuj Adhikari"
                  position="Research Enthusiast"
                  bgColor="yellow"
                />
              </div>
              <div className="embla__slide_homepage">
                <PartnersTestimonial
                  imgSrc="/assets/testimonialriteshprajapati.svg"
                  testimonial="“Throughout my journey as a passionate video editor, I've explored the art of highlighting key moments, choosing the right sounds, and perfecting color grading and motion graphics. Each project fuels my determination to push creative boundaries, continuously generating new ideas for video creation. I'm always inspired by the endless possibilities of video editing. Here's to embracing the craft and the excitement it brings!”"
                  name="Ritesh Prajapati"
                  position="Video Editor Intern"
                  bgColor="green"
                />
              </div>
              <div className="embla__slide_homepage">
                <PartnersTestimonial
                  imgSrc="/testimonialdinupbalami.png"
                  testimonial="“Astronova is a platform where creativity thrives and ideas come to life. It has fueled my passion for making a positive impact on the community. Together, we are actively shaping a better future, driven by passion and purpose. It's a privilege to be part of such a dynamic environment, where creativity knows no bounds. I've gained invaluable insights, essential skills, and formed meaningful connections with like-minded people. Here's to Astronova—where the potential for impact is limitless.”"
                  name="Dinup Balami"
                  position="Campus Ambassador,Mechanical Engineering Student,KU"
                  bgColor="red"
                />
              </div>
              <div className="embla__slide_homepage">
                <PartnersTestimonial
                  imgSrc="/testimonialnamratabartaula.png"
                  testimonial="“For over years, I always felt like people's view and awareness toward arts and culture had quite dip in terms of impact. And as a art enthusiast myself I felt pretty sad about it and felt obligated to change this trend. To my surprise, I find myself here at Astronova where I got the chance I needed to bring that change and leave a permanent mark and impact on people's views from early age. So bring change, starting from early age.”"
                  name="Namrata Bartaula"
                  position="Stone Art and Crafting Intern"
                  bgColor="blue"
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

      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className="flex h-auto w-full items-center justify-between bg-gradient-to-br from-yellow-400 to-green-900"
      >
        <div className="hidden h-full md:block md:w-1/2">
          <Image
            priority
            quality={80}
            src="/childrens.png"
            alt="Childrens Image"
            width={1000}
            height={1000}
            className="h-full object-cover object-center"
          />
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center space-y-12 p-4 md:w-1/2 lg:p-6 xl:p-8">
          <h3 className="text-center font-opensans text-lg font-extrabold tracking-tighter text-white md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            NURTURING CHILDREN’S CURIOSITY, IGNITING THEIR POTENTIAL
          </h3>
          <div>
            <Link
              href="mailto:info@astronovafoundation@gmail.com"
              className="relative h-full w-full"
            >
              <Image
                src={MailBell}
                quality={100}
                alt="MailBell Image"
                className="absolute -top-8 left-1/2 z-40 -translate-x-1/2"
              />
              <Image
                priority
                quality={100}
                src={Mail}
                alt="Mail Image"
                className="relative z-30 object-cover object-center"
              />
            </Link>
          </div>
          <h3 className="font-opensans font-extrabold tracking-tighter text-white lg:text-2xl xl:text-3xl">
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
              <ModalBody className="flex h-auto w-auto items-center justify-center">
                <Image
                  priority
                  src="/supportmodal.png"
                  alt="Support Modal"
                  className="h-auto w-full bg-cover object-cover"
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
