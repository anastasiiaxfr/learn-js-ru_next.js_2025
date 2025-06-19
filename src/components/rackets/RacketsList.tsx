"use client";

import { FC, Suspense } from "react";
import Card from "@/components/custom/Card";
import type { Racket } from "@/types/racket";
import { Loader } from "@/components/custom/Loader";

type Props = {
  items: Racket[];
  count?: number;
};

const RacketsList: FC<Props> = ({ items, count = items.length }) => {
  return (
    <div className="cards">
      {items.slice(0, count).map((racket) => (
        <Suspense fallback={<Loader />} key={racket.id}>
          <Card data={racket} />
        </Suspense>
      ))}
    </div>
  );
};

export default RacketsList;
