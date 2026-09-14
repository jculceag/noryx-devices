"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section";
  /** Use mount animation instead of scroll (for above-the-fold content). */
  immediate?: boolean;
  /**
   * Avoid opacity animation (needed for background-clip metallic text,
   * which breaks under ancestor opacity in WebKit).
   */
  motionSafe?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  immediate = false,
  motionSafe = false,
}: RevealProps) {
  const reduce = useReducedMotion();
  const Component = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const transition = {
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1] as const,
    delay,
  };

  const hidden = motionSafe
    ? { opacity: 1, y: 16 }
    : { opacity: 0, y: 16 };
  const visible = { opacity: 1, y: 0 };

  if (immediate) {
    return (
      <Component
        className={className}
        initial={hidden}
        animate={visible}
        transition={transition}
      >
        {children}
      </Component>
    );
  }

  return (
    <Component
      className={className}
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, amount: 0.15 }}
      transition={transition}
    >
      {children}
    </Component>
  );
}
