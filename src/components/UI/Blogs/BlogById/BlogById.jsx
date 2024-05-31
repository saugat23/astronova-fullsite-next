"use client";

import React, { useState } from "react";
import Image from "next/image";
import BlogAuthorImage from "../../../../../public/blogs/blogauthor.svg";
import { ImQuotesLeft } from "react-icons/im";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../ui/tabs";

function Page({ data }) {
  const blog = data;

  const [selectedPayment, setSelectedPayment] = useState("khalti");
  const [amount, setAmount] = useState("");

  const handleAmountClick = (value) => {
    setAmount(value);
  };

  const stripHtmlTags = (html) => {
    const div = document.createElement("span");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  return (
    <>
      <section className="h-auto max-w-screen overflow-hidden">
        <div
          data-aos="fade-up"
          data-aos-duration="400"
          className="lg:h-[70vh] mt-16"
        >
          <div className="w-full h-full relative">
            <Image
              priority
              layout="fill"
              className="object-center object-cover w-full h-full"
              src={blog.featured_img}
              alt="Blog Featured BG"
            />
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-4 flex flex-col justify-center space-y-4">
          <h1 className="font-inter font-semibold 2xl:text-2xl xl:text-xl lg:text-lg md:text-base text-sm">
            {blog.title}
          </h1>
          <div className="flex justify-start items-center space-x-4">
            <div>
              <Image
                priority
                quality={80}
                src={BlogAuthorImage}
                alt="Author Image"
                width={100}
                height={100}
                className="rounded-full w-16 h-16"
              />
            </div>
            <div className="flex flex-col justify-center items-start space-y-1 font-inter">
              <h4 className="font-inter font-bold xl:text-sm md:text-xs text-[10px]">
                John Doe
              </h4>
              <h4 className="font-inter font-bold xl:text-sm md:text-xs text-[10px]">
                23th Oct 2023, 12:45 PM
              </h4>
            </div>
          </div>
          <h3 className="font-inter font-medium xl:text-base md:text-sm text-xs flex justify-start items-center">
            <div className="px-8">
              <ImQuotesLeft className="w-16 h-20 inline" />
            </div>
            <span className="ml-4 inline">{blog.sub_title}</span>
          </h3>
          <p className="font-inter font-normal xl:text-base md:text-sm text-xs">
            {stripHtmlTags(blog.description)}
          </p>
        </div>
        <div className="w-full h-auto bg-[#77AB33] mt-4 p-10">
          <div className="mx-auto max-w-6xl px-4 flex flex-col lg:flex-row items-center justify-center lg:space-x-12 space-x-0 space-y-5 lg:space-y-0">
            <div className="w-1/2 bg-white rounded-lg h-auto flex flex-col justify-center items-center space-y-4 p-4">
              <h1 className="font-kumbhsans font-semibold 2xl:text-2xl xl:text-xl md:text-lg sm:text-base text-sm uppercase">
                Make a Donation
              </h1>
              <h3 className="font-kumbhsans font-semibold xl:text-sm md:text-xs text-[10px] text-gray-400">
                Giving is the greatest act of Grace.
              </h3>
              <div className="w-full font-kumbhsans font-medium lg:text-base text-sm">
                <Tabs defaultValue="account" className="w-full">
                  <TabsList className="w-full">
                    <TabsTrigger value="one-off">ONE-OFF</TabsTrigger>
                    <TabsTrigger value="monthly">MONTHLY</TabsTrigger>
                  </TabsList>
                  <TabsContent value="one-off" className="p-3">
                    <form className="flex flex-col justify-center items-start space-y-4">
                      <div className="flex flex-col space-y-1 w-full">
                        <label htmlFor="full_name">Full Name</label>
                        <input
                          type="text"
                          name="full_name"
                          id="full_name"
                          className="outline-none bg-gray-50 border border-gray-300 rounded-full w-full p-2"
                        />
                      </div>
                      <div className="flex flex-col space-y-1 w-full">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="outline-none bg-gray-50 border border-gray-300 rounded-full w-full p-2"
                        />
                      </div>
                      <div className="flex flex-col space-y-1 w-full">
                        <label htmlFor="phone_number">Phone Number</label>
                        <input
                          type="text"
                          name="phone_number"
                          id="phone_number"
                          className="outline-none bg-gray-50 border border-gray-300 rounded-full w-full p-2"
                        />
                      </div>
                      <div className="w-full flex flex-col justify-center space-y-3">
                        <label htmlFor="amount">Donation Amount</label>
                        <div className="w-full flex justify-start items-center space-x-3">
                          <button
                            type="button"
                            className="text-blue-500 bg-[#DFDFDF] hover:text-white hover:bg-blue-500 rounded-full py-2 px-5 text-sm"
                            onClick={() =>
                              handleAmountClick(
                                selectedPayment === "khalti"
                                  ? "Rs 1000"
                                  : "$1000",
                              )
                            }
                          >
                            {selectedPayment === "khalti" ? "Rs " : "$"}1000
                          </button>
                          <button
                            type="button"
                            className="text-blue-500 bg-[#DFDFDF] hover:text-white hover:bg-blue-500 rounded-full py-2 px-5 text-sm"
                            onClick={() =>
                              handleAmountClick(
                                selectedPayment === "khalti"
                                  ? "Rs 2000"
                                  : "$2000",
                              )
                            }
                          >
                            {selectedPayment === "khalti" ? "Rs " : "$"}2000
                          </button>
                          <button
                            type="button"
                            className="text-blue-500 bg-[#DFDFDF] hover:text-white hover:bg-blue-500 rounded-full py-2 px-5 text-sm"
                            onClick={() =>
                              handleAmountClick(
                                selectedPayment === "khalti"
                                  ? "Rs 5000"
                                  : "$5000",
                              )
                            }
                          >
                            {selectedPayment === "khalti" ? "Rs " : "$"}5000
                          </button>
                          <button
                            type="button"
                            className="text-blue-500 bg-[#DFDFDF] hover:text-white hover:bg-blue-500 rounded-full py-2 px-5 text-sm"
                            onClick={() =>
                              handleAmountClick(
                                selectedPayment === "khalti"
                                  ? "Rs 10,000"
                                  : "$10000",
                              )
                            }
                          >
                            {selectedPayment === "khalti" ? "Rs " : "$"}10,000
                          </button>
                        </div>

                        <input
                          type="text"
                          name="amount"
                          id="amount"
                          value={amount}
                          placeholder={selectedPayment === "khalti" ? "₹" : "$"}
                          className="bg-gray-50 border border-gray-200 text-black text-sm p-2 outline-none rounded-full w-full"
                        />
                      </div>
                      <div className="w-1/2 flex flex-col space-y-2 justify-between">
                        <h3 className="">Payment Method</h3>
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
                      </div>
                      <div className="w-full py-2">
                        <button
                          type="submit"
                          className="bg-[#147DAB] rounded-full text-white text-center hover:bg-[#0a3f56] hover:ease-in py-2 w-full"
                        >
                          PAY
                        </button>
                      </div>
                    </form>
                  </TabsContent>
                  <TabsContent value="monthly" className="p-3">
                    <form className="flex flex-col justify-center items-start space-y-4">
                      <div className="flex flex-col space-y-1 w-full">
                        <label htmlFor="full_name">Full Name</label>
                        <input
                          type="text"
                          name="full_name"
                          id="full_name"
                          className="outline-none bg-gray-50 border border-gray-300 rounded-full w-full p-2"
                        />
                      </div>
                      <div className="flex flex-col space-y-1 w-full">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="outline-none bg-gray-50 border border-gray-300 rounded-full w-full p-2"
                        />
                      </div>
                      <div className="flex flex-col space-y-1 w-full">
                        <label htmlFor="phone_number">Phone Number</label>
                        <input
                          type="text"
                          name="phone_number"
                          id="phone_number"
                          className="outline-none bg-gray-50 border border-gray-300 rounded-full w-full p-2"
                        />
                      </div>
                      <div className="w-full flex flex-col justify-center space-y-3">
                        <label htmlFor="amount">Donation Amount</label>
                        <div className="w-full flex justify-start items-center space-x-3">
                          <button
                            type="button"
                            className="text-blue-500 bg-[#DFDFDF] hover:text-white hover:bg-blue-500 rounded-full py-2 px-5 text-sm"
                            onClick={() =>
                              handleAmountClick(
                                selectedPayment === "khalti"
                                  ? "Rs 1000"
                                  : "$1000",
                              )
                            }
                          >
                            {selectedPayment === "khalti" ? "Rs " : "$"}1000
                          </button>
                          <button
                            type="button"
                            className="text-blue-500 bg-[#DFDFDF] hover:text-white hover:bg-blue-500 rounded-full py-2 px-5 text-sm"
                            onClick={() =>
                              handleAmountClick(
                                selectedPayment === "khalti"
                                  ? "Rs 2000"
                                  : "$2000",
                              )
                            }
                          >
                            {selectedPayment === "khalti" ? "Rs " : "$"}2000
                          </button>
                          <button
                            type="button"
                            className="text-blue-500 bg-[#DFDFDF] hover:text-white hover:bg-blue-500 rounded-full py-2 px-5 text-sm"
                            onClick={() =>
                              handleAmountClick(
                                selectedPayment === "khalti"
                                  ? "Rs 5000"
                                  : "$5000",
                              )
                            }
                          >
                            {selectedPayment === "khalti" ? "Rs " : "$"}5000
                          </button>
                          <button
                            type="button"
                            className="text-blue-500 bg-[#DFDFDF] hover:text-white hover:bg-blue-500 rounded-full py-2 px-5 text-sm"
                            onClick={() =>
                              handleAmountClick(
                                selectedPayment === "khalti"
                                  ? "Rs 10,000"
                                  : "$10000",
                              )
                            }
                          >
                            {selectedPayment === "khalti" ? "Rs " : "$"}10,000
                          </button>
                        </div>

                        <input
                          type="text"
                          name="amount"
                          id="amount"
                          value={amount}
                          placeholder={selectedPayment === "khalti" ? "₹" : "$"}
                          className="bg-gray-50 border border-gray-200 text-black text-sm p-2 outline-none rounded-full w-full"
                        />
                      </div>
                      <div className="w-1/2 flex flex-col space-y-2 justify-between">
                        <h3 className="">Payment Method</h3>
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
                      </div>
                      <div className="w-full py-2">
                        <button
                          type="submit"
                          className="bg-[#147DAB] rounded-full text-white text-center hover:bg-[#0a3f56] hover:ease-in py-2 w-full"
                        >
                          PAY
                        </button>
                      </div>
                    </form>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-start space-y-3">
              <h1 className="font-opensans font-bold text-[#FFF801] tracking-wider 2xl:text-2xl xl:text-xl lg:text-lg md:text-base text-sm uppercase">
                welcome to astronova foundation
              </h1>
              <h4 className="font-kumbhsans font-semibold text-white 2xl:text-2xl xl:text-xl lg:text-lg md:text-base text-sm capitalize">
                We help thousands of children to get their education
              </h4>
              <p className="font-kumbhsans font-medium text-white xl:text-lg lg:text-base md:text-sm text-xs capitalize">
                At Astronova, we see innovation as the heartbeat of educational
                advancement. Our specialized Innovation Division is unwavering
                in its mission to reshape education by infusing imagination,
                technology, and forward-looking approaches into all learning
                facets. Through dynamic initiatives, we&apos;re forging a path
                to a more dynamic and responsive future for students, educators,
                and communities alike.At Astronova, we see innovation as the
                heartbeat of educational advancement. Our specialized Innovation
                Division is unwavering in its mission to reshape education by
                infusing imagination, technology, and forward-looking approaches
                into all learning facets. Through dynamic initiatives,
                we&apos;re forging a path to a more dynamic and responsive
                future for students, educators, and communities alike.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
