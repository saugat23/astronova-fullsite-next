"use client"
import React from "react";
import { FaEye } from "react-icons/fa";
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
          <h3 className="font-montserrat tracking-wider font-semibold text-base cursor-pointer">
            All Donors
          </h3>
          <div>
            <input
              type="text"
              id="donorSearch"
              name="donorSearch"
              className="p-3 bg-transparent w-96 font-montserrat text-base font-medium text-[#1f1f1f] outline-none border border-[#E0D8FF] rounded-lg"
              placeholder="Search by Doners name and contact or email"
            />
          </div>
        </div>
        <div className="py-4 w-full">
          <Table aria-label="Donor Table">
            <TableHeader>
              <TableColumn>
                <FaEye />
              </TableColumn>
              <TableColumn>ID</TableColumn>
              <TableColumn>Name</TableColumn>
              <TableColumn>Email ID</TableColumn>
              <TableColumn>Contact No.</TableColumn>
              <TableColumn>Status</TableColumn>
              <TableColumn>No of Transactions</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>
                  <FaEye />
                </TableCell>
                <TableCell>113</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>johndoe@gmail.com</TableCell>
                <TableCell>98576475473</TableCell>
                <TableCell>Active</TableCell>
                <TableCell>1</TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>
                  <FaEye />
                </TableCell>
                <TableCell>323</TableCell>
                <TableCell>Costa</TableCell>
                <TableCell>costa@gmail.com</TableCell>
                <TableCell>97438743332</TableCell>
                <TableCell>Active</TableCell>
                <TableCell>4</TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>
                  <FaEye />
                </TableCell>
                <TableCell>67</TableCell>
                <TableCell>Hazard</TableCell>
                <TableCell>hazard@gmail.com</TableCell>
                <TableCell>9845272728</TableCell>
                <TableCell>Active</TableCell>
                <TableCell>2</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default page;
