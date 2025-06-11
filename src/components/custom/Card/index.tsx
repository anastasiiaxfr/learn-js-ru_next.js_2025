import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import s from "./styles.module.css";
import { Badge } from "@/components/ui/badge";
import type { Racket } from "./types";

type Props = {
  data: Racket;
};

function CardComponent({ data }: Props) {
  const { id, name, model, brand, imageUrl } = data;

  return (
    <Link href={`/rackets/${id}`}>
      <Card className={s.card}>
        <div className={s.card_img_wrapper}>
          <Image
            src={imageUrl}
            alt={name}
            className={s.card_img}
            width={400}
            height={400}
          />
          <div className={s.card_tags}>
            <Badge variant="default">{brand.name}</Badge>
          </div>
        </div>
        <CardHeader className={s.card_body}>
          <CardTitle>
            <h3 className={s.card_title}>{name}</h3>
            <span className={s.card_info}>{model}</span>
          </CardTitle>
        </CardHeader>
      </Card>
    </Link>
  );
}

export default CardComponent;
