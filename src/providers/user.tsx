"use client";

import { User } from "@/types/user";
import { createContext, FC, PropsWithChildren } from "react";

interface UserContextType {
  user: User | null;
}

export const UserContext = createContext<UserContextType>({
  user: null,
});

interface Props extends PropsWithChildren {
  user: User | null;
}

export const UserProvider: FC<Props> = ({ children, user }) => {
  return <UserContext value={{ user }}>{children}</UserContext>;
};
