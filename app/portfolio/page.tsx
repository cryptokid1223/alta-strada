import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Portfolio | ${COMPANY.name}`,
  description:
    "A focused portfolio of biologics and hardware manufacturers represented by Alta Strada Consulting Inc. across orthopedic surgery, podiatry, and neurosurgery."
};

export default function PortfolioPage() {
  return <PortfolioGrid />;
}

