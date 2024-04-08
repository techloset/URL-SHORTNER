import { redirect } from "next/navigation";

export default function LinkPage({ params }: { params: { linkId: string[] } }) {
  console.log(params.linkId[0]);
  redirect("");
  return (
    <div>
      <h2>Hello World</h2>
    </div>
  );
}
