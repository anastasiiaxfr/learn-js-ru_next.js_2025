import { FC } from "react";
import RacketPage from "./RacketPage";
import { notFound } from "next/navigation";
import { getRacketById } from "@/services/get-racket-by-id";

type Props = {
  racketId: string;
};

export const RacketContainer: FC<Props> = async ({ racketId }) => {
  const { data, isError } = await getRacketById({ id: racketId });

  if (isError) {
    throw new Error("error");
  }

  if (!data) {
    return notFound();
  }

  return <RacketPage racket={data} />;
};
