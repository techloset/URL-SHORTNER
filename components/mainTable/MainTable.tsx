"use client'";
import Image from "next/image";
import qr from "@/public/assets/vectors/QR.svg";
import edit from "@/public/assets/vectors/edit.svg";
import dlt from "@/public/assets/vectors/bin.svg";
import Link from "next/link";
import useDelete from "@/hooks/useDelete";

export default function MainTable({ params }: { params: { id: string } }) {
  console.log(params);

  const { posts, handleDelete } = useDelete();

  return (
    <>
      <tbody className="bg-[#0b101b] text-white w-full ">
        {posts.map((post: any) => (
          <tr
            key={post.id}
            className="border-t-[1px] border-[#8d99ae] h-[60px]"
          >
            <td scope="row" className="pt-[10px] flex-wrap">
              {post.shortUrl}
            </td>
            <td className="pt-[10px] flex flex-row mt-4 gap-2">
              <td className="w-fit flex-wrap">{post.longUrl.slice(0, 100)}</td>
            </td>
            <td className="pt-[10px] px-[20px]">
              <Image src={qr} alt="" />
            </td>
            <td className="pt-[10px] px-[20px]">500</td>
            <td className="pt-[10px]">
              <div className="w-fit text-[12px] rounded-[4px] px-[20px] py-[3px] font-semibold text-[#13b036]">
                Active
              </div>
            </td>
            <td className="pt-[10px] ps-[20px]">
              {new Date(post.date).toDateString()}
            </td>
            <td className="flex flex-row">
              <Image
                src={dlt}
                alt=""
                className="w-[42px] h-[42px]"
                onClick={() => handleDelete(post.id)}
              />
              <Link href={`/editPage/${post.id}`}>
                <Image src={edit} alt="" className="w-[42px] h-[42px]" />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
}