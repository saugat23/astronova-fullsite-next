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
      <div className="bg-white w-full flex md:flex-row flex-col-reverse items-start shadow-xl p-4 border border-[#e0d8ff99] rounded-lg">
        <div className="w-[20%] justify-self-start border border-[#e0d8ff99] rounded-s-lg flex flex-col justify-center items-start space-y-4 p-3">
          <div>
            <h3 className="font-poppins font-semibold lg:text-xl">
              Blog Basic Info
            </h3>
          </div>
          <div className="w-full flex flex-col justify-center items-start space-y-3 lg:py-4">
            <label
              htmlFor="blogVideo"
              className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base bg-[url('/assets/inputfile.svg')] w-full h-32 bg-cover bg-[top_2rem] bg-no-repeat flex justify-center items-center"
            >
              <button
                type="button"
                className="px-4 py-2 text-[#0000008c] bg-white rounded-lg border border-[#5C74FF]"
              >
                Add Video
              </button>
            </label>
            <input
              type="file"
              name="blogVideo"
              id="blogVideo"
              className="p-2 outline-none rounded-md text-[#0000008c] text-sm w-full hidden"
              placeholder=""
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start space-y-3">
            <label
              htmlFor="blogTitle"
              className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
            >
              Blog Title
            </label>
            <input
              name="blogTitle"
              id="blogTitle"
              className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-[#0000008c] text-sm w-full"
              placeholder="Input Blog Title"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start space-y-3">
            <label
              htmlFor="blogSubTitle"
              className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
            >
              Blog Sub Title
            </label>
            <textarea
              type="text"
              name="blogSubTitle"
              id="blogSubTitle"
              className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-sm w-full text-[#0000008c] h-20 resize-none"
              placeholder="Input Blog Sub Title"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start space-y-3">
            <label
              htmlFor="blogTag"
              className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
            >
              Tags (Max 8 Only)
            </label>
            <input
              type="text"
              name="blogTag"
              id="blogTag"
              className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-sm w-full text-[#0000008c]"
              placeholder=""
            />
          </div>
        </div>
        <div className="grow max-w-[70%] justify-self-center flex flex-col justify-center items-start lg:space-y-4 p-6">
          <div>
            <h3 className="font-poppins font-semibold lg:text-xl">
              Funding Information
            </h3>
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
          <div className="w-full flex flex-col justify-center items-start space-y-4">
            <div className="w-[80%] flex justify-between items-start">
              <div className="w-full flex flex-col justify-center items-start space-y-4">
                <div className="w-full flex flex-col justify-center items-start space-y-3">
                  <h4 className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base">
                    Blog Featured Image
                  </h4>
                  <label
                    htmlFor="blogImage"
                    className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base bg-[url('/assets/inputfile.svg')] w-full h-48 bg-cover bg-[top_50%] bg-no-repeat flex justify-center items-center"
                  >
                    <button
                      type="button"
                      className="px-4 py-2 text-[#0000008c] bg-white rounded-lg border border-[#5C74FF]"
                    >
                      Add Image
                    </button>
                  </label>
                  <input
                    type="file"
                    name="blogVideo"
                    id="blogVideo"
                    className="p-2 outline-none rounded-md text-[#0000008c] text-sm w-full hidden"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            <div className="py-2 h-auto overflow-hidden w-full flex flex-col justify-center items-start space-y-3">
              <label
                htmlFor="blogDesc"
                className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
              >
                More Description
              </label>
              <QuillEditor
                value={content}
                onChange={handleEditorChange}
                modules={quillModules}
                formats={quillFormats}
                className="max-w-[95%] w-full overflow-hidden h-auto mt-10 bg-white"
              />
            </div>
            <div className="flex justify-start items-center">
              <button
                type="submit"
                className="py-2 px-8 bg-[#5C74FF] text-white rounded-xl hover:bg-[#2e3a80] font-opensans font-semibold"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;