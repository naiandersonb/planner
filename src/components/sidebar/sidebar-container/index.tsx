"use client";

import { motion, useAnimationControls } from "framer-motion";
import { ReactNode, useEffect } from "react";
import { SidebarButton } from "../sidebar-button";

interface SidebarContainerProps {
  logo?: JSX.Element;
  children: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const containerVariants = {
  close: {
    width: "5rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    width: "16rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
};


export function SidebarContainer({
  children,
  logo = <></>,
  isOpen,
  onToggle,
}: SidebarContainerProps) {
  const containerControls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      containerControls.start("open");
    } else {
      containerControls.start("close");
    }
  }, [containerControls, isOpen]);

  return (
    <motion.aside
      variants={containerVariants}
      animate={containerControls}
      initial="close"
      className="bg-dark-secondary md:flex hidden flex-col z-10 gap-8 p-4 fixed top-0 left-0 h-full shadow shadow-neutral-600"
    >
      <div className="flex flex-row w-full justify-between place-items-center">
        {isOpen && logo}

        <SidebarButton onClick={onToggle} isOpen={isOpen} />
      </div>
      {children}
    </motion.aside>
  );
}
