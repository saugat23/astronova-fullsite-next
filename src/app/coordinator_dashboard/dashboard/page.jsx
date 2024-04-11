"use client";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Progress } from "@nextui-org/react";

const options = {
  chart: {
    fontFamily: "Open Sans, sans-serif",
    type: "donut",
  },
  colors: ["#7a7aff", "#dd7500", "#59FE69", "#59fef9", "#b2ffbf", "#ff30e3"],
  labels: [
    "IT Lab",
    "Astro Ecommerce",
    "E-Learning",
    "Science & Technology",
    "Research & Development",
    "Science Museum",
  ],
  legend: {
    show: false,
    position: "bottom",
  },
  plotOptions: {
    pie: {
      donut: {
        size: "40%",
        background: "transparent",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 200,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 100,
        },
      },
    },
  ],
};

const graphOptions = {
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "left",
  },
  colors: ["#3C50E0"],
  chart: {
    fontFamily: "Open Sans, sans-serif",
    height: 335,
    type: "area",
    dropShadow: {
      enabled: true,
      color: "#623CEA14",
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },

    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 100,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 150,
        },
      },
    },
  ],
  stroke: {
    width: [1],
    curve: "straight",
  },
  // labels: {
  //   show: false,
  //   position: "top",
  // },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: "#fff",
    strokeColors: ["#3056D3"],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: "category",
    categories: ["25.00", "10.00", "0.00"],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: "0px",
      },
    },
    min: 0,
    max: 30,
  },
};

const Page = () => {
  const [state, setState] = useState({ series: [0, 20, 0, 0, 0, 80] });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
      series: [0, 20, 0, 0, 0, 80],
    }));
  };

  handleReset;

  const [graphState, setGraphState] = useState({
    series: [
      {
        name: "Product One",
        data: [25, 10, 0],
      },
    ],
  });

  const handleGraphReset = () => {
    setGraphState((prevState) => ({
      ...prevState,
    }));
  };
  handleGraphReset;

  return (
    <section className="overflow-visible h-auto py-4">
      <div className="w-[80%] lg:py-6 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-2 xl:grid-cols-4 px-6">
        <div className="flex flex-col justify-start items-start h-40 w-72 bg-[#7a7affcc] py-4 px-6 rounded-2xl hover:scale-105 hover:transition-all hover:duration-200">
          <h4 className="font-montserrat font-normal text-sm text-white">
            Total Donations
          </h4>
          <h4 className="font-montserrat font-semibold text-[2.5rem] text-white">
            135035500K
          </h4>
        </div>
        <div className="flex flex-col justify-start items-start h-40 w-72 bg-[#ffbc13cc] py-4 px-6 rounded-2xl hover:scale-105 hover:transition-all hover:duration-200">
          <h4 className="font-montserrat font-normal text-sm text-white">
            Number Of Donation
          </h4>
          <h4 className="font-montserrat font-semibold text-[2.5rem] text-white">
            67
          </h4>
        </div>
        <div className="flex flex-col justify-start items-start h-40 w-72 bg-[#ff9013cc] py-4 px-6 rounded-2xl hover:scale-105 hover:transition-all hover:duration-200">
          <h4 className="font-montserrat font-normal text-sm text-white">
            Average Donation
          </h4>
          <h4 className="font-montserrat font-semibold text-[2.5rem] text-white">
            22222K
          </h4>
        </div>
        <div className="flex flex-col justify-start items-start h-40 w-72 bg-[#2438b8cc] py-4 px-6 rounded-2xl hover:scale-105 hover:transition-all hover:duration-200">
          <h4 className="font-montserrat font-normal text-sm text-white">
            Total Implementation
          </h4>
          <h4 className="font-montserrat font-semibold text-[2.5rem] text-white">
            100K
          </h4>
        </div>
      </div>
      <div className="w-full mt-2 flex justify-center items-start gap-x-4 gap-y-2 lg:px-6 h-[75vh]">
        <div className="grow flex flex-col justify-center items-start space-y-4 h-full">
          <div className="w-full flex justify-center items-start space-x-4 lg:h-1/2">
            <div className="w-[60%] rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-xl dark:border-strokedark dark:bg-boxdark sm:px-7.5 lg:h-full">
              <div className="mb-3 justify-between gap-4 sm:flex">
                <div>
                  <h5 className="text-xl font-semibold font-montserrat text-black dark:text-white mt-4">
                    Campaign Type
                  </h5>
                </div>
              </div>

              <div className="mb-2">
                <div id="chartThree" className="mx-auto flex justify-center">
                  <ReactApexChart
                    options={options}
                    series={state.series}
                    type="donut"
                  />
                </div>
              </div>

              <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
                <div className="w-full px-8 sm:w-1/2">
                  <div className="flex w-full items-center">
                    <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#7a7aff]"></span>
                    <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                      <span> IT Labs</span>
                      <span> 0% </span>
                    </p>
                  </div>
                </div>
                <div className="w-full px-8 sm:w-1/2">
                  <div className="flex w-full items-center">
                    <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#dd7500]"></span>
                    <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                      <span> Astro Ecommerce </span>
                      <span> 20% </span>
                    </p>
                  </div>
                </div>
                <div className="w-full px-8 sm:w-1/2">
                  <div className="flex w-full items-center">
                    <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#59FE69]"></span>
                    <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                      <span> E-Learning </span>
                      <span> 0% </span>
                    </p>
                  </div>
                </div>
                <div className="w-full px-8 sm:w-1/2">
                  <div className="flex w-full items-center">
                    <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#59FEF9]"></span>
                    <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                      <span> Science & Technology </span>
                      <span> 0% </span>
                    </p>
                  </div>
                </div>
                <div className="w-full px-8 sm:w-1/2">
                  <div className="flex w-full items-center">
                    <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#b2ffbf]"></span>
                    <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                      <span> Research & Development </span>
                      <span> 0% </span>
                    </p>
                  </div>
                </div>
                <div className="w-full px-8 sm:w-1/2">
                  <div className="flex w-full items-center">
                    <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#ff30e3]"></span>
                    <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                      <span> Science Museum </span>
                      <span> 80% </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[40%] rounded-sm border border-stroke bg-white px-4 pb-5 pt-7.5 shadow-xl dark:border-strokedark dark:bg-boxdark sm:px-7.5 lg:h-full">
              <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
                <div className="flex w-full flex-wrap gap-3 sm:gap-5 mt-4">
                  <div className="flex min-w-47.5">
                    <div className="w-full">
                      <p className="font-semibold text-xl font-montserrat">
                        Statistics
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div id="chartOne" className="-ml-5">
                  <ReactApexChart
                    options={graphOptions}
                    series={graphState.series}
                    type="area"
                    height={250}
                    width={"100%"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-start space-x-4 lg:h-1/2">
            <div className="grow rounded-sm border border-stroke bg-white px-4 pb-5 pt-7.5 shadow-xl dark:border-strokedark dark:bg-boxdark sm:px-7.5 lg:h-full">
              <div className="flex justify-start items-center mt-4">
                <h3 className="px-6 font-semibold font-montserrat text-xl">
                  Donation Implemented Location
                </h3>
              </div>
              <div className="flex justify-center items-start px-4">
                <div className="w-[70%]">
                  <img src="/assets/nepalflag.svg" alt="Nepal Flag SVG" />
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
                <h3 className="px-2 font-semibold font-montserrat text-xl">
                  Recent Donors
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center gap-y-3">
                <div className="w-full p-4 border border-[#E0D8FF] flex justify-start space-x-4">
                  <div>
                    <img
                      src="/aayushnepal.png"
                      alt="Photo"
                      className="rounded-full w-16"
                    />
                  </div>
                  <h4 className="font-roboto font-medium text-base">3/27/24</h4>
                </div>
                <div className="w-full p-4 border border-[#E0D8FF] flex justify-start space-x-4">
                  <div>
                    <img
                      src="/aayushnepal.png"
                      alt="Photo"
                      className="rounded-full w-16"
                    />
                  </div>
                  <h4 className="font-roboto font-medium text-base">3/27/24</h4>
                </div>
                <div className="w-full p-4 border border-[#E0D8FF] flex justify-start space-x-4">
                  <div>
                    <img
                      src="/aayushnepal.png"
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
        <div className="w-[30%] rounded-sm border border-stroke bg-white px-4 pb-5 pt-7.5 shadow-xl dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-3 xl:col-start-9 xl:col-end-12 h-auto">
          <div className="flex justify-start items-center mt-4">
            <h3 className="px-2 font-semibold font-montserrat text-xl">
              Campaign for you
            </h3>
          </div>
          <div className="lg:py-8">
            {/* <SupportStudent
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
            /> */}
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              className="p-3 flex flex-col justify-center items-center xl:space-y-6 h-auto w-auto shadow-2xl"
            >
              <div>
                <img src="/supportstudents.png" alt="Tinkering Labs Project" />
              </div>
              <h3 className="font-poppins font-bold lg:text-base xl:text-lg text-black">
                Tinkering Labs Project
              </h3>
              <p className="font-poppins font-normal xl:text-xs lg:text-[10px] text-[#1F1F1F]">
              Step into the world of Tinkering Labs, where creativity knows no
              bounds! Our tinkering spaces are designed to ignite curiosity,
              foster innovation, and unleash the imagination of...
              </p>
              <Progress
                size="md"
                aria-label="Loading..."
                color="success"
                value={25}
                className="w-full"
              />
              <div className="w-full flex justify-between items-center">
                <div className="flex flex-col justify-center items-start space-y-3">
                  <p className="font-poppins font-semibold lg:text-xl xl:text-2xl text-[#7926ED]">
                    25%
                  </p>
                  <p className="font-poppins font-normal xl:text-xs lg:text-[10px] text-black">
                    Pledge so far
                  </p>
                </div>
                <div className="flex flex-col justify-center items-start space-y-3">
                  <p className="font-poppins font-medium lg:text-[10px] xl:text-xs text-black">
                    Achieved $14000000
                  </p>
                  <p className="font-poppins font-semibold xl:text-xs lg:text-sm text-black">
                    Target $41000000
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center mt-4">
                <button
                  type="button"
                  className="bg-white border-2 border-[#7926ED] py-2 px-8 font-poppins font-semibold lg:text-sm xl:text-base text-black tracking-wider hover:bg-[#7926ED] hover:text-white hover:shadow-2xl"
                >
                  DONATE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
