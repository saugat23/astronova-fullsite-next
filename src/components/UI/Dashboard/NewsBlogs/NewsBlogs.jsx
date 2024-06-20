"use client";
import React, { useEffect, useState } from "react";
import { FaEye, FaPen } from "react-icons/fa";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import Link from "next/link";

const Page = ({ data }) => {
  const items = data.news_blogs;
  const [search, setSearch] = useState("");

  return (
    <section className="h-auto overflow-visible p-4">
      <div className="w-full bg-white px-4 py-8">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center justify-center">
            <Link href="news_blogs/add_news_blog">
              <button
                type="button"
                className="rounded-xl bg-[#5C74FF] px-4 py-2 font-opensans text-xs font-semibold text-white hover:bg-[#2e3a80] md:px-6 md:text-sm xl:text-base"
              >
                Add News Blog
              </button>
            </Link>
          </div>
          <div>
            <input
              type="text"
              id="campaignSearch"
              name="campaignSearch"
              className="w-60 rounded-lg border border-[#E0D8FF] bg-transparent p-3 font-kumbhsans text-sm font-medium text-[#1f1f1f] outline-none md:w-96"
              placeholder="Search by Campaign name"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full py-4">
          <Table aria-label="Donor Table">
            <TableHeader>
              <TableColumn className="w-1/5">
                <FaEye />
              </TableColumn>
              <TableColumn className="w-1/5">Edit</TableColumn>
              <TableColumn className="w-[30%] text-center">
                News Title
              </TableColumn>
              <TableColumn className="w-[30%] text-center">
                Blog Link
              </TableColumn>
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
                        <Link href={`news_blogs/edit_news_blog/${item.id}`}>
                          <FaPen className="cursor-pointer" />
                        </Link>
                      </TableCell>
                      <TableCell>{item.title}</TableCell>

                      <TableCell>
                        <Link href={item.blog_link} className="text-blue-400">
                          {item.blog_link}{" "}
                        </Link>
                      </TableCell>
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
