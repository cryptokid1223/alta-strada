"use client";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { COMPANY } from "@/lib/constants";
import Image from "next/image";

export function CompanyOverview() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-24 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn className="flex flex-col justify-center">
            <p className="section-label mb-4">Who We Are</p>
            <h2 className="font-heading text-3xl font-normal text-gray-900 md:text-4xl">
              Manufacturer representation built for the long term
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-600">
              <p>
                Alta Strada Consulting is a medical device sales consulting firm
                focused on biologics and hardware used in orthopedic surgery,
                podiatry, and neurosurgery. We represent manufacturers to
                surgeons and health systems with an emphasis on clinical
                alignment, reliable territory coverage, and consistent
                follow-through.
              </p>
              <p>
                Our manufacturer partners look to us for a representation model
                that combines disciplined sales execution with a measured,
                professional presence. We build relationships over time and
                represent each manufacturer as a long-term partner.
              </p>
              <p>
                We maintain a focused portfolio of biologics and hardware
                manufacturers, ensuring each partner receives deliberate
                attention across the territory.
              </p>
            </div>
            <dl className="mt-8 space-y-2 text-sm">
              {COMPANY.yearFounded > 0 && (
                <div>
                  <dt className="font-medium text-gray-800">Years in market</dt>
                  <dd className="text-gray-600">Since {COMPANY.yearFounded}</dd>
                </div>
              )}
              {COMPANY.territory && (
                <div>
                  <dt className="font-medium text-gray-800">Territory</dt>
                  <dd className="text-gray-600">{COMPANY.territory}</dd>
                </div>
              )}
              {COMPANY.address && (
                <div>
                  <dt className="font-medium text-gray-800">Office</dt>
                  <dd className="text-gray-600">{COMPANY.address}</dd>
                </div>
              )}
            </dl>
          </FadeIn>
          <motion.div
            className="relative flex items-center justify-center"
            initial={reduceMotion ? undefined : { opacity: 0, x: 40 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative h-64 w-full max-w-md rounded-lg bg-blue-pale/50 lg:h-80">
              <Image
                src="/images/logo.svg"
                alt=""
                fill
                className="object-contain p-12 opacity-20"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
