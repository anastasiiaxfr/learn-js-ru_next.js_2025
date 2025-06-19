import { getTopRackets } from "@/services/get-top-rackets";
import { getRackets } from "@/services/get-rackets";
import RacketsList from "../components/rackets/RacketsList";

export default async function HomePage() {
  const topRackets = await getTopRackets();
  const rackets = await getRackets();

  if (!topRackets.data.length || !rackets.data.length) {
    return null;
  }

  return (
    <div>
      {topRackets.data.length &&
        <>
          <h2>TOP 10 Rackets</h2>
          <RacketsList items={topRackets.data} count={10} />
        </>
      }

      {rackets.data.length &&
        <>
          <h2>Newest Rackets</h2>
          <RacketsList items={rackets.data} count={10} />
        </>}
    </div>
  );
}
