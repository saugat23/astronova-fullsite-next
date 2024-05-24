"use client";
import React, { useEffect, useState } from "react";
import { FaEye, FaPen } from "react-icons/fa";
import { getAllNews } from "../../services/api";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import Link from "next/link";

const Page = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllNews();
      console.log(response.news_blogs);
      setItems(response.news_blogs);
    };
    fetchData();
  });

  return (
    <section className="overflow-visible h-auto p-4">
      <div className="bg-white py-8 px-4 w-full">
        <div className="flex justify-between w-full items-center">
          <div className="flex justify-center items-center">
            <button
              type="button"
              className="py-2 px-4 md:px-6 bg-[#5C74FF] text-white rounded-xl hover:bg-[#2e3a80] font-opensans text-xs md:text-sm xl:text-base font-semibold"
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
              <TableColumn className="w-1/5">
                <FaEye />
              </TableColumn>
              <TableColumn className="w-1/5">Edit</TableColumn>
              <TableColumn className="w-[30%]">News Title</TableColumn>
              <TableColumn className="w-[30%]">Blog Link</TableColumn>
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
