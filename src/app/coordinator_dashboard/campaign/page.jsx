"use client";
import React from "react";
import { FaEye, FaPen, FaRunning } from "react-icons/fa";
import { Progress } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const page = () => {

  return (
    <section className="overflow-visible h-auto p-4">
      <div className="bg-white py-8 px-4 w-full">
        <div className="flex justify-between w-full items-center">
          <div className="flex justify-center items-center lg:space-x-6">
            <button
              type="button"
              className="py-2 px-6 bg-[#5C74FF] text-white rounded-xl hover:bg-[#2e3a80] font-opensans font-semibold"
            >
              Add Campaign
            </button>
            <button
              type="button"
              className="py-2 px-6 bg-[#5C74FF] text-white rounded-xl hover:bg-[#2e3a80] font-opensans font-semibold"
            >
              Add Testimonial
            </button>
          </div>
          <div>
            <input
              type="text"
              id="donorSearch"
              name="donorSearch"
              className="p-3 bg-transparent w-80 font-montserrat text-base font-medium text-[#1f1f1f] outline-none border border-[#E0D8FF] rounded-lg"
              placeholder="Search by Campaign name"
            />
          </div>
        </div>
        <div className="py-4 w-full">
          <Table aria-label="Donor Table">
            <TableHeader>
              <TableColumn>
                <FaEye />
              </TableColumn>
              <TableColumn>Edit</TableColumn>
              <TableColumn>Campaign&apos;s Title</TableColumn>
              <TableColumn>Status</TableColumn>
              <TableColumn>Target Amount</TableColumn>
              <TableColumn>Achieved</TableColumn>
              <TableColumn>Pleased %</TableColumn>
              <TableColumn>People Donated</TableColumn>
            </TableHeader>
            <TableBody emptyContent={"No rows to display."}>
              <TableRow key="1">
                <TableCell>
                  <FaEye className="cursor-pointer" />
                </TableCell>
                <TableCell>
                  <FaPen className="cursor-pointer" />
                </TableCell>
                <TableCell>Astronova Foundation&apos;s Tinkering Lab</TableCell>
                <TableCell className="flex justify-start items-center space-x-2 w-full">
                  <div>
                    <FaRunning />
                  </div>
                  <div className="flex flex-col justify-center items-start w-full">
                    <h4>Running</h4>
                    <h4 className="w-3/4">
                      <Progress
                        size="md"
                        aria-label="Loading..."
                        color="success"
                        value={80}
                        className="w-full"
                      />
                    </h4>
                  </div>
                </TableCell>
                <TableCell>रु 6,264,695.36</TableCell>
                <TableCell>रु 0</TableCell>
                <TableCell>0%</TableCell>
                <TableCell>7</TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>
                  <FaEye className="cursor-pointer" />
                </TableCell>
                <TableCell>
                  <FaPen className="cursor-pointer" />
                </TableCell>
                <TableCell>Planetorium&apos;s Lab</TableCell>
                <TableCell className="flex justify-start items-center space-x-2 w-full">
                  <div>
                    <FaRunning />
                  </div>
                  <div className="flex flex-col justify-center items-start w-full">
                    <h4>Running</h4>
                    <h4 className="w-3/4">
                      <Progress
                        size="md"
                        aria-label="Loading..."
                        color="success"
                        value={60}
                        className="w-full"
                      />
                    </h4>
                  </div>
                </TableCell>
                <TableCell>रु 6,264,695.36</TableCell>
                <TableCell>रु 0</TableCell>
                <TableCell>0%</TableCell>
                <TableCell>7</TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>
                  <FaEye className="cursor-pointer" />
                </TableCell>
                <TableCell>
                  <FaPen className="cursor-pointer" />
                </TableCell>
                <TableCell>Planetorium&apos;s Lab</TableCell>
                <TableCell className="flex justify-start items-center space-x-2 w-full">
                  <div>
                    <FaRunning />
                  </div>
                  <div className="flex flex-col justify-center items-start w-full">
                    <h4>Running</h4>
                    <h4 className="w-3/4">
                      <Progress
                        size="md"
                        aria-label="Loading..."
                        color="success"
                        value={60}
                        className="w-full"
                      />
                    </h4>
                  </div>
                </TableCell>
                <TableCell>रु 6,264,695.36</TableCell>
                <TableCell>रु 0</TableCell>
                <TableCell>0%</TableCell>
                <TableCell>7</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default page;
