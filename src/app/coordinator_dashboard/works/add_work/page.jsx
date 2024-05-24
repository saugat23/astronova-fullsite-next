"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createWork } from "../../../services/api";
import { toast } from "sonner";
import Loader from "../../../../components/UI/Loader/Loader";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    sub_description: "",
    long_description: "",
    news_title: "",
    cover_img: "",
    gallery: [],
    news_link: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0]; // Get the single file from the input
    setFormData((prevData) => ({
      ...prevData,
      cover_img: file,
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

    // Create a new FormData object
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("sub_description", formData.sub_description);
    formDataToSend.append("long_description", formData.long_description);
    formDataToSend.append("news_title", formData.news_title);
    formDataToSend.append("news_link", formData.news_link);

    // Append the cover image file
    if (formData.cover_img) {
      formDataToSend.append("cover_img", formData.cover_img);
    }

    // Append the gallery images
    formData.gallery.forEach((file) => {
      if (file) {
        formDataToSend.append("gallery", file);
      }
    });

    // Debugging: Log FormData entries
    for (let [key, value] of formDataToSend.entries()) {
      console.log(key, value);
    }

    try {
      const response = await createWork(formDataToSend);
      console.log("response", response);

      toast.success("Work created successfully!");
      setTimeout(() => {
        window.history.back();
      }, 5000);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error creating work. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  const router = useRouter();
  return (
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
          <div className="w-full flex flex-col justify-center items-start space-y-3 lg:py-4 h-60">
            <label
              htmlFor="cover_img"
              className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base bg-[url('/assets/inputfile.svg')] w-full h-full bg-cover bg-[top_2rem] bg-no-repeat cursor-pointer flex justify-center items-center"
            >
              Upload Cover Img
            </label>
            <input
              type="file"
              name="cover_img"
              id="cover_img"
              onChange={handleCoverImageChange}
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
                    <div>
                      <label
                        htmlFor="newGalleryImages0"
                        className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base bg-[url('/assets/inputfile.svg')] w-full h-full bg-cover bg-[top_2rem] bg-no-repeat cursor-pointer flex justify-center items-center p-4"
                      >
                        Gallery Image 1
                      </label>
                      <input
                        type="file"
                        name="newGalleryImages0"
                        id="newGalleryImages0"
                        className="outline-none rounded-md text-[#0000008c] text-sm w-full hidden"
                        placeholder=""
                        onChange={(e) => handleGalleryImageChange(e, 0)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="newGalleryImages1"
                        className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base bg-[url('/assets/inputfile.svg')] w-full h-full bg-cover bg-[top_2rem] bg-no-repeat cursor-pointer p-4 flex justify-center items-center"
                      >
                        Gallery Image 2
                      </label>
                      <input
                        type="file"
                        name="newGalleryImages1"
                        id="newGalleryImages1"
                        className="outline-none rounded-md text-[#0000008c] text-sm w-full hidden"
                        placeholder=""
                        onChange={(e) => handleGalleryImageChange(e, 1)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="newGalleryImages2"
                        className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base bg-[url('/assets/inputfile.svg')] w-full h-full bg-cover bg-[top_2rem] bg-no-repeat cursor-pointer p-4 flex justify-center items-center"
                      >
                        Gallery Image 3
                      </label>
                      <input
                        type="file"
                        name="newGalleryImages2"
                        id="newGalleryImages2"
                        className="outline-none rounded-md text-[#0000008c] text-sm w-full hidden"
                        placeholder=""
                        onChange={(e) => handleGalleryImageChange(e, 2)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="newGalleryImages3"
                        className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base bg-[url('/assets/inputfile.svg')] w-full h-full bg-cover bg-[top_2rem] bg-no-repeat cursor-pointer p-4 flex justify-center items-center"
                      >
                        Gallery Image 4
                      </label>
                      <input
                        type="file"
                        name="newGalleryImages3"
                        id="newGalleryImages3"
                        className="outline-none rounded-md text-[#0000008c] text-sm w-full hidden"
                        placeholder=""
                        onChange={(e) => handleGalleryImageChange(e, 3)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="newGalleryImages4"
                        className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base bg-[url('/assets/inputfile.svg')] w-full h-full bg-cover bg-[top_2rem] bg-no-repeat cursor-pointer p-4 flex justify-center items-center"
                      >
                        Gallery Image 5
                      </label>
                      <input
                        type="file"
                        name="newGalleryImages4"
                        id="newGalleryImages4"
                        className="outline-none rounded-md text-[#0000008c] text-sm w-full hidden"
                        placeholder=""
                        onChange={(e) => handleGalleryImageChange(e, 4)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="newGalleryImages5"
                        className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base bg-[url('/assets/inputfile.svg')] w-full h-full bg-cover bg-[top_2rem] bg-no-repeat cursor-pointer p-4 flex justify-center items-center"
                      >
                        Gallery Image 6
                      </label>
                      <input
                        type="file"
                        name="newGalleryImages5"
                        id="newGalleryImages5"
                        className="outline-none rounded-md text-[#0000008c] text-sm w-full hidden"
                        placeholder=""
                        onChange={(e) => handleGalleryImageChange(e, 5)}
                      />
                    </div>
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
            <div className="flex justify-start items-center lg:space-x-4">
              <button
                type="submit"
                className="py-2 px-8 bg-[#5C74FF] text-white rounded-xl hover:bg-[#2e3a80] font-opensans font-semibold"
              >
                {loading ? (
                  <div className="w-1/2 mx-auto flex gap-4 items-center justify-center">
                    <p>Submitting...</p> <Loader />
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
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
  );
};

export default Page;
