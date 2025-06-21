import RacketsList from "@/components/rackets/RacketsList";
import { getTopRackets } from "@/services/get-top-rackets";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tennis store | Top rackets",
  description: "tennis rackets",
};

export default async function RacketsPage() {
  const { isError, data } = await getTopRackets();

  if (!data) {
    return notFound();
  }

  if (isError) {
    throw new Error("error");
  }

  return (
    <>
      <h1 className="">TOP rackets</h1>
      <RacketsList items={data} />
    </>
  );
}
