import { InputProps } from "@/types/types";

const InputFields: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  type,
}) => {
  return (
    <>
      <input
        style={{ color: "white" }}
        className="w-[380px]  sm:[450px]  md:w-[500px] h-[55px] border rounded-[48px] border-[#353C4A] py-2 px-6 bg-[#181E29]"
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};

export default InputFields;
