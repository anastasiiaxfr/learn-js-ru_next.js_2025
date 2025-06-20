import Card from "@/components/custom/Card";
import type { Racket } from "@/types/racket";

type Props = {
  items: Racket[];
  count?: number;
};

const RacketsList = ({ items, count = items.length }: Props) => {
  return (
    <div className="cards">
      {items.slice(0, count).map((racket: Racket) => (
        <Card data={racket} key={racket.id} />
      ))}
    </div>
  );
};

export default RacketsList;
