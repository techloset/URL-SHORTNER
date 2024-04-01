import Image from "next/image";
import React from "react";
import linked from "@/public/assets/vectors/linked.svg";

export default function Linked() {
  return (
    <>
      <td scope="row" className=" pt-[10px] flex-wrap ">
        https://linkedin.com/Bn41aCOlnxj
      </td>
      <div className="flex flex-row mt-4 gap-2">
        <Image src={linked} alt="" />
        <td className="pt-[10px] w-fit flex-wrap">
          https://www.Linkedin.com/posts/8erelCoihu/
        </td>
      </div>
    </>
  );
}
