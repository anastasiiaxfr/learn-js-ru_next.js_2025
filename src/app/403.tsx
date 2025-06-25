import Link from "next/link";
import { Button } from "@/components/ui/button";

function Forbidden() {
  return (
    <div className="text-center flex-1 flex flex-col justify-center items-center">
      <p>Forbidden</p>
      <h1 className="text-[10em] font-bold leading-[1em]">403</h1>
      <Button asChild className="px-10 py-6">
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  );
}

export default Forbidden;
