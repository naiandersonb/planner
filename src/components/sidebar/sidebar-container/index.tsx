"use client";

import { ReactNode, useMemo } from "react";

interface SidebarContainerProps {
  children: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

export function SidebarContainer({
  children,
  isOpen,
  onToggle,
}: SidebarContainerProps) {
  const sidebar = useMemo(() => {
    return isOpen ? "max-w-[280px]" : "max-w-[max-content] overflow-hidden";
  }, [isOpen]);

  return (
    <aside
      onClick={onToggle}
      className={`
          fixed top-0 left-0 col-span-2 max-w-[280px] bg-dark-secondary w-full 
          h-full transition-width ease-in-out flex flex-col items-start p-4 ${sidebar} 
        `}
    >
      {children}
    </aside>
  );
}
