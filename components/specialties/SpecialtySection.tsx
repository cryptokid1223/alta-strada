"use client";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import type { Specialty } from "@/lib/constants";
import { Check } from "lucide-react";

type SpecialtySectionProps = {
  specialty: Specialty;
  layout: "text-left" | "text-right";
  background: "white" | "blue-wash";
};

export function SpecialtySection({
  specialty,
  layout,
  background
}: SpecialtySectionProps) {
  const bgClass =
    background === "blue-wash" ? "bg-blue-wash" : "bg-white";
  const textFirst = layout === "text-left";

  return (
    <section
      id={specialty.id}
      className={`${bgClass} py-24 md:py-28`}
    >
      <Container>
        <FadeIn>
          <div
            className="grid gap-12 lg:grid-cols-2 lg:gap-16"
          >
            <div className={!textFirst ? "lg:order-2" : ""}>
              <p className="section-label mb-4">{specialty.name}</p>
              <h2 className="font-heading text-3xl font-normal text-gray-900 md:text-4xl">
                {specialty.name}
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-600">
                <p>{specialty.description}</p>
                <p>{specialty.support}</p>
              </div>
            </div>
            <div className={!textFirst ? "lg:order-1" : ""}>
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="font-heading text-lg font-normal text-gray-900">
                  Product focus
                </h3>
                <ul className="mt-4 space-y-3">
                  {specialty.products.map((product) => (
                    <li
                      key={product}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-primary" />
                      <span>{product}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
