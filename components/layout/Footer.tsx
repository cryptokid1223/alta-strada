import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { COMPANY } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ice/40 bg-navy-light">
      <Container className="flex flex-col gap-6 py-10 text-sm text-silver sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-baseline gap-2">
            <span className="heading-serif text-base font-semibold text-white">
              Alta Strada
            </span>
            <span className="text-xs text-silver/80">
              {COMPANY.tagline}
            </span>
          </div>
          <p className="text-xs text-silver/80">
            © {year} {COMPANY.name}. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 sm:items-end">
          <nav className="flex flex-wrap gap-4">
            <Link href="/" className="hover:text-white focus-ring">
              Home
            </Link>
            <Link href="/about" className="hover:text-white focus-ring">
              About
            </Link>
            <Link href="/portfolio" className="hover:text-white focus-ring">
              Portfolio
            </Link>
            <Link href="/specialties" className="hover:text-white focus-ring">
              Specialties
            </Link>
            <Link href="/contact" className="hover:text-white focus-ring">
              Contact
            </Link>
          </nav>
          <div className="flex flex-col items-start gap-1 text-xs text-silver/80 sm:items-end">
            {COMPANY.email && (
              <a href={`mailto:${COMPANY.email}`} className="hover:text-white focus-ring">
                {COMPANY.email}
              </a>
            )}
            {COMPANY.address && <p>{COMPANY.address}</p>}
            {COMPANY.territory && <p>{COMPANY.territory}</p>}
          </div>
        </div>
      </Container>
    </footer>
  );
}

