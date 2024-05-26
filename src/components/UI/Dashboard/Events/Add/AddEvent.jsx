"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Loader from "../../../Loader/Loader";
import { createEvent } from "../../../../../app/services/api";

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    link: "",
    img: "",
  });

  function handleChange(e) {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleImageChange(e) {
    const file = e.target.files[0]; // Get the single file from the input
    setFormData((prevData) => ({
      ...prevData,
      img: file,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    // Create a new FormData object
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("link", formData.link);

    // Append the image file
    if (formData.img) {
      formDataToSend.append("img", formData.img);
    }

    // Debugging: Log FormData entries
    for (let [key, value] of formDataToSend.entries()) {
      console.log(key, value);
    }

    try {
      const response = await createEvent(formDataToSend); // Use formDataToSend here
      console.log("response", response);

      toast.success("Event created successfully!");
      setTimeout(() => {
        window.history.back();
      }, 5000);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error creating event. Please try again!");
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
              Upcoming Event Basic Info
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
            Event Title
          </label>
          <input
            name="title"
            id="title"
            onChange={handleChange}
            className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-[#0000008c] text-sm w-1/2"
            placeholder="Input Event Title"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start space-y-3 mt-2">
          <h4 className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base">
            Add Featured Image
          </h4>
          <label
            htmlFor="img"
            className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base bg-[url('/assets/inputfile.svg')] w-full h-48 bg-cover bg-[top_50%] bg-no-repeat flex justify-center items-center cursor-pointer"
          >
            Add Image
          </label>
          <input
            type="file"
            name="img"
            id="img"
            onChange={handleImageChange}
            className="p-2 outline-none rounded-md text-[#0000008c] text-sm w-full hidden"
            placeholder=""
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start space-y-3 mt-2">
          <label
            htmlFor="link"
            className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
          >
            Event Link
          </label>
          <input
            name="link"
            id="link"
            onChange={handleChange}
            className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-[#0000008c] text-sm w-1/2"
            placeholder="Event Link"
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
