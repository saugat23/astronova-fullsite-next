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
  const [previewUrls, setPreviewUrls] = useState({
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
    setPreviewUrls((prevUrls) => ({
      ...prevUrls,
      img: URL.createObjectURL(file),
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
    <section className="h-auto overflow-visible p-4">
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col items-start justify-center space-y-4 bg-white px-4 py-8"
      >
        <div className="flex w-full items-center justify-between">
          <div className="flex items-start justify-center">
            <h3 className="font-poppins font-semibold lg:text-xl">
              Upcoming Event Basic Info
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
            Event Title
          </label>
          <input
            name="title"
            id="title"
            onChange={handleChange}
            className="w-1/2 rounded-md border border-[#e0d8ff99] bg-transparent p-2 text-sm text-[#0000008c] outline-none"
            placeholder="Input Event Title"
          />
        </div>
        <div className="mt-2 flex w-full flex-col items-start justify-center space-y-3">
          <h4 className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base">
            Add Featured Image
          </h4>
          <label
            htmlFor="img"
            className="flex h-48 w-full cursor-pointer items-center justify-center font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
            style={{
              backgroundImage: `url(${previewUrls.img || "/assets/inputfile.svg"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            Add Image
          </label>
          <input
            type="file"
            name="img"
            id="img"
            onChange={handleImageChange}
            className="hidden w-full rounded-md p-2 text-sm text-[#0000008c] outline-none"
            placeholder=""
          />
        </div>
        <div className="mt-2 flex w-full flex-col items-start justify-center space-y-3">
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
            className="w-1/2 rounded-md border border-[#e0d8ff99] bg-transparent p-2 text-sm text-[#0000008c] outline-none"
            placeholder="Event Link"
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
