"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
  href: string;
  title: string;
  icon: JSX.Element;
  isOpen: boolean;
}

export function SidebarItem({
  href,
  icon,
  isOpen,
  title,

}: SidebarItemProps) {
  const pathname = usePathname();

  const hasSelected = pathname.includes(href) 

  return (
    <Link href={href} passHref className="w-full">
      <div
        className={`text-neutral-50 flex items-center gap-4 p-2 rounded-md ${hasSelected && 'w-full bg-neutral-900 text-rose-500'}`}
      >
        <div className={`w-8 h-8 flex items-center justify-center`}>{icon}</div>
        <span className={`${isOpen ? "inline" : "hidden"}`}>{title}</span>
      </div>
    </Link>
  );
}
