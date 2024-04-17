"use client";

import Image from "next/image";
import link from "@/public/assets/images/Linkly.png";
import look from "@/public/assets/images/Look.png";
import google from "@/public/assets/images/Google.png";
import Link from "next/link";
import { signIn } from "next-auth/react";
import InputFields from "@/components/inputField/Input";
import FormButton from "@/components/formButton/FormButton";
import useLogin from "@/hooks/useLogin";
import useLoader from "@/hooks/useLoader";
import Loader from "@/components/loader/Loader";

export default function LoginForm() {
  const {
    loading,
    login,
    handleEmailChange,
    handlePasswordChange,
    emailValue,
    passwordValue,
  } = useLogin();

  const { isLoading } = useLoader();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="w-full h-[200px] flex flex-col justify-between items-center">
            <div className="py-8">
              <Image src={link} alt="" />
            </div>
            <div className="py-8">
              <Image
                className="w-[350px] sm:w-[450px]  md:w-[550px]"
                src={look}
                alt=""
              />
            </div>
            <div>
              <p className="font-extralight flex flex-wrap w-[390px] sm:w-[480px] md:w-[634px] text-[16px] text-[#C9CED6]">
                Linkly is an efficient and easy-to-use URL shortening service
                that streamlines your online experience.
              </p>
            </div>

            <div className=" flex flex-col gap-[32px] py-8  items-center">
              <InputFields
                placeholder="Enter your email here"
                value={emailValue}
                onChange={handleEmailChange}
                type="email"
              />
              <InputFields
                placeholder="Enter your password here"
                value={passwordValue}
                onChange={handlePasswordChange}
                type="password"
              />
            </div>

            <FormButton
              onClick={login}
              label={loading ? "Logging in..." : "Login"}
              isLoading={loading}
            />
            <div className="py-6">
              <p className="text-[#C9CED6]">
                <Link href="/signup">
                  <span className="text-[#144EE3] underline text-[18px] gap-2">
                    Register
                  </span>
                </Link>{" "}
                if not already registered
              </p>
            </div>
            <p className="text-[#C9CED6] flex flex-row items-center mb-10">
              {" "}
              OR
            </p>
            <div>
              <button
                onClick={() => signIn("google")}
                className="flex items-center gap-4 shadow-md mb-5 shadow-[#585454] rounded-lg pl-3"
              >
                <Image src={google} height={30} width={30} alt="" />
                <span className="bg-[#144ee3] text-white rounded-lg px-4 py-3">
                  SignIn with Google
                </span>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
