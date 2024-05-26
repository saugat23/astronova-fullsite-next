"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
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

const Donor = () => {
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
    // const donors = data;
    const donors = [];
    const [selectedDonor, setSelectedDonor] = useState(null);
    const [search, setSearch] = useState("");
  
    const filteredDonors = donors.filter((donor) =>
      donor.first_name.toLowerCase().includes(search.toLowerCase())
    );
  
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
              <TableBody emptyContent={"No rows to display."}>
                {(search === "" ? donors : filteredDonors).map((donor) => {
                  return (
                    <TableRow key={donor.user_id}>
                      <TableCell className="cursor-pointer">
                        <Button
                          type="button"
                          className="p-0 bg-transparent"
                          onPress={onOpen}
                        >
                          <FaEye />
                        </Button>
                      </TableCell>
                      <TableCell>{donor.user_id}</TableCell>
                      <TableCell>{donor.first_name}</TableCell>
                      <TableCell>{donor.email}</TableCell>
                      <TableCell>
                        <span>
                          <Image
                            src="/assets/nepalflagdashboard.svg"
                            alt=""
                            height={18}
                            width={18}
                            priority
                          />
                        </span>{" "}
                        {donor.phone}
                      </TableCell>
                      <TableCell>{donor.role}</TableCell>
                      <TableCell>{0}</TableCell>
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
                  <div
                    className={`modal-container_Dashboard popup_dashboard h-full grid bg-white p-4 gap-1 w-full m-4  rounded-xl overflow-scroll`}
                  >
                    <div className=" flex justify-between">
                      <div className=" flex items-center gap-2">
                        <p className=" text-base">Donor Details</p>
                        <div className=" px-4 bg-fuchsia-300 rounded-full">
                          <p className=" text-sm">{donors.user_id}</p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className=" flex justify-between"></div>
  
                    <div className="popup_flex flex justify-between">
                      <div>
                        <div className=" pt-2 flex flex-col items-start gap-1">
                          <div className=" flex items-start gap-2">
                            <Image
                              className=" rounded-full"
                              src="/images/rank2.png"
                              alt=""
                              height={30}
                              width={30}
                            />
                            <div className=" flex flex-col gap-2">
                              <div>
                                <p className=" text-base font-semibold">
                                  {donors.first_name}
                                </p>
                                <p className=" text-base text-gray-400">
                                  {donors.email}
                                </p>
                                <p className=" text-base text-gray-400">
                                  {donors.phone}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" flex flex-col items-start">
                        <div className=" flex flex-col items-start">
                          <p className=" text-gray-500">Status</p>
                          <div className=" flex gap-1.5 items-center px-4 py-1 rounded-full border border-black">
                            <div
                              className={`h-1 w-1 p-1.5 rounded-full bg-green-500`}
                            ></div>
                            <p className=" text-lg">Completed</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className=" flex flex-col gap-2">
                      <p className=" text-sm text-gray-400">Items</p>
                      <div className="popup_flex flex justify-between">
                        <div>
                          <p className="  text-base font-semibold">
                            Lorem ipsum dolor sit
                          </p>
                          <p className=" text-sm text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur
                            <br /> adipiscing elit.{" "}
                          </p>
                        </div>
                        <div>
                          <p className=" text-base">रु 78,231</p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="popup_flex flex justify-between">
                      <p className=" text-base font-semibold">Total Amount</p>
                      <p className=" text-base">रु 96,470</p>
                    </div>
                    <div className=" flex flex-col gap-1">
                      <p className=" text-base text-gray-600">Description</p>
                      <p className=" text-sm text-black">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec convallis, mauris nec pharetra mollis, quam tortor
                        gravida libero, at consectetur lectus nulla quis nisi.{" "}
                      </p>
                    </div>
                    <hr />
                    <div className="popup_flex flex justify-between items-center">
                      <button className=" w-full py-2 px-8 rounded-lg bg-blue-600 text-white">
                        <div className=" flex gap-3 items-center justify-center">
                          <p className=" text-lg text-white">Download PDF</p>
                        </div>
                      </button>
                    </div>
                  </div>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </section>
    );
}

export default Donor