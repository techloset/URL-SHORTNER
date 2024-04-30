"use client";
import { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import { updateParams } from "@/types/types";

function useEditForm(params: { id: string }) {
  const router = useRouter();
  const updateMainUrl = async (data: updateParams) => {
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

  const getMainUrlById = async (id: string) => {
    try {
      const res = await axios.get(`http://localhost:3000/api/userUrl/${id}`);
      return res.data;
    } catch (error) {
      console.error("Error fetching URL:", error);
      throw error;
    }
  };

  const mainUrlRef = useRef<HTMLInputElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    toast.loading("Fetching URL 🚀", { id: "1" });
    getMainUrlById(params.id)
      .then((data) => {
        if (mainUrlRef.current) {
          mainUrlRef.current.value = data.post.longUrl;
          toast.success("Fetching Completed", { id: "1" });
        }
      })
      .catch((err) => {
        toast.error("Fetching Failed", { id: "1" });
      });
  }, []);

  const handleMainUrl = async (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.preventDefault();
    }

    if (mainUrlRef.current) {
      toast.loading(" Sending Request 🚀", { id: "1" });
      await updateMainUrl({
        longUrl: mainUrlRef.current?.value,
        id: params.id,
      });
      toast.success("Your URL is Updated Successfully", { id: "1" });
      router.push("/mainPage");
    }
  };

  return { handleMainUrl, isLoading, mainUrlRef };
}

export default useEditForm;
