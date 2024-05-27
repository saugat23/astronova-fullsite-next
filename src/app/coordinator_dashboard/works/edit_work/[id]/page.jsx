import React from "react";
import dynamic from "next/dynamic";
import { getWorkById } from "../../../../services/api";

const EditWork = dynamic(
  () =>
    import("../../../../../components/UI/Dashboard/Works/EditWork/EditWork"),
  {
    loading: () => <p> </p>,
  },
);

async function page({ params }) {
  const id = params;
  const data = await getWorkById(id);

  return <EditWork data={data} />;
}

export default page;
