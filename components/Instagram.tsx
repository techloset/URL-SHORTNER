import Image from "next/image";
import React from "react";
import insta from "@/public/assets/vectors/instagram.svg";

export default function Instagram() {
  return (
    <>
      <td scope="row" className=" pt-[10px] flex-wrap ">
        https://instagram.com/Bn41aCOlnxj
      </td>
      <div className="flex flex-row mt-4 gap-2">
        <Image src={insta} alt="" className="w-[33px] h-[33px]" />
        <td className="pt-[10px] w-fit flex-wrap">
          https://www.intagram.com/reels/8erelCoihu/
        </td>
      </div>
    </>
  );
}
