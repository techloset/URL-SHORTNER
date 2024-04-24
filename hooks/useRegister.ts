"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { signOut } from "next-auth/react";
import { useAppDispatch, useAppSelector } from "@/app/redux/store";
import { registerUser } from "@/app/redux/slice/auth/authSlice";

export default function useRegister() {
  const router = useRouter();
  useEffect(() => {
    signOut({
      redirect: false,
    });
  }, []);

  const dispatch = useAppDispatch();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");

  const [loading, setLoading] = useState(false);

  const register = async (email: string, password: string) => {
    setLoading(true);
    try {
      await dispatch(registerUser({ email, password }));
      router.push("/signin");
    } catch (err: any) {
      toast.error(err?.response);
      if (err.message === "Request failed with status code 409") {
        toast.error("User with this email already exists.");
      } else {
        toast.error("Error occurred while registering user.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEmailChange = (e: any) => {
    setEmailValue(e.target.value);
  };

  const handleConfirmPasswordChange = (e: any) => {
    setConfirmPasswordValue(e.target.value);
  };
  const handlePasswordChange = (e: any) => {
    setPasswordValue(e.target.value);
  };
  const handleNameChange = (e: any) => {
    setNameValue(e.target.value);
  };

  return {
    handleConfirmPasswordChange,
    handleNameChange,
    handlePasswordChange,
    handleEmailChange,
    register,
    loading,
    confirmPasswordValue,
    nameValue,
    passwordValue,
    emailValue,
  };
}
