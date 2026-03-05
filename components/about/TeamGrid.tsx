"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, staggerItemVariants } from "@/components/ui/StaggerContainer";
import { motion } from "framer-motion";
import { TEAM_MEMBERS } from "@/lib/constants";

export function TeamGrid() {
  return (
    <section className="bg-gray-50 py-24 md:py-28">
      <Container>
        <div className="mb-14 flex justify-center">
          <SectionHeading
            label="The Team"
            title="Meet Our Representatives"
            alignment="center"
            subtitle="Experienced professionals focused on surgeon relationships, clinical preparation, and measured coverage across the territory."
          />
        </div>
        <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM_MEMBERS.map((member) => (
            <motion.article
              key={member.name}
              variants={staggerItemVariants}
              className="group overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-all duration-300 group-hover:brightness-95"
                />
                <div className="absolute inset-0 bg-blue-primary/0 transition-all duration-300 group-hover:bg-blue-primary/5" />
              </div>
              <div className="border-t-4 border-blue-primary p-6">
                <h3 className="font-heading text-xl font-normal text-gray-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-blue-primary">
                  {member.title}
                </p>
                <p className="mt-1 text-sm text-gray-400">{member.territory}</p>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {member.bio}
                </p>
              </div>
            </motion.article>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
