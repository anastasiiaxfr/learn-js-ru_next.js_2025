import { BASE_API_URL } from "@/constants/api";

export const getTopRackets = async () => {
  const result = await fetch(`${BASE_API_URL}/top-10`, {
    next: {
      revalidate: 10,
      //tags: ["getTopRackets"],
    },
  });

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data = await result.json();

  return { isError: false, data };
};
