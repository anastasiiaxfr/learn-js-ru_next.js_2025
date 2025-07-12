"use client";

import { BASE_API_URL } from "@/constants/api";
import useSWR from "swr";
import RacketsList from "./RacketsList";

type Props = {
  page: number;
  limit: number;
};

const fetcher = async (path: string) => {
  const response = await fetch(`${BASE_API_URL}/${path}`, {
    credentials: "include",
  });

  const result = await response.json();

  return { data: result };
};

export default function RacketsListWithSWR({ page, limit }: Props) {
  const { data, error, isLoading } = useSWR(
    `products?page=${page}&limit=${limit}`,
    fetcher,
    {
      revalidateIfStale: false,
    }
  );

  const rackets = data?.data;

  if (error) {
    return "error";
  }

  if (isLoading && !rackets?.length) {
    return "isLoading";
  }

  if (!rackets?.length) {
    return "no data";
  }

  return <RacketsList items={rackets} />;
}
