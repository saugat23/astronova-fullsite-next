import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

function LineChart() {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: "Student Class",
        position: "top",
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  const data = {
    labels: [25.0, 10.0, 0.0],
    datasets: [
      {
        label: "",
        data: [0, 5, 10, 15, 20, 25, 30],
        borderColor: "rgb(255, 137, 1)",
        backgroundColor: "rgb(255, 255, 255)",
        fill: false,
        tension: 0.6,
      },
    ],
  };

  return (
    <>
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
        <Line options={options} data={data} className="h-full" />
      </div>
    </>
  );
}
export default LineChart;
