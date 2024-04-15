"use client";

import React, { useState } from "react";
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

const workItems = [
  {
    title:
      "Research Seminar Program by Astronova Foundation Nepal at Navodaya Shishu Sadan English Secondary School",
    desc: "Research Seminar Program by Astronova Foundation Nepal at Navodaya Shishu Sadan English Secondary School.",
  },
  {
    title: "Research Seminar Program at Makawanpur Bal Vidya Sadan",
    desc: "Research Seminar Program at Makawanpur Bal Vidya Sadan",
  },
  {
    title: "Robotics & Automation Workshops in Different Schools",
    desc: "Robotics & Automation Workshops in Different Schools",
  },
];

const Page = () => {
  const [items, setItems] = useState(workItems);

  const [search, setSearch] = useState("");
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
                <TableColumn>Event Title</TableColumn>
                <TableColumn>Short Description</TableColumn>
              </TableHeader>
              <TableBody>
                {items
                  .filter((item) => {
                    if (search.toLowerCase() === "") {
                      return item;
                    } else {
                      return item.title.toLowerCase().includes(search);
                    }
                  })
                  .map((item) => {
                    return (
                      <TableRow key={item.title}>
                        <TableCell>
                          <FaEye />
                        </TableCell>
                        <TableCell>
                          <FaPen />
                        </TableCell>
                        <TableCell>
                          {item.title}
                        </TableCell>
                        <TableCell>
                          {item.desc}
                        </TableCell>
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

export default Page;
