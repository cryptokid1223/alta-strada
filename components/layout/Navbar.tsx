"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/specialties", label: "Specialties" },
  { href: "/contact", label: "Contact" }
];

const SCROLL_THRESHOLD = 80;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll(); // init
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white shadow-nav-scrolled"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-primary focus-visible:ring-offset-2 rounded-md"
        >
          <div className="relative h-10 w-10 flex-shrink-0">
            <Image
              src="/images/logo-icon.png"
              alt="Alta Strada Consulting"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <span className="font-heading text-lg font-normal tracking-wide text-blue-dark whitespace-nowrap">
            ALTA STRADA
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {links
            .filter((l) => l.href !== "/contact")
            .map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative font-medium transition-colors text-gray-600 hover:text-blue-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-primary focus-visible:ring-offset-2 rounded",
                    isActive && "text-blue-primary"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-primary rounded-full"
                      aria-hidden
                    />
                  )}
                </Link>
              );
            })}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-blue-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-primary focus-visible:ring-offset-2"
          >
            Contact Us
          </Link>
        </nav>

        <MobileMenu />
      </Container>
    </header>
  );
}
