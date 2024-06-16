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
      <section className="max-w-screen h-auto overflow-hidden">
        <div
          data-aos="fade-up"
          data-aos-duration="400"
          className="mt-16 lg:h-[70vh]"
        >
          <div className="relative h-full w-full">
            <Image
              priority
              layout="fill"
              className="h-full w-full object-cover object-center"
              src={blog.featured_img}
              alt="Blog Featured BG"
            />
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl flex-col justify-center space-y-4 px-4 py-5">
          <h1 className="font-inter text-sm font-semibold md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            {blog.title}
          </h1>
          <div className="flex items-center justify-start space-x-4">
            <div>
              <Image
                priority
                quality={80}
                src={BlogAuthorImage}
                alt="Author Image"
                width={100}
                height={100}
                className="h-16 w-16 rounded-full"
              />
            </div>
            <div className="flex flex-col items-start justify-center space-y-1 font-inter">
              <h4 className="font-inter text-[10px] font-bold md:text-xs xl:text-sm">
                John Doe
              </h4>
              <h4 className="font-inter text-[10px] font-bold md:text-xs xl:text-sm">
                23th Oct 2023, 12:45 PM
              </h4>
            </div>
          </div>
          <h3 className="flex items-center justify-start font-inter text-xs font-medium md:text-sm xl:text-base">
            <div className="px-8">
              <ImQuotesLeft className="inline h-20 w-16" />
            </div>
            <span className="ml-4 inline">{blog.sub_title}</span>
          </h3>
          <p className="font-inter text-xs font-normal md:text-sm xl:text-base">
            {stripHtmlTags(blog.description)}
          </p>
        </div>
        <div className="mt-4 h-auto w-full bg-[#77AB33] p-10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-center space-x-0 space-y-5 px-4 lg:flex-row lg:space-x-12 lg:space-y-0">
            <div className="flex h-auto w-1/2 flex-col items-center justify-center space-y-4 rounded-lg bg-white p-4">
              <h1 className="font-kumbhsans text-sm font-semibold uppercase sm:text-base md:text-lg xl:text-xl 2xl:text-2xl">
                Make a Donation
              </h1>
              <h3 className="font-kumbhsans text-[10px] font-semibold text-gray-400 md:text-xs xl:text-sm">
                Giving is the greatest act of Grace.
              </h3>
              <div className="w-full font-kumbhsans text-sm font-medium lg:text-base">
                <Tabs defaultValue="one-off" className="w-full">
                  <TabsList className="w-full">
                    <TabsTrigger value="one-off">ONE-OFF</TabsTrigger>
                    <TabsTrigger value="monthly">MONTHLY</TabsTrigger>
                  </TabsList>
                  <TabsContent value="one-off" className="p-3">
                    <form className="flex flex-col items-start justify-center space-y-4">
                      <div className="flex w-full flex-col space-y-1">
                        <label htmlFor="full_name">Full Name</label>
                        <input
                          type="text"
                          name="full_name"
                          id="full_name"
                          className="w-full rounded-full border border-gray-300 bg-gray-50 p-2 outline-none"
                        />
                      </div>
                      <div className="flex w-full flex-col space-y-1">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="w-full rounded-full border border-gray-300 bg-gray-50 p-2 outline-none"
                        />
                      </div>
                      <div className="flex w-full flex-col space-y-1">
                        <label htmlFor="phone_number">Phone Number</label>
                        <input
                          type="text"
                          name="phone_number"
                          id="phone_number"
                          className="w-full rounded-full border border-gray-300 bg-gray-50 p-2 outline-none"
                        />
                      </div>
                      <div className="flex w-full flex-col justify-center space-y-3">
                        <label htmlFor="amount">Donation Amount</label>
                        <div className="flex w-full items-center justify-start space-x-3">
                          <button
                            type="button"
                            className="rounded-full bg-[#DFDFDF] px-5 py-2 text-sm text-blue-500 hover:bg-blue-500 hover:text-white"
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
                            className="rounded-full bg-[#DFDFDF] px-5 py-2 text-sm text-blue-500 hover:bg-blue-500 hover:text-white"
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
                            className="rounded-full bg-[#DFDFDF] px-5 py-2 text-sm text-blue-500 hover:bg-blue-500 hover:text-white"
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
                            className="rounded-full bg-[#DFDFDF] px-5 py-2 text-sm text-blue-500 hover:bg-blue-500 hover:text-white"
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
                          className="w-full rounded-full border border-gray-200 bg-gray-50 p-2 text-sm text-black outline-none"
                        />
                      </div>
                      <div className="flex w-1/2 flex-col justify-between space-y-2">
                        <h3 className="">Payment Method</h3>
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
                      </div>
                      <div className="w-full py-2">
                        <button
                          type="submit"
                          className="w-full rounded-full bg-[#147DAB] py-2 text-center text-white hover:bg-[#0a3f56] hover:ease-in"
                        >
                          PAY
                        </button>
                      </div>
                    </form>
                  </TabsContent>
                  <TabsContent value="monthly" className="p-3">
                    <form className="flex flex-col items-start justify-center space-y-4">
                      <div className="flex w-full flex-col space-y-1">
                        <label htmlFor="full_name">Full Name</label>
                        <input
                          type="text"
                          name="full_name"
                          id="full_name"
                          className="w-full rounded-full border border-gray-300 bg-gray-50 p-2 outline-none"
                        />
                      </div>
                      <div className="flex w-full flex-col space-y-1">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="w-full rounded-full border border-gray-300 bg-gray-50 p-2 outline-none"
                        />
                      </div>
                      <div className="flex w-full flex-col space-y-1">
                        <label htmlFor="phone_number">Phone Number</label>
                        <input
                          type="text"
                          name="phone_number"
                          id="phone_number"
                          className="w-full rounded-full border border-gray-300 bg-gray-50 p-2 outline-none"
                        />
                      </div>
                      <div className="flex w-full flex-col justify-center space-y-3">
                        <label htmlFor="amount">Donation Amount</label>
                        <div className="flex w-full items-center justify-start space-x-3">
                          <button
                            type="button"
                            className="rounded-full bg-[#DFDFDF] px-5 py-2 text-sm text-blue-500 hover:bg-blue-500 hover:text-white"
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
                            className="rounded-full bg-[#DFDFDF] px-5 py-2 text-sm text-blue-500 hover:bg-blue-500 hover:text-white"
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
                            className="rounded-full bg-[#DFDFDF] px-5 py-2 text-sm text-blue-500 hover:bg-blue-500 hover:text-white"
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
                            className="rounded-full bg-[#DFDFDF] px-5 py-2 text-sm text-blue-500 hover:bg-blue-500 hover:text-white"
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
                          className="w-full rounded-full border border-gray-200 bg-gray-50 p-2 text-sm text-black outline-none"
                        />
                      </div>
                      <div className="flex w-1/2 flex-col justify-between space-y-2">
                        <h3 className="">Payment Method</h3>
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
                      </div>
                      <div className="w-full py-2">
                        <button
                          type="submit"
                          className="w-full rounded-full bg-[#147DAB] py-2 text-center text-white hover:bg-[#0a3f56] hover:ease-in"
                        >
                          PAY
                        </button>
                      </div>
                    </form>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            <div className="flex w-1/2 flex-col items-start justify-center space-y-3">
              <h1 className="font-opensans text-sm font-bold uppercase tracking-wider text-[#FFF801] md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                welcome to astronova foundation
              </h1>
              <h4 className="font-kumbhsans text-sm font-semibold capitalize text-white md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                We help thousands of children to get their education
              </h4>
              <p className="font-kumbhsans text-xs font-medium capitalize text-white md:text-sm lg:text-base xl:text-lg">
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
