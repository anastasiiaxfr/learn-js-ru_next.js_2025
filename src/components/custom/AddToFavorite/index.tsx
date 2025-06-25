"use client";

import { useState, use } from "react";
import { UserContext } from "@/providers/user";

import { Button } from "@/components/ui/button";
import { HeartPlus } from "lucide-react";

type AddToFavoriteProps = {
  isFavorite: boolean;
};

function AddToFavorite({ isFavorite }: AddToFavoriteProps) {
  const { user } = use(UserContext);
  const [favorite, setFavorite] = useState(isFavorite);

  if (!user) {
    return null;
  }

  return (
    <Button
      size="icon"
      variant={favorite ? "default" : "outline"}
      onClick={() => setFavorite(!favorite)}
      className="cursor-pointer"
    >
      <HeartPlus />
    </Button>
  );
}

export default AddToFavorite;
