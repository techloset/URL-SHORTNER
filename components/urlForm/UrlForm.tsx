"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import EditButton from "../editButton/EditButton";

export default function UrlForm({ setLinkId }: { setLinkId: any }) {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const onFormSubmit = async (values: any) => {
    try {
      setLoading(true);

      const { link } = values;
      const res = await axios.post("/api/userUrl", {
        link: link,
      });

      if (res.status === 200) {
        setLinkId(res.data.linkId);
        toast.success("Link is shortened successfully");

        router.push("/mainPage");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      toast.error("Failed to shorten the link");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onFormSubmit)}>
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

        <EditButton
          loading={loading}
          label={loading ? "Loading..." : "Shorten Now🚀"}
        />
      </form>
    </>
  );
}
