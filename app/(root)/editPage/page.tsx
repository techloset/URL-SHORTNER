import Image from "next/image";

import React from "react";
import look from "@/public/assets/images/Linkly.png";
import button from "@/public/assets/vectors/Button.svg";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/AuthOptions";
import { useForm } from "react-hook-form";

export default async function EditPage() {
  const { register, handleSubmit } = useForm();

  const onFormSubmit = async (values: any) => {
    console.log(values);
  };

  const session = await getServerSession(authOptions);

  return (
    <>
      <div className="w-full h-[120px] flex flex-row justify-between">
        <div className="py-8 px-6">
          <Image src={look} alt="" />
        </div>
        <div className=" flex flex-row py-7 px-6 ">
          <div className="text-white w-[150px] h-[46px] flex items-center gap-4 shadow-md mb-5 border rounded-[48px] border-[#353C4A] bg-[#181E29] pl-9 mt-1 ">
            <div className="text-center items-center px-2.5">
              {session?.user?.email?.slice(0, 6)}
            </div>
          </div>
          <Image src={button} alt="" className="w-[98px] h-[68px]" />
        </div>
      </div>

      <div className="max-w-[859px] mx-auto max-h-[70px] my-[46px] mt-[100px]  border-[4px] rounded-[48px] border-[#353C4A] bg-[#181E29] items-center flex flex-row justify-center px-8 py-2">
        <input
          {...register("link")}
          type="text"
          placeholder="Enter the link to shorten here"
          className="w-full sm:[450px] outline-none bg-[#181E29] h-[50px] rounded-[48px] text-white  py-2"
        />
      </div>
      <div className="max-w-[859px] mx-auto max-h-[70px] my-[46px] border-[4px] rounded-[48px] border-[#353C4A] bg-[#181E29] items-center flex flex-row justify-center px-8 py-4">
        <input
          type="text"
          placeholder="Enter custom slug"
          className="w-full sm:[450px] outline-none bg-[#181E29] h-[50px] rounded-[48px] text-white  py-2"
        />
        <div className="flex flex-row justify-center items-center ">
          <button className="sm:w-[176px] md:w-[176px] bg-[#144EE3] shadow-[#144ee3] shadow-md  h-[50px]  border rounded-[48px] border-[#144EE3] text-white text-[13px] font-semibold cursor-pointer relative">
            Auto Generate
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center ">
        <button
          onSubmit={handleSubmit(onFormSubmit)}
          className="w-[140px] sm:w-[140px]  md:w-[200px] bg-[#144EE3] shadow-[#144ee3] shadow-md  h-[50px]  border rounded-[48px] border-[#144EE3] text-white text-[13px] font-semibold cursor-pointer px-6 py-2 relative"
        >
          Shorten Now
        </button>
      </div>
    </>
  );
}