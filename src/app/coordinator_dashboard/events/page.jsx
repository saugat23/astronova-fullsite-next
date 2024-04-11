"use client";

import React from "react";
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

const Page = () => {
  return (
    <>
      <section className="overflow-visible h-auto p-4">
        <div className="bg-white py-8 px-4 w-full">
          <div className="flex justify-between w-full items-center">
            <h3 className="font-montserrat tracking-wider font-semibold text-base cursor-pointer">
              <button
                type="button"
                className="py-2 px-8 bg-[#5C74FF] text-white rounded-xl hover:bg-[#2e3a80] font-opensans font-semibold"
              >
                <Link href="events/add_event">Add Upcoming Event</Link>
              </button>
            </h3>
            <div>
              <input
                type="text"
                id="eventSearch"
                name="eventSearch"
                className="p-3 bg-transparent w-96 font-montserrat text-sm font-medium text-[#1f1f1f] outline-none border border-[#E0D8FF] rounded-lg"
                placeholder="Search by Upcoming events"
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
                <TableColumn>Short Description</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>
                    <FaEye />
                  </TableCell>
                  <TableCell>
                    <FaPen />
                  </TableCell>
                  <TableCell>
                    SEE Student Confidence Build up & Motivation Training
                  </TableCell>
                  <TableCell>Incubation Center Visit</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>
                    <FaEye />
                  </TableCell>
                  <TableCell>
                    <FaPen />
                  </TableCell>
                  <TableCell>Incubation Center Visit</TableCell>
                  <TableCell>Incubation Center Visit</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
