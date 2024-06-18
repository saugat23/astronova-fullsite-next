"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Loader from "../../../Loader/Loader";
import { createNews } from "../../../../../app/services/api";

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
    <section className="h-auto overflow-visible p-4">
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col items-start justify-center space-y-4 bg-white px-4 py-8"
      >
        <div className="flex w-full items-center justify-between">
          <div className="flex items-start justify-center">
            <h3 className="font-poppins font-semibold lg:text-xl">
              Add New Blog Section
            </h3>
          </div>
          <div className="flex items-center justify-start">
            <button
              type="button"
              className="rounded-xl bg-[#5C74FF] px-8 py-2 font-opensans font-semibold text-white hover:bg-[#2e3a80]"
              onClick={() => router.back()}
            >
              Go Back
            </button>
          </div>
        </div>
        <div className="mt-2 flex w-full flex-col items-start justify-center space-y-3">
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
            className="w-1/2 rounded-md border border-[#e0d8ff99] bg-transparent p-2 text-sm text-[#0000008c] outline-none"
            placeholder="Input Blog Title"
          />
        </div>

        <div className="mt-2 flex w-full flex-col items-start justify-center space-y-3">
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
            className="w-1/2 rounded-md border border-[#e0d8ff99] bg-transparent p-2 text-sm text-[#0000008c] outline-none"
            placeholder="Blog Link"
          />
        </div>
        <div className="mt-2 flex w-full flex-col items-start justify-center space-y-3">
          <h4 className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base">
            Add Logo Image
          </h4>
          <label
            htmlFor="logo_img"
            className="flex h-48 w-full cursor-pointer items-center justify-center bg-[url('/assets/inputfile.svg')] bg-cover bg-[top_50%] bg-no-repeat font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
          >
            Add Image
          </label>
          <input
            type="file"
            name="logo_img"
            id="logo_img"
            onChange={handleFeaturedImageChange}
            className="hidden w-full rounded-md p-2 text-sm text-[#0000008c] outline-none"
            placeholder=""
          />
        </div>
        <div className="mt-2 flex w-full flex-col items-start justify-center space-y-3">
          <h4 className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base">
            Add Featured Image
          </h4>
          <label
            htmlFor="featured_img"
            className="flex h-48 w-full cursor-pointer items-center justify-center bg-[url('/assets/inputfile.svg')] bg-cover bg-[top_50%] bg-no-repeat font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
          >
            Add Image
          </label>
          <input
            type="file"
            name="featured_img"
            id="featured_img"
            onChange={handleLogoImageChange}
            className="hidden w-full rounded-md p-2 text-sm text-[#0000008c] outline-none"
            placeholder=""
          />
        </div>

        <div className="flex items-center justify-start lg:mt-8">
          <button
            type="submit"
            className="rounded-xl bg-[#5C74FF] px-8 py-2 font-opensans font-semibold text-white hover:bg-[#2e3a80]"
          >
            {loading ? (
              <div className="mx-auto flex w-1/2 items-center justify-center gap-4">
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
