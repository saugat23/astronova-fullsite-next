"use client";
import React, { useState } from "react";
import { Input, Textarea } from "@nextui-org/react";
import { BiSolidDollarCircle } from "react-icons/bi";
import { HiMiniCurrencyRupee } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import { createCampaign } from "../../../../../app/services/api";
import { toast } from "sonner";
import Loader from "../../../Loader/Loader";

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [previewUrls, setPreviewUrls] = useState({
    featured_img: "",
    gallery: [],
  });

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
    setPreviewUrls((prevUrls) => ({
      ...prevUrls,
      featured_img: URL.createObjectURL(file),
    }));
  };

  const handleGalleryImageChange = (e, index) => {
    const file = e.target.files[0]; // Get the single file from the input
    setFormData((prevData) => {
      const newGalleryImages = [...prevData.gallery];
      newGalleryImages[index] = file; // Update the specific index with the new file
      return { ...prevData, gallery: newGalleryImages };
    });
    setPreviewUrls((prevUrls) => {
      const newGalleryUrls = [...prevUrls.gallery];
      newGalleryUrls[index] = URL.createObjectURL(file);
      return { ...prevUrls, gallery: newGalleryUrls };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Create a new FormData object
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("sub_title", formData.sub_title);
    formDataToSend.append("department", formData.department);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("video", formData.video);
    formDataToSend.append("national_fund", formData.national_fund);
    formDataToSend.append("international_fund", formData.international_fund);
    formDataToSend.append("achieved", formData.achieved);
    formDataToSend.append("percentage", formData.percentage);
    formDataToSend.append("start_date", formData.start_date);
    formDataToSend.append("end_date", formData.end_date);

    // Append the featured image file
    if (formData.featured_img) {
      formDataToSend.append("featured_img", formData.featured_img);
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
      const response = await createCampaign(formDataToSend); // Use formDataToSend here
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

  return (
    <>
      <section className="h-auto p-6">
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex w-full items-start rounded-lg border border-[#e0d8ff99] bg-white p-4 shadow-xl"
          >
            <div className="flex w-[30%] flex-col items-start justify-center space-y-4 justify-self-start rounded-s-lg border border-[#e0d8ff99] p-3">
              <div>
                <h3 className="font-poppins font-semibold lg:text-xl">
                  Basic Information
                </h3>
              </div>
              <div className="flex w-full flex-col items-start justify-center space-y-3 lg:py-4">
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
                  className="w-full rounded-md border border-[#e0d8ff99] bg-transparent p-2 text-sm text-[#0000008c] outline-none"
                  placeholder="Campaign's Title"
                  onChange={handleChange}
                  value={formData.title}
                />
              </div>
              <div className="flex w-full flex-col items-start justify-center space-y-3">
                <label
                  htmlFor="sub_title"
                  className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                >
                  Campaign&apos;s Sub Title
                </label>
                <textarea
                  name="sub_title"
                  id="sub_title"
                  className="h-20 w-full resize-none rounded-md border border-[#e0d8ff99] bg-transparent p-2 text-sm text-[#0000008c] outline-none"
                  placeholder="Campaign's Sub Title"
                  onChange={handleChange}
                  value={formData.sub_title}
                />
              </div>
              <div className="flex w-full flex-col items-start justify-center space-y-3">
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
                  className="w-full rounded-md border border-[#e0d8ff99] bg-transparent p-2 text-sm text-[#0000008c] outline-none"
                  placeholder="Youtube URL"
                  onChange={handleChange}
                  value={formData.video}
                />
              </div>
              <div className="flex w-full flex-col items-start justify-center space-y-3">
                <label
                  htmlFor="department"
                  className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                >
                  For Department
                </label>
                <select
                  name="department"
                  id="department"
                  className="w-full rounded-md border border-[#e0d8ff99] bg-transparent p-2 text-sm text-[#0000008c] outline-none"
                  placeholder="URL"
                  onChange={handleChange}
                  value={formData.department}
                >
                  <option value="Subsidiaries">Subsidiaries</option>
                  <option value="Innovation">Innovation</option>
                  <option value="Infrastructure">Infrastructure</option>
                </select>
              </div>
            </div>
            <div className="flex grow flex-col items-start justify-center justify-self-center p-6 lg:space-y-4">
              <div>
                <h3 className="font-poppins font-semibold lg:text-xl">
                  Funding Information
                </h3>
              </div>
              <div className="flex w-[80%] flex-col items-start justify-center space-y-4">
                <div className="h-60 w-full border-dashed border-[#e0d8ff99] py-6">
                  <label
                    htmlFor="featured_img"
                    className="flex h-full w-full cursor-pointer items-center justify-center font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                    style={{
                      backgroundImage: `url(${previewUrls.featured_img || "/assets/inputfile.svg"})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    Add Featured Image
                  </label>
                  <input
                    type="file"
                    name="featured_img"
                    id="featured_img"
                    className="invisible w-full rounded-md p-2 text-sm text-[#0000008c] outline-none"
                    placeholder=""
                    onChange={handleFeaturedImageChange}
                  />
                </div>
                <div className="flex w-full items-center justify-center space-x-6 border-dashed border-[#e0d8ff99]">
                  <div className="w-1/4">
                    <label
                      htmlFor="newGalleryImages0"
                      className="flex h-32 w-full cursor-pointer items-center justify-center font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                      style={{
                        backgroundImage: `url(${previewUrls.gallery[0] || "/assets/inputfile.svg"})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      Image 1
                    </label>
                    <input
                      type="file"
                      name="newGalleryImages0"
                      id="newGalleryImages0"
                      className="invisible w-full rounded-md p-2 text-sm text-[#0000008c] outline-none"
                      placeholder=""
                      onChange={(e) => handleGalleryImageChange(e, 0)}
                    />
                  </div>
                  <div className="w-1/4">
                    <label
                      htmlFor="newGalleryImages1"
                      className="flex h-32 w-full cursor-pointer items-center justify-center font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                      style={{
                        backgroundImage: `url(${previewUrls.gallery[1] || "/assets/inputfile.svg"})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      Image 2
                    </label>
                    <input
                      type="file"
                      name="newGalleryImages1"
                      id="newGalleryImages1"
                      className="invisible w-full rounded-md p-2 text-sm text-[#0000008c] outline-none"
                      placeholder=""
                      onChange={(e) => handleGalleryImageChange(e, 1)}
                    />
                  </div>
                  <div className="w-1/4">
                    <label
                      htmlFor="newGalleryImages2"
                      className="flex h-32 w-full cursor-pointer items-center justify-center font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                      style={{
                        backgroundImage: `url(${previewUrls.gallery[2] || "/assets/inputfile.svg"})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      Image 3
                    </label>
                    <input
                      type="file"
                      name="newGalleryImages2"
                      id="newGalleryImages2"
                      className="invisible w-full rounded-md p-2 text-sm text-[#0000008c] outline-none"
                      placeholder=""
                      onChange={(e) => handleGalleryImageChange(e, 2)}
                    />
                  </div>
                  <div className="w-1/4">
                    <label
                      htmlFor="newGalleryImages3"
                      className="flex h-32 w-full cursor-pointer items-center justify-center font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                      style={{
                        backgroundImage: `url(${previewUrls.gallery[3] || "/assets/inputfile.svg"})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      Image 4
                    </label>
                    <input
                      type="file"
                      name="newGalleryImages3"
                      id="newGalleryImages3"
                      className="invisible w-full rounded-md p-2 text-sm text-[#0000008c] outline-none"
                      placeholder=""
                      onChange={(e) => handleGalleryImageChange(e, 3)}
                    />
                  </div>
                </div>
                <div className="flex w-full items-start justify-between">
                  <div className="flex flex-col items-start justify-center space-y-4">
                    <div className="flex w-full flex-col items-start justify-center space-y-3">
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
                    <div className="flex w-full flex-col items-start justify-center space-y-3">
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
                        className="w-full text-[#0000008c]"
                        onChange={handleChange}
                        value={formData.achieved}
                      />
                    </div>
                    <div className="flex w-full flex-col items-start justify-center space-y-3">
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
                        className="w-full text-[#0000008c]"
                        onChange={handleChange}
                        value={formData.start_date}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center space-y-4">
                    <div className="flex w-full flex-col items-start justify-center space-y-3">
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
                    <div className="flex w-full flex-col items-start justify-center space-y-3">
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
                    <div className="flex w-full flex-col items-start justify-center space-y-3">
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
                <div className="flex w-[80%] flex-col items-start justify-center space-y-3">
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
                    className="my-4 w-full max-w-md"
                    onChange={handleChange}
                    value={formData.description}
                  />
                </div>
                <div className="flex items-center justify-start">
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
              </div>
            </div>
            <div className="flex w-[20%] flex-col items-end justify-start justify-self-end">
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
        </div>
      </section>
    </>
  );
};

export default Page;
