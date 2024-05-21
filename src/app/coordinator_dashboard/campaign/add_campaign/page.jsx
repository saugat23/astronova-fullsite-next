"use client";
import React, { useState, useEffect } from "react";
import { Input, Textarea } from "@nextui-org/react";
import { BiSolidDollarCircle } from "react-icons/bi";
import { HiMiniCurrencyRupee } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import { createCampaign } from "../../../services/api";
import { toast } from "sonner";
import Loader from "../../../../components/UI/Loader/Loader";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    sub_title: "",
    department: "",
    national_fund: "",
    international_fund: "",
    achieved: "",
    percentage: "",
    start_date: "",
    end_date: "",
    description: "",
    featured_img: "",
    gallery: [],
    video: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFeaturedImageChange = (e) => {
    const file = e.target.files[0]; // Get the single file from the input
    setFormData((prevData) => ({
      ...prevData,
      featured_img: file,
    }));
  };

  const handleGalleryImageChange = (e, index) => {
    const file = e.target.files[0]; // Get the single file from the input
    setFormData((prevData) => {
      const newGalleryImages = [...prevData.gallery];
      newGalleryImages[index] = file; // Update the specific index with the new file
      return { ...prevData, gallery: newGalleryImages };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(formData);
      const response = await createCampaign(formData);
      console.log("response", response);

      toast.success("Campaign created successfully!");
      setTimeout(() => {
        window.history.back();
      }, 5000);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error creating campaign. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  const router = useRouter();
  return (
    <>
      <section className="p-6 h-auto">
        <div>
          <form
            onSubmit={handleSubmit}
            className="bg-white w-full flex items-start shadow-xl p-4 border border-[#e0d8ff99] rounded-lg"
          >
            <div className="w-[30%] justify-self-start border border-[#e0d8ff99] rounded-s-lg flex flex-col justify-center items-start space-y-4 p-3">
              <div>
                <h3 className="font-poppins font-semibold lg:text-xl">
                  Basic Information
                </h3>
              </div>
              <div className="w-full flex flex-col justify-center items-start space-y-3 lg:py-4">
                <label
                  htmlFor="title"
                  className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                >
                  Campaign&apos;s Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-[#0000008c] text-sm w-full"
                  placeholder="Campaign's Title"
                  onChange={handleChange}
                  value={formData.title}
                />
              </div>
              <div className="w-full flex flex-col justify-center items-start space-y-3">
                <label
                  htmlFor="sub_title"
                  className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                >
                  Campaign&apos;s Sub Title
                </label>
                <textarea
                  name="sub_title"
                  id="sub_title"
                  className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-[#0000008c] text-sm w-full resize-none h-20"
                  placeholder="Campaign's Sub Title"
                  onChange={handleChange}
                  value={formData.sub_title}
                />
              </div>
              <div className="w-full flex flex-col justify-center items-start space-y-3">
                <label
                  htmlFor="video"
                  className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                >
                  Campaign&apos;s Video
                </label>
                <input
                  type="text"
                  name="video"
                  id="video"
                  className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-sm w-full text-[#0000008c]"
                  placeholder="Youtube URL"
                  onChange={handleChange}
                  value={formData.video}
                />
              </div>
              <div className="w-full flex flex-col justify-center items-start space-y-3">
                <label
                  htmlFor="department"
                  className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                >
                  For Department
                </label>
                <select
                  name="department"
                  id="department"
                  className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-sm w-full text-[#0000008c]"
                  placeholder="URL"
                  onChange={handleChange}
                  value={formData.department}
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
                <div className="border-dashed border-[#e0d8ff99] w-full h-60 py-6">
                  <label
                    htmlFor="featured_img"
                    className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base bg-[url('/assets/inputfile.svg')] w-full h-full bg-cover bg-[top_2rem] bg-no-repeat flex justify-center items-center cursor-pointer"
                  >
                    Add Featured Image
                  </label>
                  <input
                    type="file"
                    name="featured_img"
                    id="featured_img"
                    className="p-2 outline-none rounded-md text-[#0000008c] text-sm w-full invisible "
                    placeholder=""
                    onChange={handleFeaturedImageChange}
                  />
                </div>
                <div className="w-full flex justify-center items-center space-x-6 border-dashed border-[#e0d8ff99]">
                  <div className="w-1/4">
                    <label
                      htmlFor="newGalleryImages0"
                      className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base bg-[url('/assets/inputfile.svg')] w-full h-32 bg-cover bg-[top_2rem] bg-no-repeat flex justify-center items-center cursor-pointer"
                    >
                      Image 1
                    </label>
                    <input
                      type="file"
                      name="newGalleryImages0"
                      id="newGalleryImages0"
                      className="p-2 outline-none rounded-md text-[#0000008c] text-sm w-full invisible"
                      placeholder=""
                      onChange={(e) => handleGalleryImageChange(e, 0)}
                    />
                  </div>
                  <div className="w-1/4">
                    <label
                      htmlFor="newGalleryImages1"
                      className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base bg-[url('/assets/inputfile.svg')] w-full h-32 bg-cover bg-[top_2rem] bg-no-repeat flex justify-center items-center cursor-pointer"
                    >
                      Image 2
                    </label>
                    <input
                      type="file"
                      name="newGalleryImages1"
                      id="newGalleryImages1"
                      className="p-2 outline-none rounded-md text-[#0000008c] text-sm w-full invisible"
                      placeholder=""
                      onChange={(e) => handleGalleryImageChange(e, 1)}
                    />
                  </div>
                  <div className="w-1/4">
                    <label
                      htmlFor="newGalleryImages2"
                      className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base bg-[url('/assets/inputfile.svg')] w-full h-32 bg-cover bg-[top_2rem] bg-no-repeat flex justify-center items-center cursor-pointer"
                    >
                      Image 3
                    </label>
                    <input
                      type="file"
                      name="newGalleryImages2"
                      id="newGalleryImages2"
                      className="p-2 outline-none rounded-md text-[#0000008c] text-sm w-full invisible"
                      placeholder=""
                      onChange={(e) => handleGalleryImageChange(e, 2)}
                    />
                  </div>
                  <div className="w-1/4">
                    <label
                      htmlFor="newGalleryImages3"
                      className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base bg-[url('/assets/inputfile.svg')] w-full h-32 bg-cover bg-[top_2rem] bg-no-repeat flex justify-center items-center cursor-pointer"
                    >
                      Image 4
                    </label>
                    <input
                      type="file"
                      name="newGalleryImages3"
                      id="newGalleryImages3"
                      className="p-2 outline-none rounded-md text-[#0000008c] text-sm w-full invisible"
                      placeholder=""
                      onChange={(e) => handleGalleryImageChange(e, 3)}
                    />
                  </div>
                </div>
                <div className="w-full flex justify-between items-start">
                  <div className="flex flex-col justify-center items-start space-y-4">
                    <div className="w-full flex flex-col justify-center items-start space-y-3">
                      <label
                        htmlFor="international_fund"
                        className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                      >
                        International Fund
                      </label>
                      <Input
                        startContent={
                          <BiSolidDollarCircle className="text-[#5C74FF]" />
                        }
                        id="international_fund"
                        variant="faded"
                        name="international_fund"
                        placeholder="5,000,000"
                        className="w-full"
                        onChange={handleChange}
                        value={formData.international_fund}
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center items-start space-y-3">
                      <label
                        htmlFor="achieved"
                        className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                      >
                        Achieved
                      </label>
                      <Input
                        type="text"
                        id="achieved"
                        name="achieved"
                        variant="faded"
                        placeholder="5,000,00"
                        className="text-[#0000008c] w-full"
                        onChange={handleChange}
                        value={formData.achieved}
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center items-start space-y-3">
                      <label
                        htmlFor="start_date"
                        className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                      >
                        Choose Start Date
                      </label>
                      <Input
                        type="date"
                        id="start_date"
                        name="start_date"
                        variant="faded"
                        className="text-[#0000008c] w-full"
                        onChange={handleChange}
                        value={formData.start_date}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-start space-y-4">
                    <div className="w-full flex flex-col justify-center items-start space-y-3">
                      <label
                        htmlFor="national_fund"
                        className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                      >
                        National Fund
                      </label>
                      <Input
                        startContent={
                          <HiMiniCurrencyRupee className="text-[#5C74FF]" />
                        }
                        id="national_fund"
                        name="national_fund"
                        variant="faded"
                        placeholder="50,00,000"
                        className="w-full"
                        onChange={handleChange}
                        value={formData.national_fund}
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center items-start space-y-3">
                      <label
                        htmlFor="percentage"
                        className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                      >
                        Percentage
                      </label>
                      <Input
                        type="text"
                        id="percentage"
                        name="percentage"
                        variant="faded"
                        placeholder="25%"
                        className="w-full"
                        onChange={handleChange}
                        value={formData.percentage}
                      />
                    </div>
                    <div className="w-full flex flex-col justify-center items-start space-y-3">
                      <label
                        htmlFor="end_date"
                        className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                      >
                        Choose End Date
                      </label>
                      <Input
                        type="date"
                        id="end_date"
                        name="end_date"
                        variant="faded"
                        className="w-full"
                        onChange={handleChange}
                        value={formData.end_date}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[80%] flex flex-col justify-center items-start space-y-3">
                  <label
                    htmlFor="description"
                    className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                  >
                    Description
                  </label>
                  <Textarea
                    name="description"
                    id="description"
                    placeholder="Enter your description"
                    className="max-w-md w-full my-4"
                    onChange={handleChange}
                    value={formData.description}
                  />
                </div>
                <div className="flex justify-start items-center">
                  <button
                    type="submit"
                    className="py-2 px-8 bg-[#5C74FF] text-white rounded-xl hover:bg-[#2e3a80] font-opensans font-semibold"
                  >
                    {loading ? (
                      <div className=" flex gap-4 items-center justify-center">
                        <p>Submitting...</p> <Loader />
                      </div>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[20%] flex flex-col justify-start items-end justify-self-end">
              <div className="h-40">
                <button
                  type="button"
                  className="py-2 px-8 bg-[#5C74FF] text-white rounded-xl hover:bg-[#2e3a80] font-opensans font-semibold"
                  onClick={() => router.back()}
                >
                  Go Back
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Page;
