"use client";
import { useEffect, useState } from "react";

export default function useLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [linkId, setLinkId] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return {
    isLoading,
    linkId,
    setLinkId,
  };
}
