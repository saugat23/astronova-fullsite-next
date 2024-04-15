"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

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
      breakpoint: 320,
      options: {
        chart: {
          height: "40%",
        },
      },
    },
    {
      breakpoint: 800,
      options: {
        chart: {
          height: "40%",
        },
      },
    },
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: "40%",
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: "40%",
        },
      },
    },
  ],
};

const ChartDonut = () => {
  const [state, setState] = useState({ series: [0, 20, 0, 0, 0, 80] });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
      series: [0, 20, 0, 0, 0, 80],
    }));
  };

  handleReset;

  return (
    <div className="w-[60%] rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-xl dark:border-strokedark dark:bg-boxdark sm:px-7.5 h-full">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="xs:text-base md:text-lg xl:text-xl font-semibold font-montserrat text-black dark:text-white mt-4">
            Campaign Type
          </h5>
        </div>
      </div>

      <div className="mb-2 h-full">
        <div id="chartThree" className="mx-auto flex justify-center h-full">
            <ReactApexChart
              options={options}
              series={state.series}
              type="donut"
              height={"40%"}
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
  );
};

export default ChartDonut;
