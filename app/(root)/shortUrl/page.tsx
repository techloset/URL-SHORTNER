"use client";
import UrlForm from "@/components/urlForm/UrlForm";
import useLoader from "@/hooks/useLoader";
import UrlShort from "@/components/shortUrl/ShortUrl";
import Loader from "@/components/loader/Loader";

export default function ShortUrl() {
  const { setLinkId, isLoading } = useLoader();
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <UrlShort />
          <UrlForm setLinkId={setLinkId} />
        </>
      )}
    </>
  );
}
