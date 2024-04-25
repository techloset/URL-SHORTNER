import { UseFormRegister } from "react-hook-form";

interface InputProps {
  type: string;
  placeholder: string;
}

export const CustomInput: React.FC<InputProps> = ({ type, placeholder }) => {
  return (
    <>
      <div className="max-w-[859px] mx-auto max-h-[70px] my-[46px] border-[4px] rounded-[48px] border-[#353C4A] bg-[#181E29] items-center flex flex-row justify-center px-8 py-4">
        <input
          type={type}
          placeholder={placeholder}
          className="w-full sm:[450px] outline-none bg-[#181E29] h-[50px] rounded-[48px] text-white  py-2"
        />
        <div className="flex flex-row justify-center items-center ">
          <button className="sm:w-[176px] md:w-[176px] bg-[#144EE3] shadow-[#144ee3] shadow-md  h-[50px]  border rounded-[48px] border-[#144EE3] text-white text-[13px] font-semibold cursor-pointer relative">
            Auto Generate
          </button>
        </div>
      </div>
    </>
  );
};

interface Props {
  register: UseFormRegister<any>;
  type: string;
  placeholder: string;
}

export const Input: React.FC<Props> = ({ register, type, placeholder }) => {
  return (
    <div className="max-w-[859px] mx-auto max-h-[70px] my-[46px] mt-[100px]  border-[4px] rounded-[48px] border-[#353C4A] bg-[#181E29] items-center flex flex-row justify-center px-8 py-2">
      <input
        {...register("link")}
        type={type}
        placeholder={placeholder}
        className="w-full sm:[450px] outline-none bg-[#181E29] h-[50px] rounded-[48px] text-white  py-2"
      />
    </div>
  );
};
