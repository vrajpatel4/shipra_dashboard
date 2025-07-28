"use client";
import { DASHBOARD_NAV_ITEMS } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleTabChange = useCallback((index: number, route: string) => {
    router.push(route);
  }, [router]);

  return (
    <nav>
      <ul className="flex items-center justify-start gap-5 w-full p-2">
        {DASHBOARD_NAV_ITEMS.map(({ name, href, id }, index) => {
          return (
            <li
              className={`text-sm ${
                pathname === href ? "text-blue-500" : "text-black"
              } cursor-pointer font-[500] select-none`}
              key={id}
              onClick={() => {
                handleTabChange(index, href);
              }}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
