"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
const ChartDonut = dynamic(
  () => import("../../../components/UI/Charts/ChartDonut"),
  {
    ssr: false,
  }
);
const ChartGraph = dynamic(
  () => import("../../../components/UI/Charts/ChartGraph"),
  {
    ssr: false,
  }
);
const SupportStudent = dynamic(
  () => import("../../../components/UI/SupportStudent"),
  {
    ssr: false,
  }
);
import nepalFlag from "../../../../public/assets/nepalflag.svg";
import AayushNepal from "../../../../public/aayushnepal.png"

const page = () => {
  return (
    <section className="overflow-hidden h-auto py-4">
      <div className="w-full lg:py-6 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-2 xl:grid-cols-4 px-6">
        <div className="flex flex-col justify-start items-start h-40 w-auto bg-[#7a7affcc] py-4 px-2 rounded-2xl hover:scale-105 hover:transition-all hover:duration-200">
          <h4 className="font-montserrat font-normal md:text-xs xl:text-sm text-white">
            Total Donations
          </h4>
          <h4 className="font-montserrat font-semibold md:text-4xl xl:text-[2.5rem] text-white">
            135035500K
          </h4>
        </div>
        <div className="flex flex-col justify-start items-start h-40 w-auto bg-[#ffbc13cc] py-4 px-6 rounded-2xl hover:scale-105 hover:transition-all hover:duration-200">
          <h4 className="font-montserrat font-normal md:text-xs xl:text-sm text-white">
            Number Of Donation
          </h4>
          <h4 className="font-montserrat font-semibold md:text-4xl xl:text-[2.5rem] text-white">
            67
          </h4>
        </div>
        <div className="flex flex-col justify-start items-start h-40 w-auto bg-[#ff9013cc] py-4 px-6 rounded-2xl hover:scale-105 hover:transition-all hover:duration-200">
          <h4 className="font-montserrat font-normal md:text-xs xl:text-sm text-white">
            Average Donation
          </h4>
          <h4 className="font-montserrat font-semibold md:text-4xl xl:text-[2.5rem] text-white">
            22222K
          </h4>
        </div>
        <div className="flex flex-col justify-start items-start h-40 w-auto bg-[#2438b8cc] py-4 px-6 rounded-2xl hover:scale-105 hover:transition-all hover:duration-200">
          <h4 className="font-montserrat font-normal md:text-xs xl:text-sm text-white">
            Total Implementation
          </h4>
          <h4 className="font-montserrat font-semibold md:text-4xl xl:text-[2.5rem] text-white">
            100K
          </h4>
        </div>
      </div>
      <div className="w-full mt-4 flex justify-center items-start gap-x-4 gap-y-2 lg:px-6 h-[75vh]">
        <div className="grow flex flex-col justify-center items-start space-y-4 h-full">
          <div className="w-full flex justify-center items-start space-x-4 h-1/2">
            {typeof window !== "undefined" && <ChartDonut />}
            {typeof window !== "undefined" && <ChartGraph />}
          </div>
          <div className="w-full flex justify-center items-start space-x-4 lg:h-1/2">
            <div className="grow rounded-sm border border-stroke bg-white px-4 pb-5 pt-7.5 shadow-xl dark:border-strokedark dark:bg-boxdark sm:px-7.5 lg:h-full">
              <div className="flex justify-start items-center mt-4">
                <h3 className="px-6 font-semibold font-montserrat xs:text-base md:text-lg xl:text-xl">
                  Donation Implemented Location
                </h3>
              </div>
              <div className="flex justify-center items-start px-4">
                <div className="w-[70%]">
                  <Image src={nepalFlag} alt="Nepal Flag SVG" />
                </div>
                <div className="w-[30%] flex flex-col items-center justify-center gap-y-3">
                  <div className="w-full px-8 sm:w-1/2">
                    <div className="flex w-full items-center">
                      <span className="mr-2 block h-3 w-3 max-w-3 rounded-full bg-[#7a7aff]"></span>
                      <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                        <span> On Process</span>
                      </p>
                    </div>
                  </div>
                  <div className="w-full px-8 sm:w-1/2">
                    <div className="flex w-full items-center">
                      <span className="mr-2 block h-3 w-3 max-w-3 rounded-full bg-[#7a7aff]"></span>
                      <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                        <span> Completed</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-sm border border-stroke bg-white px-4 pb-5 pt-7.5 shadow-xl dark:border-strokedark dark:bg-boxdark sm:px-7.5 lg:h-full lg:w-[30%]">
              <div className="flex justify-start items-center mt-4">
                <h3 className="px-2 font-semibold font-montserrat xs:text-sm md:text-base xl:text-xl">
                  Recent Donors
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center gap-y-3">
                <div className="w-full p-4 border border-[#E0D8FF] flex justify-start space-x-4">
                  <div>
                    <Image
                      src={AayushNepal}
                      alt="Photo"
                      className="rounded-full w-16"
                    />
                  </div>
                  <h4 className="font-roboto font-medium text-base">3/27/24</h4>
                </div>
                <div className="w-full p-4 border border-[#E0D8FF] flex justify-start space-x-4">
                  <div>
                    <Image
                      src={AayushNepal}
                      alt="Photo"
                      className="rounded-full w-16"
                    />
                  </div>
                  <h4 className="font-roboto font-medium text-base">3/27/24</h4>
                </div>
                <div className="w-full p-4 border border-[#E0D8FF] flex justify-start space-x-4">
                  <div>
                    <Image
                      src={AayushNepal}
                      alt="Photo"
                      className="rounded-full w-16"
                    />
                  </div>
                  <h4 className="font-roboto font-medium text-base">3/27/24</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden xl:block xl:w-[30%] rounded-sm border border-stroke bg-white px-4 pb-5 pt-7.5 shadow-xl dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-3 xl:col-start-9 xl:col-end-12 h-auto">
          <div className="flex justify-start items-center mt-4">
            <h3 className="px-2 font-semibold font-montserrat text-xl">
              Campaign for you
            </h3>
          </div>
          <div className="lg:py-8">
            <SupportStudent
              data-aos="fade-right"
              data-aos-duration="700"
              imgSrc="/supportstudents.png"
              project="Tinkering Labs Project"
              desc="Step into the world of Tinkering Labs, where creativity knows no
              bounds! Our tinkering spaces are designed to ignite curiosity,
              foster innovation, and unleash the imagination of..."
              progressValue="25"
              achieved="$14000000"
              target="$41000000"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
