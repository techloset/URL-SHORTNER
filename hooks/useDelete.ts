"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useDelete() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUrls();
  }, []);

  async function fetchUrls() {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:3000/api/shortUrl");
      setPosts(response.data.posts);
    } catch (error) {
      console.error("Error fetching URLs:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const deleteUrl = async (id: string) => {
    try {
      setIsLoading(true);

      const res = await axios.delete(
        `http://localhost:3000/api/shortUrl/${id}`
      );
      return res.data;
    } catch (error) {
      console.error("Error deleting URL:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const updateUrl = async (shortUrl: string) => {
    try {
      setIsLoading(true);
      const res = await axios.put(`http://localhost:3000/api/shortUrl`, {
        shortUrl,
      });
      return res.data;
    } catch (error) {
      console.log("Error while updating the clicks");
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

  return { posts, handleDelete, isLoading, updateUrl };
}
