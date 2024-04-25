"use client";

import { Zap } from "lucide-react";
import { ReactNode, useMemo, useState } from "react";
import { SidebarContainer } from "../sidebar/sidebar-container";
import { SidebarItem } from "../sidebar/sidebar-item";
import { sidebarItems } from "../sidebar/sidebar-items-list";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => setIsOpen((prev) => !prev);

  const { content, sidebar } = useMemo(() => {
    const sidebar = isOpen
      ? "max-w-[280px]"
      : "max-w-[max-content] overflow-hidden";
    const content = isOpen ? "ml-[300px]" : "ml-[90px]";
    return { sidebar, content };
  }, [isOpen]);

  return (
    <>
      <SidebarContainer onToggle={onToggle} isOpen={isOpen}>
        <SidebarItem
          disableHighlighting
          isOpen={isOpen}
          title="Planorama"
          href="/dashboard"
          icon={
            <div className="bg-dark-magenta p-2 rounded-full text-neutral-50">
              <Zap size={16} />
            </div>
          }
        />

        <div className="mt-16 flex flex-col w-full items-start gap-2">
          {sidebarItems.map((item) => (
            <SidebarItem key={item.title} isOpen={isOpen} {...item} />
          ))}
        </div>
      </SidebarContainer>

      <section className={`flex-1 col-span-10 ${content}`}>
        <header className="bg-yellow-300 w-full h-20">Header</header>

        <section className="bg-blue-400 w-full h-full">{children}</section>
      </section>
    </>
  );
}
