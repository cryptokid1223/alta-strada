import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ManufacturerLogos } from "@/components/home/ManufacturerLogos";
import { HomeSpecialties } from "@/components/home/Specialties";
import { CredibilityBar } from "@/components/home/CredibilityBar";
import { CTASection } from "@/components/home/CTASection";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${COMPANY.name} | ${COMPANY.tagline}`,
  description:
    "Alta Strada Consulting Inc. is an established medical sales consulting firm representing biologics and hardware manufacturers to orthopedic surgeons, podiatrists, and neurosurgeons."
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ManufacturerLogos />
      <HomeSpecialties />
      <CredibilityBar />
      <CTASection />
    </>
  );
}

