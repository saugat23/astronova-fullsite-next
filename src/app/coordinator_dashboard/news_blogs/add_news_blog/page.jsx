"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Loader from "../../../../components/UI/Loader/Loader";
import { createNews } from "../../../services/api";

const Page = () => {
  const [formData, setFormData] = useState({
    title: "",
    blog_link: "",
    logo_img: "",
    featured_img: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function handleChange(e) {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleLogoImageChange(e) {
    const file = e.target.files[0]; // Get the single file from the input
    setFormData((prevData) => ({
      ...prevData,
      logo_img: file,
    }));
  }

  function handleFeaturedImageChange(e) {
    const file = e.target.files[0]; // Get the single file from the input
    setFormData((prevData) => ({
      ...prevData,
      featured_img: file,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    // Create a new FormData object
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("blog_link", formData.blog_link);

    // Append the logo image file
    if (formData.logo_img) {
      formDataToSend.append("logo_img", formData.logo_img);
    }

    // Append the featured image file
    if (formData.featured_img) {
      formDataToSend.append("featured_img", formData.featured_img);
    }

    // Debugging: Log FormData entries
    for (let [key, value] of formDataToSend.entries()) {
      console.log(key, value);
    }

    try {
      const response = await createNews(formDataToSend); // Use formDataToSend here
      console.log("response", response);

      toast.success("News created successfully!");
      setTimeout(() => {
        window.history.back();
      }, 5000);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error creating news. Please try again!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="overflow-visible h-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white py-8 px-4 w-full flex flex-col justify-center items-start space-y-4"
      >
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
            htmlFor="title"
            className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
          >
            Title
          </label>
          <input
            name="title"
            id="title"
            onChange={handleChange}
            value={formData.title}
            className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-[#0000008c] text-sm w-1/2"
            placeholder="Input Blog Title"
          />
        </div>

        <div className="w-full flex flex-col justify-center items-start space-y-3 mt-2">
          <label
            htmlFor="blog_link"
            className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
          >
            Blog Link
          </label>
          <input
            name="blog_link"
            id="blog_link"
            onChange={handleChange}
            value={formData.blog_link}
            className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-[#0000008c] text-sm w-1/2"
            placeholder="Blog Link"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start space-y-3 mt-2">
          <h4 className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base">
            Add Logo Image
          </h4>
          <label
            htmlFor="logo_img"
            className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base bg-[url('/assets/inputfile.svg')] w-full h-48 bg-cover bg-[top_50%] bg-no-repeat flex justify-center items-center cursor-pointer"
          >
            Add Image
          </label>
          <input
            type="file"
            name="logo_img"
            id="logo_img"
            onChange={handleFeaturedImageChange}
            className="p-2 outline-none rounded-md text-[#0000008c] text-sm w-full hidden"
            placeholder=""
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start space-y-3 mt-2">
          <h4 className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base">
            Add Featured Image
          </h4>
          <label
            htmlFor="featured_img"
            className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base bg-[url('/assets/inputfile.svg')] w-full h-48 bg-cover bg-[top_50%] bg-no-repeat flex justify-center items-center cursor-pointer"
          >
            Add Image
          </label>
          <input
            type="file"
            name="featured_img"
            id="featured_img"
            onChange={handleLogoImageChange}
            className="p-2 outline-none rounded-md text-[#0000008c] text-sm w-full hidden"
            placeholder=""
          />
        </div>

        <div className="flex justify-start items-center lg:mt-8">
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
      </form>
    </section>
  );
};

export default Page;
