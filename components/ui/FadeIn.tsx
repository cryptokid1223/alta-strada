"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { sectionReveal } from "@/lib/animations";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
};

export function FadeIn({ children, className, as = "div" }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  const MotionComponent = motion[as];

  if (shouldReduceMotion) {
    const Component = as;
    return <Component className={cn(className)}>{children}</Component>;
  }

  return (
    <MotionComponent
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={sectionReveal}
    >
      {children}
    </MotionComponent>
  );
}
