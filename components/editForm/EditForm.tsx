"use client";
import useEditForm from "@/hooks/useUrlEdit";
import FormButton from "../customButton/CustomButton";
import { CustomInput } from "../customInput/CustomInput";

export default function EditForm({ params }: { params: { id: string } }) {
  const { handleMainUrl, isLoading, mainUrlRef } = useEditForm(params);

  return (
    <>
      <form>
        <div className="max-w-[859px] mx-auto max-h-[70px] my-[46px] mt-[100px]  border-[4px] rounded-[48px] border-[#353C4A] bg-[#181E29] items-center flex flex-row justify-center px-8 py-2">
          <input
            ref={mainUrlRef}
            type="text"
            placeholder="Enter the link to shorten here"
            className="w-full sm:[450px] outline-none bg-[#181E29] h-[50px] rounded-[48px] text-white  py-2"
          />
        </div>
        <CustomInput type="text" placeholder="Enter Custom Slug" />

        <FormButton
          onClick={handleMainUrl}
          label={isLoading ? "Shortening..." : "Edit Now🚀"}
          isLoading={isLoading}
        />
      </form>
    </>
  );
}
