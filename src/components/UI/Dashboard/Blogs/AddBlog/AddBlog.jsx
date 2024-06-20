"use client";
import React, { useState } from "react";
import { createBlog } from "../../../../../app/services/api";
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
import Loader from "../../../Loader/Loader";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import { Toggle } from "../../../../ui/toggle";

const Toolbar = ({ editor }) => {
  if (!editor) {
    return null;
  }
  return (
    <div className="flex gap-3 rounded-xl bg-transparent pb-4">
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
  const [previewUrls, setPreviewUrls] = useState({
    featured_img: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFeaturedImageChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
    setPreviewUrls((prevUrls) => ({
      ...prevUrls,
      featured_img: URL.createObjectURL(files[0]),
    }));
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
    <section className="h-auto overflow-hidden p-6">
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col-reverse items-start rounded-lg border border-[#e0d8ff99] bg-white p-4 shadow-xl md:flex-row"
      >
        <div className="flex w-1/4 flex-col items-start justify-center space-y-4 justify-self-start rounded-s-lg border border-[#e0d8ff99] p-3">
          <div>
            <h3 className="font-poppins font-semibold lg:text-xl">
              Blog Basic Info
            </h3>
          </div>
          <div className="flex w-full flex-col items-start justify-center space-y-3">
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
              className="w-full rounded-md border border-[#e0d8ff99] bg-transparent p-2 text-sm text-[#0000008c] outline-none"
              placeholder="Input Blog Title"
            />
          </div>
          <div className="flex w-full flex-col items-start justify-center space-y-3">
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
              className="h-20 w-full resize-none rounded-md border border-[#e0d8ff99] bg-transparent p-2 text-sm text-[#0000008c] outline-none"
              placeholder="Input Blog Sub Title"
            />
          </div>
          <div className="flex w-full flex-col items-start justify-center space-y-3">
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
              className="w-full rounded-md border border-[#e0d8ff99] bg-transparent p-2 text-sm text-[#0000008c] outline-none"
              placeholder="Input Youtube URL"
            />
          </div>
          <div className="flex w-full flex-col items-start justify-center space-y-3">
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
              className="w-full rounded-md border border-[#e0d8ff99] bg-transparent p-2 text-sm text-[#0000008c] outline-none"
              placeholder=""
            />
          </div>
          <div className="flex w-full flex-col items-start justify-center space-y-3">
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
              className="w-full rounded-md border border-[#e0d8ff99] bg-transparent p-2 text-sm text-[#0000008c] outline-none"
              placeholder=""
            />
          </div>
        </div>
        <div className="flex grow flex-col items-start justify-center justify-self-center p-3 lg:space-y-4">
          <div className="flex w-full items-center justify-between">
            <h3 className="font-poppins font-semibold lg:text-xl">
              Funding Information
            </h3>
          </div>
          <div className="flex w-full flex-col items-start justify-center space-y-4">
            <div className="flex w-[80%] items-start justify-between">
              <div className="flex w-full flex-col items-start justify-center space-y-4">
                <div className="flex w-full flex-col items-start justify-center space-y-3">
                  <h4 className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base">
                    Blog Featured Image
                  </h4>
                  <label
                    htmlFor="featured_img"
                    className="flex h-48 w-full cursor-pointer items-center justify-center font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
                    style={{
                      backgroundImage: `url(${previewUrls.featured_img || "/assets/inputfile.svg"})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    Add Image
                  </label>
                  <input
                    type="file"
                    name="featured_img"
                    id="featured_img"
                    onChange={handleFeaturedImageChange}
                    className="hidden w-full rounded-md p-2 text-sm text-[#0000008c] outline-none"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            <div className="flex h-auto w-full flex-col items-start justify-center space-y-3 overflow-hidden py-2">
              <label
                htmlFor="description"
                className="font-poppins font-semibold tracking-tight text-[#0000008c] lg:text-base"
              >
                More Description
              </label>
              <div className="flex flex-col space-y-0">
                <Toolbar editor={editor} />
                <EditorContent editor={editor} />
              </div>
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
        <div className="flex w-[10%] flex-col items-end justify-start justify-self-end">
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
