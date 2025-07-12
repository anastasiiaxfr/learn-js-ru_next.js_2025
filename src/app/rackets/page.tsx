import RacketsList from "../../components/rackets/RacketsList";
import RacketsPagination from "../../components/rackets/RacketsPagination";
import { getRackets } from "@/services/get-rackets";
import { Metadata } from "next";
import { SWRConfig } from "swr";

const ITEMS_PER_PAGE = 8;

export const metadata: Metadata = {
  title: "Tennis store | All rackets",
  description: "tennis rackets",
};

export default async function RacketsPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = parseInt(searchParams.page || "1", 10);

  const initialData = await getRackets(currentPage, ITEMS_PER_PAGE);

  const currentPageData = initialData?.data;

  if (!currentPageData || currentPageData.length === 0) {
    return "no data";
  }

  const isLastPage = currentPageData.length < ITEMS_PER_PAGE;

  const totalPages = isLastPage
    ? currentPage
    : currentPage + 1;

  const fallbackKey = `products?page=${currentPage}&limit=${ITEMS_PER_PAGE}`;

  return (
    <SWRConfig
      value={{
        fallback: {
          [fallbackKey]: initialData,
        },
      }}
    >
      <RacketsList items={initialData.data} />
      <RacketsPagination currentPage={currentPage} totalPages={totalPages} />
    </SWRConfig>
  );
}
