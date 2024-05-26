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
      <section className="overflow-visible h-auto p-4">
        <div className="bg-white py-8 px-4 w-full">
          <div className="flex justify-between w-full items-center">
            <h3 className="font-montserrat tracking-wider font-semibold text-xs md:text-sm xl:text-base cursor-pointer">
              Form Response
            </h3>
            <div>
              <input
                type="text"
                id="applicantSearch"
                name="applicantSearch"
                className="p-3 bg-transparent w-60 md:w-96 font-montserrat text-sm font-medium text-[#1f1f1f] outline-none border border-[#E0D8FF] rounded-lg"
                placeholder="Search by Applicant's Name"
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
                <TableColumn className="w-[20%]">Name</TableColumn>
                <TableColumn>Email ID</TableColumn>
                <TableColumn>Phone Number</TableColumn>
                <TableColumn>Address</TableColumn>
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
