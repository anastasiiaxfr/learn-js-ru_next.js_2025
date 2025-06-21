import Card from "@/components/custom/Card";
import type { Racket } from "@/types/racket";

type Props = {
  items: Racket[];
};

const RacketsList = ({ items}: Props) => {
  return (
    <div className="cards">
      {items.map((racket: Racket) => (
        <Card data={racket} key={racket.id} />
      ))}
    </div>
  );
};

export default RacketsList;
