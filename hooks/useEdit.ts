import { updateParams } from "@/types/types";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

export default function useEdit({ params }: { params: { id: string } }) {
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

  return {
    loading,
    setLoading,
    handleUrl,
    urlRef,
  };
}
