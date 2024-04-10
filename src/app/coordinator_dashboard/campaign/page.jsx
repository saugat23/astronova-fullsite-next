"use client";
import React from "react";
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
  Checkbox,
  Input,
  Label,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { FaUser } from "react-icons/fa";

const Page = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  return (
    <section className="overflow-visible h-auto p-4">
      <div className="bg-white py-8 px-4 w-full">
        <div className="flex justify-between w-full items-center">
          <div className="flex justify-center items-center lg:space-x-6">
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
                      <Input type="file" className="hidden" accept="image/*" id="inputFile" name="inputFile"/>
                      <label htmlFor="inputFile" className="max-w-md w-40 h-32 bg-[url('/assets/inputfile.svg')] bg-no-repeat bg-contain mx-auto cursor-pointer"></label>
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
          <div>
            <input
              type="text"
              id="donorSearch"
              name="donorSearch"
              className="p-3 bg-transparent w-80 font-montserrat text-base font-medium text-[#1f1f1f] outline-none border border-[#E0D8FF] rounded-lg"
              placeholder="Search by Campaign name"
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
              <TableRow key="1">
                <TableCell>
                  <FaEye className="cursor-pointer" />
                </TableCell>
                <TableCell>
                  <FaPen className="cursor-pointer" />
                </TableCell>
                <TableCell>Astronova Foundation&apos;s Tinkering Lab</TableCell>
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
                        value={80}
                        className="w-full"
                      />
                    </h4>
                  </div>
                </TableCell>
                <TableCell>रु 6,264,695.36</TableCell>
                <TableCell>रु 0</TableCell>
                <TableCell>0%</TableCell>
                <TableCell>7</TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>
                  <FaEye className="cursor-pointer" />
                </TableCell>
                <TableCell>
                  <FaPen className="cursor-pointer" />
                </TableCell>
                <TableCell>Planetorium&apos;s Lab</TableCell>
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
                        value={60}
                        className="w-full"
                      />
                    </h4>
                  </div>
                </TableCell>
                <TableCell>रु 6,264,695.36</TableCell>
                <TableCell>रु 0</TableCell>
                <TableCell>0%</TableCell>
                <TableCell>7</TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>
                  <FaEye className="cursor-pointer" />
                </TableCell>
                <TableCell>
                  <FaPen className="cursor-pointer" />
                </TableCell>
                <TableCell>Planetorium&apos;s Lab</TableCell>
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
                        value={60}
                        className="w-full"
                      />
                    </h4>
                  </div>
                </TableCell>
                <TableCell>रु 6,264,695.36</TableCell>
                <TableCell>रु 0</TableCell>
                <TableCell>0%</TableCell>
                <TableCell>7</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default Page;
