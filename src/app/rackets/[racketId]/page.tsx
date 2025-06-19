import Image from "next/image";
import { rackets } from "@/mock";
import { Badge } from "@/components/ui/badge";
import s from "./styles.module.css";
import { notFound } from "next/navigation";

export const generateStaticParams = () => {
  return rackets.map((racket) => ({
    racketId: racket.id.toString(),
  }));
};

export default async function RacketDetailPage({
  params,
}: {
  params: Promise<{ racketId: string }>;
}) {
  const realParams = await params;
  const racket = rackets.find(
    ({ id }) => id.toString() === realParams.racketId
  );

  if (!racket) {
    return notFound();
  }

  const { name, description, brand, type, price, model, year, imageUrl } =
    racket;

  return (
    <div className={s.row}>
      <div>
        <Image
          src={imageUrl}
          alt={name}
          width="400"
          height="400"
          className={s.img}
        />
      </div>
      <div>
        <div className={s.info}>
          <Badge variant="default" className="uppercase">
            {type}
          </Badge>
          <Badge variant="default">{brand.name}</Badge>
        </div>

        <h1 className={s.title}>
          {name} <small>{model}</small>
        </h1>
        <div className="mb-4">
          <p>price: {price}</p>
          <p>year: {year}</p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}
