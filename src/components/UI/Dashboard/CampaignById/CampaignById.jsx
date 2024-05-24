"use client";
import React, { useState, useEffect } from "react";
import { getCampaignById } from "../../../../app/services/api";
import Image from "next/image";
import {
  Progress,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import CampaignDonationContainer from "./CampaignDonationContainer";
import CampaignTopDonor from "./CampaignTopDonor";
import SupportStudentPNG from "../../../../../public/supportstudents.png";
import Logo from "../../../../../public/assets/logo.png";
import DonationCampaign from "../../../../../public/assets/donation-campaign-donation.svg";

const CampaignById = (id) => {
  console.log(typeof id);
  console.log(id);
  const [showMore, setShowmMore] = useState(false);
  const [campaign, setCampaign] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("khalti");
  const [amount, setAmount] = useState("");

  const handleAmountClick = (value) => {
    setAmount(value);
  };

  function handleShowMore() {
    setShowmMore(!showMore);
  }
  {
    /*
  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const data = await getCampaignById(id);
        setCampaign(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaign();
  }, [id]);
  
  function handleShowMore() {
    setShowMore(!showMore);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!campaign) {
    return <div>No campaign data available.</div>;
  } */
  }

  console.log("");
  return (
    <section className="h-auto max-w-screen overflow-hidden xl:pt-12 lg:pt-10 pt-8 mx-auto w-[70%]">
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="flex flex-col justify-center items-start space-y-4 2xl:py-16 xl:py-14 lg:py-12 md:py-10 sm:py-8 py-6"
      >
        <h3 className="font-opensans font-bold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-[#1e598a]">
          {campaign.title}
        </h3>
        <p className="font-opensans font-semibold 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs text-[#1e598a]">
          {showMore
            ? `${campaign.description}`
            : `${campaign.description?.substr(0, 100)} ...`}
        </p>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="flex justify-around items-start xl:space-x-12 py-4 mx-auto w-[90%] h-auto"
      >
        <div className="flex flex-col justify-center items-start space-y-6 w-3/4 h-auto">
          <div className="w-full flex justify-center items-center">
            <Image
              src={campaign.featured_img}
              alt=""
              width={500}
              height={400}
              className="w-full h-96"
            />
          </div>
          <div className="w-full flex justify-stretch items-center space-x-4">
            <Image
              src={campaign?.gallery}
              alt=""
              width={100}
              height={80}
              className="w-1/4 h-full"
            />
            <Image
              src={campaign?.gallery}
              alt=""
              width={100}
              height={80}
              className="w-1/4 h-full"
            />
            <Image
              src={campaign?.gallery}
              alt=""
              width={100}
              height={80}
              className="w-1/4 h-full"
            />
            <Image
              src={campaign?.gallery}
              alt=""
              width={100}
              height={80}
              className="w-1/4 h-full"
            />
          </div>
        </div>
        <div className="w-1/4 shadow-xl bg-white rounded-lg p-6 flex flex-col justify-center items-center space-y-3">
          <h3 className="text-[#4a90e2] font-opensans font-semibold 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs">
            $0
          </h3>
          <p className="text-[#8692a2] font-opensans font-semibold 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs text-[10px]">
            raised of $62,473,88 goal
          </p>
          <Progress
            size="md"
            aria-label="Loading..."
            color="success"
            value={20}
            className="w-full"
          />
          <div className="flex flex-col justify-center items-center w-full pt-6 space-y-4">
            <Button
              type="button"
              onClick={() => onOpen()}
              className="w-full bg-[#4a90e2] border border-[#4a90e2] text-white py-4 px-auto xl:text-lg md:text-sm sm:text-xs text-[10px]"
            >
              Donate
            </Button>
            <button
              type="button"
              className="w-full bg-white border border-[#4a90e2] text-[#4a90e2] py-4 px-auto xl:text-lg md:text-sm sm:text-xs text-[10px]"
            >
              Share with friends
            </button>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="xl:py-8 flex flex-col justify-center items-start space-y-8"
      >
        <h3 className="font-opensans font-bold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-[#1e598a]">
          Why This Campaign?
        </h3>
        <p className="font-opensans font-semibold xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs text-[#1e598a]">
          Welcome to the Astronova Foundation&apos;s Tinkering Lab, a celestial
          workshop where boundaries dissolve, and creativity flourishes. Here,
          every idea is likened to a star, awaiting its chance to illuminate the
          vast galaxy of possibilities. At the heart of
          {showMore && (
            <span>
              {" "}
              this cosmic endeavor lies curiosity, guiding us like a compass
              through uncharted territories. Experimentation serves as our fuel,
              igniting the engines of innovation with each discovery. However,
              it is a collaboration that truly drives us forward, acting as the
              cosmic force that propels us beyond the familiar into realms yet
              unexplored.
              <br />
              <br />
              As pioneers of exploration, we traverse the boundless expanse of
              imagination, mapping out new constellations of brilliance along
              the way. Our journey is one of continuous discovery, where the
              fusion of science and art gives rise to innovations that
              reverberate throughout the universe. Together, we shape a future
              where the sky is not the limit but rather the beginning of our
              boundless potential. Join us in this grand adventure, where the
              stars themselves become our guides, and together, we illuminate
              the path to a brighter tomorrow.
            </span>
          )}
        </p>
        <button
          type="button"
          className="font-opensans font-semibold 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs text-[10px] text-[#1e598a] flex justify-center items-center"
          onClick={handleShowMore}
        >
          Show More
          <span>{showMore ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </button>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="xl:py-8 flex flex-col justify-center items-center space-y-8"
      >
        <h3 className="font-opensans font-bold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-[#1e598a]">
          Watch this Story
        </h3>
        <div className="flex justify-center items-center w-full aspect-[5/2]">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/JpYA7WXkHyI?si=YXMciI59mOAfSzAq?"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="xl:py-8 flex flex-col justify-center items-center space-y-8"
      >
        <h3 className="font-opensans font-bold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-[#1e598a]">
          Donate and get Rewards!
        </h3>
        <div className="w-full flex justify-stretch items-center space-x-4">
          <div className="flex flex-col justify-center items-center space-y-6">
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
          <div className="flex flex-col justify-center items-center space-y-6">
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
        className="xl:py-8 w-full flex justify-between items-start space-x-4"
      >
        <div className="w-1/2 flex flex-col justify-center items-center space-y-6">
          <h3 className="font-opensans self-start font-bold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-[#1e598a]">
            Organizer
          </h3>
          <div className="w-full rounded-lg flex justify-start items-center space-x-4 p-4 border border-[#d6d6d6]">
            <div className="w-1/5">
              <Image src={Logo} alt="Logo" className="w-full" />
            </div>
            <div className="flex flex-col justify-center items-start">
              <h3 className="text-[#2f435a] font-poppins font-semibold 2xl:text-xl xl:text-lg lg:text-base md:text-sm text-xs">
                Astronova Foundation
              </h3>
              <p className="text-[#5a5f6d] 2xl:text-base lg:text-sm md:text-xs text-[10px]">
                Non-Profit Organization
              </p>
              <button className="text-[#4aa3ef] 2xl:text-base lg:text-sm md:text-xs text-[10px]">
                Send a Message
              </button>
            </div>
          </div>
          <h3 className="font-opensans self-center font-bold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-[#1e598a]">
            DONATE NOW
          </h3>
          <div className="w-full flex justify-center items-center">
            <Image
              src={DonationCampaign}
              alt="Donation Image"
              className="w-full"
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-start items-start space-y-6">
          <h3 className="font-opensans self-start font-bold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-[#1e598a]">
            Top Donors
          </h3>
          <div className="w-full flex flex-col justify-center items-center space-y-4">
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
        className="xl:py-8 flex flex-col justify-center items-center space-y-8"
      >
        <h3 className="font-opensans self-start font-bold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-[#1e598a]">
          What our Donor Says
        </h3>
        <div className="xl:py-12 w-full flex justify-end items-end">
          <div className="flex justify-end items-center space-x-8">
            <div className="flex flex-col justify-center items-center space-y-4">
              {/* <img src="" alt="" /> */}
            </div>
          </div>
        </div>
      </div>

      <Modal size="5xl" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="w-full h-full flex flex-col gap-1">
                Payment Method
              </ModalHeader>
              <ModalBody className="w-full h-full flex flex-row justify-center items-center">
                <div className="w-1/4 h-full flex flex-col justify-start items-center">
                  <div className="w-full flex justify-between">
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
                          className="w-20 inline"
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
                          className="w-20 inline"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="w-full h-auto">
                    <Image
                      src="/assets/donationmodalanimation.svg"
                      alt="Donation Animation"
                      width={600}
                      height={1200}
                      className="h-full w-full"
                    />
                  </div>
                </div>
                <div className="w-3/4 h-full border border-gray-200 rounded-xl flex flex-col justify-center items-center space-y-3 p-3">
                  <div className="w-full flex justify-between items-center space-x-3">
                    <div className="flex flex-col justify-center space-y-2 w-full">
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
                        className="bg-gray-100 border border-gray-200 p-2 outline-none rounded-lg w-full"
                      />
                    </div>
                    <div className="flex flex-col justify-center space-y-2 w-full">
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
                        className="bg-gray-100 border border-gray-200 p-2 outline-none rounded-lg w-full"
                      />
                    </div>
                  </div>
                  <div className="w-full flex justify-between items-center space-x-3">
                    <div className="flex flex-col justify-center space-y-2 w-full">
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
                        className="bg-gray-100 border border-gray-200 p-2 outline-none rounded-lg w-full"
                      />
                    </div>
                    <div className="flex flex-col justify-center space-y-2 w-full">
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
                        className="bg-gray-100 border border-gray-200 p-2 outline-none rounded-lg w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center space-y-2 w-full">
                    <label
                      htmlFor="type_donation"
                      className="font-inter font-semibold"
                    >
                      Type Of Donation
                    </label>
                    <div className="w-full flex justify-start space-x-4 p-2">
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
                  <div className="w-full flex flex-col justify-center space-y-2">
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
                      className="bg-gray-100 border border-gray-200 p-2 outline-none rounded-lg w-full"
                    />
                  </div>
                  <div className="w-full flex justify-start items-center space-x-5">
                    <button
                      type="button"
                      className="text-blue-500 hover:text-white hover:bg-blue-500 rounded-full p-2"
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
                      className="text-blue-500 hover:text-white hover:bg-blue-500 rounded-full p-2"
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
                      className="text-blue-500 hover:text-white hover:bg-blue-500 rounded-full p-2"
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
                      className="text-blue-500 hover:text-white hover:bg-blue-500 rounded-full p-2"
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
                      className="text-blue-500 hover:text-white hover:bg-blue-500 rounded-full p-2"
                      onClick={() =>
                        handleAmountClick(
                          selectedPayment === "khalti" ? "Rs 5000" : "$5000",
                        )
                      }
                    >
                      {selectedPayment === "khalti" ? "Rs " : "$"}5000
                    </button>
                  </div>
                  <div className="w-full flex justify-start items-center space-x-3">
                    <input type="checkbox" name="terms" id="terms" />
                    <label htmlFor="terms">
                      I agree with Terms of User and Privacy Policy
                    </label>
                  </div>
                  <div className="w-full flex justify-end items-center">
                    <button
                      type="submit"
                      className="py-2 px-6 rounded-lg bg-blue-500 hover:bg-blue-700 text-white font-inter"
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
