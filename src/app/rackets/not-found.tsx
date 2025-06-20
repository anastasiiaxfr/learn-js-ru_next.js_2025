import Link from "next/link";
import { Button } from "@/components/ui/button";

function NotFoundPage() {
  return (
    <div className="text-center flex-1 flex flex-col justify-center items-center">
      <p>Oops! Racket Page not found.</p>
      <h1 className="text-[10em] font-bold leading-[1em]">404</h1>
      <Button asChild className="px-10 py-6">
        <Link href="/rackets">Go Home</Link>
      </Button>
    </div>
  );
}

export default NotFoundPage;
