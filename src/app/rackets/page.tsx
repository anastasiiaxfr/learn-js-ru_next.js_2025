import { rackets } from "@/mock";
import RacketsList from "./RacketsList";
import RacketsPagination from "./RacketsPagination";

const ITEMS_PER_PAGE = 8;

export default async function RacketsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const currentPage = parseInt(params.page || "1", 10);
  const totalPages = Math.ceil(rackets.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = rackets.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <>
      <RacketsList items={currentItems} />
      <RacketsPagination currentPage={currentPage} totalPages={totalPages} />
    </>
  );
}
