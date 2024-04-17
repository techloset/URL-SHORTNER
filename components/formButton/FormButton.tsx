import { ButtonProps } from "@/types/types";

const FormButton: React.FC<ButtonProps> = ({ onClick, label, isLoading }) => {
  return (
    <button
      onClick={onClick}
      className="w-[200px] bg-[#144EE3] h-[50px]  border rounded-[48px] border-[#144EE3] text-white font-semibold cursor-pointer px-6 py-2 relative"
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
        </div>
      ) : (
        label
      )}
    </button>
  );
};

export default FormButton;
