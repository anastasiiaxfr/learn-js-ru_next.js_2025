import RacketsList from "../../../components/rackets/RacketsList";
import { getTopRackets } from "@/services/get-top-rackets";

export default async function RacketsPage() {
  const data = await getTopRackets();

  if (!data.data.length) {
    return null;
  }

  return (
    <>
      <h1 className="">TOP rackets</h1>
      <RacketsList items={data.data} count={10} />
    </>
  );
}
