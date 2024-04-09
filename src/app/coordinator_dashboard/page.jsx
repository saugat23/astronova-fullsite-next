"use client";

import React, { useState } from "react";
import dashboard_items from "./dashboard_items";
import Link from "next/link";

const Page = () => {
  const [items, setItems] = useState(dashboard_items);

  return (
    <section className="h-auto max-w-screen overflow-hidden">
      {/* <aside className="lg:py-6 lg:px-6 fixed w-[15%] mr-auto shadow-2xl h-screen overflow-visible box-border">
        <div className="lg:py-6 border-b border-[#e0d8ff99]">
          <div className="flex flex-col justify-center items-center hover:scale-105 hover:transition-all">
            <div className="flex justify-center items-center">
              <img src="/logo.png" alt="Logo" />
            </div>
            <h2 className="font-inter font-semibold lg:text-sm text-[#1F1F1F] tracking-[0.2em]">
              ASTRONOVA
            </h2>
            <h2 className="font-poppins font-light lg:text-[10px] text-[#1F1F1F] tracking-[0.4em]">
              Foundation Nepal
            </h2>
          </div>
        </div>
        <div>
          <ul className="flex flex-col justify-center">
            {items.map((item, key) => {
              return (
                <li
                  key={key}
                  className="w-full self-start flex justify-center items-center lg:py-5 lg:px-6 hover:bg-[#ececec] rounded-xl"
                >
                  <Link
                    href={item.link}
                    className="flex justify-center items-center space-x-2"
                  >
                    <span className="inline-block">{item.icon}</span>{" "}
                    <span className="font-poppins font-medium text-base text-[#091747]">
                      {item.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside> */}
    </section>
  );
};

export default Page;
