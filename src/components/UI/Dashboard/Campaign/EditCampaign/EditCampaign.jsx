"use client";
import React, { useState, useRef } from "react";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import { BiSolidDollarCircle } from "react-icons/bi";
import { HiMiniCurrencyRupee } from "react-icons/hi2";
import { updateCampaign } from "../../../../../app/services/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Loader from "../../../Loader/Loader";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const Page = ({ data }) => {
  const campaign = data;
  const id = campaign.id;

  const featuredImageRef = useRef(null);
  const galleryRefs = useRef([]);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: campaign.title || "",
    sub_title: campaign.sub_title || "",
    department: campaign.department || "",
    national_fund: campaign.national_fund || "",
    international_fund: campaign.international_fund || "",
    achieved: campaign.achieved || "",
    percentage: campaign.percentage || "",
    start_date: formatDate(campaign.start_date) || "",
    end_date: formatDate(campaign.end_date) || "",
    description: campaign.description || "",
    featured_img: campaign.featured_img || "",
    gallery: campaign.gallery || [],
    video: campaign.video || "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFeaturedImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      featured_img: URL.createObjectURL(file),
    }));
  };

  const handleGalleryImageChange = (e, index) => {
    const file = e.target.files[0];
    setFormData((prevData) => {
      const newGalleryImages = [...prevData.gallery];
      newGalleryImages[index] = URL.createObjectURL(file);
      return { ...prevData, gallery: newGalleryImages };
    });
  };

  const handleFeaturedImageClick = () => {
    if (featuredImageRef.current) {
      featuredImageRef.current.click();
    }
  };

  const handleGalleryImageClick = (index) => {
    if (galleryRefs.current[index]) {
      galleryRefs.current[index].click();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((file, index) => {
          if (file instanceof File) {
            formDataToSend.append(`${key}[${index}]`, file);
          }
        });
      } else if (value instanceof File) {
        formDataToSend.append(key, value);
      } else {
        formDataToSend.append(key, value);
      }
    });

    try {
      const response = await updateCampaign(id, formDataToSend);
      console.log("response", response);

      toast.success("Campaign updated successfully!");
      setTimeout(() => {
        window.history.back();
      }, 5000);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error updating campaign. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  const router = useRouter();

  return (
    <section className="p-6 h-auto">
      <div>
        <form
          onSubmit={handleSubmit}
          className="bg-white w-full flex items-start shadow-xl p-4 border border-[#e0d8ff99] rounded-lg"
        >
          <div className="w-1/4 border border-[#e0d8ff99] rounded-s-lg flex flex-col space-y-4 p-3">
            <h3 className="font-poppins font-semibold lg:text-xl">
              Basic Information
            </h3>
            <div className="w-full flex flex-col space-y-3">
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
            <div className="w-full flex flex-col space-y-3">
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
            <div className="w-full flex flex-col space-y-3">
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
            <div className="w-full flex flex-col space-y-3">
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
                onChange={handleChange}
                value={formData.department}
              >
                <option value="Subsidiaries">Subsidiaries</option>
                <option value="Innovation">Innovation</option>
                <option value="Infrastructure">Infrastructure</option>
              </select>
            </div>
          </div>
          <div className="grow flex flex-col p-6 space-y-4">
            <h3 className="font-poppins font-semibold lg:text-xl">
              Funding Information
            </h3>
            <div className="w-[80%] flex flex-col space-y-4">
              <div className="border-dashed border-[#e0d8ff99] w-full h-60 py-6 relative">
                {formData.featured_img && (
                  <Image
                    priority
                    quality={75}
                    objectFit="cover"
                    src={formData.featured_img}
                    alt="Featured"
                    width={1000}
                    height={600}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    onClick={handleFeaturedImageClick}
                  />
                )}
                <label
                  htmlFor="featured_img"
                  className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base bg-[url('/assets/inputfile.svg')] w-full h-full bg-cover bg-[top_2rem] bg-no-repeat flex justify-center items-center cursor-pointer"
                  onClick={handleFeaturedImageClick}
                >
                  Add Featured Image
                </label>
                <input
                  type="file"
                  name="featured_img"
                  id="featured_img"
                  className="p-2 outline-none rounded-md text-[#0000008c] text-sm w-full invisible"
                  onChange={handleFeaturedImageChange}
                  ref={featuredImageRef}
                />
              </div>
              <div className="w-full flex justify-center items-center space-x-6 border-dashed border-[#e0d8ff99]">
                {formData.gallery.map((img, index) => (
                  <div className="w-1/4 relative" key={index}>
                    {img && (
                      <Image
                        priority
                        quality={75}
                        objectFit="cover"
                        src={img}
                        width={600}
                        height={400}
                        alt={`Gallery ${index + 1}`}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        onClick={() => handleGalleryImageClick(index)}
                      />
                    )}
                    <label
                      htmlFor={`newGalleryImages${index}`}
                      className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base bg-[url('/assets/inputfile.svg')] w-full h-32 bg-cover bg-[top_2rem] bg-no-repeat flex justify-center items-center cursor-pointer"
                      onClick={() => handleGalleryImageClick(index)}
                    >
                      Image {index + 1}
                    </label>
                    <input
                      type="file"
                      name={`newGalleryImages${index}`}
                      id={`newGalleryImages${index}`}
                      className="p-2 outline-none rounded-md text-[#0000008c] text-sm w-full invisible"
                      ref={(el) => (galleryRefs.current[index] = el)}
                      onChange={(e) => handleGalleryImageChange(e, index)}
                    />
                  </div>
                ))}
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
            </div>{" "}
            <div className="w-full flex space-x-3">
              <button
                type="submit"
                className="bg-[#6c63ff] p-2 rounded-md text-sm font-poppins font-semibold tracking-tight text-white hover:bg-[#5a54d7]"
              >
                Update Campaign
              </button>
              <button
                type="button"
                className="bg-red-500 p-2 rounded-md text-sm font-poppins font-semibold tracking-tight text-white hover:bg-red-700"
                onClick={() => router.back()}
              >
                Delete
              </button>
              {loading && <Loader />}
            </div>
          </div>
          <div className="w-[10%] flex justify-start items-start">
            <button
              type="button"
              className="bg-[#6c63ff] py-2 px-6 rounded-md text-sm font-poppins font-semibold tracking-tight text-white hover:bg-[#5a54d7]"
              onClick={() => router.back()}
            >
              Go Back
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Page;
