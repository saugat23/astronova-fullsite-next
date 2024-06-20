"use client";
import React, { useState } from "react";
import { FaEye, FaPen } from "react-icons/fa";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../ui/sheet";
import Image from "next/image";

const Blogs = ({ data }) => {
  const blogs = data.blogs;
  const [search, setSearch] = useState("");

  const filteredBlog = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="h-auto overflow-hidden p-4">
      <div className="w-full bg-white px-4 py-8">
        <div className="flex w-full flex-col items-start justify-start space-y-3 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div className="flex items-center justify-center space-x-6">
            <Link href="blogs/add_blog">
              <button
                type="button"
                className="rounded-xl bg-[#5C74FF] px-6 py-2 font-opensans font-semibold text-white hover:bg-[#2e3a80]"
              >
                Add Blog
              </button>
            </Link>
          </div>
          <div className="block md:inline">
            <input
              type="text"
              id="blogSearch"
              name="blogSearch"
              className="block w-80 rounded-lg border border-[#E0D8FF] bg-transparent p-3 font-kumbhsans text-sm font-medium text-[#1f1f1f] outline-none md:inline-block"
              placeholder="Search by Blog name"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full py-4">
          <table aria-label="Blog Table" className="blog_table w-full">
            <thead className="bg-[#f4f4f5]">
              <tr className="text-sm text-gray-500">
                <th>
                  <FaEye className="ml-4" />
                </th>
                <th>Edit</th>
                <th>Blog&apos;s Title</th>
                <th>Blog&apos;s Subtitle</th>
                <th>Video Link</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {(search === "" ? blogs : filteredBlog)
                .slice()
                .reverse()
                .map((item) => {
                  return (
                    <tr key={item.id}>
                      <Sheet>
                        <td>
                          <SheetTrigger>
                            <FaEye className="cursor-pointer" />
                          </SheetTrigger>
                          <SheetContent>
                            <SheetHeader>
                              <SheetTitle>Blog Details</SheetTitle>
                              <SheetDescription className="mt-6 flex flex-col items-start justify-center space-y-3">
                                <div className="h-auto w-full">
                                  <Image
                                    priority
                                    src={item.featured_img}
                                    alt="Blog Featured Photo"
                                    width={800}
                                    height={600}
                                    className="h-auto w-full rounded-lg object-cover object-center"
                                    quality={75}
                                  />
                                </div>
                                <h1 className="font-inter text-base font-semibold">
                                  {item.title}
                                </h1>
                                <p className="font-inter text-sm font-semibold text-gray-700">
                                  Sub Title{" "}
                                  <span className="block">
                                    {item.sub_title}
                                  </span>
                                </p>
                              </SheetDescription>
                            </SheetHeader>
                          </SheetContent>
                        </td>
                      </Sheet>
                      <td className="text-center">
                        <Link
                          href={`/coordinator_dashboard/blogs/edit_blog/${item.id}`}
                        >
                          <FaPen className="ml-10 cursor-pointer text-center" />
                        </Link>
                      </td>
                      <td>{item.title}</td>
                      <td className="flex w-full items-center justify-start space-x-2">
                        <h4 className="w-full">{item.sub_title}</h4>
                      </td>
                      <td>{item.video}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
