import RacketsList from "../../components/rackets/RacketsList";
import RacketsPagination from "../../components/rackets/RacketsPagination";
import { getRackets } from "@/services/get-rackets";

const ITEMS_PER_PAGE = 20;

export default async function RacketsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const currentPage = parseInt(params.page || "1", 10);

  const { data, isError } = await getRackets(currentPage, ITEMS_PER_PAGE);

  if (isError || !data.length) {
    return null;
  }

  const totalPages = Math.ceil(data?.total || 100 / ITEMS_PER_PAGE);

  return (
    <>
      <RacketsList items={data} />
      <RacketsPagination currentPage={currentPage} totalPages={totalPages} />
    </>
  );
}
