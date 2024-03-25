"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { signOut } from "next-auth/react";

export default function useRegister() {
  const router = useRouter();
  useEffect(() => {
    signOut({
      redirect: false,
    });
  }, []);

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");

  const [loading, setLoading] = useState(false);

  const register = async () => {
    setLoading(true);
    try {
      await axios.post("/api/register", {
        email: emailValue,
        password: passwordValue,
      });

      toast.success("User Registered Successfully");

      router.push("/signin");
    } catch (err: any) {
      console.log(err);
      toast.error(err?.response?.data);
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
