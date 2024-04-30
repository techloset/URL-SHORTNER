"use client";
import { signOut, useSession } from "next-auth/react";

export default function Profile() {
  const { data: sessions } = useSession();
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <button
      onClick={handleSignOut}
      className="text-white flex items-center gap-4 shadow-md mb-5 border rounded-[48px] border-[#353C4A] bg-[#343c4a] hover:bg-[#181e29] mt-1"
    >
      <div className="text-center items-center px-3.5 w-auto">
        {sessions?.user?.email}
      </div>
    </button>
  );
}
