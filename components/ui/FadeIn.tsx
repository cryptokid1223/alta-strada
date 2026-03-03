"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
};

export function FadeIn({ children, className, as = "div" }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  const baseProps = {
    className: cn(className)
  };

  if (shouldReduceMotion) {
    const Component = as as "div";
    return <Component {...baseProps}>{children}</Component>;
  }

  const MotionComponent = (motion as typeof motion & {
    section: typeof motion.div;
  })[as] as typeof motion.div;

  return (
    <MotionComponent
      {...baseProps}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionComponent>
  );
}

