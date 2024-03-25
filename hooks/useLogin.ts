"use client";

import { signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useLogin() {
  useEffect(() => {
    signOut({
      redirect: false,
    });
  }, []);

  const [loading, setLoading] = useState(false);

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const login = async () => {
    setLoading(true);

    const login = await signIn("credentials", {
      email: emailValue,
      password: passwordValue,
      redirect: false,
    });

    if (login?.ok) {
      toast.success("Successfully login");
      window.location.assign("/");
    } else if (login?.error) {
      toast.error(login?.error);
    }

    setLoading(false);
  };

  const handleEmailChange = (e: any) => {
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPasswordValue(e.target.value);
  };

  return {
    loading,
    login,
    handleEmailChange,
    handlePasswordChange,
    emailValue,
    passwordValue,
  };
}
