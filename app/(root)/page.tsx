"use client";
import HomePage from "@/components/trialPage/TrialPage";
import Image from "next/image";
import Link from "next/link";
import link from "@/public/assets/vectors/Linkly.svg";
import sign from "@/public/assets/vectors/sign-in.svg";
import look from "@/public/assets/vectors/Looks.svg";
import linking from "@/public/assets/vectors/link.svg";
import Toggler from "@/components/toggler/Toggler";
import { signOut } from "next-auth/react";
import useUserDelete from "@/hooks/useUserDelete";
import Loader from "@/components/loader/Loader";

export default function TrialPage() {
  const { isLoading } = useUserDelete();

  const handleSignOut = async () => {
    await signOut();
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="flex felx-row justify-between items-center flex-wrap">
            <div className="py-8 px-6 h-[120px]">
              <Image className="h-[35px]" src={link} alt="" />
            </div>
            <div className="flex flex-row py-8 px-8 gap-2">
              <button
                onClick={handleSignOut}
                className="flex felx-row justify-between w-[123.9px] sm:w-[140px]  md:w-[123.9px] bg-[#343c4a] shadow-[#181e29] shadow-md  h-[50px]  border rounded-[48px] border-[#181329] text-white text-[13px] font-semibold cursor-pointer px-6 py-4 "
              >
                Logout
                <Image src={sign} alt="" />
              </button>
              <Link href={"/mainPage"}>
                <button className="w-[140px] sm:w-[140px]  md:w-[150px] bg-[#144EE3] shadow-[#144ee3] shadow-md  h-[50px]  border rounded-[48px] border-[#144EE3] text-white text-[13px] font-semibold cursor-pointer px-6 py-4 ">
                  Register Now{" "}
                </button>
              </Link>
            </div>
            <div className="w-[1280px] h-[81px]  px-6 flex justify-center items-center self-center py-16">
              <Image src={look} alt="" />
            </div>
            <div className="w-[1280px] h-[41px] flex justify-center items-center">
              <p className="text-white text-center font-extralight">
                Linkly is an efficient and easy-to-use URL shortening service
                that streamlines your online experience.
              </p>
            </div>

            <div className="w-[475px] sm:w-[475px]   mx-auto max-h-[60px] my-[46px] border-[4px] rounded-[48px] border-[#353C4A] bg-[#181E29] items-center flex flex-row justify-center px-2 py-4">
              <Image className="" src={linking} alt="" />
              <input
                type="text"
                placeholder="Enter Link here"
                className="w-[475px]   outline-none bg-[#181E29] h-[50px] rounded-[48px] text-white px-4  py-2"
              />
              <div className="flex flex-row flex-wrap justify-center items-center ">
                <button className=" w-[176px] bg-[#144EE3] shadow-[#144ee3] shadow-md  h-[45px]  border rounded-[48px] border-[#144EE3] text-white text-[13px] font-semibold cursor-pointer">
                  Shorten Now
                </button>
              </div>
            </div>
          </div>
          <Toggler />
          <div className="text-white text-center py-12 font-extralight">
            You can create{" "}
            <span style={{ color: "#eb568e", fontWeight: "bold" }}>05</span>{" "}
            more links. <Link href={"/shortUrl"}>Register Now</Link> to enjoy
            Unlimited usage
          </div>
          <HomePage />
        </>
      )}
    </>
  );
}
