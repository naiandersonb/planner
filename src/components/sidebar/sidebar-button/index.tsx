import { motion, useAnimationControls } from "framer-motion";
import { HtmlHTMLAttributes, useEffect } from "react";

const svgVariants = {
  close: {
    rotate: 360,
  },
  open: {
    rotate: 180,
  },
};

type SidebarButtonProps = {
  isOpen?: boolean;
} & HtmlHTMLAttributes<HTMLButtonElement>;
export function SidebarButton({ isOpen = false, ...rest }: SidebarButtonProps) {
  const svgControls = useAnimationControls();

  useEffect(() => {
    const control = () => {
      return isOpen ? svgControls.start("open") : svgControls.start("close");
    };
    control();
  }, [isOpen, svgControls]);

  return (
    <button className={`p-1 rounded-full flex ${rest.className}`} {...rest}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
        className="w-8 h-8 stroke-neutral-200"
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={svgVariants}
          animate={svgControls}
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        />
      </svg>
    </button>
  );
}
