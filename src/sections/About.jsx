"use client";
import React, { useState, useEffect } from "react";
import SupportStudent from "../components/UI/SupportStudent";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "../components/ui/skeleton";
import { getAllCampaigns } from "../app/services/api";
import useEmblaCarousel from "embla-carousel-react";
import AfterSchool from "../../public/assets/afterschool.svg";
import StartUp from "../../public/assets/startup.svg";
import Teachers from "../../public/assets/teachers.svg";
import ScienceExpo from "../../public/assets/scienceexpo.svg";
import Steam from "../../public/assets/steam.svg";
import Research from "../../public/assets/research.svg";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

const About = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await getAllCampaigns();
        setCampaigns(response.campaigns);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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
    <section className='max-w-screen mx-auto h-auto overflow-hidden bg-[url("/aboutsection.png")] bg-cover py-4 md:py-6 lg:py-8 2xl:py-12'>
      <div className="mx-auto mt-4 flex w-full max-w-6xl flex-col items-center justify-center space-x-0 md:mt-8 md:space-x-4 lg:flex-row">
        <div className="flex h-auto flex-col items-center justify-center border-[#DB8114] lg:w-full xl:border-r-4 xl:pr-8">
          <Image
            src="/assets/logo.png"
            alt=""
            width={180}
            height={120}
            className="h-auto py-4 md:w-full"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="flex flex-col items-center justify-center space-y-4"
        >
          <h3 className="px-3 text-center font-opensans text-xl font-bold tracking-tight text-[#33A4C6] lg:px-0 lg:text-2xl xl:text-3xl">
            About Us
          </h3>
          <p className="px-3 text-center font-opensans text-sm font-normal md:text-base lg:px-0 lg:text-base xl:text-lg 2xl:text-lg">
            The{" "}
            <span className="font-bold text-[#BDB809]">
              Astronova Foundation Nepal
            </span>{" "}
            is officially registered as non-profit organization. It&apos;s
            primary mission is to foster creative, innovative & entrepreneurial
            mindset among school/college students from their early ages. We are
            working to create an environment where students can receive support,
            mentorship, guidance and access to tools and facilities to explore
            their curiosity so that they could be able to develop practical &
            soft skills, entrepreneurial skill and turn their ideas into reality
            and provide them national and international exposure to explore
            their innovative research ideas. Recognizing that many young minds
            possess innovative ideas and energy that often remain untapped due
            to financial constraints and a lack of resources, the foundation
            aims to bridge this gap. The foundation believes that none of the
            creative curiosities should be killed just because of lack of money
            and the resources and moves ahead accordingly.
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className="my-auto mt-4 h-auto bg-[#D9D9D97D] py-3 md:mt-8 md:py-6 xl:py-8"
      >
        <div className="mx-auto flex h-full w-full max-w-6xl flex-col items-center justify-between space-y-3 px-4 lg:flex-row lg:space-y-0">
          <div className="flex w-full flex-col items-center justify-evenly space-y-6 border-[#DB8114] lg:w-1/3 xl:border-r-5 xl:px-4 xl:py-4">
            <h3 className="font-opensans text-xl font-bold tracking-wider text-[#0B77A5] lg:text-2xl xl:text-3xl">
              OUR MAJOR WORKING AREA
            </h3>
            <p className="text-left font-opensans text-sm font-normal text-black md:text-base lg:text-base xl:text-lg">
              We are actively involving various working area. However, our major
              focusing working area are as below.
            </p>
          </div>

          <div className="flex h-full w-[90%] grow pb-4 pt-12 sm:px-6 md:w-[75%] md:px-8 lg:w-[55%] lg:px-10 xl:px-16">
            <div className="z-20 mx-auto my-4 flex h-[24rem] w-full flex-col rounded-full border-5 border-white md:h-[34rem] xl:h-[38rem]">
              <div className="-mt-16 h-24 w-28 self-center justify-self-start md:h-28 md:w-32 xl:h-32 xl:w-36">
                <Link
                  href={{ pathname: "/working_area", query: { work: "asw" } }}
                  className="flex flex-col items-center justify-center space-y-2 rounded-2xl bg-[#2496D7] p-2 text-center font-opensans text-[10px] font-medium tracking-tighter text-white hover:scale-105 hover:duration-400 sm:text-xs md:text-sm xl:text-base"
                >
                  <Image src={AfterSchool} alt="" priority />
                  AFTER SCHOOL PROGRAM
                </Link>
              </div>
              <div className="mt-10 flex w-full items-center justify-between">
                <div className="-ml-8 h-24 w-24 self-start md:-ml-6 md:h-28 md:w-32 xl:h-32 xl:w-36">
                  <Link
                    href={{
                      pathname: "/working_area",
                      query: { work: "startup" },
                    }}
                    className="mx-auto flex flex-col items-center justify-center space-y-2 rounded-2xl bg-[#AE0D19] p-2 text-center font-opensans text-[10px] font-medium tracking-tighter text-white hover:scale-105 hover:duration-400 sm:text-xs md:text-sm xl:text-base"
                  >
                    <Image src={StartUp} alt="" priority />
                    STARTUP & INNOVATION
                  </Link>
                </div>
                <div className="mt-6 h-auto w-48 self-start sm:w-56 md:w-64 lg:w-80">
                  <Link href="#" className="hover:scale-105 hover:duration-400">
                    <Image
                      priority
                      src={Teachers}
                      alt="Teachers Workfield SVG"
                    />
                  </Link>
                </div>
                <div className="-mr-8 h-24 w-24 self-start md:-mr-6 md:h-28 md:w-32 xl:h-32 xl:w-36">
                  <Link
                    href={{
                      pathname: "/working_area",
                      query: { work: "nesep" },
                    }}
                    className="mx-auto flex flex-col items-center justify-center space-y-2 rounded-2xl bg-[#DB8114] p-2 text-center font-opensans text-[10px] font-medium tracking-tighter text-white hover:scale-105 hover:duration-400 sm:text-xs md:text-sm xl:text-base"
                  >
                    <Image src={ScienceExpo} alt="" priority />
                    SCIENCE EXPO
                  </Link>
                </div>
              </div>

              <div className="mt-4 flex w-full items-center justify-around">
                <div className="-ml-6 h-24 w-24 self-start justify-self-end md:h-28 md:w-32 xl:h-32 xl:w-36">
                  <Link
                    href={{
                      pathname: "/working_area",
                      query: { field: "steam" },
                    }}
                    className="mx-auto flex flex-col items-center justify-center space-y-2 rounded-2xl bg-white p-2 text-center font-opensans text-[10px] font-medium tracking-tighter text-white hover:scale-105 hover:duration-400 sm:text-xs md:text-sm xl:text-base"
                  >
                    <Image priority src={Steam} alt="Steam BG" />
                  </Link>
                </div>
                <div className="-mr-6 h-24 w-24 self-end justify-self-end md:h-28 md:w-32 xl:h-32 xl:w-36">
                  <Link
                    href={{
                      pathname: "/working_area",
                      query: { field: "research" },
                    }}
                    className="mx-auto flex flex-col items-center justify-center space-y-2 rounded-2xl bg-[#BD8809] p-2 text-center font-opensans text-[10px] font-medium tracking-tighter text-white hover:scale-105 hover:duration-400 sm:text-xs md:text-sm xl:text-base"
                  >
                    <Image priority src={Research} alt="" />
                    RESEARCH & INNOVATION
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-6">
        <div className="mx-auto flex h-full w-full max-w-6xl flex-col items-center justify-between space-y-8 px-4">
          <h3 className="font-opensans text-xl font-bold tracking-tight text-[#0B77A5] lg:text-2xl xl:text-3xl">
            SUPPORT FOR STUDENTS
          </h3>
          {loading && (
            <div className="mt-4 flex h-[60vh] w-full space-x-3 py-4">
              <div className="flex h-full flex-col items-center justify-center">
                <Skeleton className="h-1/2 w-full"></Skeleton>
                <div className="flex h-1/2 flex-col">
                  <Skeleton className="h-1/4 w-3/4"></Skeleton>
                  <Skeleton className="h-1/2 w-full"></Skeleton>
                  <Skeleton className="h-1/4 w-3/4"></Skeleton>
                </div>
              </div>
              <div className="hidden h-full flex-col items-center justify-center sm:flex">
                <Skeleton className="h-1/2 w-full"></Skeleton>
                <div className="flex h-1/2 flex-col">
                  <Skeleton className="h-1/4 w-3/4"></Skeleton>
                  <Skeleton className="h-1/2 w-full"></Skeleton>
                  <Skeleton className="h-1/4 w-3/4"></Skeleton>
                </div>
              </div>
              <div className="hidden h-full flex-col items-center justify-center xl:flex">
                <Skeleton className="h-1/2 w-full"></Skeleton>
                <div className="flex h-1/2 flex-col">
                  <Skeleton className="h-1/4 w-3/4"></Skeleton>
                  <Skeleton className="h-1/2 w-full"></Skeleton>
                  <Skeleton className="h-1/4 w-3/4"></Skeleton>
                </div>
              </div>
            </div>
          )}
          <div className="w-full">
            <div className="embla_homepage">
              <div className="embla__viewport_homepage" ref={emblaRef}>
                <div className="embla__container_homepage">
                  {campaigns.map((campaign) => {
                    return (
                      <div key={campaign.id} className="embla__slide_homepage">
                        <SupportStudent
                          data-aos="fade-right"
                          data-aos-duration="500"
                          id={campaign.id}
                          imgSrc={campaign.featured_img}
                          project={campaign.title}
                          desc={campaign.description.substr(0, 60) + " ..."}
                          achieved={campaign.achieved}
                          target={campaign.international_fund}
                        />
                      </div>
                    );
                  })}
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
      </div>
    </section>
  );
};

export default About;
