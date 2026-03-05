"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { staggerContainer, fadeInUp } from "@/lib/animations";

type StaggerContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
  staggerDelay?: number;
};

export function StaggerContainer({
  children,
  className,
  as = "div",
  staggerDelay = 0.12
}: StaggerContainerProps) {
  const reduceMotion = useReducedMotion();
  const MotionComp = motion[as];

  const variants = reduceMotion
    ? undefined
    : {
        hidden: {},
        visible: {
          transition: { staggerChildren: staggerDelay }
        }
      };

  if (reduceMotion) {
    const Comp = as;
    return <Comp className={cn(className)}>{children}</Comp>;
  }

  return (
    <MotionComp
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
    >
      {children}
    </MotionComp>
  );
}

export const staggerItemVariants = fadeInUp;
