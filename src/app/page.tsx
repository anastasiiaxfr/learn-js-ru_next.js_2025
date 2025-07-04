import { getTopRackets } from "@/services/get-top-rackets";
import { getRackets } from "@/services/get-rackets";
import RacketsList from "../components/rackets/RacketsList";
import { notFound } from "next/navigation";
import RacketSlider from "@/components/rackets/RacketSlider";

export default async function HomePage() {
  const [
    { data: topRackets, isError: isErrorTopRackets },
    { data: rackets, isError: isErrorAllRackets },
  ] = await Promise.all([getTopRackets(), getRackets(1, 10)]);
  if (isErrorTopRackets || isErrorAllRackets) {
    return "someError";
  }

  if (!topRackets || !rackets) {
    return notFound();
  }

  return (
    <div>
      {topRackets.length && (
        <div className="mb-10">
          <h2>TOP 10 Rackets</h2>
          <div className="px-10">
            <RacketSlider data={topRackets} />
          </div>
        </div>
      )}

      {rackets.length && (
        <>
          <h2>Newest Rackets</h2>
          <RacketsList items={rackets} />
        </>
      )}
    </div>
  );
}
