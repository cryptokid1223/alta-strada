"use client";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function Mission() {
  return (
    <section className="bg-blue-pale py-24 md:py-28">
      <Container>
        <FadeIn>
          <blockquote className="border-l-4 border-blue-primary pl-8 md:pl-12">
            <p className="font-heading text-xl font-normal text-gray-900 md:text-2xl">
              Representing manufacturers with discipline, integrity, and
              clinical focus.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Our mission is to provide manufacturers and surgeons with a
              representation partner that is prepared, measured, and
              reliable—supporting appropriate product utilization while
              respecting the priorities of the operating room and the demands of
              clinical practice.
            </p>
          </blockquote>
        </FadeIn>
      </Container>
    </section>
  );
}
