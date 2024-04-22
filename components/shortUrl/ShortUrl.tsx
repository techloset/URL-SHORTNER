import Image from "next/image";
import look from "@/public/assets/images/Linkly.png";
import button from "@/public/assets/vectors/Button.svg";
import UserName from "../userName/UserName";
import Link from "next/link";

export default function UrlShort() {
  return (
    <div className="w-full h-[120px] flex flex-row justify-between">
      <div className="py-8 px-6">
        <Link href={"/"}>
          <Image src={look} alt="" />
        </Link>
      </div>
      <div className=" flex flex-row py-7  flex-wrap ">
        <UserName />
        <Image src={button} alt="" className="w-[98px] h-[68px]" />
      </div>
    </div>
  );
}
