import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import AddToFavorite from "../custom/AddToFavorite";

import s from "./styles.module.css";
import { Racket } from "@/types/racket";
import { User } from "@/types/user";

type Props = {
  racket: Racket;
  user: User | null;
};

function RacketPage({ racket, user }: Props) {
  const { name, description, brand, type, price, model, year, imageUrl } =
    racket;

  return (
    <>
      <div className={s.row}>
        <div className={s.img_wrap}>
          <Image
            src={imageUrl}
            alt={name}
            width="400"
            height="400"
            className={s.img}
          />
          {user && (
            <div className="ml-4 mt-4">
              <AddToFavorite isFavorite={false} />
            </div>
          )}
        </div>
        <div className="flex space-x-10">
          <Separator orientation="vertical" className="hidden lg:block" />

          <div>
            <div className={s.info}>
              <Badge variant="default" className="uppercase">
                {type}
              </Badge>
              <Badge variant="default">{brand.name}</Badge>
            </div>

            <h1 className={s.title}>{name}</h1>
            <p>{model}</p>
            <div className="mb-4">
              <p>price: {price}</p>
              <p>year: {year}</p>
            </div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RacketPage;
