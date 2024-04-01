import Image from "next/image";
import you from "@/public/assets/vectors/youtube.svg";

export default function Youtube() {
  return (
    <>
      <td scope="row" className=" pt-[10px] flex-wrap ">
        https://youtube.com/Bn41aCOlnxj
      </td>
      <div className="flex flex-row mt-4 gap-2">
        <Image src={you} alt="" className="w-[33px] h-[33px]" />
        <td className="pt-[10px] w-fit flex-wrap">
          https://www.youtube.com/shorts/8erelCoihu/
        </td>
      </div>
    </>
  );
}
