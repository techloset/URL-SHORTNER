"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useDelete() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchUrls();
  }, []);

  async function fetchUrls() {
    try {
      const response = await axios.get("http://localhost:3000/api/shortUrl");
      setPosts(response.data.posts);
    } catch (error) {
      console.error("Error fetching URLs:", error);
    }
  }

  const deleteBlog = async (id: string) => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/api/shortUrl/${id}`
      );
      return res.data;
    } catch (error) {
      console.error("Error deleting URL:", error);
      throw error;
    }
  };

  const handleDelete = async (id: string) => {
    try {
      toast.loading("Deleting your URL", { id: "2" });
      await deleteBlog(id);
      toast.success("Your URL is Deleted Successfully", { id: "2" });
      fetchUrls();
    } catch (error) {
      toast.error("Failed to delete the URL");
    }
  };

  return { posts, handleDelete };
}
