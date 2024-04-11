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
        <div className="w-[20%] justify-self-start border border-[#e0d8ff99] rounded-s-lg flex flex-col justify-center items-start space-y-4 p-3">
          <div>
            <h3 className="font-poppins font-semibold lg:text-xl">
              Invoice Basic Info
            </h3>
          </div>
          <div className="w-full flex flex-col justify-center items-start space-y-3 lg:py-4">
            <label
              htmlFor="email"
              className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-[#0000008c] text-sm w-full"
              placeholder="Input Invoice Email"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start space-y-3">
            <label
              htmlFor="invoiceTitle"
              className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
            >
              Title
            </label>
            <textarea
              name="invoiceTitle"
              id="invoiceTitle"
              className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-[#0000008c] text-sm w-full resize-none h-20"
              placeholder="Input Invoice Title"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start space-y-3">
            <label
              htmlFor="amount"
              className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
            >
              Amount
            </label>
            <input
              type="text"
              name="amount"
              id="amount"
              className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-sm w-full text-[#0000008c]"
              placeholder="Input Invoice Amount"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start space-y-3">
            <label
              htmlFor="invoicePayment"
              className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
            >
              Mode of Payment
            </label>
            <select
              type="text"
              name="invoicePayment"
              id="invoicePayment"
              className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-sm w-full text-[#0000008c]"
              placeholder=""
            >
              <option value="digital">Digital</option>
              <option value="cash">Cash</option>
            </select>
          </div>
        </div>
        <div className="grow max-w-[70%] justify-self-center flex flex-col justify-center items-start lg:space-y-4 p-6">
          <div>
            <h3 className="font-poppins font-semibold lg:text-xl">
              Funding Information
            </h3>
          </div>
          <div className="w-full flex flex-col justify-center items-start space-y-4">
            <div className="w-[80%] flex justify-between items-start">
              <div className="flex flex-col justify-center items-start space-y-4">
                <div className="w-full flex flex-col justify-center items-start space-y-3">
                  <label
                    htmlFor="taxID"
                    className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                  >
                    Tax ID
                  </label>
                  <Input
                    autoFocus
                    variant="faded"
                    name="taxID"
                    placeholder="Input Tax ID"
                    className="w-full"
                  />
                </div>
                <div className="w-full flex flex-col justify-center items-start space-y-3">
                  <label
                    htmlFor="invoiceDate"
                    className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                  >
                    Invoice Date
                  </label>
                  <Input
                    type="date"
                    autoFocus
                    name="invoiceDate"
                    variant="faded"
                    placeholder="5,000,000"
                    className="text-[#0000008c] w-full"
                  />
                </div>
                <div className="w-full flex flex-col justify-center items-start space-y-3">
                  <label
                    htmlFor="invoiceAddress"
                    className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                  >
                    Invoice Address
                  </label>
                  <Input
                    type="date"
                    autoFocus
                    name="invoiceAddress"
                    variant="faded"
                    placeholder="Input Address"
                    className="text-[#0000008c] w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-start space-y-4">
                <div className="w-full flex flex-col justify-center items-start space-y-3">
                  <label
                    htmlFor="invoiceQuantity"
                    className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                  >
                    Invoice Quantity
                  </label>
                  <Input
                    autoFocus
                    name="invoiceQuantity"
                    variant="faded"
                    placeholder="Input Invoice Quantity"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            <div className="py-2 h-auto overflow-hidden w-full flex flex-col justify-center items-start space-y-3">
              <label
                htmlFor="invoiceDesc"
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
