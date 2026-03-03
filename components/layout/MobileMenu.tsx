"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { COMPANY } from "@/lib/constants";

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

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setOpen(!open)}
        className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md border border-ice/60 bg-navy-light/60 text-silver"
      >
        <span className="sr-only">Toggle navigation</span>
        <span
          aria-hidden="true"
          className="flex flex-col items-center justify-center gap-1"
        >
          <span className="h-[2px] w-4 bg-silver" />
          <span className="h-[2px] w-4 bg-silver" />
        </span>
      </button>
      {open && (
        <div className="fixed inset-x-0 top-16 z-40 border-b border-ice/60 bg-navy-light/95 backdrop-blur">
          <nav className="mx-auto flex max-w-content flex-col gap-1 px-6 pb-6 pt-3 text-sm">
            <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.16em] text-silver">
              {COMPANY.name}
            </p>
            {links.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-md px-2.5 py-2 text-silver hover:bg-navy focus-ring",
                    isActive && "text-white"
                  )}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="h-px w-8 bg-accent" aria-hidden="true" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}

