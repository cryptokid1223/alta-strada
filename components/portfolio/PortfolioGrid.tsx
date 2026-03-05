"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { StaggerContainer, staggerItemVariants } from "@/components/ui/StaggerContainer";
import { motion } from "framer-motion";
import { MANUFACTURERS } from "@/lib/constants";

export function PortfolioGrid() {
  return (
    <section className="bg-white py-24 md:py-28">
      <Container>
        <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {MANUFACTURERS.map((m) => (
            <motion.article
              key={m.name}
              variants={staggerItemVariants}
              className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-blue-primary/50 hover:shadow-xl"
            >
              <div className="flex min-h-[140px] items-center justify-center border-b border-gray-100 bg-gray-50/50 p-8">
                <Image
                  src={m.logo}
                  alt={m.name}
                  width={200}
                  height={80}
                  className="max-h-14 w-auto object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-6">
                <h3 className="font-heading text-lg font-normal text-gray-900">
                  {m.name}
                </h3>
                <p className="text-sm font-medium text-blue-primary">
                  {m.category}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {m.description}
                </p>
              </div>
            </motion.article>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
