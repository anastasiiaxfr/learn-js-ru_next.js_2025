import RacketsListWithSWR from "@/components/rackets/RacketsListWithSWR";
import RacketsPagination from "../../components/rackets/RacketsPagination";
import { getRackets } from "@/services/get-rackets";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SWRConfig } from "swr";
import RacketBrands from "@/components/rackets/RacketBrands";

const ITEMS_PER_PAGE = 8;

export const metadata: Metadata = {
  title: "Tennis store | All rackets",
  description: "tennis rackets",
};

export default async function RacketsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const currentPage = parseInt(params.page || "1", 10);

  const { data, isError } = await getRackets(currentPage, ITEMS_PER_PAGE);

  if (isError || !data.length) {
    throw new Error("error");
  }

  if (!data) {
    return notFound();
  }

  const isLastPage = data.length < ITEMS_PER_PAGE;
  const totalPages = isLastPage ? currentPage : currentPage + 1;

  const { page = "1" } = await searchParams;
  let pageNumber = 1;
  if (typeof page === "string") {
    pageNumber = parseInt(page) || 1;
  }

  return (
    <SWRConfig
      value={{
        fallback: {
          [`products?page=${page}&limit=${ITEMS_PER_PAGE}`]: getRackets(
            pageNumber,
            ITEMS_PER_PAGE
          ),
        },
      }}
    >
      <div className="mb-10">
        <RacketBrands />
      </div>
      <RacketsListWithSWR page={currentPage} limit={ITEMS_PER_PAGE} />
      <RacketsPagination currentPage={currentPage} totalPages={totalPages} />
    </SWRConfig>
  );
}
