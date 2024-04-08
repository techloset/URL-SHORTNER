import Image from "next/image";
import qr from "@/public/assets/vectors/QR.svg";
import Youtube from "./Youtube";
import edit from "@/public/assets/vectors/edit.svg";
import dlt from "@/public/assets/vectors/bin.svg";

export default function Table() {
  return (
    <>
      <tbody className="bg-[#0b101b] text-white w-full ">
        <tr className="border-t-[1px] border-[#8d99ae] h-[60px]">
          <Youtube />

          <td className="pt-[10px]  px-[20px]">
            <Image src={qr} alt="" />
          </td>
          <td className="pt-[10px]  px-[20px]">500</td>
          <td className="pt-[10px] ">
            <div className="w-fit  text-[12px] rounded-[4px] px-[20px] py-[3px] font-semibold text-[#13b036]">
              Active
            </div>
          </td>
          <td className="pt-[10px] ps-[20px] ">24-March-2024</td>
          <td className=" flex flex-row  ">
            <Image src={dlt} alt="" className="w-[42px] h-[42px]" />
            <Image src={edit} alt="" className="w-[42px] h-[42px]" />
          </td>
        </tr>
      </tbody>
    </>
  );
}
