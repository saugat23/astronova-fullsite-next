"use client";
import React, { useEffect, useState } from "react";
import { FaEye, FaPen, FaRunning } from "react-icons/fa";
import { createTestimonial } from "../../../../app/services/api";
import Link from "next/link";
import { Progress } from "@nextui-org/react";
import Loader from "../../Loader/Loader";
import { toast } from "sonner";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../ui/sheet";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const Campaign = ({ data }) => {
  const campaign = data.campaigns;
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [testimonialData, setTestimonialData] = useState({
    name: "",
    campaign_id: "",
    description: "",
    img: "",
  });

  const handleTestimonialChange = (e) => {
    e.preventDefault();
    setTestimonialData({
      ...testimonialData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTestimonialImageChange = (e) => {
    const file = e.target.files[0];
    setTestimonialData((prevData) => ({
      ...prevData,
      img: file,
    }));
  };

  const handleTestimonialSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("name", testimonialData.name);
    formDataToSend.append("campaign_id", testimonialData.campaign_id);
    formDataToSend.append("description", testimonialData.description);

    if (testimonialData.img) {
      formDataToSend.append("img", testimonialData.img);
    }

    for (let [key, value] of formDataToSend.entries()) {
      console.log(key, value);
    }

    try {
      const response = await createTestimonial(formDataToSend);
      console.log("response", response);

      toast.success("Testimonial created successfully!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error creating work. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  const filteredCampaign = campaign.filter((camp) =>
    camp.title.toLowerCase().includes(search.toLowerCase())
  );

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
                      <form
                        onSubmit={handleTestimonialSubmit}
                        className="flex flex-col space-y-3"
                      >
                        <label
                          htmlFor="img"
                          className="w-full h-32 bg-[url('/assets/inputfile.svg')] bg-no-repeat bg-cover mx-auto cursor-pointer flex flex-col justify-center items-center"
                        >
                          <span className="bg-white p-2 rounded-lg">
                            Choose Image.
                          </span>
                        </label>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          id="img"
                          name="img"
                          onChange={handleTestimonialImageChange}
                        />
                        <label htmlFor="name">Full Name</label>
                        <input
                          name="name"
                          id="name"
                          placeholder="Enter your Full Name"
                          className="font-poppins p-2 rounded-lg font-normal border border-gray-300 outline-none bg-gray-100"
                          onChange={handleTestimonialChange}
                          value={testimonialData.name}
                        />
                        <label htmlFor="campaign_id">Campaign Name</label>
                        <select
                          placeholder="Choose an Option"
                          className="font-poppins p-2 rounded-lg font-normal border border-gray-300 outline-none bg-gray-100 "
                          name="campaign_id"
                          id="campaign_id"
                          onChange={handleTestimonialChange}
                          value={testimonialData.campaign_id}
                        >
                          {campaign.map((item) => {
                            return (
                              <option
                                key={item.id}
                                value={item.id}
                                className="p-2 bg-white hover:bg-gray-100"
                              >
                                {item.title}
                              </option>
                            );
                          })}
                        </select>
                        <label htmlFor="description">Description</label>
                        <textarea
                          name="description"
                          id="description"
                          onChange={handleTestimonialChange}
                          value={testimonialData.description}
                          placeholder="Enter your description"
                          className="w-full h-48 resize-none font-poppins p-2 rounded-lg font-normal border border-gray-300 outline-none bg-gray-100"
                        />

                        <button
                          type="submit"
                          className="bg-[#5C74FF] hover:bg-[#2e3a80] py-3 px-auto w-full rounded-lg font-inter font-semibold xl:text-lg md:text-base text-sm text-white"
                        >
                          {loading ? (
                            <div className="flex gap-4 items-center justify-center w-1/2 mx-auto">
                              <p>Submitting...</p> <Loader />
                            </div>
                          ) : (
                            "Submit"
                          )}
                        </button>
                      </form>
                    </ModalBody>
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
              className="p-3 bg-transparent w-80 font-kumbhsans text-sm font-medium text-[#1f1f1f] outline-none border border-[#E0D8FF] rounded-lg block md:inline-block"
              placeholder="Search by Campaign name"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="py-4 w-full">
          <table aria-label="Campaign Table" className="w-full campaign_table">
            <thead className="bg-[#f4f4f5]">
              <tr className="text-sm text-gray-500">
                <th>
                  <FaEye className="ml-4" />
                </th>
                <th>Edit</th>
                <th>Campaign&apos;s Title</th>
                <th>Status</th>
                <th>Target Amount</th>
                <th>Achieved</th>
                <th>Pleased %</th>
                <th>People Donated</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {(search === "" ? campaign : filteredCampaign)
                .slice()
                .reverse()
                .map((item) => {
                  return (
                    <tr key={item.id}>
                      <Sheet>
                        <td>
                          <SheetTrigger>
                            <FaEye className="cursor-pointer" />
                          </SheetTrigger>
                          <SheetContent>
                            <SheetHeader>
                              <SheetTitle>Campaign Details</SheetTitle>
                              <SheetDescription className="flex flex-col justify-center items-start space-y-3 mt-6">
                                <div className="w-full h-auto">
                                  <Image
                                    priority
                                    src={item.featured_img}
                                    alt="Campaign Featured Photo"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto rounded-lg object-center object-cover"
                                    quality={75}
                                  />
                                </div>
                                <h1 className="text-base font-semibold font-inter">
                                  {item.title}
                                </h1>
                                <p className="text-sm font-semibold font-inter text-gray-700">
                                  Description{" "}
                                  <span className="block">
                                    {item.description}
                                  </span>
                                </p>
                              </SheetDescription>
                            </SheetHeader>
                          </SheetContent>
                        </td>
                      </Sheet>
                      <td className="text-center">
                        <Link
                          href={`/coordinator_dashboard/campaign/edit_campaign/${item.id}`}
                        >
                          <FaPen className="cursor-pointer text-center ml-10" />
                        </Link>
                      </td>
                      <td>{item.title}</td>
                      <td className="flex justify-start items-center space-x-2 w-full">
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
                              value={item.percentage}
                              className="w-full"
                            />
                          </h4>
                        </div>
                      </td>
                      <td>रु {item.national_fund}</td>
                      <td>रु {item.achieved === null ? "0" : item.achieved}</td>
                      <td>{item.percentage} %</td>
                      <td>0</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Campaign;
