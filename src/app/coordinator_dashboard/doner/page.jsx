"use client";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
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

const donorItems = [
  {
    id: 113,
    name: "John Doe",
    emailID: "johndoe@gmail.com",
    contact: "9875454354",
    status: "active",
    noOfTransaction: "4",
  },
  {
    id: 113,
    name: "Eden Hazard",
    emailID: "hazard@gmail.com",
    contact: "9847382473",
    status: "active",
    noOfTransaction: "2",
  },
  {
    id: 113,
    name: "Diego Costa",
    emailID: "costa@gmail.com",
    contact: "9873824723",
    status: "active",
    noOfTransaction: "9",
  },
];

const Page = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [items, setItems] = useState(donorItems);
  const [search, setSearch] = useState("");

  return (
    <section className="overflow-hidden h-auto p-4">
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
              className="p-3 bg-transparent w-96 font-montserrat text-sm font-medium text-[#1f1f1f] outline-none border border-[#E0D8FF] rounded-lg"
              placeholder="Search by Doners name"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="py-4 w-full">
          <Table aria-label="Donor Table" className="">
            <TableHeader>
              <TableColumn className="w-[10%]">
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
                    <TableRow key={item.id}>
                      <TableCell className="cursor-pointer">
                        <Button
                          type="button"
                          className="p-0 bg-transparent"
                          onPress={onOpen}
                        >
                          <FaEye />
                        </Button>
                      </TableCell>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.emailID}</TableCell>
                      <TableCell>{item.contact}</TableCell>
                      <TableCell>{item.status}</TableCell>
                      <TableCell>{item.noOfTransaction}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Donor Details
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
    </section>
  );
};

export default Page;
