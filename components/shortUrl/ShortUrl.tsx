"use client";
import Image from "next/image";
import React, { useState } from "react";
import Loader from "../loader/Loader";
import useLoader from "@/hooks/useLoader";
import look from "@/public/assets/images/Linkly.png";
import button from "@/public/assets/vectors/Button.svg";

export default function UrlShort() {
  const { isLoading, setLinkId } = useLoader();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="w-full h-[120px] flex flex-row justify-between">
            <div className="py-8 px-6">
              <Image src={look} alt="" />
            </div>
            <div className=" flex flex-row py-7 px-6 flex-wrap ">
              <div className="text-white w-[150px] h-[46px] flex items-center gap-4 shadow-md mb-5 border rounded-[48px] border-[#353C4A] bg-[#181E29] pl-9 mt-1 ">
                <div className="text-center items-center px-2.5">
                  {/* {session?.user?.email?.slice(0, 6)} */}
                </div>
              </div>
              <Image src={button} alt="" className="w-[98px] h-[68px]" />
            </div>
          </div>
        </>
      )}
    </>
  );
}
