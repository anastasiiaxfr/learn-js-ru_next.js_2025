import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import s from "./styles.module.css";
import { notFound } from "next/navigation";
import { getRacketById } from "@/services/get-racket-by-id";
// import { getRackets } from "@/services/get-rackets";
import { Separator } from "@/components/ui/separator";
// import type { Racket } from "@/types/racket";
import { Metadata } from "next";
import { getMetaRacketById } from "@/services/get-meta-racket-by-id";


// export const generateStaticParams = async () => {
//   const { data: rackets } = await getRackets();

//   return rackets.map((racket: Racket) => ({
//     racketId: racket.id.toString(),
//   }));
// };

type Props = {
  params: Promise<{ racketId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { racketId } = await params;

  const result = await getMetaRacketById({ id: racketId });

  if (result.isError || !result.data) {
    return {
      title: "tennis racket",
    };
  }

  return {
    title: `Tennis store | ${result.data.name}`,
    description: result.data.description,
    openGraph: {
      title: `${result.data.name}`,
      description: result.data.description,
      images: {
        url: result.imageUrl,
        width: 600,
        height: 300,
        alt: result.data.name,
        type: "image/jpeg",
      },
    },
    twitter: {
      card: "summary_large_image",
      title: `${result.data.name}`,
      description: result.data.description,
      images: result.imageUrl,
    },
  };
};

export default async function RacketDetailPage({
  params,
}: {
  params: Promise<{ racketId: string }>;
}) {
  const { racketId } = await params;
  const { data, isError } = await getRacketById({ id: racketId });

  const { data: metadata, isError: metaError } = await getMetaRacketById({ id: racketId });


  if (isError || metaError) {
    throw new Error("error");
  }

  if (!data || !metadata) {
    return notFound();
  }

  const { name, description, brand, type, price, model, year, imageUrl } = data;

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
  );
}
