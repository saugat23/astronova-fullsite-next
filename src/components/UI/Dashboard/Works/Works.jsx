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
      <section className="h-auto overflow-visible p-4">
        <div className="w-full bg-white px-4 py-8">
          <div className="flex w-full items-center justify-between">
            <div className="flex cursor-pointer items-center justify-center font-kumbhsans font-semibold tracking-wider md:text-sm lg:text-base">
              <Link href="works/add_work">
                <button
                  type="button"
                  className="rounded-xl bg-[#5C74FF] px-2 py-2 font-opensans font-semibold text-white hover:bg-[#2e3a80] md:px-6"
                >
                  Add New Works
                </button>
              </Link>
            </div>
            <div>
              <input
                type="text"
                id="workSearch"
                name="workSearch"
                className="w-60 rounded-lg border border-[#E0D8FF] bg-transparent p-2 font-kumbhsans font-medium text-[#1f1f1f] outline-none md:w-96 md:p-3 md:text-xs lg:text-sm"
                placeholder="Search by Work Title"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full py-4">
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
                              <SheetDescription className="mt-6 flex flex-col items-start justify-center space-y-3">
                                <div className="h-auto w-full">
                                  <Image
                                    priority
                                    src={work.cover_img}
                                    alt="Work Cover Photo"
                                    width={800}
                                    height={600}
                                    className="h-auto w-full rounded-lg object-cover object-center"
                                    quality={75}
                                  />
                                </div>
                                <h1 className="font-inter text-base font-semibold">
                                  {work.title}
                                </h1>
                                <p className="font-inter text-sm font-semibold text-gray-700">
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
