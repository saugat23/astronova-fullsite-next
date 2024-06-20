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
      <section className="h-auto overflow-visible p-4">
        <div className="w-full bg-white px-4 py-8">
          <div className="flex w-full items-center justify-between">
            <h3 className="cursor-pointer font-kumbhsans text-base font-semibold tracking-wider">
              <Link href="events/add_event">
                <button
                  type="button"
                  className="rounded-xl bg-[#5C74FF] px-4 py-2 font-opensans text-xs font-semibold text-white hover:bg-[#2e3a80] md:px-6 md:text-sm xl:text-base"
                >
                  Add Upcoming Event
                </button>
              </Link>
            </h3>
            <div>
              <input
                type="text"
                id="eventSearch"
                name="eventSearch"
                className="w-60 rounded-lg border border-[#E0D8FF] bg-transparent p-3 font-kumbhsans text-sm font-medium text-[#1f1f1f] outline-none md:w-96"
                placeholder="Search by Upcoming events"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full py-4">
            <Table aria-label="Donor Table">
              <TableHeader>
                <TableColumn className="w-[10%]">
                  <FaEye />
                </TableColumn>
                <TableColumn className="w-[20%]">Edit</TableColumn>
                <TableColumn className="text-center">Event Title</TableColumn>
                <TableColumn className="text-center">Event Link</TableColumn>
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
