"use client";
import Image from "next/image";
import qr from "@/public/assets/vectors/QR.svg";
import edit from "@/public/assets/vectors/edit.svg";
import dlt from "@/public/assets/vectors/bin.svg";
import Link from "next/link";
import useDelete from "@/hooks/useUrlDelete";
import QRCode from "qrcode.react";

export default function Table() {
  const { currentUrl, handleDelete, handleClick, getUrlFromShortId } =
    useDelete();

  if (!currentUrl || !Array.isArray(currentUrl)) {
    return <div>Loading...</div>;
  }

  const redirectToLongUrl = async (longUrl: string, shortUrl: string) => {
    window.open(longUrl, "_blank");
    await handleClick(shortUrl);
  };

  return (
    <>
      <tbody className="text-white w-full">
        {currentUrl.map((url, index) => (
          <tr key={index} className="border-t-[1px] border-[#8d99ae] h-[60px]">
            <td scope="row" className="pt-[10px]">
              <Link
                href={""}
                className="text-white "
                onClick={() => {
                  getUrlFromShortId(url.shortUrl);
                }}
              >
                {"https://" + url.shortUrl}
              </Link>
            </td>
            <td className="pt-[10px] flex flex-row mt-4 gap-2">
              <Link
                href={""}
                className="text-white "
                onClick={() => redirectToLongUrl(url.longUrl, url.shortUrl)}
              >
                {url.longUrl.slice(0, 60)}
              </Link>
            </td>
            <td className="pt-[10px] px-[20px]">
              <QRCode value={url.longUrl} size={42} />
            </td>
            <td
              onClick={() => {
                handleClick(url.shortUrl);
              }}
              className="pt-[10px] px-[20px]"
            >
              {url.clickCount}
            </td>
            <td className="pt-[10px]">
              <div className="w-fit text-[12px] rounded-[4px] px-[20px] py-[3px] font-semibold text-[#13b036]">
                Active
              </div>
            </td>
            <td className="pt-[10px] ps-[20px]">
              {new Date(url.date).toDateString()}
            </td>
            <td className="flex flex-row">
              <Image
                src={dlt}
                alt=""
                className="w-[42px] h-[42px]"
                onClick={() => handleDelete(url.id)}
              />
              <Image src={edit} alt="" className="w-[42px] h-[42px]" />
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
}
