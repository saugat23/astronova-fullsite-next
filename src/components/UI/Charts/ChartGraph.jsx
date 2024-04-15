"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options = {
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
      breakpoint: 320,
      options: {
        chart: {
          height: "90%",
        },
      },
    },
    {
      breakpoint: 800,
      options: {
        chart: {
          height: "90%",
        },
      },
    },
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: "90%",
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: "90%",
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

const ChartGraph = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Product One",
        data: [25, 10, 0],
      },
    ],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };
  handleReset;

  return (
    <div className="w-[40%] rounded-sm border border-stroke bg-white px-4 pb-5 pt-7.5 shadow-xl dark:border-strokedark dark:bg-boxdark sm:px-7.5 h-full">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5 mt-4">
          <div className="flex min-w-47.5">
            <div className="w-full">
              <p className="font-semibold xs:text-base md:text-lg xl:text-xl font-montserrat">
                Statistics
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full">
        <div id="chartOne" className="-ml-5 h-full">
          {typeof window !== "undefined" && (
            <ReactApexChart
              options={options}
              series={state.series}
              type="area"
              height={"100%"}
              width={"100%"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChartGraph;
