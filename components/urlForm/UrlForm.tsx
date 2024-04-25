"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import FormButton from "../customButton/FormButton";
import { CustomInput, Input } from "../customInput/CustomInput";

export default function UrlForm({ setLinkId }: { setLinkId: any }) {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const onFormSubmit = async (values: any) => {
    try {
      setLoading(true);

      const { link } = values;
      const res = await axios.post("/api/userUrl", {
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

  return (
    <>
      <form>
        <Input
          register={register}
          type="text"
          placeholder="Enter the link to shorten here"
        />
        <CustomInput type="text" placeholder="Enter Custom Slug" />

        <FormButton
          onClick={handleSubmit(onFormSubmit)}
          label={loading ? "Shortening..." : "Shorten Now🚀"}
          isLoading={loading}
        />
      </form>
    </>
  );
}
