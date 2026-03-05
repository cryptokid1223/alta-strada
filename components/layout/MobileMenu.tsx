"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/specialties", label: "Specialties" },
  { href: "/contact", label: "Contact" }
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-md text-gray-600 transition-colors hover:text-blue-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-primary focus-visible:ring-offset-2"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
              aria-hidden
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                duration: reduceMotion ? 0 : 0.3,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="fixed right-0 top-0 z-50 h-full w-full max-w-sm bg-white shadow-xl"
            >
              <div className="flex h-16 items-center justify-between border-b border-gray-100 px-6">
                <div className="relative h-8 w-8">
                  <Image
                    src="/images/logo-icon.svg"
                    alt=""
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-md text-gray-600 hover:text-blue-primary"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <motion.nav
                className="flex flex-col gap-1 px-6 py-6"
                variants={reduceMotion ? undefined : staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {links.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname?.startsWith(link.href);
                  return (
                    <motion.div
                      key={link.href}
                      variants={reduceMotion ? undefined : fadeInUp}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "block rounded-md px-4 py-3 text-base font-medium transition-colors",
                          isActive
                            ? "bg-blue-pale text-blue-primary"
                            : "text-gray-600 hover:bg-gray-50 hover:text-blue-primary"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div variants={reduceMotion ? undefined : fadeInUp}>
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="mt-4 block rounded-md bg-blue-primary px-4 py-3 text-center text-base font-medium text-white transition-colors hover:bg-blue-dark"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </motion.nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
