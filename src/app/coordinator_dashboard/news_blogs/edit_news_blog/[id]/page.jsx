import React from "react";
import dynamic from "next/dynamic";
import { getNewsById } from "../../../../services/api";

const EditNews = dynamic(
  () =>
    import(
      "../../../../../components/UI/Dashboard/NewsBlogs/EditNews/EditNews"
    ),
  {
    loading: () => <p></p>,
  },
);

export default async function page({ params }) {
  const { id } = params;
  const data = await getNewsById(id);

  return <EditNews data={data} />;
}
