"use client";
import React, { useState, useEffect } from "react";
import { getCampaignById } from "../../../../app/services/api";
import Image from "next/image";
import { Progress } from "@nextui-org/react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import CampaignDonationContainer from "./CampaignDonationContainer";
import CampaignTopDonor from "./CampaignTopDonor";

const CampaignById = ({ id }) => {
  const campaignId = id;
  console.log(campaignId);

  const [campaign, setCampaign] = useState({});
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const campaignData = await getCampaignById(campaignId);
        setCampaign(campaignData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  function handleShowMore() {
    setShowMore(!showMore);
  }

  console.log(campaign);
  return (
    <section className="h-auto max-w-screen overflow-hidden xl:pt-12 lg:pt-10 pt-8 mx-auto w-[70%]">
      <div data-aos="fade-up" data-aos-duration="400" className="flex flex-col justify-center items-start space-y-4 2xl:py-16 xl:py-14 lg:py-12 md:py-10 sm:py-8 py-6">
        <h3 className="font-opensans font-bold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-[#1e598a]">
          {/* {campaign.title} */}
          Tinkering Labs Project
        </h3>
        <p className="font-opensans font-semibold 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs text-[#1e598a]">
          Step into the world of Tinkering Labs, where creativity knows no
          bounds! Our tinkering spaces are designed to ignite curiosity, foster
          innovation, and unleash the imagination of learners of all ages. Join
          us in the joy of hands-on exploration and discover the thrill of
          turning ideas into reality.
        </p>
      </div>

      <div data-aos="fade-up" data-aos-duration="400" className="flex justify-around items-start xl:space-x-12 py-4 mx-auto w-[90%] h-auto">
        <div className="flex flex-col justify-center items-start space-y-6 w-3/4 h-auto">
          <div className="w-full flex justify-center items-center">
            <Image
              src="/supportstudents.png"
              alt=""
              width={200}
              height={180}
              className="w-full h-96"
            />
          </div>
          <div className="w-full flex justify-stretch items-center space-x-4">
            <Image
              src="/supportstudents.png"
              alt=""
              width={100}
              height={80}
              className="w-1/4 h-full"
            />
            <Image
              src="/supportstudents.png"
              alt=""
              width={100}
              height={80}
              className="w-1/4 h-full"
            />
            <Image
              src="/supportstudents.png"
              alt=""
              width={100}
              height={80}
              className="w-1/4 h-full"
            />
            <Image
              src="/supportstudents.png"
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
            <button
              type="button"
              className="w-full bg-[#4a90e2] border border-[#4a90e2] text-white py-4 px-auto xl:text-lg md:text-sm sm:text-xs text-[10px]"
            >
              Donate
            </button>
            <button
              type="button"
              className="w-full bg-white border border-[#4a90e2] text-[#4a90e2] py-4 px-auto xl:text-lg md:text-sm sm:text-xs text-[10px]"
            >
              Share with friends
            </button>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="400" className="xl:py-8 flex flex-col justify-center items-start space-y-8">
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

      <div data-aos="fade-up" data-aos-duration="400" className="xl:py-8 flex flex-col justify-center items-center space-y-8">
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

      <div data-aos="fade-up" data-aos-duration="400" className="xl:py-8 flex flex-col justify-center items-center space-y-8">
        <h3 className="font-opensans font-bold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-[#1e598a]">
          Donate and get Rewards!
        </h3>
        <div className="w-full flex justify-stretch items-center space-x-4">
          <div className="flex flex-col justify-center items-center space-y-6">
            <CampaignDonationContainer
              imgSrc="/supportstudents.png"
              title="Get Swag Collection"
              description="10 Custom SHELTER 1x1 T-Shirt. We will add your name to our donor name list"
              amount="250.00"
            />
            <CampaignDonationContainer
              imgSrc="/supportstudents.png"
              title="Get Chance to visit 4 different place"
              description="10 Custom SHELTER 1x1 T-Shirt. We will add your name to our donor name list"
              amount="2500.00"
            />
          </div>
          <div className="flex flex-col justify-center items-center space-y-6">
            <CampaignDonationContainer
              imgSrc="/supportstudents.png"
              title="Get 2 Days Night stay in Hetauda"
              description="10 Custom SHELTER 1x1 T-Shirt. We will add your name to our donor name list"
              amount="2000.00"
            />
            <CampaignDonationContainer
              imgSrc="/supportstudents.png"
              title="Get Annapurna Base Camp Hike Led by You"
              description="x1 SHELTER Run/Hike led by you. We will create or follow your route and pace. "
              amount="5000.00"
            />
          </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="400" className="xl:py-8 w-full flex justify-between items-start space-x-4">
        <div className="w-1/2 flex flex-col justify-center items-center space-y-6">
          <h3 className="font-opensans self-start font-bold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-[#1e598a]">
            Organizer
          </h3>
          <div className="w-full rounded-lg flex justify-start items-center space-x-4 p-4 border border-[#d6d6d6]">
            <div className="w-1/5">
              <img src="/assets/logo.png" alt="Logo" className="w-full" />
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
            <img
              src="/assets/donation-campaign-donation.svg"
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

      <div data-aos="fade-up" data-aos-duration="400" className="xl:py-8 flex flex-col justify-center items-center space-y-8">
        <h3 className="font-opensans self-start font-bold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-[#1e598a]">
          What our Donor Says
        </h3>
        <div className="xl:py-12 w-full flex justify-end items-end">
          <div className="flex justify-end items-center space-x-8">
            <div className="flex flex-col justify-center items-center space-y-4">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignById;
