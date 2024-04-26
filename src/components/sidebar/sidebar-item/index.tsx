"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

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

  const hasSelected = useMemo(() => {
    const selected = pathname.includes(href)
    return selected ? 'w-full bg-neutral-900 text-rose-500' : 'text-neutral-50'
  }, [pathname, href])

  return (
    <Link href={href} passHref className="w-full">
      <div
       className={`flex p-3 rounded cursor-pointer stroke-[0.75] place-items-center gap-3 transition-colors duration-100 overflow-hidden ${hasSelected}`}
      >
        <div className='w-8 h-8 flex items-center justify-center'>{icon}</div>
        <span className="text-inherit font-poppins overflow-clip whitespace-nowrap tracking-wide">{title}</span>
      </div>
    </Link>
  );
}
