import Image from "next/image";
import qr from "@/public/assets/vectors/QR.svg";
import Youtube from "./youtube";
import Twitter from "./Twitter";
import Instagram from "./Instagram";
import Linked from "./Linked";

export default function Table() {
  return (
    <>
      <tbody className="bg-[#0b101b] text-white">
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
        </tr>

        <tr className="border-t-[1px] border-[#8d99ae] h-[60px]">
          <Twitter />
          <td className="pt-[10px]  px-[20px]">
            <Image src={qr} alt="" />
          </td>
          <td className="pt-[10px]  px-[20px]">250</td>
          <td className="pt-[10px] ">
            <div className="w-fit  text-[12px] rounded-[4px] px-[20px] py-[3px] font-semibold text-[#b0901e]">
              InActive
            </div>
          </td>
          <td className="pt-[10px] ps-[20px] ">15-March-2024</td>
        </tr>
        <tr className="border-t-[1px] border-[#8d99ae] h-[60px]">
          <Instagram />

          <td className="pt-[10px]  px-[20px]">
            <Image src={qr} alt="" />
          </td>
          <td className="pt-[10px]  px-[20px]">1200</td>
          <td className="pt-[10px] ">
            <div className="w-fit  text-[12px] rounded-[4px] px-[20px] py-[3px] font-light text-[#13b036]">
              Active
            </div>
          </td>
          <td className="pt-[10px] ps-[20px] ">4-March-2024</td>
        </tr>
        <tr className="border-t-[1px] border-[#8d99ae] h-[60px]">
          <Linked />

          <td className="pt-[10px]  px-[20px]">
            <Image src={qr} alt="" />
          </td>
          <td className="pt-[10px]  px-[20px]">1313</td>
          <td className="pt-[10px] ">
            <div className="w-fit  text-[12px] rounded-[4px] px-[20px] py-[3px] font-semibold text-[#b0901e]">
              InActive
            </div>
          </td>
          <td className="pt-[10px] ps-[20px] ">2-March-2024</td>
        </tr>
        <tr className="border-t-[1px] border-[#8d99ae] h-[60px]">
          <Youtube />

          <td className="pt-[10px]  px-[20px]">
            <Image src={qr} alt="" />
          </td>
          <td className="pt-[10px]  px-[20px]">120</td>
          <td className="pt-[10px] ">
            <div className="w-fit  text-[12px] rounded-[4px] px-[20px] py-[3px] font-light text-[#13b036]">
              Active
            </div>
          </td>
          <td className="pt-[10px] ps-[20px] ">14-March-2024</td>
        </tr>

        <tr className="border-t-[1px] border-[#8d99ae] h-[60px]">
          <Twitter />

          <td className="pt-[10px]  px-[20px]">
            <Image src={qr} alt="" />
          </td>
          <td className="pt-[10px]  px-[20px]">900</td>
          <td className="pt-[10px] ">
            <div className="w-fit  text-[12px] rounded-[4px] px-[20px] py-[3px] font-light text-[#b0901e]">
              InActive
            </div>
          </td>
          <td className="pt-[10px] ps-[20px] ">10-March-2024</td>
        </tr>
        <tr className="border-t-[1px] border-[#8d99ae] h-[60px]">
          <Instagram />

          <td className="pt-[10px]  px-[20px]">
            <Image src={qr} alt="" />
          </td>
          <td className="pt-[10px]  px-[20px]">750</td>
          <td className="pt-[10px] ">
            <div className="w-fit  text-[12px] rounded-[4px] px-[20px] py-[3px] font-light text-[#13b036]">
              Active
            </div>
          </td>
          <td className="pt-[10px] ps-[20px] ">12-March-2024</td>
        </tr>
        <tr className="border-t-[1px] border-[#8d99ae] h-[60px]">
          <Linked />

          <td className="pt-[10px]  px-[20px]">
            <Image src={qr} alt="" />
          </td>
          <td className="pt-[10px]  px-[20px]">300</td>
          <td className="pt-[10px] ">
            <div className="w-fit  text-[12px] rounded-[4px] px-[20px] py-[3px] font-light text-[#b0901e]">
              InActive
            </div>
          </td>
          <td className="pt-[10px] ps-[20px] ">6-March-2024</td>
        </tr>
      </tbody>
    </>
  );
}
