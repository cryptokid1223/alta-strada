import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { COMPANY } from "@/lib/constants";

export function Hero() {
  return (
    <section className="section-dark border-b border-ice/20">
      <Container className="py-24 sm:py-28">
        <FadeIn className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-silver">
            {COMPANY.name}
          </p>
          <h1 className="heading-serif mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
            Strategic medical sales representation for established manufacturers.
          </h1>
          <p className="mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-slate">
            Alta Strada Consulting represents biologics and hardware companies to
            orthopedic surgeons, podiatrists, and neurosurgeons. The firm focuses on
            disciplined territory management, clinical knowledge, and long-term
            surgeon relationships.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center justify-center rounded-md border border-transparent bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Partner With Us
            </Link>
            <Link
              href="/portfolio"
              className="text-sm text-silver hover:text-white focus-ring"
            >
              View manufacturer partners
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

