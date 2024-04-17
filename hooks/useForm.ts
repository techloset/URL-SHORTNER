"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useFormPage({ setLinkId }: { setLinkId: any }) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const onFormSubmit = async (values: any) => {
    try {
      setLoading(true);

      const { link } = values;
      const res = await axios.post("/api/shortUrl", {
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

  return {
    loading,
    onFormSubmit,
  };
}
