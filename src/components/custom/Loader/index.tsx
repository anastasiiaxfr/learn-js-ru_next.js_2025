import { Loader2 } from "lucide-react";

export function Loader() {
  return (
    <Loader2
      className={`h-[50px] w-[50] animate-spin text-muted-foreground absolute inset-0 m-auto`}
    />
  );
}
