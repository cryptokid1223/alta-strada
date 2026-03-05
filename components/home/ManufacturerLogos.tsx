"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, staggerItemVariants } from "@/components/ui/StaggerContainer";
import { motion } from "framer-motion";
import { MANUFACTURERS } from "@/lib/constants";

export function ManufacturerLogos() {
  return (
    <section className="bg-white py-24 md:py-28">
      <Container>
        <div className="mb-14 flex justify-center">
          <SectionHeading
            label="Our Partners"
            title="Who We Represent"
            alignment="center"
          />
        </div>
        <StaggerContainer className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {MANUFACTURERS.map((m) => (
            <motion.div
              key={m.name}
              variants={staggerItemVariants}
              className="flex items-center justify-center rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-blue-primary/30 hover:shadow-lg"
            >
              <Image
                src={m.logo}
                alt={m.name}
                width={160}
                height={80}
                className="max-h-12 w-auto grayscale transition-all duration-300 hover:grayscale-0 object-contain"
              />
            </motion.div>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
