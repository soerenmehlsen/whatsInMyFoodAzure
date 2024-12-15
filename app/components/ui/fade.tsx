"use client";

import { motion } from "framer-motion";

interface FadeProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function Fade({ children, delay = 0, direction = "up" }: FadeProps) {
  const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directionOffset[direction],
      }}
      animate={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      transition={{
        duration: 0.7,
        delay: delay / 1000,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}