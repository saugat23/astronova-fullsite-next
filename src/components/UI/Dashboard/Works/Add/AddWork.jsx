"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createWork } from "../../../../../app/services/api";
import { toast } from "sonner";
import Loader from "../../../Loader/Loader";

const Page = () => {
  const router = useRouter();
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
  const [previewUrls, setPreviewUrls] = useState({
    cover_img: "",
    gallery: [],
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
    setPreviewUrls((prevUrls) => ({
      ...prevUrls,
      cover_img: URL.createObjectURL(file),
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

  return (
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
          <div className="flex h-60 w-full flex-col items-start justify-center space-y-3 lg:py-4">
            <label
              htmlFor="cover_img"
              className="flex h-full w-full cursor-pointer items-center justify-center font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
              style={{
                backgroundImage: `url(${previewUrls.cover_img || "/assets/inputfile.svg"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              Upload Cover Img
            </label>
            <input
              type="file"
              name="cover_img"
              id="cover_img"
              onChange={handleCoverImageChange}
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
                    <div>
                      <label
                        htmlFor="newGalleryImages0"
                        className="flex h-full w-full cursor-pointer items-center justify-center p-4 font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                        style={{
                          backgroundImage: `url(${previewUrls.gallery[0] || "/assets/inputfile.svg"})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        Gallery Image 1
                      </label>
                      <input
                        type="file"
                        name="newGalleryImages0"
                        id="newGalleryImages0"
                        className="hidden w-full rounded-md text-sm text-[#0000008c] outline-none"
                        placeholder=""
                        onChange={(e) => handleGalleryImageChange(e, 0)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="newGalleryImages1"
                        className="flex h-full w-full cursor-pointer items-center justify-center p-4 font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                        style={{
                          backgroundImage: `url(${previewUrls.gallery[1] || "/assets/inputfile.svg"})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        Gallery Image 2
                      </label>
                      <input
                        type="file"
                        name="newGalleryImages1"
                        id="newGalleryImages1"
                        className="hidden w-full rounded-md text-sm text-[#0000008c] outline-none"
                        placeholder=""
                        onChange={(e) => handleGalleryImageChange(e, 1)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="newGalleryImages2"
                        className="flex h-full w-full cursor-pointer items-center justify-center p-4 font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                        style={{
                          backgroundImage: `url(${previewUrls.gallery[2] || "/assets/inputfile.svg"})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        Gallery Image 3
                      </label>
                      <input
                        type="file"
                        name="newGalleryImages2"
                        id="newGalleryImages2"
                        className="hidden w-full rounded-md text-sm text-[#0000008c] outline-none"
                        placeholder=""
                        onChange={(e) => handleGalleryImageChange(e, 2)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="newGalleryImages3"
                        className="flex h-full w-full cursor-pointer items-center justify-center p-4 font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                        style={{
                          backgroundImage: `url(${previewUrls.gallery[3] || "/assets/inputfile.svg"})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        Gallery Image 4
                      </label>
                      <input
                        type="file"
                        name="newGalleryImages3"
                        id="newGalleryImages3"
                        className="hidden w-full rounded-md text-sm text-[#0000008c] outline-none"
                        placeholder=""
                        onChange={(e) => handleGalleryImageChange(e, 3)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="newGalleryImages4"
                        className="flex h-full w-full cursor-pointer items-center justify-center p-4 font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                        style={{
                          backgroundImage: `url(${previewUrls.gallery[4] || "/assets/inputfile.svg"})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        Gallery Image 5
                      </label>
                      <input
                        type="file"
                        name="newGalleryImages4"
                        id="newGalleryImages4"
                        className="hidden w-full rounded-md text-sm text-[#0000008c] outline-none"
                        placeholder=""
                        onChange={(e) => handleGalleryImageChange(e, 4)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="newGalleryImages5"
                        className="flex h-full w-full cursor-pointer items-center justify-center p-4 font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                        style={{
                          backgroundImage: `url(${previewUrls.gallery[5] || "/assets/inputfile.svg"})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        Gallery Image 6
                      </label>
                      <input
                        type="file"
                        name="newGalleryImages5"
                        id="newGalleryImages5"
                        className="hidden w-full rounded-md text-sm text-[#0000008c] outline-none"
                        placeholder=""
                        onChange={(e) => handleGalleryImageChange(e, 5)}
                      />
                    </div>
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
            <div className="flex items-center justify-start lg:space-x-4">
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
  );
};

export default Page;
