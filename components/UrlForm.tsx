import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

export default function UrlForm({ setLinkId }: any) {
  const { register, handleSubmit } = useForm();

  const onFormSubmit = async (values: any) => {
    try {
      const { link } = values;
      const res = await axios.post("/api/shortUrl", {
        link: link,
      });

      console.log("Response from API:", res.data);
      if (res.status === 200) {
        setLinkId(res.data.linkId);
        console.log("Link Id:", res.data.linkId);
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <input
          type="text"
          {...register("link")}
          className="bg-gray-100 w-full px-2 h-14 placeholder-gray-600 mt-6 focus:outline-none focus:ring-2  rounded-lg"
          placeholder="enter your long url"
        />
        <button
          type="submit"
          className="mt-4 px-4 text-xl py-2 bg-indigo-700 hover:bg-indigo-500 text-white rounded-lg "
        >
          Shorten Me
        </button>
      </form>
    </>
  );
}
