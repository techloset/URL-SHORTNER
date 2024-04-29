"use client";
import { deleteUserUrl } from "@/app/redux/slice/userUrl/deleteUrl";
import { getUserUrl } from "@/app/redux/slice/userUrl/getUrl";
import { useAppDispatch, useAppSelector } from "@/app/redux/store";
import axios from "axios";
import { NextResponse } from "next/server";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useUserDelete() {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.userUrl.userUrls);
  console.log(data);

  useEffect(() => {
    getCustomUrl();
  }, []);

  async function getCustomUrl() {
    try {
      setIsLoading(true);
      await dispatch(getUserUrl());
    } catch (error) {
      console.error("Error fetching URLs:", error);
    } finally {
      setIsLoading(false);
    }
  }
  const deleteUrl = async (id: string) => {
    try {
      setIsLoading(true);

      await dispatch(deleteUserUrl(id));
    } catch (error) {
      console.error("Error deleting URL:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  const updateClick = async (shortUrl: string) => {
    try {
      setIsLoading(true);

      const resUrl = await axios.put("/api/userUrl", { shortUrl });

      if (resUrl.status === 200 && resUrl.data && resUrl.data.message) {
        toast.success(resUrl.data.message);
      } else {
        toast.error("Failed to update click count");
      }

      return {
        message: resUrl.data.message,
      };
    } catch (error) {
      console.error("Error updating click count:", error);
      toast.error("Failed to update click count");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      setIsLoading(true);
      toast.loading("Deleting your URL", { id: "2" });
      await deleteUrl(id);
      toast.success("Your URL is Deleted Successfully", { id: "2" });
      getCustomUrl();
    } catch (error) {
      toast.error("Failed to delete the URL");
    } finally {
      setIsLoading(false);
    }
  };

  const noPosts = !isLoading && data && data.length === 0;

  const redirectToLongUrl = (longUrl: string) => {
    window.open(longUrl, "_blank");
  };

  const getUrlFromShortId = async (shortUrl: any) => {
    const filteredItem = data.find((item: any) => item.shortUrl === shortUrl);

    if (filteredItem) {
      const longUrl = filteredItem.longUrl;

      if (longUrl) {
        try {
          updateClick(shortUrl);
          window.open(longUrl, "_blank");
          dispatch(getUserUrl());
        } catch (error) {
          console.error("Error redirecting to long URL:", error);
        }
      } else {
        console.error("No longUrl found for the provided shortId");
      }
    } else {
      console.error("No item found with the provided shortId");
    }
  };

  return {
    data,
    handleDelete,
    isLoading,
    updateClick,
    noPosts,
    redirectToLongUrl,
    getUrlFromShortId,
  };
}
