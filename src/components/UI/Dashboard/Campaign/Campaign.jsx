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
  const [previewUrl, setPreviewUrl] = useState({
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
    setPreviewUrl((prevUrls) => ({
      ...prevUrls,
      img: URL.createObjectURL(file),
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
    camp.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="h-auto overflow-hidden p-4">
      <div className="w-full bg-white px-4 py-8">
        <div className="flex w-full flex-col items-start justify-start space-y-3 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div className="flex items-center justify-center space-x-6">
            <Link href="campaign/add_campaign">
              <Button
                type="button"
                className="rounded-xl bg-[#5C74FF] px-6 py-2 font-opensans font-semibold text-white hover:bg-[#2e3a80]"
              >
                Add Campaign
              </Button>
            </Link>
            <Button
              type="button"
              className="rounded-xl bg-[#5C74FF] px-6 py-2 font-opensans font-semibold text-white hover:bg-[#2e3a80]"
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
                          className="mx-auto flex h-32 w-full cursor-pointer flex-col items-center justify-center"
                          style={{
                            backgroundImage: `url(${previewUrl.img || "/assets/inputfile.svg"})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        >
                          Add Image
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
                          className="rounded-lg border border-gray-300 bg-gray-100 p-2 font-poppins font-normal outline-none"
                          onChange={handleTestimonialChange}
                          value={testimonialData.name}
                        />
                        <label htmlFor="campaign_id">Campaign Name</label>
                        <select
                          placeholder="Choose an Option"
                          className="rounded-lg border border-gray-300 bg-gray-100 p-2 font-poppins font-normal outline-none"
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
                                className="bg-white p-2 hover:bg-gray-100"
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
                          className="h-48 w-full resize-none rounded-lg border border-gray-300 bg-gray-100 p-2 font-poppins font-normal outline-none"
                        />

                        <button
                          type="submit"
                          className="px-auto w-full rounded-lg bg-[#5C74FF] py-3 font-inter text-sm font-semibold text-white hover:bg-[#2e3a80] md:text-base xl:text-lg"
                        >
                          {loading ? (
                            <div className="mx-auto flex w-1/2 items-center justify-center gap-4">
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
              className="block w-80 rounded-lg border border-[#E0D8FF] bg-transparent p-3 font-kumbhsans text-sm font-medium text-[#1f1f1f] outline-none md:inline-block"
              placeholder="Search by Campaign name"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full py-4">
          <table aria-label="Campaign Table" className="campaign_table w-full">
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
                              <SheetDescription className="mt-6 flex flex-col items-start justify-center space-y-3">
                                <div className="h-auto w-full">
                                  <Image
                                    priority
                                    src={item.featured_img}
                                    alt="Campaign Featured Photo"
                                    width={800}
                                    height={600}
                                    className="h-auto w-full rounded-lg object-cover object-center"
                                    quality={75}
                                  />
                                </div>
                                <h1 className="font-inter text-base font-semibold">
                                  {item.title}
                                </h1>
                                <p className="font-inter text-sm font-semibold text-gray-700">
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
                          <FaPen className="ml-10 cursor-pointer text-center" />
                        </Link>
                      </td>
                      <td>{item.title}</td>
                      <td className="flex w-full items-center justify-start space-x-2">
                        <div>
                          <FaRunning />
                        </div>
                        <div className="flex w-full flex-col items-start justify-center">
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
