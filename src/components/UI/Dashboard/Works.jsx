"use client"
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
  Button,
} from "@nextui-org/react";
import { getAllEvents } from "../../../app/services/api";

const Works = () => {
    
    const [events, setEvents] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchData = async () => {
          try {
            const eventsData = await getAllEvents();
            setEvents(eventsData);
            console.log(events);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, []);

      const filteredEvents = events.filter((event) =>
      event.title.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <>
        <section className="overflow-visible h-auto p-4">
          <div className="bg-white py-8 px-4 w-full">
            <div className="flex justify-between w-full items-center">
              <div className="font-montserrat tracking-wider font-semibold md:text-sm lg:text-base cursor-pointer flex justify-center items-center">
                <Button
                  type="button"
                  className="py-2 px-2 md:px-6 bg-[#5C74FF] text-white rounded-xl hover:bg-[#2e3a80] font-opensans font-semibold"
                >
                  <Link href="works/add_work">Add New Works</Link>
                </Button>
              </div>
              <div>
                <input
                  type="text"
                  id="workSearch"
                  name="workSearch"
                  className="p-2 md:p-3 bg-transparent w-60 md:w-96 font-montserrat md:text-xs lg:text-sm font-medium text-[#1f1f1f] outline-none border border-[#E0D8FF] rounded-lg"
                  placeholder="Search by Work Title"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="py-4 w-full">
              <Table aria-label="Work Table">
                <TableHeader>
                  <TableColumn className="w-[10%]">
                    <FaEye />
                  </TableColumn>
                  <TableColumn className="w-[10%]">Edit</TableColumn>
                  <TableColumn>Event Title</TableColumn>
                  <TableColumn>Short Description</TableColumn>
                </TableHeader>
                <TableBody>
                  {
                  (search === "" ? events : filteredEvents) 
                    .map((event) => {
                      return (
                        <TableRow key={event.event_id}>
                          <TableCell>
                            <FaEye />
                          </TableCell>
                          <TableCell>
                            <FaPen />
                          </TableCell>
                          <TableCell>
                            {event.title}
                          </TableCell>
                          <TableCell>
                            {event.description}
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
}

export default Works