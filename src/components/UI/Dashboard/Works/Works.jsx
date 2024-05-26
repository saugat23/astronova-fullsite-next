"use client";
import React, { useState, useEffect } from "react";
import { FaEye, FaPen } from "react-icons/fa";
import Link from "next/link";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@nextui-org/react";

const Works = ({data}) => {
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
              <Button
                type="button"
                className="py-2 px-2 md:px-6 bg-[#5C74FF] text-white rounded-xl hover:bg-[#2e3a80] font-opensans font-semibold"
              >
                <Link href="works/add_work">Add New Works</Link>
              </Button>
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
            <Table aria-label="Work Table">
              <TableHeader>
                <TableColumn className="w-[10%]">
                  <FaEye />
                </TableColumn>
                <TableColumn className="w-[10%]">Edit</TableColumn>
                <TableColumn>Work Title</TableColumn>
                <TableColumn>Short Description</TableColumn>
              </TableHeader>
              <TableBody emptyContent={"No rows to display."}>
                {(search === "" ? works : filteredWorks).map((work) => {
                  return (
                    <TableRow key={work.id}>
                      <TableCell>
                        <FaEye />
                      </TableCell>
                      <TableCell>
                        <FaPen />
                      </TableCell>
                      <TableCell>{work.title}</TableCell>
                      <TableCell>{work.sub_description}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
