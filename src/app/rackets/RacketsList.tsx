import Card from "@/components/custom/Card";

type Props = {
    items: typeof import("@/mock").rackets;
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
