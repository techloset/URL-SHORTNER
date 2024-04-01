import Image from "next/image";
import React from "react";
import twitter from "@/public/assets/vectors/twitter.svg";

export default function Twitter() {
  return (
    <>
      <td scope="row" className=" pt-[10px] flex-wrap ">
        https://twitter.com/Bn41aCOlnxj
      </td>
      <div className="flex flex-row mt-4 gap-2">
        <Image src={twitter} alt="" />
        <td className="pt-[10px] w-fit flex-wrap">
          https://www.twitter.com/tweets/8erelCoihu/
        </td>
      </div>
    </>
  );
}
