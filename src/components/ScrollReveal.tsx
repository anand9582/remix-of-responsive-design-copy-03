import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const getInitial = (direction: Direction) => {
  const base = { opacity: 0, filter: "blur(4px)" };
  switch (direction) {
    case "up": return { ...base, y: 80 };
    case "down": return { ...base, y: -80 };
    case "left": return { ...base, x: 80 };
    case "right": return { ...base, x: -80 };
    case "none": return base;
  }
};

const ScrollReveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 1,
  className,
  once = false,
}: ScrollRevealProps) => {
  return (
    <motion.div
      initial={getInitial(direction)}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={{ once, amount: 0.1 }}
      transition={{
        duration,
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
