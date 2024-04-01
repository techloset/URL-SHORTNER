"use client";

import React, { useState } from "react";
import link from "@/public/assets/vectors/link.svg";
import sign from "@/public/assets/vectors/sign-in.svg";
import Image from "next/image";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="py-5 px-5 md:px-10">
      <div className=" flex flex-wrap items-center justify-between mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="py-8 px-6 h-[120px]">
            <Image className="h-[35px]" src={link} alt="" />
          </div>
        </div>
        <div className="inline-flex lg:hidden flex-end pe-1">
          <button
            onClick={toggleNav}
            type="button"
            className="inline-flex items-center w-[22px] h-9 text-sm text-gray-500 lg:hidden "
            aria-controls="navbar-sticky"
            aria-expanded={isNavOpen ? "true" : "false"}
          >
            <img
              src={sign}
              className={`${
                isNavOpen ? "rotate-180" : "rotate-0"
              } ease-in-out duration-50 inline-flex w-[22px] h-[70px]`}
              alt="Toggler"
            />
          </button>
        </div>
        <div
          className={`${
            isNavOpen ? "block ease-in-out duration-100 p-2" : "hidden"
          } w-full lg:flex sm:flex-col justify-end items-center md:w-auto lg:w-auto`}
          id="navbar-sticky"
        >
          <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-[15px] md:gap-[40px] items-center text-white py-[-4]">
            <button className="flex felx-row justify-between w-[123.9px] sm:w-[140px]  md:w-[123.9px] bg-[#343c4a] shadow-[#181e29] shadow-md  h-[50px]  border rounded-[48px] border-[#181329] text-white text-[13px] font-semibold cursor-pointer px-6 py-4 ">
              Logout <Image src={sign} alt="" />
            </button>

            <button className="w-[140px] sm:w-[140px]  md:w-[150px] bg-[#144EE3] shadow-[#144ee3] shadow-md  h-[50px]  border rounded-[48px] border-[#144EE3] text-white text-[13px] font-semibold cursor-pointer px-6 py-4 ">
              Register Now{" "}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
