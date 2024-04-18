"use client";
import UrlForm from "@/components/urlForm/UrlForm";
import useLoader from "@/hooks/useLoader";
import UrlShort from "@/components/shortUrl/ShortUrl";

export default function ShortUrl() {
  const { setLinkId } = useLoader();
  return (
    <>
      <UrlShort />
      <UrlForm setLinkId={setLinkId} />
    </>
  );
}
