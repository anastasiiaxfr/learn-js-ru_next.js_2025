"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { FC } from "react";

type Props = {
    reset: () => void;
    error: string
};

const GlobalError: FC<Props> = ({ error }) => {
    return (
        <html lang='en'>
            <body>
                <div className="text-center flex-1 flex flex-col justify-center items-center">
                    <p>Oops! {error}</p>
                    <h1 className="text-[10em] font-bold leading-[1em]">500</h1>
                    <Button asChild className="px-10 py-6">
                        <Link href="/">Go Home</Link>
                    </Button>
                </div>
            </body>
        </html>
    );
};

export default GlobalError;