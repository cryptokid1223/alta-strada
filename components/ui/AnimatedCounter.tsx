"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

export function AnimatedCounter({
  value,
  suffix = "",
  duration = 1.5,
  className
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? value : 0);

  const spring = useSpring(0, {
    stiffness: 75,
    damping: 35,
    restDelta: 0.001
  });

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    return () => unsub();
  }, [spring]);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }
    spring.set(value);
  }, [inView, value, spring, reduceMotion]);

  return (
    <span ref={ref} className={cn(className)}>
      {display}
      {suffix}
    </span>
  );
}
