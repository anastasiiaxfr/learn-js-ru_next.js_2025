"use client";
import { Button } from "@/components/ui/button";
import { use, useTransition } from "react";
import { BASE_API_URL } from "@/constants/api";
import { UserContext } from "@/providers/user";

const handleLogout = async () => {
  await fetch(`${BASE_API_URL}/auth/logout`, {
    credentials: "include",
    method: "DELETE",
  });

  location.assign("/");
};

const Logout = () => {
  const { user } = use(UserContext);

  const [isPending, startTransition] = useTransition();

  if (!user) {
    return;
  }

  return (
    <Button disabled={isPending} onClick={() => startTransition(handleLogout)}>
      Logout
    </Button>
  );
};

export default Logout;
