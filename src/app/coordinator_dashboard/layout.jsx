"use client";
import React, { useState } from "react";
import Link from "next/link";
import dashboard_items from "./dashboard_items";
import { usePathname } from "next/navigation";
import logo from "../../../public/logo.png";
import Image from "next/image";
import { Toaster } from "sonner";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import withAuth from "../withAuthCoordinator";

const Layout = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [items, setItems] = useState(dashboard_items);

  function handleLogout() {
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1);
    let yesterday = currentDate;

    Cookies.set("token_coordinator", "", { expires: yesterday });
    router.push("/coordinator_login");
  }

  return (
    <>
      <Toaster expand={true} richColors position="top-right" />
      <div className="flex">
        <div className="hidden min-w-flex-[0.5] md:w-56 md:block md:sticky dashboard-sidebar lg:py-6 shadow-2xl min-h-screen bg-white z-40">
          <div className="xs:py-2 xl:py-4 border-b border-[#e0d8ff99]">
            <div className="flex flex-col justify-center items-center hover:scale-105 hover:transition-all">
              <div className="flex justify-center items-center">
                <Image src={logo} alt="Logo" className="h-20 md:h-24 xl:h-28" />
              </div>
              <h2 className="font-inter font-semibold text-xs xl:text-sm text-[#1F1F1F] tracking-[0.2em]">
                ASTRONOVA
              </h2>
              <h2 className="font-poppins font-light text-[8px] xl:text-[10px] text-[#1F1F1F] tracking-[0.4em]">
                Foundation Nepal
              </h2>
            </div>
          </div>
          <div className="w-full">
            <ul className="w-full flex flex-col justify-center items-start px-3">
              {items.map((item, key) => {
                return (
                  <li
                    key={key}
                    className={`w-full flex justify-start items-center md:px-2 hover:bg-[#ececec] rounded-xl my-[2px] ${pathname.includes(item.link) && "bg-[#ececec]"
                      }`}
                  >
                    <Link
                      href={item.link}
                      className="flex justify-start items-center space-x-2 w-full h-full py-4"
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
        </div>
        <div className="flex-[4] bg-[#FAFAFA] dashboard-navbar w-screen">
          <div className="flex justify-between w-full px-4 py-6 shadow-2xl bg-white">
            <div className="flex flex-col justify-center items-start">
              <h3 className="font-poppins font-medium xl:text-base text-[#2A2A2A]">
                Hi, Co-ordinator
              </h3>
              <h3 className="font-poppins font-semibold xl:text-xl text-[#2A2A2A]">
                Coordinator Dashboard
              </h3>
            </div>
            <div className="flex justify-center items-center space-x-3">
              <div>
                <Image
                  src={logo}
                  alt="Logo"
                  className="w-12 p-1 rounded-full border-2 border-[#5C74FF]"
                />
              </div>
              <button
                type="button"
                className="py-2 px-6 bg-[#5C74FF] text-white rounded-xl hover:bg-[#2e3a80] font-poppins font-semibold"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default withAuth(Layout);
