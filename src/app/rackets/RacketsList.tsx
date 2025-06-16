import Card from "@/components/custom/Card";
import type { Racket } from "@/types/racket";

type Props = {
  items: Racket[];
};

export default function RacketsList({ items }: Props) {
  return (
    <div className="cards">
      {items.map((racket) => (
        <Card key={racket.id} data={racket} />
      ))}
    </div>
  );
}
