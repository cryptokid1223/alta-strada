import type { Metadata } from "next";
import { SpecialtySection } from "@/components/specialties/SpecialtySection";
import { SPECIALTIES, COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Specialties | ${COMPANY.name}`,
  description:
    "Alta Strada Consulting Inc. represents biologics and hardware used in orthopedic surgery, podiatry, and neurosurgery with disciplined territory coverage and clinical support."
};

export default function SpecialtiesPage() {
  return (
    <>
      {SPECIALTIES.map((specialty, index) => (
        <SpecialtySection
          key={specialty.id}
          specialty={specialty}
          variant={index % 2 === 0 ? "dark" : "light"}
        />
      ))}
    </>
  );
}

