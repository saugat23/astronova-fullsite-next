"use client";
import React, { useState } from "react";
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
import Link from "next/link";

const campaign_items = [
  {
    title: "Astronova Foundation's Tinkering Lab",
    status: 80,
    target: "6,264,695,36",
    achieved: "0",
    pleased: "0",
    peopleDonated: "7",
  },
  {
    title: "Planetorium Lab",
    status: 50,
    target: "560,000,000",
    achieved: "56,000",
    pleased: "0",
    peopleDonated: "4",
  },
  {
    title: "Tinkering Labs Project",
    status: 20,
    target: "14,000,000",
    achieved: "1,00,000",
    pleased: "6",
    peopleDonated: "2",
  },
];

const Page = () => {
  const [items, setItems] = useState(campaign_items);
  const [search, setSearch] = useState("");

  return (
    <section className="overflow-visible h-auto p-4">
      <div className="bg-white py-8 px-4 w-full">
        <div className="flex justify-between w-full items-center">
          <div className="flex justify-center items-center">
            <button
              type="button"
              className="py-4 px-4 md:px-6 bg-[#5C74FF] text-white rounded-xl hover:bg-[#2e3a80] font-opensans text-xs md:text-sm xl:text-base font-semibold"
            >
              <Link href="news_blogs/add_news_blog">Add News Blog</Link>
            </button>
          </div>
          <div>
            <input
              type="text"
              id="campaignSearch"
              name="campaignSearch"
              className="p-3 bg-transparent w-60 md:w-96 font-montserrat text-sm font-medium text-[#1f1f1f] outline-none border border-[#E0D8FF] rounded-lg"
              placeholder="Search by Campaign name"
              onChange={(e) => setSearch(e.target.value)}
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
                      <FaEye className="cursor-pointer" />
                    </TableCell>
                    <TableCell>
                      <FaPen className="cursor-pointer" />
                    </TableCell>
                    <TableCell>{item.title}</TableCell>
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
                            value={item.status}
                            className="w-full"
                          />
                        </h4>
                      </div>
                    </TableCell>
                    <TableCell>रु {item.target}</TableCell>
                    <TableCell>रु {item.achieved}</TableCell>
                    <TableCell>{item.pleased}%</TableCell>
                    <TableCell>{item.peopleDonated}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default Page;
