import { BASE_API_URL } from "@/constants/api";

export const getRackets = async (page: number, limit: number) => {
  const result = await fetch(
    `${BASE_API_URL}/products?page=${page}&limit=${limit}`
  );

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data = await result.json();

  return { isError: false, data };
};
