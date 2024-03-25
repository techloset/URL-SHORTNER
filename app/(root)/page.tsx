// import Image from "next/image";
// import React from "react";
// import look from "../../public/assets/images/Linkly.png";
// import bell from "../../public/assets/images/Bell.png";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/libs/AuthOptions";

// export default async function EditPage() {
//   const session = await getServerSession(authOptions);

//   return (
//     <>
//       <div className="w-full h-[120px] flex flex-row justify-between">
//         <div className="py-8 px-6">
//           <Image src={look} alt="" />
//         </div>
//         <div className=" flex flex-row py-9 px-8 gap-6">
//           <div className="text-white w-[150px] h-[46px] flex items-center gap-4 shadow-md mb-5 border rounded-[48px] border-[#353C4A] bg-[#181E29] pl-9 mt-1 ">
//             <div className="text-center items-center px-3.5">
//               {session?.user?.email?.slice(0, 5)}
//             </div>
//           </div>
//           <button className="w-[40px] sm:w-[40px]  md:w-[68px] bg-[#144EE3] h-[50px]  border rounded-[88px] border-[#144EE3] shadow-[#708bcd] text-white text-[13px] font-semibold cursor-pointer px-6 py-2 relative">
//             <Image src={bell} alt="" className="w-[20px] h-[20px]" />
//           </button>
//         </div>
//       </div>

//       <div className="max-w-[859px] mx-auto max-h-[70px] my-[46px] mt-[100px]  border-[4px] rounded-[48px] border-[#353C4A] bg-[#181E29] items-center flex flex-row justify-center px-8 py-2">
//         <input
//           type="text"
//           placeholder="Enter the link to shorten here"
//           className="w-full sm:[450px] outline-none bg-[#181E29] h-[50px] rounded-[48px] text-white  py-2"
//         />
//       </div>
//       <div className="max-w-[859px] mx-auto max-h-[70px] my-[46px] border-[4px] rounded-[48px] border-[#353C4A] bg-[#181E29] items-center flex flex-row justify-center px-8 py-4">
//         <input
//           type="text"
//           placeholder="Enter custom slug"
//           className="w-full sm:[450px] outline-none bg-[#181E29] h-[50px] rounded-[48px] text-white  py-2"
//         />
//         <div className="flex flex-row justify-center items-center ">
//           <button className="sm:w-[176px] md:w-[176px] bg-[#144EE3] shadow-[#144ee3] shadow-md  h-[50px]  border rounded-[48px] border-[#144EE3] text-white text-[13px] font-semibold cursor-pointer relative">
//             Auto Generate
//           </button>
//         </div>
//         {/* <button className=" sm:w-[176px] md:w-[176px] bg-[#144EE3] h-[50px]  border rounded-[48px] border-[#144EE3] shadow-[#144ee3] text-white text-[14px] font-semibold cursor-pointer   relative">
//           Auto Generate
//         </button> */}
//       </div>
//       <div className="flex flex-row justify-center items-center ">
//         <button className="w-[140px] sm:w-[140px]  md:w-[200px] bg-[#144EE3] shadow-[#144ee3] shadow-md  h-[50px]  border rounded-[48px] border-[#144EE3] text-white text-[13px] font-semibold cursor-pointer px-6 py-2 relative">
//           Shorten Now
//         </button>
//       </div>
//     </>
//   );
// }

import Image from "next/image";
import React from "react";
import link from "@/public/assets/vectors/Linkly.svg";
import sign from "@/public/assets/vectors/sign-in.svg";
import look from "@/public/assets/vectors/Looks.svg";
import linking from "@/public/assets/vectors/link.svg";

export default function page() {
  return (
    <>
      <div className=" max-w-[1621px] flex felx-row justify-between items-center flex-wrap">
        <div className="py-8 px-6 h-[120px]">
          <Image className="h-[35px]" src={link} alt="" />
        </div>
        <div className="flex flex-row py-8 px-8 gap-2">
          <button className="flex felx-row justify-between w-[123.9px] sm:w-[140px]  md:w-[123.9px] bg-[#343c4a] shadow-[#181e29] shadow-md  h-[50px]  border rounded-[48px] border-[#181329] text-white text-[13px] font-semibold cursor-pointer px-6 py-4 ">
            Logout
            <Image src={sign} alt="" />
          </button>
          <button className="w-[140px] sm:w-[140px]  md:w-[150px] bg-[#144EE3] shadow-[#144ee3] shadow-md  h-[50px]  border rounded-[48px] border-[#144EE3] text-white text-[13px] font-semibold cursor-pointer px-6 py-4 ">
            Register Now{" "}
          </button>
        </div>
        <div className="w-[1280px] h-[81px]  px-6 flex justify-center items-center self-center py-16">
          <Image src={look} alt="" />
        </div>
        <div className="w-[1280px] h-[41px] flex justify-center items-center">
          <p className="text-white text-center font-extralight">
            Linkly is an efficient and easy-to-use URL shortening service that
            streamlines your online experience.
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
      <div className="flex flex-row justify-center items-center flex-wrap">
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
        <p className="text-white px-2 font-extralight">
          Auto paste from clipboard
        </p>
      </div>
      <div className="text-white text-center py-12 font-extralight">
        You can create{" "}
        <span style={{ color: "#eb568e", fontWeight: "bold" }}>05</span> more
        links. Register Now to enjoy Unlimited usage
      </div>
      {/* <div className="px-12">
        <div className=" w-full mx-auto px-12  h-[60px] border rounded-[10px] bg-[#181e29] border-[#181e29] ">
          <div className="px-4 py-4 flex flex-row justify-between">
            <h2 className="text-white">Short Link</h2>
            <h2 className="text-white">Original Link</h2>
            <h2 className="text-white gap-[-3]">QR Code</h2>
            <h2 className="text-white">Clicks</h2>
            <h2 className="text-white">Status</h2>
            <h2 className="text-white">Date</h2>
          </div>
        </div>
      </div> */}

      <div className="px-12 py-1">
        <table className="  w-full font-light text-sm h-[60px]  text-left rtl:text-right border rounded-[10px] bg-[#181e29] border-[#181e29] ">
          <thead className="text-[16px] h-[60px] text-[#A2A1A8] font-light px-6">
            <tr>
              <th scope="col" className="py-[10px]">
                Short Link
              </th>
              <th scope="col" className="py-[10px]">
                Original Link
              </th>
              <th scope="col" className="py-[10px]">
                OR Code
              </th>
              <th scope="col" className="py-[10px]">
                Clicks
              </th>
              <th scope="col" className="py-[10px]">
                Status
              </th>
              <th scope="col" className="py-[10px] pe-[-20px] gap-8">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#0b101b] text-white">
            <tr className="border-t-[1px] border-[#8d99ae] h-[60px]">
              <td scope="row" className=" pt-[10px] ">
                https://linkly.com/Bn41aCOlnxj
              </td>
              <td className="pt-[10px]">
                https://www.twitter.com/tweets/8erelCoihu/
              </td>
              <td className="pt-[10px]">QR Code</td>
              <td className="pt-[10px]">500</td>
              <td className="pt-[10px]">
                <div className="w-fit text-[12px] rounded-[4px] px-[9px] py-[3px] font-light">
                  Active
                </div>
              </td>
              <td className="pt-[10px] ps-[20px]">24 March 2024</td>
            </tr>
          </tbody>
        </table>
        {/* <div className=" justift-center items-center w-full mx-auto  h-[60px] border rounded-[10px] bg-[#0c1821] border-[#0c1821] ">
          <div className=" py-4 flex flex-row justify-between w-full">
            <h2 className="text-white w-[199px]">
              https://linkly.com/Bn41aCOlnxj
            </h2>
            <h2 className="text-white w-[99px]">
              https://www.twitter.com/tweets/8erelCoihu/
            </h2>
            <h2 className="text-white w-[99px] ">QR Code</h2>
            <h2 className="text-white w-[99px]">500</h2>
            <h2 className="text-white w-[99px]">Active</h2>
            <h2 className="text-white w-[99px]">OCT-10 2023</h2>
          </div>
        </div> */}
      </div>
    </>
  );
}
