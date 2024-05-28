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
} from "@nextui-org/react";

const Page = ({ data }) => {
  const items = data.events;
  const [search, setSearch] = useState("");

  return (
    <>
      <section className="overflow-visible h-auto p-4">
        <div className="bg-white py-8 px-4 w-full">
          <div className="flex justify-between w-full items-center">
            <h3 className="font-kumbhsans tracking-wider font-semibold text-base cursor-pointer">
              <button
                type="button"
                className="py-4 px-2 md:px-6 bg-[#5C74FF] text-white rounded-xl hover:bg-[#2e3a80] font-opensans text-xs md:text-sm xl:text-base font-semibold"
              >
                <Link href="events/add_event">Add Upcoming Event</Link>
              </button>
            </h3>
            <div>
              <input
                type="text"
                id="eventSearch"
                name="eventSearch"
                className="p-3 bg-transparent w-60 md:w-96 font-kumbhsans text-sm font-medium text-[#1f1f1f] outline-none border border-[#E0D8FF] rounded-lg"
                placeholder="Search by Upcoming events"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="py-4 w-full">
            <Table aria-label="Donor Table">
              <TableHeader>
                <TableColumn className="w-[10%]">
                  <FaEye />
                </TableColumn>
                <TableColumn className="w-[20%]">Edit</TableColumn>
                <TableColumn>Event Title</TableColumn>
                <TableColumn>Event Link</TableColumn>
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
                        <TableCell>{item.title}</TableCell>
                        <TableCell className="text-blue-500">
                          {item.link}
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
