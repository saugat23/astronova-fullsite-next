"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { updateWork } from "../../../../../app/services/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Loader from "../../../Loader/Loader";

const Page = ({ data }) => {
  const work = data;
  const id = work.id;

  const coverImageRef = useRef(null);
  const galleryRefs = useRef([]);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: work.title || "",
    sub_description: work.sub_description || "",
    long_description: work.long_description || "",
    news_title: work.news_title || "",
    cover_img: work.cover_img || "",
    gallery: work.gallery || [],
    news_link: work.news_link || "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      cover_img: URL.createObjectURL(file),
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

  const handleCoverImageClick = () => {
    if (coverImageRef.current) {
      coverImageRef.current.click();
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
      const response = await updateWork(id, formDataToSend);
      console.log("response", response);

      toast.success("Work updated successfully!");
      setTimeout(() => {
        window.history.back();
      }, 5000);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error updating Work. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  const router = useRouter();

  return (
    <>
      <section className="p-6 h-auto overflow-hidden">
        <form
          onSubmit={handleSubmit}
          className="bg-white w-full flex items-start shadow-xl p-4 border border-[#e0d8ff99] rounded-lg"
        >
          <div className="w-1/4 justify-self-start border border-[#e0d8ff99] rounded-s-lg flex flex-col justify-center items-start space-y-4 p-3">
            <div>
              <h3 className="font-poppins font-semibold lg:text-xl">
                Basic Info
              </h3>
            </div>
            <div className="w-full flex flex-col justify-center items-start space-y-3 lg:py-4 h-60 relative">
              {formData.cover_img && (
                <Image
                  src={formData.cover_img}
                  alt="Featured"
                  width={400}
                  height={300}
                  quality={75}
                  objectFit="cover"
                  priority
                  className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer"
                  onClick={handleCoverImageClick}
                />
              )}
              <label
                htmlFor="cover_img"
                className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base bg-[url('/assets/inputfile.svg')] w-full h-full bg-cover bg-[top_2rem] bg-no-repeat cursor-pointer flex justify-center items-center"
                onClick={handleCoverImageClick}
              >
                Upload Cover Img
              </label>
              <input
                type="file"
                name="cover_img"
                id="cover_img"
                onChange={handleCoverImageChange}
                ref={coverImageRef}
                className="outline-none rounded-md text-[#0000008c] text-sm w-full invisible"
                placeholder=""
              />
            </div>
            <div className="w-full flex flex-col justify-center items-start space-y-3">
              <label
                htmlFor="title"
                className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
              >
                Event Title
              </label>
              <input
                name="title"
                id="title"
                onChange={handleChange}
                value={formData.title}
                className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-[#0000008c] text-sm w-full"
                placeholder="Input Title"
              />
            </div>
            <div className="w-full flex flex-col justify-center items-start space-y-3">
              <label
                htmlFor="sub_description"
                className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
              >
                Short Description
              </label>
              <textarea
                type="text"
                name="sub_description"
                id="sub_description"
                onChange={handleChange}
                value={formData.sub_description}
                className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-sm w-full text-[#0000008c] h-20 resize-none"
                placeholder="Short Description"
              />
            </div>
            <div className="w-full flex flex-col justify-center items-start space-y-3">
              <label
                htmlFor="news_title"
                className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
              >
                Add News Title
              </label>
              <input
                type="text"
                name="news_title"
                id="news_title"
                onChange={handleChange}
                value={formData.news_title}
                className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-sm w-full text-[#0000008c]"
                placeholder="News Title"
              />
            </div>
            <div className="w-full flex flex-col justify-center items-start space-y-3">
              <label
                htmlFor="news_link"
                className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
              >
                Add News Link
              </label>
              <input
                type="text"
                name="news_link"
                id="news_link"
                onChange={handleChange}
                value={formData.news_link}
                className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-sm w-full text-[#0000008c]"
                placeholder="News Link"
              />
            </div>
          </div>
          <div className="grow max-w-[84%] justify-self-center flex flex-col justify-center items-start lg:space-y-4 p-6">
            <div>
              <h3 className="font-poppins font-semibold lg:text-xl">
                Add Our Work Section
              </h3>
            </div>
            <div className="w-full flex flex-col justify-center items-start space-y-4">
              <div className="w-full flex justify-between items-start">
                <div className="w-full flex flex-col justify-center items-start space-y-4">
                  <div className="w-full flex flex-col justify-center items-start space-y-3">
                    <h4 className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base">
                      Event Gallery Image
                    </h4>
                    <div className="w-full flex justify-evenly items-center space-x-3 border-dashed h-48">
                      {formData.gallery.map((img, index) => (
                        <div className="w-1/4 relative" key={index}>
                          {img && (
                            <Image
                              priority
                              objectFit="cover"
                              quality={75}
                              width={600}
                              height={400}
                              src={img}
                              alt={`Gallery ${index + 1}`}
                              className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer"
                              onClick={() => handleGalleryImageClick(index)}
                            />
                          )}
                          <label
                            htmlFor={`newGalleryImages${index}`}
                            className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base bg-[url('/assets/inputfile.svg')] w-full h-32 bg-cover bg-[top_2rem] bg-no-repeat flex justify-center items-center cursor-pointer"
                            onClick={() => handleGalleryImageClick(index)}
                          >
                            Add Image
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
                      ))}{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-2 h-auto overflow-hidden w-full flex flex-col justify-center items-start space-y-3">
                <label
                  htmlFor="long_description"
                  className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                >
                  More Description
                </label>
                <textarea
                  type="text"
                  name="long_description"
                  id="long_description"
                  onChange={handleChange}
                  value={formData.long_description}
                  className="max-w-[95%] w-full overflow-hidden mt-10 bg-white outline-none rounded-md text-sm text-[#0000008c] h-20 resize-none border border-[#e0d8ff99] p-2 "
                  placeholder="Long Description"
                />
              </div>
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
              </div>{" "}
            </div>
          </div>
          <div className="w-[10%] flex flex-col justify-start items-center justify-self-end">
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
      </section>
    </>
  );
};

export default Page;
