"use client";
import { deleteUserUrl } from "@/app/redux/slice/userUrl/deleteUrl";
import { getUserUrl } from "@/app/redux/slice/userUrl/getUrl";
import { useAppDispatch, useAppSelector } from "@/app/redux/store";
import axios from "axios";
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
      // const response = await axios.get("http://localhost:3000/api/userUrl");
      // console.log("Updated posts after fetch:", response.data.posts);
      // setPosts(response.data.posts);
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

      // const res = await axios.delete(`http://localhost:3000/api/userUrl/${id}`);
      // return res.data;
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

      console.log("Data:", shortUrl);

      const resUrl = await axios.put(
        `http://localhost:3000/api/userUrl/${shortUrl}`
      );
      console.log("Response:", resUrl);

      return resUrl.data;
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
      getCustomUrl();
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
      getCustomUrl();
    } catch (error) {
      toast.error("Failed to update the click");
    } finally {
      setIsLoading(false);
    }
  };

  const noPosts = !isLoading && data && data.length === 0;

  const redirectToLongUrl = (longUrl: string) => {
    window.open(longUrl, "_blank");
  };

  return {
    data,
    handleDelete,
    isLoading,
    handleClick,
    noPosts,
    redirectToLongUrl,
  };
}
