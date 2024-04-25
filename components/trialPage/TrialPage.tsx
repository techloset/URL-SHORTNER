"use client";
import React from "react";
import Table from "../customTable/Table";

import TableHeadings from "../tableHeadings/TableHeadings";

export default function HomePage() {
  return (
    <>
      <div className="w-[1220px]">
        <div className="   w-[1250px] px-12 py-1">
          <table className=" sm:w-[350px] md:w-full font-light text-sm h-[60px]  text-left rtl:text-right border rounded-[10px]  border-[#181e29] sm:flex-wrap ">
            <TableHeadings />
            <Table />
          </table>
        </div>
      </div>
    </>
  );
}
