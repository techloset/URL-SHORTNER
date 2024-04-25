import EditForm from "@/components/editForm/EditForm";
import Profile from "@/components/profile/UserName";
import look from "@/public/assets/images/Linkly.png";
import button from "@/public/assets/vectors/Button.svg";
import Image from "next/image";

export default function EditPage({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="w-full h-[120px] flex flex-row justify-between">
        <div className="py-8 px-6">
          <Image src={look} alt="" />
        </div>
        <div className=" flex flex-row py-7 px-6 flex-wrap ">
          <Profile />
          <Image src={button} alt="" className="w-[98px] h-[68px]" />
        </div>
      </div>
      <EditForm params={params} />
    </>
  );
}
