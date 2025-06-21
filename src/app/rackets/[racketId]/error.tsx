"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {
    reset: () => void;
    error: Error
};


export default function Error({ error }: Props) {
    return (
        <div className="text-center flex-1 flex flex-col justify-center items-center">
            <h1 className="text-[10em] font-bold leading-[1em]">500</h1>
            <p>Oops! {error.message}</p>
            <Button asChild className="px-10 py-6 mt-5">
                <Link href="/rackets">See all rackets</Link>
            </Button>
        </div>
    );
}