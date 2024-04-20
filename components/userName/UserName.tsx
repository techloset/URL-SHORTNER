import { useSession } from "next-auth/react";

export default function UserName() {
  const { data: sessions } = useSession();
  console.log("sess", sessions?.user?.email);

  return (
    <div className="text-white flex items-center gap-4 shadow-md mb-5 border rounded-[48px] border-[#353C4A] bg-[#181E29] mt-1 ">
      <div className="text-center items-center px-3.5 w-auto">
        {sessions?.user?.email}
      </div>
    </div>
  );
}
