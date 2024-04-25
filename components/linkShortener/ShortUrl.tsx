import UrlForm from "../urlForm/UrlForm";
import useLoader from "@/hooks/useLoader";

export default function UrlShort() {
  const { setLinkId } = useLoader();

  return (
    <>
      <UrlForm setLinkId={setLinkId} />
    </>
  );
}
