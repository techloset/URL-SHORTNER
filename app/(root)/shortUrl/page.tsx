"use client";
import Loader from "@/components/loader/Loader";
import Profile from "@/components/profile/UserName";
import UrlShort from "@/components/linkShortener/ShortUrl";
import useLoader from "@/hooks/useLoader";
import Image from "next/image";
import Link from "next/link";
import look from "@/public/assets/images/Linkly.png";
import button from "@/public/assets/vectors/Button.svg";

export default function ShortUrl() {
  const { isLoading } = useLoader();
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="w-full h-[120px] flex flex-row justify-between">
            <div className="py-8 px-6">
              <Link href={"/"}>
                <Image src={look} alt="" />
              </Link>
            </div>
            <div className="flex flex-row py-7  flex-wrap">
              <Profile />
              <Image src={button} alt="" className="w-[98px] h-[68px]" />
            </div>
          </div>
          <UrlShort />
        </>
      )}
    </>
  );
}
