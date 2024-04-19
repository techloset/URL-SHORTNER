// import { authOptions } from "@/libs/AuthOptions";
// import { getServerSession } from "next-auth";

// export default async function UserName() {
//   const session = await getServerSession(authOptions);

//   return (
//     <div className="text-white flex items-center gap-4 shadow-md mb-5 border rounded-[48px] border-[#353C4A] bg-[#181E29] mt-1 ">
//       <div className="text-center items-center px-3.5 w-auto">
//         {session?.user?.email}
//       </div>
//     </div>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import { authOptions } from "@/libs/AuthOptions";
import { getServerSession } from "next-auth";

export default function UserName() {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    async function fetchUserEmail() {
      try {
        const session = await getServerSession(authOptions);
        setUserEmail(session?.user?.email || "");
      } catch (error) {
        console.error("Error fetching user email:", error);
      }
    }

    fetchUserEmail();
  }, []);

  return (
    <div className="text-white flex items-center gap-4 shadow-md mb-5 border rounded-[48px] border-[#353C4A] bg-[#181E29] mt-1">
      <div className="text-center items-center px-3.5 w-auto">{userEmail}</div>
    </div>
  );
}
