"use client";
import MainPage from "@/components/mainContent/MainPage";
import Toggler from "@/components/toggler/Toggler";
import UserName from "@/components/profile/UserName";
import Image from "next/image";
import Link from "next/link";
import link from "@/public/assets/vectors/Linkly.svg";
import bell from "@/public/assets/images/Bell.png";
import chart from "@/public/assets/vectors/chart.svg";
import setting from "@/public/assets/vectors/cog.svg";
import filter from "@/public/assets/vectors/filter.svg";
import useDelete from "@/hooks/useDelete";
import Loader from "@/components/loader/Loader";

export default function mainPage() {
  const { isLoading } = useDelete();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="w-[1220px] flex flex-row justify-between">
            <div className="py-8 px-6 h-[120px]">
              <Image className="h-[35px]" src={link} alt="" />
            </div>
            <div className="w-[749px]  max-h-[60px] my-[20px] border-[4px] rounded-[48px] border-[#353C4A] bg-[#181E29] items-center flex flex-row justify-between px-8 py-4">
              <input
                type="text"
                placeholder="Enter custom slug"
                className="w-full sm:[450px] outline-none bg-[#181E29] h-[50px] rounded-[48px] text-white  py-2"
              />
              <div className="flex flex-row justify-center items-center ">
                <button className="sm:w-[176px] md:w-[176px] bg-[#144EE3] shadow-[#144ee3] shadow-md  h-[40px]  border rounded-[48px] border-[#144EE3] text-white text-[13px] font-semibold cursor-pointer relative">
                  Auto Generate
                </button>
              </div>
            </div>
            <div className=" flex flex-row py-5 px-4 gap-6">
              <UserName />
              <button className="w-[40px] sm:w-[40px]  md:w-[68px] bg-[#144EE3] h-[50px]  border rounded-[88px] border-[#144EE3] shadow-[#708bcd] text-white text-[13px] font-semibold cursor-pointer px-6 py-2 relative">
                <Image src={bell} alt="" className="w-[20px] h-[20px]" />
              </button>
            </div>
          </div>
          <Toggler />
          <Link href={"/shortUrl"}>
            <p className="text-white px-2 font-light">
              Click here to add a <span className="font-semibold">URL</span>
            </p>
          </Link>

          <div className="py-8">
            <div className=" w-[1250px] mx-auto px-12  h-[60px] border rounded-[10px] bg-[#181e29] border-[#181e29] ">
              <div className="px-32 py-4 flex flex-row justify-around items-center">
                <div className="flex flex-row">
                  <h2 className="text-white">History</h2>
                </div>
                <div className="flex flex-row gap-2">
                  <Image src={chart} alt=" " />
                  <h2 className="text-white">Statistics</h2>
                </div>
                <div className="flex flex-row gap-2">
                  <Image src={setting} alt="" />
                  <h2 className="text-white gap-[-3]">Settings</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1220px] flex flex-row justify-between">
            <div className="px-12 py-4">
              <h2 className="text-[#c9ced6] font-medium">History (142) </h2>
            </div>
            <div className="px-12">
              <button className="flex felx-row justify-between w-[123.9px] sm:w-[140px]  md:w-[123.9px] bg-[#181e29]  shadow-md  h-[50px]  border rounded-[48px] border-[#181329] text-white text-[13px] font-semibold cursor-pointer px-8 py-4 ">
                <Image src={filter} alt="" />
                Filter
              </button>
            </div>
          </div>
          <MainPage />
        </>
      )}
    </>
  );
}
