import { BASE_API_URL } from "@/constants/api";

export const getRacketsBrand = async () => {
  const result = await fetch(`${BASE_API_URL}/brands`);

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data = await result.json();
  return { isError: false, data };
};
