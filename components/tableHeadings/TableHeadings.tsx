import React from "react";

export default function TableHeadings() {
  return (
    <thead className="text-[16px] h-[60px] text-[#A2A1A8] font-semibold px-6">
      <tr>
        <th scope="col" className="py-[10px]">
          Short Link
        </th>
        <th scope="col" className="py-[10px]">
          Original Link
        </th>
        <th scope="col" className="py-[10px] px-[15px]">
          OR Code
        </th>
        <th scope="col" className="py-[10px] px-[15px]">
          Clicks
        </th>
        <th scope="col" className="py-[10px] px-[15px]">
          Status
        </th>
        <th scope="col" className="py-[10px] px-[30px]">
          Date
        </th>
        <th scope="col" className="py-[10px] px-[30px]">
          Action
        </th>
      </tr>
    </thead>
  );
}
