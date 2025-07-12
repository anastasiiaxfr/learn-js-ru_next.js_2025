import { Racket } from "@/types/racket";
const LIMIT = 8;

export const getKey = (initialData?: Racket[]) => {
  return (page: number) => {
    if (page === 0 && typeof window !== undefined && initialData) {
      return initialData;
    }

    return `products?page=${page + 1}&limit=${LIMIT}`;
  };
};
