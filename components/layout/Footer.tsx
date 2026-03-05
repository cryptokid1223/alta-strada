import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { COMPANY } from "@/lib/constants";
import { Linkedin } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-deeper text-white">
      <div className="border-b border-white/10">
        <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-2">
            <div className="relative h-10 w-[180px]">
              <Image
                src="/images/logo.png"
                alt="Alta Strada Consulting"
                width={180}
                height={40}
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm text-gray-400">{COMPANY.tagline}</p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-12">
            <nav className="flex flex-wrap gap-6 text-sm">
              <Link
                href="/"
                className="text-gray-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-light rounded"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-light rounded"
              >
                About
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-light rounded"
              >
                Portfolio
              </Link>
              <Link
                href="/specialties"
                className="text-gray-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-light rounded"
              >
                Specialties
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-light rounded"
              >
                Contact
              </Link>
            </nav>
            <div className="flex flex-col gap-1 text-sm text-gray-400">
              {COMPANY.email && (
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="transition-colors hover:text-blue-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-light rounded"
                >
                  {COMPANY.email}
                </a>
              )}
              {COMPANY.territory && <p>{COMPANY.territory}</p>}
              {COMPANY.address && <p>{COMPANY.address}</p>}
            </div>
          </div>
        </Container>
      </div>
      <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <p className="text-xs text-gray-400">
          © {year} {COMPANY.name}. All rights reserved.
        </p>
        {COMPANY.linkedin && (
          <a
            href={COMPANY.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-light rounded p-1"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        )}
      </Container>
    </footer>
  );
}
