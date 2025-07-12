import { notFound } from "next/navigation";
import { getRacketById } from "@/services/get-racket-by-id";
import { Metadata } from "next";
import { getMetaRacketById } from "@/services/get-meta-racket-by-id";

import { RacketContainer } from "@/components/rackets/RacketContainer";

import { Suspense } from "react";
import { Loader } from "@/components/custom/Loader";

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
        url: result.data.imageUrl,
        width: 1200,
        height: 630,
        alt: result.data.name,
        type: "image/jpeg",
      },
    },
    twitter: {
      card: "summary_large_image",
      title: `${result.data.name}`,
      description: result.data.description,
      images: result.data.imageUrl,
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

  const { data: metadata, isError: metaError } = await getMetaRacketById({
    id: racketId,
  });

  if (isError || metaError) {
    throw new Error("error");
  }

  if (!data || !metadata) {
    return notFound();
  }

  return (
    <Suspense fallback={<Loader label="loading racket..." />}>
      <RacketContainer racketId={racketId} />
    </Suspense>
  );
}
