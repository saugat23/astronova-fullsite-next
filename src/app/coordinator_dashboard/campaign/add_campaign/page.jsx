"use client"
import React from "react";
import Link from "next/link";
import { Input, Textarea } from "@nextui-org/react";
import { BiSolidDollarCircle } from "react-icons/bi";
import { HiMiniCurrencyRupee } from "react-icons/hi2";
import { FaCalendarAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Page = () => {

    const router = useRouter();
  return (
    <section className="p-6 h-auto">
      <div className="bg-white w-full flex items-start shadow-xl p-4 border border-[#e0d8ff99] rounded-lg">
        <div className="w-[20%] justify-self-start border border-[#e0d8ff99] rounded-s-lg flex flex-col justify-center items-start space-y-4 p-3">
          <div>
            <h3 className="font-poppins font-semibold lg:text-xl">
              Basic Information
            </h3>
          </div>
          <div className="w-full flex flex-col justify-center items-start space-y-3 lg:py-4">
            <label
              htmlFor="campaignTitle"
              className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
            >
              Campaign&apos;s Title
            </label>
            <input
              type="text"
              name="campaignTitle"
              id="campaignTitle"
              className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-[#0000008c] text-sm w-full"
              placeholder="Campaign's Title"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start space-y-3">
            <label
              htmlFor="campaignSubTitle"
              className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
            >
              Campaign&apos;s Sub Title
            </label>
            <textarea
              name="campaignTitle"
              id="campaignTitle"
              className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-[#0000008c] text-sm w-full resize-none h-20"
              placeholder="Campaign's Sub Title"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start space-y-3">
            <label
              htmlFor="campaignVideo"
              className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
            >
              Campaign&apos;s Video
            </label>
            <input
              type="text"
              name="campaignVideo"
              id="campaignVideo"
              className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-sm w-full text-[#0000008c]"
              placeholder="URL"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start space-y-3">
            <label
              htmlFor="campaignDepartment"
              className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
            >
              For Department
            </label>
            <select
              type="text"
              name="campaignVideo"
              id="campaignVideo"
              className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-sm w-full text-[#0000008c]"
              placeholder="URL"
            >
              <option value="subsidiaries">Subsidiaries</option>
              <option value="innovation">Innovation</option>
              <option value="infrastructure">Infrastructure</option>
            </select>
          </div>
        </div>
        <div className="grow justify-self-center flex flex-col justify-center items-start lg:space-y-4 p-6">
          <div>
            <h3 className="font-poppins font-semibold lg:text-xl">
              Funding Information
            </h3>
          </div>
          <div className="w-[80%] flex flex-col justify-center items-start space-y-4">
            <div className="border-dashed border-[#e0d8ff99] w-80 h-60 py-6">
              <label
                htmlFor="fundingFileInput"
                className="max-w-md w-80 h-60 mx-auto cursor-pointer"
              >
                <svg
                  width="600"
                  height="150"
                  viewBox="10 0 480 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <rect
                    y="0.0947266"
                    width="320.098"
                    height="100.806"
                    fill="url(#pattern0)"
                  />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_30_2525"
                        transform="matrix(0.003779 0 0 0.0111111 0.329945 0)"
                      />
                    </pattern>
                    <image
                      id="image0_30_2525"
                      width="180"
                      height="120"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACCUlEQVR4nO2cO05DMRBFXQFLIIQlEmiSF3yb7I5PBSwFhYbqIguQEKIgyYs9Ts6R3FCND3fGT7HklAAAAAAAAAAAIK1WPsvZNzn7UfKbZB/oepP8IPl6NvNp1X/9MPhS8ksACa68nsveqyX5SCX7W3aVZJdxEWCzbrly9qyG6McIm1Vb0fc1RK9bb1TtRa/3Lrr1JhVkIVqIdusUkmi1F8foUHupzGghevQE5ex3yQvJk7Jy9vD1NxI9sujhj0/NJaLHT9rkt+j53OeIrnT4iNGB6J2IliAFq2c0om1MwepBtBBtEt1BqypYPYwOIdokuoNWVbB6GB1CtEl0B62qYPUwOoRok+gRWvXnzUgKxi43NRFFDyk429zU1Chq04NjkoKzzU3N3ovatKDFwhcpOJKn3YsubZmCk7Nvuxf9ddAsIya71FRqO4jDcKyVOqkH0UK0SXQHrapg9TA6hGiT6A5aVcHqYXQI0SbRHbSqgtXD6BCiTaI7aFUFq4fRIUSbRAdq1cUfv2dvczPC6NDmNzXb3IwgWv+/qdnlZgTR6msd7FeHgi1EC9FunUISrfbiGB060hnNc2wun5qvNUTzwGCu8MBgeXW2dduq/brau+jyAGp5CDXAZt1i5eyn1conqeKzxs/HKFnyNNWkJLu8Olvm1SEfkPlzb3dlXFRLMgAAAAAAAABAis0HtRflCFEv9CQAAAAASUVORK5CYII="
                    />
                  </defs>
                </svg>
              </label>
              <input
                type="file"
                id="fundingFileInput"
                name="fundingFileInput"
                accept="image/*"
                className="hidden"
              />
            </div>
            <div className="w-full flex justify-center items-center space-x-6 border-dashed border-[#e0d8ff99]">
              <div>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  id="inputFile"
                  name="inputFile"
                />
                <label
                  htmlFor="inputFile"
                  className="max-w-md w-40 h-32 bg-[url('/assets/inputfile.svg')] bg-no-repeat bg-contain mx-auto cursor-pointer"
                ></label>
              </div>
            </div>
            <div className="w-full flex justify-between items-start">
              <div className="flex flex-col justify-center items-start space-y-4">
                <div className="w-full flex flex-col justify-center items-start space-y-3">
                  <label
                    htmlFor="fundInDollars"
                    className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                  >
                    Target Fundraising in Dollars
                  </label>
                  <Input
                    startContent={
                      <BiSolidDollarCircle className="text-[#5C74FF]" />
                    }
                    autoFocus
                    variant="faded"
                    name="fundInDollars"
                    placeholder="5,000,000"
                    className="w-full"
                  />
                </div>
                <div className="w-full flex flex-col justify-center items-start space-y-3">
                  <label
                    htmlFor="startDate"
                    className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                  >
                    Choose Start Date
                  </label>
                  <Input
                    type="date"
                    autoFocus
                    name="startDate"
                    variant="faded"
                    placeholder="5,000,000"
                    className="text-[#0000008c] w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-start space-y-4">
                <div className="w-full flex flex-col justify-center items-start space-y-3">
                  <label
                    htmlFor="fundInRupees"
                    className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                  >
                    Target Fundraising in Rupees
                  </label>
                  <Input
                    startContent={
                      <HiMiniCurrencyRupee className="text-[#5C74FF]" />
                    }
                    autoFocus
                    name="fundInRupees"
                    variant="faded"
                    placeholder="50,00,000"
                    className="w-full"
                  />
                </div>
                <div className="w-full flex flex-col justify-center items-start space-y-3">
                  <label
                    htmlFor="endDate"
                    className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                  >
                    Choose End Date
                  </label>
                  <Input
                    type="date"
                    autoFocus
                    name="endDate"
                    variant="faded"
                    placeholder="50,00,000"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            <div className="w-[80%] flex flex-col justify-center items-start space-y-3">
              <label
                htmlFor="fundDesc"
                className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
              >
                Description
              </label>
              <Textarea
                name="fundDesc"
                placeholder="Enter your description"
                className="max-w-md w-full my-4"
              />
            </div>
            <div className="flex justify-start items-center">
                <button type="submit" className="py-2 px-8 bg-[#5C74FF] text-white rounded-xl hover:bg-[#2e3a80] font-opensans font-semibold">Submit</button>
            </div>
          </div>
        </div>
        <div className="w-[20%] flex flex-col justify-start items-center justify-self-end">
          <div className="h-40">
            <button
              type="button"
              className="py-2 px-8 bg-[#5C74FF] text-white rounded-xl hover:bg-[#2e3a80] font-opensans font-semibold"
              onClick={() => router.back()}
            >Go Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
