"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { Input, Textarea } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

const Page = () => {
  const [content, setContent] = useState("");

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ align: [] }],
      [{ color: [] }],
      ["code-block"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "align",
    "color",
    "code-block",
  ];

  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };

  const router = useRouter();
  return (
    <section className="p-6 h-auto overflow-hidden">
      <div className="bg-white w-full flex items-start shadow-xl p-4 border border-[#e0d8ff99] rounded-lg">
        <div className="w-[16%] justify-self-start border border-[#e0d8ff99] rounded-s-lg flex flex-col justify-center items-start space-y-4 p-3">
          <div>
            <h3 className="font-poppins font-semibold lg:text-xl">
              Basic Info
            </h3>
          </div>
          <div className="w-full flex flex-col justify-center items-start space-y-3 lg:py-4">
            <label
              htmlFor="workCoverImage"
              className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base bg-transparent w-full h-32 flex justify-center items-center"
            >
              <button
                type="button"
                className="px-4 py-2 h-full w-full text-[#5C74FF] bg-white rounded-lg border-2 border-[#5C74FF]"
              >
                Upload Cover Img
              </button>
            </label>
            <input
              type="file"
              name="workCoverImage"
              className="p-2 outline-none rounded-md text-[#0000008c] text-sm w-full hidden"
              placeholder=""
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start space-y-3">
            <label
              htmlFor="eventTitle"
              className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
            >
              Event Title
            </label>
            <input
              name="blogTitle"
              id="blogTitle"
              className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-[#0000008c] text-sm w-full"
              placeholder="Input Title"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start space-y-3">
            <label
              htmlFor="eventDescription"
              className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
            >
              Short Description
            </label>
            <textarea
              type="text"
              name="eventDescription"
              id="eventDescription"
              className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-sm w-full text-[#0000008c] h-20 resize-none"
              placeholder="Short Description"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start space-y-3">
            <label
              htmlFor="newsTitle"
              className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
            >
              Add News Title
            </label>
            <input
              type="text"
              name="newsTitle"
              id="newsTitle"
              className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-sm w-full text-[#0000008c]"
              placeholder="News Title"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start space-y-3 lg:py-4">
            <label
              htmlFor="newsCoverImage"
              className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base bg-transparent w-full h-32 flex justify-center items-center"
            >
              <button
                type="button"
                className="px-4 py-2 h-full w-full text-[#5C74FF] bg-white rounded-lg border-2 border-[#5C74FF]"
              >
                News Cover Image
              </button>
            </label>
            <input
              type="file"
              name="newsCoverImage"
              className="p-2 outline-none rounded-md text-[#0000008c] text-sm w-full hidden"
              placeholder=""
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start space-y-3">
            <label
              htmlFor="newsLink"
              className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
            >
              Add News Link
            </label>
            <input
              type="text"
              name="newsLink"
              id="newsLink"
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
                  <div className="w-full flex justify-evenly items-center p-4 border-dashed">
                    <div>
                      <label
                        htmlFor="galleryImage1"
                        className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base h-48 flex justify-center items-center"
                      >
                        <button
                          type="button"
                          className="px-6 py-4 text-[#0000008c] bg-white rounded-lg border border-[#5C74FF]"
                        >
                          Gallery Image 1
                        </button>
                      </label>
                      <input
                        type="file"
                        name="galleryImage1"
                        id="galleryImage1"
                        className="p-2 outline-none rounded-md text-[#0000008c] text-sm w-full hidden"
                        placeholder=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="galleryImage2"
                        className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base h-48 flex justify-center items-center"
                      >
                        <button
                          type="button"
                          className="px-6 py-4 text-[#0000008c] bg-white rounded-lg border border-[#5C74FF]"
                        >
                          Gallery Image 2
                        </button>
                      </label>
                      <input
                        type="file"
                        name="galleryImage2"
                        id="galleryImage2"
                        className="p-2 outline-none rounded-md text-[#0000008c] text-sm w-full hidden"
                        placeholder=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="galleryImage3"
                        className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base h-48 flex justify-center items-center"
                      >
                        <button
                          type="button"
                          className="px-6 py-4 text-[#0000008c] bg-white rounded-lg border border-[#5C74FF]"
                        >
                          Gallery Image 3
                        </button>
                      </label>
                      <input
                        type="file"
                        name="galleryImage3"
                        id="galleryImage3"
                        className="p-2 outline-none rounded-md text-[#0000008c] text-sm w-full hidden"
                        placeholder=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="galleryImage4"
                        className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base h-48 flex justify-center items-center"
                      >
                        <button
                          type="button"
                          className="px-6 py-4 text-[#0000008c] bg-white rounded-lg border border-[#5C74FF]"
                        >
                          Gallery Image 4
                        </button>
                      </label>
                      <input
                        type="file"
                        name="galleryImage4"
                        id="galleryImage4"
                        className="p-2 outline-none rounded-md text-[#0000008c] text-sm w-full hidden"
                        placeholder=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="galleryImage5"
                        className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base h-48 flex justify-center items-center"
                      >
                        <button
                          type="button"
                          className="px-6 py-4 text-[#0000008c] bg-white rounded-lg border border-[#5C74FF]"
                        >
                          Gallery Image 5
                        </button>
                      </label>
                      <input
                        type="file"
                        name="galleryImage5"
                        id="galleryImage5"
                        className="p-2 outline-none rounded-md text-[#0000008c] text-sm w-full hidden"
                        placeholder=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="galleryImage6"
                        className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base h-48 flex justify-center items-center"
                      >
                        <button
                          type="button"
                          className="px-6 py-4 text-[#0000008c] bg-white rounded-lg border border-[#5C74FF]"
                        >
                          Gallery Image 6
                        </button>
                      </label>
                      <input
                        type="file"
                        name="galleryImage6"
                        id="galleryImage6"
                        className="p-2 outline-none rounded-md text-[#0000008c] text-sm w-full hidden"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-2 h-auto overflow-hidden w-full flex flex-col justify-center items-start space-y-3">
              <label
                htmlFor="workDesc"
                className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
              >
                More Description
              </label>
              <textarea
              type="text"
              name="workDesc"
              id="workDesc"
              className="max-w-[95%] w-full overflow-hidden mt-10 bg-white outline-none rounded-md text-sm text-[#0000008c] h-20 resize-none"
              placeholder="Short Description"
            />
            </div>
            <div className="flex justify-start items-center lg:space-x-4">
              <button
                type="submit"
                className="py-2 px-8 bg-[#5C74FF] text-white rounded-xl hover:bg-[#2e3a80] font-opensans font-semibold"
              >
                Submit
              </button>
              <button
                type="button"
                className="py-2 px-8 bg-red-500 text-white rounded-xl hover:bg-red-600 font-opensans font-semibold"
              >
                Delete
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
      </div>
    </section>
  );
};

export default Page;
