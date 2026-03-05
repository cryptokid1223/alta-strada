"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, staggerItemVariants } from "@/components/ui/StaggerContainer";
import { motion } from "framer-motion";
import { Handshake, Stethoscope, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Handshake,
    title: "Relationship-Driven",
    body: "Surgeon and hospital relationships are built over years, not quarters. We prioritize thoughtful coverage, consistent follow-up, and clear communication with clinical and administrative stakeholders."
  },
  {
    icon: Stethoscope,
    title: "Clinical Expertise",
    body: "Representation is grounded in product knowledge and a working understanding of the procedures where those products are used. We prepare carefully for cases and support surgeons without distraction."
  },
  {
    icon: TrendingUp,
    title: "Territory Growth",
    body: "We represent a focused set of manufacturers and avoid unnecessary line conflicts. The goal is durable territory growth and stability, not short-lived spikes in activity."
  }
];

export function Approach() {
  return (
    <section className="bg-white py-24 md:py-28">
      <Container>
        <div className="mb-14 flex justify-center">
          <SectionHeading
            label="Our Approach"
            title="How We Build Lasting Partnerships"
            alignment="center"
          />
        </div>
        <StaggerContainer className="grid gap-10 md:grid-cols-3">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
            <motion.article
              key={p.title}
              variants={staggerItemVariants}
              className="rounded-lg border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-pale text-blue-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-heading text-xl font-normal text-gray-900">
                {p.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                {p.body}
              </p>
            </motion.article>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
