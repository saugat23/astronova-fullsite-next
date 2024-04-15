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
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { FaUser } from "react-icons/fa";

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
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [search, setSearch] = useState("");

  return (
    <section className="overflow-hidden h-auto p-4">
      <div className="bg-white py-8 px-4 w-full">
        <div className="flex flex-col md:flex-row justify-start md:justify-between w-full items-start md:items-center space-y-3 md:space-y-0">
          <div className="flex justify-center items-center space-x-6">
            <Button
              type="button"
              className="py-2 px-6 bg-[#5C74FF] text-white rounded-xl hover:bg-[#2e3a80] font-opensans font-semibold"
            >
              <Link href="campaign/add_campaign">Add Campaign</Link>
            </Button>
            <Button
              type="button"
              className="py-2 px-6 bg-[#5C74FF] text-white rounded-xl hover:bg-[#2e3a80] font-opensans font-semibold"
              onPress={onOpen}
            >
              Add Testimonial
            </Button>
            <Modal
              isOpen={isOpen}
              onClose={onClose}
              onOpenChange={onOpenChange}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Add Testimonial
                    </ModalHeader>
                    <ModalBody>
                      <Input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        id="inputFile"
                        name="inputFile"
                      />
                      <label
                        htmlFor="inputFile"
                        className="max-w-md w-40 h-32 bg-[url('/assets/inputfile.svg')] bg-no-repeat bg-contain mx-auto cursor-pointer"
                      ></label>
                      <Input
                        autoFocus
                        labelPlacement="outside"
                        startContent={<FaUser />}
                        label="Full Name"
                        placeholder="Enter your Full Name"
                        variant="faded"
                        className="font-poppins my-4"
                      />
                      <Select
                        labelPlacement="outside"
                        label="Campaign Name"
                        placeholder="Choose an Option"
                        variant="faded"
                        className="my-4"
                      >
                        <SelectItem value="Tinkering Labs Project">
                          Tinkering Labs Project
                        </SelectItem>
                        <SelectItem value="Planetorium Labs">
                          Planetorium Labs
                        </SelectItem>
                        <SelectItem value="Astronova Foundation's Tinkering Labs">
                          Astronova Foundation&apos;s Tinkering Lab
                        </SelectItem>
                      </Select>
                      <Textarea
                        labelPlacement="outside"
                        label="Description"
                        placeholder="Enter your description"
                        className="max-w-md w-full my-4"
                      />
                    </ModalBody>
                    <ModalFooter>
                      <Button color="success" variant="flat" onPress={onClose}>
                        Submit Testimonial
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
          <div className="block md:inline">
            <input
              type="text"
              id="campaignSearch"
              name="campaignSearch"
              className="p-3 bg-transparent w-80 font-montserrat text-sm font-medium text-[#1f1f1f] outline-none border border-[#E0D8FF] rounded-lg block md:inline-block"
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
