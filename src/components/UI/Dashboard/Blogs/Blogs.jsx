"use client";
import React, { useState } from "react";
import { createBlog } from "../../../../app/services/api";
import { useRouter } from "next/navigation";
import {
  Bold,
  Strikethrough,
  Italic,
  Heading as HeadingIcon,
  Code,
  Pen,
} from "lucide-react";
import { toast } from "sonner";
import Loader from "../../Loader/Loader";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import { Toggle } from "../../../ui/toggle";

const Toolbar = ({ editor }) => {
  if (!editor) {
    return null;
  }
  return (
    <div className="bg-transparent rounded-xl pb-4 flex gap-3">
      <Toggle
        className="bg-white"
        size="lg"
        pressed={editor.isActive("heading")}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        <HeadingIcon className="h-6 w-6 stroke-black" />
      </Toggle>

      <Toggle
        className="bg-white"
        size="lg"
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className="h-6 w-6 stroke-black" />
      </Toggle>

      <Toggle
        className="bg-white"
        size="lg"
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic className="h-6 w-6 stroke-black" />
      </Toggle>

      <Toggle
        className="bg-white"
        size="lg"
        pressed={editor.isActive("strike")}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
      >
        <Strikethrough className="h-6 w-6 stroke-black" />
      </Toggle>

      <Toggle
        className="bg-white"
        size="lg"
        pressed={editor.isActive("code")}
        onPressedChange={() => editor.chain().focus().toggleCode().run()}
      >
        <Code className="h-6 w-6 stroke-black" />
      </Toggle>

      <Toggle
        className="bg-white"
        size="lg"
        pressed={editor.isActive("codeblock")}
        onPressedChange={() => editor.chain().focus().toggleCodeBlock().run()}
      >
        <Pen className="h-6 w-6 stroke-black" />
      </Toggle>
    </div>
  );
};

const Page = () => {
  const [formData, setFormData] = useState({
    title: "",
    sub_title: "",
    video: "",
    tags: "",
    tags2: "",
    description: "",
    featured_img: null,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFeaturedImageChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const editor = useEditor({
    extensions: [StarterKit.configure({}), Heading.configure({})],
    content: "<p> Hello World </p>",
    editorProps: {
      attributes: {
        class:
          "rounded-md border h-40 border-gray-300 bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 px-4 py-2 w-[50rem] outline-none",
      },
    },
    onUpdate({ editor }) {
      setFormData({ ...formData, description: editor.getHTML() });
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { title, sub_title, video, tags, tags2, description, featured_img } =
      formData;

    const data = new FormData();
    data.append("title", title);
    data.append("sub_title", sub_title);
    data.append("description", description);
    data.append("video", video);
    data.append("tags", tags);
    data.append("featured_img", featured_img);
    data.append("tags", tags2);

    try {
      const response = await createBlog(data);
      console.log(response);
      toast.success("Blog has been created!!");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  const router = useRouter();
  return (
    <section className="p-6 h-auto overflow-hidden">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full flex md:flex-row flex-col-reverse items-start shadow-xl p-4 border border-[#e0d8ff99] rounded-lg"
      >
        <div className="w-1/4 justify-self-start border border-[#e0d8ff99] rounded-s-lg flex flex-col justify-center items-start space-y-4 p-3">
          <div>
            <h3 className="font-poppins font-semibold lg:text-xl">
              Blog Basic Info
            </h3>
          </div>
          <div className="w-full flex flex-col justify-center items-start space-y-3">
            <label
              htmlFor="title"
              className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
            >
              Blog Title
            </label>
            <input
              name="title"
              id="title"
              onChange={handleChange}
              className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-[#0000008c] text-sm w-full"
              placeholder="Input Blog Title"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start space-y-3">
            <label
              htmlFor="sub_title"
              className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
            >
              Blog Sub Title
            </label>
            <textarea
              type="text"
              name="sub_title"
              id="sub_title"
              onChange={handleChange}
              className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-sm w-full text-[#0000008c] h-20 resize-none"
              placeholder="Input Blog Sub Title"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start space-y-3">
            <label
              htmlFor="video"
              className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
            >
              Video
            </label>
            <input
              name="video"
              id="video"
              onChange={handleChange}
              className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-[#0000008c] text-sm w-full"
              placeholder="Input Youtube URL"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start space-y-3">
            <label
              htmlFor="tags"
              className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
            >
              Tags (Max 8 Only)
            </label>
            <input
              type="text"
              name="tags"
              id="tags"
              onChange={handleChange}
              className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-sm w-full text-[#0000008c]"
              placeholder=""
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start space-y-3">
            <label
              htmlFor="tags2"
              className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
            >
              Tags
            </label>
            <input
              type="text"
              name="tags2"
              id="tags2"
              onChange={handleChange}
              className="bg-transparent border border-[#e0d8ff99] p-2 outline-none rounded-md text-sm w-full text-[#0000008c]"
              placeholder=""
            />
          </div>
        </div>
        <div className="grow justify-self-center flex flex-col justify-center items-start lg:space-y-4 p-3">
          <div className="w-full flex justify-between items-center">
            <h3 className="font-poppins font-semibold lg:text-xl">
              Funding Information
            </h3>
          </div>
          <div className="w-full flex flex-col justify-center items-start space-y-4">
            <div className="w-[80%] flex justify-between items-start">
              <div className="w-full flex flex-col justify-center items-start space-y-4">
                <div className="w-full flex flex-col justify-center items-start space-y-3">
                  <h4 className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base">
                    Blog Featured Image
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
                    onChange={handleFeaturedImageChange}
                    className="p-2 outline-none rounded-md text-[#0000008c] text-sm w-full hidden"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            <div className="py-2 h-auto overflow-hidden w-full flex flex-col justify-center items-start space-y-3">
              <label
                htmlFor="description"
                className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
              >
                More Description
              </label>
              <div className="flex flex-col space-y-0 ">
                <Toolbar editor={editor} />
                <EditorContent editor={editor} />
              </div>
            </div>
            <div className="flex justify-start items-center">
              <button
                type="submit"
                className="py-2 px-8 bg-[#5C74FF] text-white rounded-xl hover:bg-[#2e3a80] font-opensans font-semibold"
              >
                {loading ? (
                  <div className="mx-auto flex gap-4 items-center justify-center w-1/2">
                    <p>Submitting...</p> <Loader />
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="w-[10%] flex flex-col justify-start items-end justify-self-end">
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
