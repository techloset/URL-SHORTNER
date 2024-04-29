"use client";
import Image from "next/image";
import qr from "@/public/assets/vectors/QR.svg";
import edit from "@/public/assets/vectors/edit.svg";
import dlt from "@/public/assets/vectors/bin.svg";
import Link from "next/link";
import useUserDelete from "@/hooks/useUserDelete";
import { useSession } from "next-auth/react";
import QRCode from "qrcode.react";

export default function MainTable() {
  const { data, handleDelete, isLoading, noPosts, redirectToLongUrl } =
    useUserDelete();
  const { data: sessions } = useSession();
  const userEmail = sessions?.user?.email;

  const userLinks = data.filter((item) => item.email === userEmail);

  return (
    <>
      <tbody className="bg-[#0b101b] text-white w-full ">
        {isLoading ? (
          <tr>
            <td colSpan={7} className="text-center py-4 text-white">
              Loading...
            </td>
          </tr>
        ) : noPosts ? (
          <tr>
            <td colSpan={7} className="text-center py-4 text-white">
              No URL's are shorten by the user till yet
            </td>
          </tr>
        ) : (
          userLinks.map((item, index) => (
            <tr
              key={index}
              className="border-t-[1px] border-[#8d99ae] h-[60px]"
            >
              <td scope="row" className="pt-[10px]">
                <Link
                  href={""}
                  className="text-whites"
                  onClick={() => redirectToLongUrl(item.longUrl)}
                >
                  {"https://" + item.shortUrl}
                </Link>
              </td>
              <td className="pt-[10px] flex flex-row mt-4 gap-2">
                <Link
                  href={""}
                  className="text-white"
                  onClick={() => redirectToLongUrl(item.longUrl)}
                >
                  {item.longUrl.slice(0, 60)}
                </Link>
              </td>
              <td className="pt-[10px] px-[20px] h-[25px]">
                <QRCode value={item.longUrl} size={30} />
                {/* <Image src={qr} alt="" /> */}
              </td>
              <td className="pt-[10px] px-[20px]">{item.clickCount}</td>
              <td className="pt-[10px]">
                <div className="w-fit text-[12px] rounded-[4px] px-[20px] py-[3px] font-semibold text-[#13b036]">
                  Active
                </div>
              </td>
              <td className="pt-[10px] ps-[20px]">
                {new Date(item.date).toDateString()}
              </td>
              <td className="flex flex-row">
                <Image
                  src={dlt}
                  alt=""
                  className="w-[42px] h-[42px]"
                  onClick={() => handleDelete(item.id)}
                />
                <Link href={`/editPage/${item.id}`}>
                  <Image src={edit} alt="" className="w-[42px] h-[42px]" />
                </Link>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </>
  );
}
