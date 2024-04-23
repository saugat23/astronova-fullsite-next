"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { storage } from '@/app/firebase';
import { FaEye, FaPen, FaRunning } from "react-icons/fa";
import { getAllCampaign, createTestimonial } from "../../../app/services/api";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Progress } from "@nextui-org/react";
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
import { FaUser } from "react-icons/fa";

const Campaign = () => {
  // const [imagefeatureUpload, setImagefeatureUpload] = useState(null);
  const [campaign, setCampaign] = useState([]);
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
    const [search, setSearch] = useState("");

    // const [formData, setFormData] = useState({
    //     coordinator_id: 12,
    //     name: '',
    //     campaign_name: '',
    //     description: '',
    //     image_url: '',
    //   });

    //   useEffect(() => {
    //     const uploadFile = async (file, fileType) => {
    //       if (!file) return;
    
    //       const fileRef = ref(storage, `testimonial/${file.name}`);
    
    //       try {
    //         await uploadBytes(fileRef, file);
    //         const url = await getDownloadURL(fileRef);
    
    //         setFormData((prevData) => ({
    //           ...prevData,
    //           [fileType]: url,
    //         }));
    //       } catch (error) {
    //         console.error('Error uploading file:', error);
    //       }
    //     };
    
    //     uploadFile(imagefeatureUpload, 'image_url');
    //   }, [imagefeatureUpload]);

    //   const handleInputChange = (e) => {
    //     e.preventDefault();
    //     const { name, value } = e.target;
    //     setFormData((prevData) => ({
    //       ...prevData,
    //       [name]: value,
    //     }));
    //   };

    //   const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     try {
    //       console.log(formData);
    //       const response = await createTestimonial(formData);
    //       console.log("response", response);
    //       toast.success('Testimonial created successfully!', {
    //         position: toast.POSITION.TOP_RIGHT,
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //     });
    //     } catch (error) {
    //       console.error('Error:', error);
    //       toast.error('Error creating Testimonial. Please try again!', {
    //         position: toast.POSITION.TOP_RIGHT,
    //         autoClose: 5000, 
    //         hideProgressBar: false,
    //     });
    //     }
    //   };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllCampaign();
                setCampaign(response);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
  
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
                        // onSubmit={handleSubmit}
                        >
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
                        </form>
                        <Button color="success" variant="flat" onPress={onClose} type='submit'>
                          Submit Testimonial
                        </Button>
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
                {(search === "" ? campaign : filteredCampaign).slice().reverse() 
                  .map((item) => {
                    return (
                      <TableRow key={item.campaign_id}>
                        <TableCell>
                          <FaEye className="cursor-pointer" />
                        </TableCell>
                        <TableCell>
                        <Link href={`/coordinator_dashboard/campaign/edit_campaign/${item.campaign_id}`}>
                          <FaPen className="cursor-pointer" />
                        </Link>
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
                        <TableCell>रु {item.target_fund_rupees}</TableCell>
                        <TableCell>रु {item.achieved_fund === null ? "0" : item.achieved_fund}</TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>0</TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    );
}

export default Campaign