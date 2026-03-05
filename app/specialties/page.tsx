import type { Metadata } from "next";
import { SpecialtySection } from "@/components/specialties/SpecialtySection";
import { SPECIALTIES, COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Specialties",
  description:
    "Alta Strada Consulting represents biologics and hardware across orthopedic surgery, podiatry, and neurosurgery with disciplined territory coverage and clinical support."
};

export default function SpecialtiesPage() {
  return (
    <>
      <section className="bg-blue-wash py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 sm:px-8 text-center">
          <p className="section-label mb-4">Specialties</p>
          <h1 className="font-heading text-5xl font-normal text-gray-900 md:text-6xl">
            Clinical Expertise Across Three Disciplines
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base text-gray-600 md:text-lg">
            We represent products used in orthopedic surgery, podiatry, and
            neurosurgery with a focus on clinical alignment and surgeon support.
          </p>
        </div>
      </section>
      {SPECIALTIES.map((specialty, i) => (
        <SpecialtySection
          key={specialty.id}
          specialty={specialty}
          layout={i % 2 === 0 ? "text-left" : "text-right"}
          background={i % 2 === 0 ? "white" : "blue-wash"}
        />
      ))}
    </>
  );
}
