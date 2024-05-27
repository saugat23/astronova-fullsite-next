"use client";
import React, { useState } from "react";
import { FaEye, FaPen } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../ui/sheet";

const Works = ({ data }) => {
  const works = data.works;
  const [search, setSearch] = useState("");

  const filteredWorks = works.filter((work) =>
    work.title.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <>
      <section className="overflow-visible h-auto p-4">
        <div className="bg-white py-8 px-4 w-full">
          <div className="flex justify-between w-full items-center">
            <div className="font-montserrat tracking-wider font-semibold md:text-sm lg:text-base cursor-pointer flex justify-center items-center">
              <button
                type="button"
                className="py-2 px-2 md:px-6 bg-[#5C74FF] text-white rounded-xl hover:bg-[#2e3a80] font-opensans font-semibold"
              >
                <Link href="works/add_work">Add New Works</Link>
              </button>
            </div>
            <div>
              <input
                type="text"
                id="workSearch"
                name="workSearch"
                className="p-2 md:p-3 bg-transparent w-60 md:w-96 font-montserrat md:text-xs lg:text-sm font-medium text-[#1f1f1f] outline-none border border-[#E0D8FF] rounded-lg"
                placeholder="Search by Work Title"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="py-4 w-full">
            <table aria-label="Work Table">
              <thead>
                <tr>
                  <th className="w-[10%]">
                    <FaEye />
                  </th>
                  <th className="w-[10%]">Edit</th>
                  <th>Work Title</th>
                  <th>Short Description</th>
                </tr>
              </thead>
              <tbody>
                {(search === "" ? works : filteredWorks).map((work) => {
                  return (
                    <tr key={work.id}>
                      <Sheet>
                        <td>
                          <SheetTrigger>
                            <FaEye className="cursor-pointer" />
                          </SheetTrigger>
                          <SheetContent>
                            <SheetHeader>
                              <SheetTitle>Work Details</SheetTitle>
                              <SheetDescription className="flex flex-col justify-center items-start space-y-3 mt-6">
                                <div className="w-full h-auto">
                                  <Image
                                    priority
                                    src={work.cover_img}
                                    alt="Work Cover Photo"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto rounded-lg"
                                    layout="responsive"
                                    quality={75}
                                    objectFit="cover"
                                  />
                                </div>
                                <h1 className="text-base font-semibold font-inter">
                                  {work.title}
                                </h1>
                                <p className="text-sm font-semibold font-inter text-gray-700">
                                  Description{" "}
                                  <span className="block">
                                    {work.long_description}
                                  </span>
                                </p>
                              </SheetDescription>
                            </SheetHeader>
                          </SheetContent>
                        </td>
                      </Sheet>

                      <td>
                        <Link
                          href={`/coordinator_dashboard/works/edit_work/${work.id}`}
                        >
                          <FaPen className="ml-16 cursor-pointer" />
                        </Link>
                      </td>
                      <td>{work.title}</td>
                      <td>{work.sub_description}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
