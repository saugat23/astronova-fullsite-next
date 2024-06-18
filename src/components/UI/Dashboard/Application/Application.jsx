"use client";

import React, { useState } from "react";
import { FaEye, FaPen } from "react-icons/fa";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const applicantItems = [
  {
    name: "John Doe",
    email: "john@gmail.com",
    phone: "9864673746",
    address: "Pokhara",
  },
  {
    name: "Eden Hazard",
    email: "hazard@gmail.com",
    phone: "9883928938",
    address: "Hetauda",
  },
  {
    name: "Diego Costa",
    email: "diego@gmail.com",
    phone: "9887439888",
    address: "Kathmandu",
  },
];

const Page = () => {
  const [items, setItems] = useState(applicantItems);
  const [search, setSearch] = useState("");

  return (
    <>
      <section className="h-auto overflow-visible p-4">
        <div className="w-full bg-white px-4 py-8">
          <div className="flex w-full items-center justify-between">
            <h3 className="cursor-pointer font-kumbhsans text-xs font-semibold tracking-wider md:text-sm xl:text-base">
              Form Response
            </h3>
            <div>
              <input
                type="text"
                id="applicantSearch"
                name="applicantSearch"
                className="w-60 rounded-lg border border-[#E0D8FF] bg-transparent p-3 font-kumbhsans text-sm font-medium text-[#1f1f1f] outline-none md:w-96"
                placeholder="Search by Applicant's Name"
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
                <TableColumn className="w-[20%] text-center">Name</TableColumn>
                <TableColumn className="text-center">Email ID</TableColumn>
                <TableColumn className="text-center">Phone Number</TableColumn>
                <TableColumn className="text-center">Address</TableColumn>
              </TableHeader>
              <TableBody>
                {items
                  .filter((item) => {
                    if (search.toLowerCase() === "") {
                      return item;
                    } else {
                      return item.name.toLowerCase().includes(search);
                    }
                  })
                  .map((item) => {
                    return (
                      <TableRow key="1">
                        <TableCell>
                          <FaEye />
                        </TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell>{item.phone}</TableCell>
                        <TableCell>{item.address}</TableCell>
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
