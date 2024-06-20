"use client";
import React, { useState } from "react";
import Image from "next/image";
import ReactPlayer from "react-player/youtube";
import {
  Progress,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import CampaignDonationContainer from "./CampaignDonationContainer";
import CampaignTopDonor from "./CampaignTopDonor";
import SupportStudentPNG from "../../../../../../public/supportstudents.png";
import Logo from "../../../../../../public/assets/logo.png";
import DonationCampaign from "../../../../../../public/assets/donation-campaign-donation.svg";

const CampaignById = ({ data }) => {
  const campaign = data;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPayment, setSelectedPayment] = useState("khalti");
  const [amount, setAmount] = useState("");
  const [featuredImage, setFeaturedImage] = useState(campaign.featured_img);

  const handleAmountClick = (value) => {
    setAmount(value);
  };

  if (!campaign) {
    return <div>No campaign data available.</div>;
  }

  console.log(campaign);

  const handleGalleryClick = (image) => {
    setFeaturedImage(image);
  };

  return (
    <section className="max-w-screen mx-auto h-auto w-[90%] overflow-hidden pt-8 lg:w-[70%] lg:pt-10 xl:pt-12">
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="mt-16 flex flex-col items-start justify-center space-y-4 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 2xl:py-16"
      >
        <h3 className="font-opensans text-sm font-bold text-[#1e598a] sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          {campaign.title}
        </h3>
        <p className="font-opensans text-xs font-semibold text-[#1e598a] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          {campaign.description}
        </p>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="mx-auto flex h-auto w-[90%] flex-col items-start justify-around py-4 lg:flex-row xl:space-x-12"
      >
        <div className="flex h-auto w-full flex-col items-start justify-center space-y-6 lg:w-3/4">
          <div className="flex w-full items-center justify-center">
            <Image
              src={featuredImage}
              alt="Campaign Featured Image"
              priority
              width={500}
              height={400}
              className="h-96 w-full object-cover object-center"
              quality={75}
            />
          </div>
          <div className="flex w-full items-center justify-stretch space-x-4">
            {campaign.gallery.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Campaign Gallery Image ${index + 1}`}
                priority
                width={100}
                height={80}
                className="h-full w-1/4 cursor-pointer"
                onClick={() => handleGalleryClick(img)}
                quality={75}
              />
            ))}
          </div>
        </div>{" "}
        <div className="flex w-full flex-col items-center justify-center space-y-3 rounded-lg bg-white p-6 shadow-xl lg:w-1/4">
          <h3 className="font-opensans text-xs font-semibold text-[#4a90e2] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            {campaign.achieved}
            25000
          </h3>
          <p className="font-opensans text-[10px] font-semibold text-[#8692a2] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
            raised of $62,473,88 goal
          </p>
          <Progress
            size="md"
            aria-label="Loading..."
            color="success"
            value={campaign.percentage}
            value={25}
            className="w-full"
          />
          <div className="flex w-full flex-col items-center justify-center space-y-4 pt-6">
            <Button
              type="button"
              onClick={() => onOpen()}
              className="px-auto w-full border border-[#4a90e2] bg-[#4a90e2] py-4 text-[10px] text-white sm:text-xs md:text-sm xl:text-lg"
            >
              Donate
            </Button>
            <button
              type="button"
              className="px-auto w-full border border-[#4a90e2] bg-white py-4 text-[10px] text-[#4a90e2] sm:text-xs md:text-sm xl:text-lg"
            >
              Share with friends
            </button>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="flex flex-col items-start justify-center space-y-8 xl:py-8"
      >
        <h3 className="font-opensans text-sm font-bold text-[#1e598a] sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          Why This Campaign?
        </h3>
        <p className="font-opensans text-xs font-semibold text-[#1e598a] sm:text-sm md:text-base lg:text-lg xl:text-xl">
          {campaign.description}
        </p>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="flex flex-col items-center justify-center space-y-8 py-6 xl:py-8"
      >
        <h3 className="font-opensans text-sm font-bold text-[#1e598a] sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          Watch this Story
        </h3>
        <div className="flex aspect-square w-full items-center justify-center lg:aspect-[5/2]">
          <ReactPlayer
            controls="true"
            className="aspect-video h-full w-full"
            width={1200}
            height={675}
            url={campaign.video}
          />
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="flex flex-col items-center justify-center space-y-8 xl:py-8"
      >
        <h3 className="font-opensans text-sm font-bold text-[#1e598a] sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          Donate and get Rewards!
        </h3>
        <div className="flex w-full flex-col items-center justify-stretch space-x-0 space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
          <div className="flex flex-col items-center justify-center space-y-6">
            <CampaignDonationContainer
              imgSrc={SupportStudentPNG}
              title="Get Swag Collection"
              description="10 Custom SHELTER 1x1 T-Shirt. We will add your name to our donor name list"
              amount="250.00"
            />
            <CampaignDonationContainer
              imgSrc={SupportStudentPNG}
              title="Get Chance to visit 4 different place"
              description="10 Custom SHELTER 1x1 T-Shirt. We will add your name to our donor name list"
              amount="2500.00"
            />
          </div>
          <div className="flex flex-col items-center justify-center space-y-6">
            <CampaignDonationContainer
              imgSrc={SupportStudentPNG}
              title="Get 2 Days Night stay in Hetauda"
              description="10 Custom SHELTER 1x1 T-Shirt. We will add your name to our donor name list"
              amount="2000.00"
            />
            <CampaignDonationContainer
              imgSrc={SupportStudentPNG}
              title="Get Annapurna Base Camp Hike Led by You"
              description="x1 SHELTER Run/Hike led by you. We will create or follow your route and pace. "
              amount="5000.00"
            />
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="flex w-full flex-col items-start justify-between space-x-0 space-y-4 py-6 lg:flex-row lg:space-x-4 lg:space-y-0 xl:py-8"
      >
        <div className="flex w-full flex-col items-center justify-center space-y-6 lg:w-1/2">
          <h3 className="self-start font-opensans text-sm font-bold text-[#1e598a] sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            Organizer
          </h3>
          <div className="flex w-full items-center justify-start space-x-4 rounded-lg border border-[#d6d6d6] p-4">
            <div className="w-1/5">
              <Image src={Logo} alt="Logo" className="w-full" />
            </div>
            <div className="flex flex-col items-start justify-center">
              <h3 className="font-poppins text-xs font-semibold text-[#2f435a] md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
                Astronova Foundation
              </h3>
              <p className="text-[10px] text-[#5a5f6d] md:text-xs lg:text-sm 2xl:text-base">
                Non-Profit Organization
              </p>
              <button className="text-[10px] text-[#4aa3ef] md:text-xs lg:text-sm 2xl:text-base">
                Send a Message
              </button>
            </div>
          </div>
          <h3 className="self-center font-opensans text-sm font-bold text-[#1e598a] sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            DONATE NOW
          </h3>
          <div className="flex w-full items-center justify-center">
            <Image
              src={DonationCampaign}
              alt="Donation Image"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-start justify-start space-y-6 lg:w-1/2">
          <h3 className="self-start font-opensans text-sm font-bold text-[#1e598a] sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            Top Donors
          </h3>
          <div className="flex w-full flex-col items-center justify-center space-y-4">
            <CampaignTopDonor
              name="Sam Johnston"
              date="March 20, 2024"
              amount="$500.00"
            />
            <CampaignTopDonor
              name="John Doe"
              date="April 20, 2024"
              amount="$7500.00"
            />
            <CampaignTopDonor
              name="Eden Hazard"
              date="September 7, 2023"
              amount="Rs 2900.00"
            />
            <CampaignTopDonor
              name="Diego Cosat"
              date="January 13, 2021"
              amount="Rs 5500.00"
            />
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="flex flex-col items-center justify-center space-y-8 xl:py-8"
      >
        <h3 className="self-start font-opensans text-sm font-bold text-[#1e598a] sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          What our Donor Says
        </h3>
        <div className="flex w-full items-end justify-end xl:py-12">
          <div className="flex items-center justify-end space-x-8">
            <div className="flex flex-col items-center justify-center space-y-4">
              {/* <img src="" alt="" /> */}
            </div>
          </div>
        </div>
      </div>

      <Modal size="5xl" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex h-full w-full flex-col gap-1">
                Payment Method
              </ModalHeader>
              <ModalBody className="flex h-full w-full flex-row items-center justify-center">
                <div className="flex h-full w-1/4 flex-col items-center justify-start">
                  <div className="flex w-full justify-between">
                    <div>
                      <input
                        type="radio"
                        id="khalti"
                        name="payment"
                        value="khalti"
                        checked={selectedPayment === "khalti"}
                        onChange={() => setSelectedPayment("khalti")}
                      />
                      <label htmlFor="khalti" className="ml-4">
                        <Image
                          src="/assets/khalti.svg"
                          alt="khalti svg"
                          width={250}
                          height={80}
                          className="inline w-20"
                        />
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="paypal"
                        name="payment"
                        value="paypal"
                        checked={selectedPayment === "paypal"}
                        onChange={() => setSelectedPayment("paypal")}
                      />
                      <label htmlFor="paypal" className="ml-4">
                        <Image
                          src="/assets/paypal.svg"
                          alt="paypal svg"
                          width={250}
                          height={80}
                          className="inline w-20"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="h-auto w-full">
                    <Image
                      src="/assets/donationmodalanimation.svg"
                      alt="Donation Animation"
                      width={600}
                      height={1200}
                      className="h-full w-full"
                    />
                  </div>
                </div>
                <div className="flex h-full w-3/4 flex-col items-center justify-center space-y-3 rounded-xl border border-gray-200 p-3">
                  <div className="flex w-full items-center justify-between space-x-3">
                    <div className="flex w-full flex-col justify-center space-y-2">
                      <label
                        htmlFor="first_name"
                        className="font-inter font-semibold"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        placeholder="Your First Name"
                        className="w-full rounded-lg border border-gray-200 bg-gray-100 p-2 outline-none"
                      />
                    </div>
                    <div className="flex w-full flex-col justify-center space-y-2">
                      <label
                        htmlFor="last_name"
                        className="font-inter font-semibold"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        placeholder="Your Last Name"
                        className="w-full rounded-lg border border-gray-200 bg-gray-100 p-2 outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between space-x-3">
                    <div className="flex w-full flex-col justify-center space-y-2">
                      <label
                        htmlFor="email"
                        className="font-inter font-semibold"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        className="w-full rounded-lg border border-gray-200 bg-gray-100 p-2 outline-none"
                      />
                    </div>
                    <div className="flex w-full flex-col justify-center space-y-2">
                      <label
                        htmlFor="phone"
                        className="font-inter font-semibold"
                      >
                        Phone
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Your Phone"
                        className="w-full rounded-lg border border-gray-200 bg-gray-100 p-2 outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-col justify-center space-y-2">
                    <label
                      htmlFor="type_donation"
                      className="font-inter font-semibold"
                    >
                      Type Of Donation
                    </label>
                    <div className="flex w-full justify-start space-x-4 p-2">
                      <input
                        type="radio"
                        name="type_donation"
                        id="one_time"
                        value="one_time"
                      />
                      <label htmlFor="one_time" className="ml-4">
                        One Time
                      </label>
                      <input
                        type="radio"
                        name="type_donation"
                        id="monthly"
                        value="monthly"
                      />
                      <label htmlFor="monthly" className="ml-4">
                        Monthly
                      </label>
                    </div>
                  </div>
                  <div className="flex w-full flex-col justify-center space-y-2">
                    <label
                      htmlFor="amount"
                      className="font-inter font-semibold"
                    >
                      Amount
                    </label>
                    <input
                      type="text"
                      name="amount"
                      id="amount"
                      value={amount}
                      placeholder={selectedPayment === "khalti" ? "Rs 0" : "$0"}
                      className="w-full rounded-lg border border-gray-200 bg-gray-100 p-2 outline-none"
                    />
                  </div>
                  <div className="flex w-full items-center justify-start space-x-5">
                    <button
                      type="button"
                      className="rounded-full p-2 text-blue-500 hover:bg-blue-500 hover:text-white"
                      onClick={() =>
                        handleAmountClick(
                          selectedPayment === "khalti" ? "Rs 1000" : "$1000",
                        )
                      }
                    >
                      {selectedPayment === "khalti" ? "Rs " : "$"}1000
                    </button>
                    <button
                      type="button"
                      className="rounded-full p-2 text-blue-500 hover:bg-blue-500 hover:text-white"
                      onClick={() =>
                        handleAmountClick(
                          selectedPayment === "khalti" ? "Rs 2000" : "$2000",
                        )
                      }
                    >
                      {selectedPayment === "khalti" ? "Rs " : "$"}2000
                    </button>
                    <button
                      type="button"
                      className="rounded-full p-2 text-blue-500 hover:bg-blue-500 hover:text-white"
                      onClick={() =>
                        handleAmountClick(
                          selectedPayment === "khalti" ? "Rs 3000" : "$3000",
                        )
                      }
                    >
                      {selectedPayment === "khalti" ? "Rs " : "$"}3000
                    </button>
                    <button
                      type="button"
                      className="rounded-full p-2 text-blue-500 hover:bg-blue-500 hover:text-white"
                      onClick={() =>
                        handleAmountClick(
                          selectedPayment === "khalti" ? "Rs 4000" : "$4000",
                        )
                      }
                    >
                      {selectedPayment === "khalti" ? "Rs " : "$"}4000
                    </button>
                    <button
                      type="button"
                      className="rounded-full p-2 text-blue-500 hover:bg-blue-500 hover:text-white"
                      onClick={() =>
                        handleAmountClick(
                          selectedPayment === "khalti" ? "Rs 5000" : "$5000",
                        )
                      }
                    >
                      {selectedPayment === "khalti" ? "Rs " : "$"}5000
                    </button>
                  </div>
                  <div className="flex w-full items-center justify-start space-x-3">
                    <input type="checkbox" name="terms" id="terms" />
                    <label htmlFor="terms">
                      I agree with Terms of User and Privacy Policy
                    </label>
                  </div>
                  <div className="flex w-full items-center justify-end">
                    <button
                      type="submit"
                      className="rounded-lg bg-blue-500 px-6 py-2 font-inter text-white hover:bg-blue-700"
                    >
                      Donate Now
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
};

export default CampaignById;
