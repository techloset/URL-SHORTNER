"use client";
import { updateParams } from "@/types/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import EditButton from "../editButton/EditButton";

export default function EditForm({ params }: { params: { id: string } }) {
  const router = useRouter();
  const updateBlog = async (data: updateParams) => {
    const res = await fetch(`http://localhost:3000/api/shortUrl/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        longUrl: data.longUrl,
      }),
    });
    return (await res).json();
  };

  const getBlogById = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:3000/api/shortUrl/${id}`);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching URL:", error);
      throw error;
    }
  };

  const urlRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    toast.loading("Fetching URL 🚀", { id: "1" });
    getBlogById(params.id)
      .then((data) => {
        if (urlRef.current) {
          urlRef.current.value = data.post.longUrl;
          console.log(data.post.longUrl);

          toast.success("Fetching Completed", { id: "1" });
        }
      })
      .catch((err) => {
        toast.error("Fetching Failed", { id: "1" });
      });
  }, []);
  console.log(params.id);

  const handleUrl = async (e: any) => {
    e.preventDefault();

    if (urlRef.current) {
      toast.loading(" Sending Request 🚀", { id: "1" });
      await updateBlog({
        longUrl: urlRef.current?.value,
        id: params.id,
      });
      toast.success("Your URL is Updated Successfully", { id: "1" });
      router.push("/");
    }
  };

  const [loading, setLoading] = useState(false);

  return (
    <>
      <form onSubmit={handleUrl}>
        <div className="max-w-[859px] mx-auto max-h-[70px] my-[46px] mt-[100px]  border-[4px] rounded-[48px] border-[#353C4A] bg-[#181E29] items-center flex flex-row justify-center px-8 py-2">
          <input
            ref={urlRef}
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
          label={loading ? "Loading..." : "EditNow"}
        />
      </form>
    </>
  );
}
