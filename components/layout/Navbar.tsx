import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/specialties", label: "Specialties" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  // Static navy background to keep things understated and consistent.
  return (
    <header className="sticky top-0 z-40 border-b border-ice/40 bg-navy/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 focus-ring">
            {/* Logo placeholder; replace src with actual logo in /public/images/logo.svg */}
            <div className="flex h-8 w-8 items-center justify-center rounded-sm border border-ice/70 bg-navy-light text-[10px] font-semibold tracking-[0.16em] text-silver">
              AS
            </div>
            <div className="flex flex-col">
              <span className="heading-serif text-sm font-semibold text-white">
                Alta Strada
              </span>
              <span className="text-[11px] text-silver">
                Strategic Medical Sales
              </span>
            </div>
          </Link>
        </div>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {links
            .filter((link) => link.href !== "/contact")
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-silver transition-colors hover:text-white focus-ring"
                )}
              >
                {link.label}
              </Link>
            ))}
          <Link
            href="/contact"
            className="focus-ring inline-flex items-center justify-center rounded-md border border-transparent bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Contact Us
          </Link>
        </nav>
        <MobileMenu />
      </Container>
    </header>
  );
}

