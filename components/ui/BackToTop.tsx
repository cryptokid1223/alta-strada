"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useReducedMotion } from "framer-motion";

const SCROLL_THRESHOLD = 400;

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-blue-primary text-white shadow-lg transition-shadow hover:bg-blue-dark hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-primary focus-visible:ring-offset-2"
        >
          <ChevronUp className="h-6 w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
