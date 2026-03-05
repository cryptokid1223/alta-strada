import type { Metadata } from "next";
import { CompanyOverview } from "@/components/about/CompanyOverview";
import { Mission } from "@/components/about/Mission";
import { Approach } from "@/components/about/Approach";
import { TeamGrid } from "@/components/about/TeamGrid";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Alta Strada Consulting, a medical sales consulting firm with a relationship-driven, clinically focused approach to manufacturer representation."
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyOverview />
      <Mission />
      <Approach />
      <TeamGrid />
    </>
  );
}

function AboutHero() {
  return (
    <section className="bg-blue-wash py-20 md:py-28">
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <p className="section-label mb-4">About Us</p>
        <h1 className="font-heading text-5xl font-normal text-gray-900 md:text-6xl">
          A Different Kind of Sales Organization
        </h1>
        <p className="mt-6 max-w-2xl text-base text-gray-600 md:text-lg">
          We combine disciplined territory management with clinical knowledge and
          long-term surgeon relationships.
        </p>
      </div>
    </section>
  );
}
