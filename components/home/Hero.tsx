"use client";

import Link from "next/link";
import Image from "next/image";
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

const imageVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
      delay: 0.5
    }
  }
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-blue-wash pt-16 pb-24 md:pt-24 md:pb-32 lg:min-h-[90vh]">
      {/* Mobile: full-bleed background image with dark overlay */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <Image
          src="/images/hero-image.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0 bg-black/55"
          aria-hidden
        />
      </div>

      {/* Desktop: two-column grid — text left (~55%), image fills right to viewport edge (~45%), no gap */}
      <div className="relative z-10 grid min-h-[70vh] grid-cols-1 lg:min-h-[85vh] lg:grid-cols-[55vw_45vw] lg:items-stretch lg:gap-0">
        {/* Text column — constrained by container */}
        <div className="flex items-center lg:col-span-1">
          <Container className="w-full py-8 lg:py-12">
            <motion.div
              className="max-w-3xl"
              variants={reduceMotion ? undefined : stagger}
              initial="hidden"
              animate="visible"
            >
              <motion.p
                variants={item}
                className="section-label mb-4 text-white lg:text-blue-primary"
              >
                Strategic Medical Sales Representation
              </motion.p>
              <motion.h1
                variants={item}
                className="font-heading text-5xl font-normal leading-tight text-white md:text-6xl lg:text-gray-900"
              >
                Trusted Representation for Leading Medical Companies
              </motion.h1>
              <motion.p
                variants={item}
                className="mt-6 max-w-xl text-base leading-relaxed text-gray-200 md:text-lg lg:text-gray-600"
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
                <Button variant="outline" asChild className="border-white text-white hover:bg-white/10 hover:text-white lg:border-blue-primary lg:text-blue-primary lg:hover:bg-blue-pale lg:hover:text-blue-dark">
                  <Link href="/about">Learn More</Link>
                </Button>
              </motion.div>
            </motion.div>
          </Container>
        </div>

        {/* Image column — fills right side, no border/radius/shadow, breaks to viewport edge */}
        <motion.div
          className="relative hidden min-h-[40vh] lg:block lg:min-h-0"
          variants={reduceMotion ? undefined : imageVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            src="/images/hero-image.png"
            alt="Alta Strada Consulting — strategic medical sales representation"
            fill
            sizes="45vw"
            className="object-cover"
            priority
          />
          {/* Left-edge gradient: hero background color into image */}
          <div
            className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-blue-wash to-transparent lg:w-52"
            aria-hidden
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />

      {/* Curved divider into next section */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-16 overflow-hidden">
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
      className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2 md:bottom-16"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="flex flex-col items-center gap-1 text-white/70 lg:text-gray-400"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="h-5 w-5" />
      </motion.div>
    </motion.div>
  );
}
