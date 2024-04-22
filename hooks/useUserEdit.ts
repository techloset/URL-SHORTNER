"use client";
import { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import { updateParams } from "@/types/types";

function useUserEditForm(params: { id: string }) {
  const router = useRouter();

  const updateBlog = async (data: updateParams) => {
    try {
      const res = await axios.put(
        `http://localhost:3000/api/userUrl/${data.id}`,
        {
          longUrl: data.longUrl,
        }
      );
      return res.data;
    } catch (error) {
      console.error("Error updating URL:", error);
      throw error;
    }
  };

  const getBlogById = async (id: string) => {
    try {
      const res = await axios.get(`http://localhost:3000/api/userUrl/${id}`);
      return res.data;
    } catch (error) {
      console.error("Error fetching URL:", error);
      throw error;
    }
  };

  const urlRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    toast.loading("Fetching URL 🚀", { id: "1" });
    getBlogById(params.id)
      .then((data) => {
        if (urlRef.current) {
          urlRef.current.value = data.post.longUrl;
          toast.success("Fetching Completed", { id: "1" });
        }
      })
      .catch((err) => {
        toast.error("Fetching Failed", { id: "1" });
      });
  }, []);

  const handleUrl = async (e: any) => {
    e.preventDefault();

    if (urlRef.current) {
      toast.loading(" Sending Request 🚀", { id: "1" });
      await updateBlog({
        longUrl: urlRef.current?.value,
        id: params.id,
      });
      toast.success("Your URL is Updated Successfully", { id: "1" });
      router.push("/mainPage");
    }
  };

  return { urlRef, handleUrl, loading };
}

export default useUserEditForm;
