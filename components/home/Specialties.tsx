"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, staggerItemVariants } from "@/components/ui/StaggerContainer";
import { motion } from "framer-motion";
import { Bone, Footprints, Brain } from "lucide-react";
import { SPECIALTIES } from "@/lib/constants";

const icons = [Bone, Footprints, Brain];

export function HomeSpecialties() {
  return (
    <section className="bg-blue-wash py-24 md:py-28">
      <Container>
        <div className="mb-14 flex justify-center">
          <SectionHeading
            label="Our Expertise"
            title="Specialties We Serve"
            alignment="center"
            subtitle="We represent products used across three surgical disciplines with a focus on clinical alignment and surgeon support."
          />
        </div>
        <StaggerContainer className="grid gap-8 md:grid-cols-3">
          {SPECIALTIES.map((specialty, i) => {
            const Icon = icons[i] ?? Bone;
            return (
              <motion.article
                key={specialty.id}
                variants={staggerItemVariants}
                className="group relative rounded-lg bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-pale text-blue-primary transition-all duration-300 group-hover:bg-blue-primary/10 group-hover:text-blue-dark">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-normal text-gray-900 md:text-2xl">
                  {specialty.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {specialty.description}
                </p>
                <Link
                  href={`/specialties#${specialty.id}`}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-blue-primary transition-colors hover:text-blue-dark"
                >
                  Learn more
                  <span aria-hidden>→</span>
                </Link>
              </motion.article>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
