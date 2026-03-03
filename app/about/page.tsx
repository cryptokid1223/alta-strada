import type { Metadata } from "next";
import { CompanyOverview } from "@/components/about/CompanyOverview";
import { Mission } from "@/components/about/Mission";
import { Approach } from "@/components/about/Approach";
import { TeamGrid } from "@/components/about/TeamGrid";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: `About | ${COMPANY.name}`,
  description:
    "Learn about Alta Strada Consulting Inc., an established medical sales consulting firm representing biologics and hardware manufacturers with a relationship-driven, clinically focused approach."
};

export default function AboutPage() {
  return (
    <>
      <CompanyOverview />
      <Mission />
      <Approach />
      <TeamGrid />
    </>
  );
}

