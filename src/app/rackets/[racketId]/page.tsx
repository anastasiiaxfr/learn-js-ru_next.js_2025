import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import s from "./styles.module.css";
import { notFound } from "next/navigation";
import { getRacketById } from "@/services/get-racket-by-id";
import { getRackets } from "@/services/get-rackets";
import { Suspense } from "react";
import { Loader } from "@/components/custom/Loader";
import { Separator } from "@/components/ui/separator"
import type { Racket } from '@/types/racket';


export const generateStaticParams = async () => {
  const { data: rackets } = await getRackets();

  return rackets.map((racket: Racket) => ({
    racketId: racket.id.toString(),
  }));
};


export default async function RacketDetailPage({
  params,
}: {
  params: Promise<{ racketId: string }>;
}) {
  const { racketId } = await params;
  const { data, isError } = await getRacketById({ id: racketId });

  if (isError) {
    return "someError";
  }

  if (!data) {
    return notFound();
  }

  const { name, description, brand, type, price, model, year, imageUrl } =
    data;

  return (
    <Suspense fallback={<Loader />}>
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
        <div className="flex space-x-10">
          <Separator orientation="vertical" className="hidden lg:block" />

          <div>
            <div className={s.info}>
              <Badge variant="default" className="uppercase">
                {type}
              </Badge>
              <Badge variant="default">{brand.name}</Badge>
            </div>

            <h1 className={s.title}>
              {name}
            </h1>
            <p>{model}</p>
            <div className="mb-4">
              <p>price: {price}</p>
              <p>year: {year}</p>
            </div>
            <p>{description}</p>
          </div>


        </div>
      </div>
    </Suspense>
  );
}
