import RacketsList from "../../../components/rackets/RacketsList";
import RacketsPagination from "../../../components/rackets/RacketsPagination";
import { getTopRackets } from "@/services/get-top-rackets";
import { Suspense } from "react";

const ITEMS_PER_PAGE = 8;

export default async function RacketsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const data = await getTopRackets();

  if (!data.data.length) {
    return null;
  }

  const params = await searchParams;
  const currentPage = parseInt(params.page || "1", 10);
  const totalPages = Math.ceil(data.data.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = data.data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <>
      <h1 className="">TOP rackets</h1>
      <Suspense fallback={<div>loading rackets...</div>}>
        <RacketsList items={currentItems} />
      </Suspense>
      <RacketsPagination currentPage={currentPage} totalPages={totalPages} />
    </>
  );
}
