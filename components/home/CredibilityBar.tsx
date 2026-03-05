"use client";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { CREDIBILITY_STATS } from "@/lib/constants";

export function CredibilityBar() {
  return (
    <section className="bg-blue-dark py-16 md:py-20">
      <Container>
        <FadeIn>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {CREDIBILITY_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center ${
                  i < CREDIBILITY_STATS.length - 1
                    ? "md:border-r md:border-white/20"
                    : ""
                }`}
              >
                <div className="font-heading text-4xl font-normal text-white md:text-5xl">
                  {stat.numericValue != null ? (
                    <AnimatedCounter
                      value={stat.numericValue}
                      suffix={stat.suffix ?? ""}
                    />
                  ) : (
                    stat.value
                  )}
                </div>
                <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
