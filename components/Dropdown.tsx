import Image from "next/image";
import { useState } from "react";
import { SomeIcon } from "./Svg";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center pe-[5px] justify-between h-[50px] ms-5 w-[184px] rounded border-grayBorder border-[1px] focus:outline-none "
        onClick={toggleDropdown}
      >
        <div className="flex ms-[5px]">
          <div className="flex flex-col items-start ms-[5px]">
            <div className="text-lg font-semibold ">Lucifer</div>
            <div className="text-[12px] text-[#A2A1A8] ">Hr Manager</div>
          </div>
        </div>
        <Image
          src={""}
          className={`${
            isOpen ? "rotate-180" : "rotate-0"
          } ease-in-out duration-500 `}
          alt="Arrow Down"
        />
      </button>
      {isOpen && (
        <div className="absolute right-[-20px] mt-2 w-[184px] border-grayBorder border-[1px] bg-customDark rounded shadow-lg">
          <ul>
            <li className="px-4 py-2 hover:bg-customOrange">About</li>
            <li className="px-4 py-2 hover:bg-customOrange">Profile Info</li>
            <div className="border-grayBorder border-[1px]"></div>
            <li className="px-4 py-3 hover:bg-customOrange ">Sign out</li>
          </ul>
        </div>
      )}
      <SomeIcon color="grey" />
    </div>
  );
};

export default DropDown;
