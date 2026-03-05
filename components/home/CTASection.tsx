"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-28">
      {/* Subtle radial gradient accent */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-pale/40 via-transparent to-transparent"
        aria-hidden
      />
      <Container className="relative">
        <FadeIn className="flex flex-col items-center text-center">
          <h2 className="font-heading text-3xl font-normal text-gray-900 md:text-4xl">
            Ready to Grow Your Territory?
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
            Whether you are a manufacturer evaluating representation or a
            practice looking to learn more about the products we support, we would
            like to hear from you.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-blue-primary px-6 py-3 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-blue-dark hover:scale-[1.03] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-primary focus-visible:ring-offset-2"
          >
            Contact Us
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
