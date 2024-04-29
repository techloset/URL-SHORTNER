"use client";
import { deleteCustomUrl } from "@/app/redux/slice/customUrl/deleteUrl";
import { fetchCustomUrl } from "@/app/redux/slice/customUrl/fetchUrl";
import { updateCustomUrl } from "@/app/redux/slice/customUrl/updateUrl";
import { useAppDispatch, useAppSelector } from "@/app/redux/store";
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
      await dispatch(updateCustomUrl(shortUrl));
    } catch (error) {
      console.error("Error updating click count:", error);
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

  return { currentUrl, handleDelete, isLoading, handleClick };
}
