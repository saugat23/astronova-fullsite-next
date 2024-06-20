"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { deleteWork, updateWork } from "../../../../../app/services/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Loader from "../../../Loader/Loader";

const Page = ({ data }) => {
  const work = data;
  const id = work.id;
  const router = useRouter();

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
        router.push("/coordinator_dashboard/works");
      }, 5000);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error updating Work. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await deleteWork(id);
      console.log("response: ", response);

      toast.success("Work Deleted Successfully");
      setTimeout(() => {
        router.push("/coordinator_dashboard/works");
      }, 3000);
    } catch (error) {
      console.error("error: ", error);
      toast.error("Error Deleting Work. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="h-auto overflow-hidden p-6">
        <form
          onSubmit={handleSubmit}
          className="flex w-full items-start rounded-lg border border-[#e0d8ff99] bg-white p-4 shadow-xl"
        >
          <div className="flex w-1/4 flex-col items-start justify-center space-y-4 justify-self-start rounded-s-lg border border-[#e0d8ff99] p-3">
            <div>
              <h3 className="font-poppins font-semibold lg:text-xl">
                Basic Info
              </h3>
            </div>
            <div className="relative flex h-60 w-full flex-col items-start justify-center space-y-3 lg:py-4">
              {formData.cover_img && (
                <Image
                  src={formData.cover_img}
                  alt="Featured"
                  width={400}
                  height={300}
                  quality={75}
                  priority
                  className="absolute left-0 top-0 h-full w-full cursor-pointer object-cover"
                  onClick={handleCoverImageClick}
                />
              )}
              <label
                htmlFor="cover_img"
                className="flex h-full w-full cursor-pointer items-center justify-center bg-[url('/assets/inputfile.svg')] bg-cover bg-[top_2rem] bg-no-repeat font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
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
                className="invisible w-full rounded-md text-sm text-[#0000008c] outline-none"
                placeholder=""
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center space-y-3">
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
                className="w-full rounded-md border border-[#e0d8ff99] bg-transparent p-2 text-sm text-[#0000008c] outline-none"
                placeholder="Input Title"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center space-y-3">
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
                className="h-20 w-full resize-none rounded-md border border-[#e0d8ff99] bg-transparent p-2 text-sm text-[#0000008c] outline-none"
                placeholder="Short Description"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center space-y-3">
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
                className="w-full rounded-md border border-[#e0d8ff99] bg-transparent p-2 text-sm text-[#0000008c] outline-none"
                placeholder="News Title"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center space-y-3">
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
                className="w-full rounded-md border border-[#e0d8ff99] bg-transparent p-2 text-sm text-[#0000008c] outline-none"
                placeholder="News Link"
              />
            </div>
          </div>
          <div className="flex max-w-[84%] grow flex-col items-start justify-center justify-self-center p-6 lg:space-y-4">
            <div>
              <h3 className="font-poppins font-semibold lg:text-xl">
                Add Our Work Section
              </h3>
            </div>
            <div className="flex w-full flex-col items-start justify-center space-y-4">
              <div className="flex w-full items-start justify-between">
                <div className="flex w-full flex-col items-start justify-center space-y-4">
                  <div className="flex w-full flex-col items-start justify-center space-y-3">
                    <h4 className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base">
                      Event Gallery Image
                    </h4>
                    <div className="flex h-48 w-full items-center justify-evenly space-x-3 border-dashed">
                      {formData.gallery.map((img, index) => (
                        <div className="relative w-1/4" key={index}>
                          {img && (
                            <Image
                              priority
                              quality={75}
                              width={600}
                              height={400}
                              src={img}
                              alt={`Gallery ${index + 1}`}
                              className="absolute left-0 top-0 h-full w-full cursor-pointer object-cover"
                              onClick={() => handleGalleryImageClick(index)}
                            />
                          )}
                          <label
                            htmlFor={`newGalleryImages${index}`}
                            className="flex h-32 w-full cursor-pointer items-center justify-center bg-[url('/assets/inputfile.svg')] bg-cover bg-[top_2rem] bg-no-repeat font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                            onClick={() => handleGalleryImageClick(index)}
                          >
                            Add Image
                          </label>
                          <input
                            type="file"
                            name={`newGalleryImages${index}`}
                            id={`newGalleryImages${index}`}
                            className="invisible w-full rounded-md p-2 text-sm text-[#0000008c] outline-none"
                            ref={(el) => (galleryRefs.current[index] = el)}
                            onChange={(e) => handleGalleryImageChange(e, index)}
                          />
                        </div>
                      ))}{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex h-auto w-full flex-col items-start justify-center space-y-3 overflow-hidden py-2">
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
                  className="mt-10 h-20 w-full max-w-[95%] resize-none overflow-hidden rounded-md border border-[#e0d8ff99] bg-white p-2 text-sm text-[#0000008c] outline-none"
                  placeholder="Long Description"
                />
              </div>
              <div className="flex w-full space-x-3">
                <button
                  type="submit"
                  className="rounded-md bg-[#6c63ff] p-2 font-poppins text-sm font-semibold tracking-tight text-white hover:bg-[#5a54d7]"
                >
                  Update Campaign
                </button>
                <button
                  type="button"
                  className="rounded-md bg-red-500 p-2 font-poppins text-sm font-semibold tracking-tight text-white hover:bg-red-700"
                  onClick={handleDelete}
                >
                  Delete
                </button>
                {loading && <Loader />}
              </div>{" "}
            </div>
          </div>
          <div className="flex w-[10%] flex-col items-center justify-start justify-self-end">
            <div className="h-40">
              <button
                type="button"
                className="rounded-xl bg-[#5C74FF] px-8 py-2 font-opensans font-semibold text-white hover:bg-[#2e3a80]"
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
