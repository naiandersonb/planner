"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface SidebarItemProps {
  href: string;
  title: string;
  icon: JSX.Element;
  isOpen: boolean;
  disableHighlighting?: boolean;
}

export function SidebarItem({
  href,
  icon,
  isOpen,
  title,
  disableHighlighting = false,
}: SidebarItemProps) {
  const pathname = usePathname();

  const isSelected = useMemo(() => {
    const hasSelected = pathname.includes(href);
    return hasSelected && !disableHighlighting ? "w-full bg-neutral-900 text-light-magenta" : "";
  }, [href, pathname, disableHighlighting]);

  return (
    <Link href={href} passHref className="w-full">
      <div
        key={title}
        className={`text-neutral-50 flex items-center gap-4 p-2 rounded-md ${isSelected}`}
      >
        <div className={`w-8 h-8 flex items-center justify-center`}>{icon}</div>
        <span className={`${isOpen ? "inline" : "hidden"}`}>{title}</span>
      </div>
    </Link>
  );
}
