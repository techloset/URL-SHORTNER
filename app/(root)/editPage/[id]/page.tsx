import EditForm from "@/components/editForm/EditForm";

import Edit from "@/components/editPage/Edit";

export default function EditPage({ params }: { params: { id: string } }) {
  return (
    <>
      <Edit />
      <EditForm params={params} />
    </>
  );
}
