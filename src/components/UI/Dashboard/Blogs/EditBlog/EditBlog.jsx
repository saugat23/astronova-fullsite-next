"use client";
import React, { useRef, useState } from "react";
import { updateBlog, deleteBlog } from "../../../../../app/services/api";
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
import Image from "next/image";
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

const Page = ({ data }) => {
  const blog = data;
  const id = blog.id;
  const router = useRouter();
  const featuredImageRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: blog.title || "",
    sub_title: blog.sub_title || "",
    video: blog.video || "",
    tags: blog.tag || "",
    tags2: blog.tags2 || "",
    description: blog.description || "",
    featured_img: blog.featured_img || "",
  });

  const editor = useEditor({
    extensions: [StarterKit.configure({}), Heading.configure({})],
    content: `${formData.description}` || "",
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

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFeaturedImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      featured_img: URL.createObjectURL(file),
    }));
  };

  const handleFeaturedImageClick = () => {
    if (featuredImageRef.current) {
      featuredImageRef.current.click();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((file, index) => {
          if (file instanceof File) {
            formDataToSend.append(`${key}[${index}]`, file);
          }
        });
      } else if (value instanceof File) {
        formDataToSend.append(key, value);
      } else {
        formDataToSend.append(key, value);
      }
    });

    try {
      const response = await updateBlog(id, formDataToSend);
      console.log("response", response);

      toast.success("Blog updated successfully!");
      setTimeout(() => {
        window.history.back();
      }, 5000);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error updating blog. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await deleteBlog(id);
      console.log("response", response);

      toast.success("Blog Deleted Successfully");
      setTimeout(() => {
        router.back();
      }, 5000);
    } catch (error) {
      console.error("error: ", error);
      toast.error("Error deleting the blog. Please try again!");
    } finally {
      setLoading(false);
    }
  };

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
              value={formData.title}
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
              value={formData.sub_title}
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
              value={formData.video}
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
              value={formData.tags}
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
              value={formData.tags2}
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
                  <div className="relative h-60 w-full border-dashed border-[#e0d8ff99] py-6">
                    {formData.featured_img && (
                      <Image
                        priority
                        quality={75}
                        src={formData.featured_img}
                        alt="Featured"
                        width={1000}
                        height={600}
                        className="absolute left-0 top-0 h-full w-full object-cover"
                        onClick={handleFeaturedImageClick}
                      />
                    )}
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
                      onChange={handleFeaturedImageChange}
                      className="hidden w-full rounded-md p-2 text-sm text-[#0000008c] outline-none"
                      placeholder=""
                      ref={featuredImageRef}
                    />
                  </div>
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
            <div className="flex w-full space-x-3">
              <button
                type="submit"
                className="rounded-md bg-[#6c63ff] p-2 font-poppins text-sm font-semibold text-white hover:bg-[#5a54d7]"
              >
                Update Blog
              </button>
              <button
                type="button"
                className="rounded-md bg-red-500 p-2 font-poppins text-sm font-semibold tracking-tight text-white hover:bg-red-700"
                onClick={handleDelete}
              >
                Delete
              </button>
              {loading && <Loader />}
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
