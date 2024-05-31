"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdDashboard } from "react-icons/md";
import Logo from "../../../public/logo.png";
import Image from "next/image";
import TransitionEffect from "../../components/UI/TransitionEffect";

function Page({ children }) {
  const pathname = usePathname();

  return (
    <>
      <TransitionEffect />
      <div className="flex">
        <div className="hidden min-w-flex-[0.5] md:w-56 md:block md:sticky dashboard-sidebar lg:py-6 shadow-2xl min-h-screen bg-white z-40">
          <div className="xs:py-2 xl:py-4 border-b border-[#e0d8ff99]">
            <div className="flex flex-col justify-center items-center hover:scale-105 hover:transition-all">
              <div className="flex justify-center items-center">
                <Image src={Logo} alt="Logo" className="h-20 md:h-24 xl:h-28" />
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
            <ul className="w-full flex flex-col justify-center items-start px-3 mt-4">
              <li
                className={`w-full flex justify-start items-center md:px-2 hover:bg-[#ececec] rounded-xl my-[2px] ${pathname.includes("quiz") && "bg-[#ececec]"
                  }`}
              >
                <Link
                  href="/evaluation/dashboard"
                  className="flex justify-start items-center space-x-2 w-full h-full py-4"
                >
                  <span className="inline-block">
                    <MdDashboard className="inline" />
                  </span>{" "}
                  <span className="font-poppins font-medium text-base text-[#091747]">
                    Quizzes
                  </span>
                </Link>
              </li>
              <li
                className={`w-full flex justify-start items-center md:px-2 hover:bg-[#ececec] rounded-xl my-[2px] ${pathname === "results" && "bg-[#ececec]"
                  }`}
              >
                <Link
                  href="/evaluation/results"
                  className="flex justify-start items-center space-x-2 w-full h-full py-4"
                >
                  <span className="inline-block">
                    <MdDashboard className="inline" />
                  </span>{" "}
                  <span className="font-poppins font-medium text-base text-[#091747]">
                    View Results
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {children}
      </div>
    </>
  );
}

export default Page;
