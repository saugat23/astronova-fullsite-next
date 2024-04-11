"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <section className="overflow-visible h-auto p-4">
      <div className="bg-white py-8 px-4 w-full flex flex-col justify-center items-start lg:space-y-4">
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-center items-start">
            <h3 className="font-poppins font-semibold lg:text-xl">
              Add New Blog Section
            </h3>
          </div>
          <div className="flex justify-start items-center">
            <button
              type="button"
              className="py-2 px-8 bg-[#5C74FF] text-white rounded-xl hover:bg-[#2e3a80] font-opensans font-semibold"
              onClick={() => router.back()}
            >
              Go Back
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-start space-y-3 mt-2">
          <label
            htmlFor="blogTitle"
            className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
          >
            Blog Title
          </label>
          <input
            name="newBlogTitle"
            id="newBlogTitle"
            className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-[#0000008c] text-sm w-1/2"
            placeholder="Input Blog Title"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start space-y-3 mt-2">
          <h4 className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base">
            Add Featured Image
          </h4>
          <label
            htmlFor="featuredBlogImage"
            className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base bg-[url('/assets/inputfile.svg')] w-full h-48 bg-cover bg-[top_50%] bg-no-repeat flex justify-center items-center"
          >
            <button
              type="button"
              className="px-4 py-2 text-[#0000008c] bg-white rounded-lg border border-[#5C74FF]"
            >
              Add Image
            </button>
          </label>
          <input
            type="file"
            name="featuredBlogImage"
            id="featuredBlogImage"
            className="p-2 outline-none rounded-md text-[#0000008c] text-sm w-full hidden"
            placeholder=""
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start space-y-3 mt-2">
          <label
            htmlFor="newBlogLink"
            className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
          >
            Blog Link
          </label>
          <input
            name="newBlogLink"
            id="newBlogLink"
            className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-[#0000008c] text-sm w-1/2"
            placeholder="Blog Link"
          />
        </div>
        <div className="flex justify-start items-center lg:mt-8">
          <button
            type="submit"
            className="py-2 px-8 bg-[#5C74FF] text-white rounded-xl hover:bg-[#2e3a80] font-opensans font-semibold"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Page;
