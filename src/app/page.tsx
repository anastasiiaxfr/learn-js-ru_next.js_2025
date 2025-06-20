import { getTopRackets } from "@/services/get-top-rackets";
import { getRackets } from "@/services/get-rackets";
import RacketsList from "../components/rackets/RacketsList";
import { notFound } from "next/navigation";

export default async function HomePage() {
  const [
    { data: topRackets, isError: isErrorTopRackets },
    { data: rackets, isError: isErrorAllRackets },
  ] = await Promise.all([getTopRackets(), getRackets()]);
  if (isErrorTopRackets || isErrorAllRackets) {
    return "someError";
  }

  if (!topRackets || !rackets) {
    return notFound();
  }

  return (
    <div>
      {topRackets.length && (
        <>
          <h2>TOP 10 Rackets</h2>
          <RacketsList items={topRackets} count={10} />
        </>
      )}

      {rackets.length && (
        <>
          <h2>Newest Rackets</h2>
          <RacketsList items={rackets} count={10} />
        </>
      )}
    </div>
  );
}
