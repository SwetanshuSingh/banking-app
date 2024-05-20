"use client"

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarProps = {
  user: {
    firstName: string;
    lastName: string;
  };
};

const Sidebar = ({ user }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer items-center gap-2">
          <Image
            className="size-[32px] max-xl:size-14"
            width={34}
            height={34}
            alt="logo"
            src="/icons/logo.svg"
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              className={cn("sidebar-link", {
                "bg-bank-gradient": isActive,
              })}
              href={item.route}
              key={item.label}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Sidebar;
