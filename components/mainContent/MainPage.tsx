import MainTable from "../table/MainTable";
import TableHeadings from "../tableHeadings/TableHeadings";

export default function MainPage() {
  return (
    <div className="w-[1220px]">
      <div className="   w-[1250px] px-12 py-1">
        <table className=" sm:w-[350px] md:w-full font-light text-sm h-[60px]  text-left rtl:text-right border rounded-[10px] bg-[#181e29] border-[#181e29] sm:flex-wrap ">
          <TableHeadings />
          <MainTable />
        </table>
      </div>
    </div>
  );
}
