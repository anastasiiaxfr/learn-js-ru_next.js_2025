import Image from "next/image";
import Link from "next/link";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import AddToFavorite from "../AddToFavorite";

import s from "./styles.module.css";
import { Badge } from "@/components/ui/badge";
import type { Racket } from "../../../types/racket";

type Props = {
  data: Racket;
};

function CardComponent({ data }: Props) {
  const { id, name, model, brand, imageUrl } = data;
  const isFavorite = false;

  return (
    <Card className={s.card}>
      <div className={s.card_img_wrapper}>
        <Link href={`/rackets/${id}`}>
          <Image
            src={imageUrl}
            alt={name}
            className={s.card_img}
            width={400}
            height={400}
          />
        </Link>

        <div className={s.card_tags}>
          <Badge variant="default">{brand.name}</Badge>
        </div>
        <div className="ml-auto mt-4 mr-4">
          <AddToFavorite isFavorite={isFavorite} />
        </div>
      </div>
      <Link href={`/rackets/${id}`}>
        <CardHeader className={s.card_body}>
          <CardTitle>
            <h3 className={s.card_title}>{name}</h3>
            <span className={s.card_info}>{model}</span>
          </CardTitle>
        </CardHeader>
      </Link>
    </Card>
  );
}

export default CardComponent;
