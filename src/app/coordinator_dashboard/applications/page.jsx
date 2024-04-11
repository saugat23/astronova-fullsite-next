"use client";

import React from "react";
import { FaEye, FaPen } from "react-icons/fa";
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
              Form Response
            </h3>
            <div>
              <input
                type="text"
                id="formResponse"
                name="formResponse"
                className="p-3 bg-transparent w-96 font-montserrat text-base font-medium text-[#1f1f1f] outline-none border border-[#E0D8FF] rounded-lg"
                placeholder="Search by Doners name and contact or email"
              />
            </div>
          </div>
          <div className="py-4 w-full">
            <Table aria-label="Donor Table">
              <TableHeader>
                <TableColumn className="w-[10%]">
                  <FaEye />
                </TableColumn>
                <TableColumn className="w-[20%]">Name</TableColumn>
                <TableColumn>Email ID</TableColumn>
                <TableColumn>Phone Number</TableColumn>
                <TableColumn>Address</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>
                    <FaEye />
                  </TableCell>
                  <TableCell>
                    John Doe
                  </TableCell>
                  <TableCell>
                    johndoe@gmail.com
                  </TableCell>
                  <TableCell>
                    9874384873
                  </TableCell>
                  <TableCell>
                    Pokhara
                  </TableCell>
                </TableRow>
                <TableRow key="2">
                <TableCell>
                    <FaEye />
                  </TableCell>
                  <TableCell>
                    Eden Hazard
                  </TableCell>
                  <TableCell>
                    hazard@gmail.com
                  </TableCell>
                  <TableCell>
                    9874384873
                  </TableCell>
                  <TableCell>
                    Hetauda
                  </TableCell>
                </TableRow>
                <TableRow key="3">
                <TableCell>
                    <FaEye />
                  </TableCell>
                  <TableCell>
                    Costa
                  </TableCell>
                  <TableCell>
                    costa@gmail.com
                  </TableCell>
                  <TableCell>
                    9874384873
                  </TableCell>
                  <TableCell>
                    Pokhara
                  </TableCell>
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
