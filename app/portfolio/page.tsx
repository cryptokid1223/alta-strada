import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Manufacturer partners represented by Alta Strada Consulting across orthopedic surgery, podiatry, and neurosurgery."
};

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-blue-wash py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 sm:px-8">
          <p className="section-label mb-4">Our Portfolio</p>
          <h1 className="font-heading text-5xl font-normal text-gray-900 md:text-6xl">
            Manufacturer Partners
          </h1>
          <p className="mt-6 max-w-2xl text-base text-gray-600 md:text-lg">
            We represent industry-leading biologics and hardware companies across
            orthopedic, podiatric, and neurosurgical specialties.
          </p>
        </div>
      </section>
      <PortfolioGrid />
    </>
  );
}
