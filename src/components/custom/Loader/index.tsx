import { Loader2 } from "lucide-react";

export function Loader({ label = "Loading ..." }) {
  return (
    <div className="absolute inset-0 m-auto flex flex-col justify-center items-center bg-black text-white z-10">
      <Loader2 size={64}
        className={`animate-spin text-primary`}
      />
      <p>{label}</p>
    </div>
  );
}
