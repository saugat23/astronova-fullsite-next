import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart() {
  const options = {
    aspectRatio: 2,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
    },
  };

  const data = {
    labels: ["Ok", "Average", "Good", "Bad"],
    datasets: [
      {
        label: "Student Performance",
        data: [20, 10, 30, 40],
        backgroundColor: [
          "rgba(47, 128, 237, 1)",
          "rgba(0, 195, 248, 1)",
          "rgba(255, 137, 1, 1)",
          "rgba(255, 57, 43, 1)",
        ],
        borderColor: [
          "rgba(47, 128, 237, 1)",
          "rgba(0, 195, 248, 1)",
          "rgba(255, 137, 1, 1)",
          "rgba(255, 57, 43, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="w-[60%] rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-xl dark:border-strokedark dark:bg-boxdark sm:px-7.5 h-full">
        <div className="mb-3 justify-between gap-4 sm:flex">
          <div>
            <h5 className="xs:text-base md:text-lg xl:text-xl font-semibold font-kumbhsans text-black dark:text-white mt-4">
              Campaign Type
            </h5>
          </div>
        </div>
        <Doughnut data={data} options={options} />
      </div>
    </>
  );
}

export default DoughnutChart;
