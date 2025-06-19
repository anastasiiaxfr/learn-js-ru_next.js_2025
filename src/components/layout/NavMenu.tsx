"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const menu = [
  { url: "/", title: "Home" },
  { url: "/rackets", title: "Rackets" },
  { url: "/rackets/top", title: "TOP Rackets" },
];

function NavMenu() {
  const pathname = usePathname();
  return (
    <NavigationMenu className="menu">
      <NavigationMenuList>
        {menu.map((i, ind) => (
          <NavigationMenuItem key={ind}>
            <Link href={i.url} className={pathname === i.url ? "active" : ""}>
              {i.title}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavMenu;
