"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-blue-wash pt-16 pb-24 md:pt-24 md:pb-32">
      <Container>
        <motion.div
          className="relative z-10 max-w-3xl"
          variants={reduceMotion ? undefined : stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={item}
            className="section-label mb-4"
          >
            Strategic Medical Sales Representation
          </motion.p>
          <motion.h1
            variants={item}
            className="font-heading text-5xl font-normal leading-tight text-gray-900 md:text-6xl"
          >
            Trusted Representation for Leading Medical Companies
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg"
          >
            Alta Strada Consulting represents biologics and hardware manufacturers
            to orthopedic surgeons, podiatrists, and neurosurgeons. We combine
            disciplined territory management with clinical knowledge and
            long-term surgeon relationships.
          </motion.p>
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button asChild>
              <Link href="/contact">Partner With Us</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Decorative: subtle gradient blob */}
        <div
          className="absolute right-0 top-1/4 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-pale/50 blur-3xl"
          aria-hidden
        />
      </Container>

      {/* Scroll indicator */}
      <ScrollIndicator />

      {/* Curved divider into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="h-full w-full fill-white"
        >
          <path d="M0,120 L0,60 Q600,0 1200,60 L1200,120 Z" />
        </svg>
      </div>
    </section>
  );
}

function ScrollIndicator() {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className="absolute bottom-12 left-1/2 -translate-x-1/2 md:bottom-16"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      <motion.div
        animate={reduceMotion ? {} : { y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="flex flex-col items-center gap-1 text-gray-400"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="h-5 w-5" />
      </motion.div>
    </motion.div>
  );
}
