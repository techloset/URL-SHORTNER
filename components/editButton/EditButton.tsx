import { EditButtonProps } from "@/types/types";

const EditButton: React.FC<EditButtonProps> = ({ label, loading }) => {
  return (
    <div className="flex flex-row justify-center items-center">
      <button
        type="submit"
        className="w-[140px] sm:w-[140px] md:w-[200px] bg-[#144EE3] shadow-[#144ee3] shadow-md h-[50px] border rounded-[48px] border-[#144EE3] text-white text-[13px] font-semibold cursor-pointer px-6 py-2 relative"
        disabled={loading}
      >
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
          </div>
        ) : (
          label
        )}
      </button>
    </div>
  );
};

export default EditButton;
