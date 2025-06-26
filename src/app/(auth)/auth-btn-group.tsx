"use client";
import { use } from "react";
import { UserContext } from "@/providers/user";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logout from "@/app/(auth)/logout";

function AuthBtnGroup() {
  const { user } = use(UserContext);

  return (
    <>
      {!user ? (
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
      ) : (
        <Logout />
      )}
    </>
  );
}

export default AuthBtnGroup;
