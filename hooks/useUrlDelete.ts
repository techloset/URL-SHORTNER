"use client";
import { deleteCustomUrl } from "@/app/redux/slice/customUrl/deleteUrl";
import { fetchCustomUrl } from "@/app/redux/slice/customUrl/fetchUrl";
import { updateCustomUrl } from "@/app/redux/slice/customUrl/updateUrl";
import { useAppDispatch, useAppSelector } from "@/app/redux/store";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useDelete() {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useAppDispatch();
  const currentUrl = useAppSelector((state) => state.trial.urls);

  useEffect(() => {
    fetchUrls();
  }, []);

  async function fetchUrls() {
    try {
      setIsLoading(true);
      await dispatch(fetchCustomUrl());
    } catch (error) {
      console.error("Error fetching URLs:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const deleteUrl = async (id: string) => {
    try {
      setIsLoading(true);
      await dispatch(deleteCustomUrl(id));
    } catch (error) {
      toast.error("Error deleting URL:");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const updateClick = async (shortUrl: string) => {
    try {
      setIsLoading(true);

      const resUrl = await axios.put("/api/shortUrl", { shortUrl });

      if (resUrl.status === 200 && resUrl.data && resUrl.data.message) {
        toast.success("URL click's are updated successfully");
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
      fetchUrls();
    } catch (error) {
      toast.error("Failed to delete the URL");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = async (id: string) => {
    try {
      setIsLoading(true);
      await updateClick(id);
      fetchUrls();
    } catch (error) {
      toast.error("Failed to update the click");
    } finally {
      setIsLoading(false);
    }
  };

  const getUrlFromShortId = async (shortUrl: any) => {
    const filteredItem = currentUrl.find(
      (item: any) => item.shortUrl === shortUrl
    );

    if (filteredItem) {
      const longUrl = filteredItem.longUrl;

      if (longUrl) {
        try {
          updateClick(shortUrl);
          window.open(longUrl, "_blank");
          dispatch(fetchCustomUrl());
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
    currentUrl,
    handleDelete,
    isLoading,
    handleClick,
    getUrlFromShortId,
  };
}
