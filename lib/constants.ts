export const COMPANY = {
  name: "Alta Strada Consulting, Inc.",
  tagline: "Strategic Medical Sales Representation",
  email: "info@altastradaconsulting.com",
  address: "",
  linkedin: "",
  territory: "",
  yearFounded: 2010
} as const;

export type TeamMember = {
  name: string;
  title: string;
  territory: string;
  bio: string;
  image: string;
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Representative Name",
    title: "Principal",
    territory: "Primary Territory",
    bio: "Experienced medical device sales professional focused on long-term surgeon and manufacturer partnerships.",
    image: "/images/team/placeholder.svg"
  }
];

export type Manufacturer = {
  name: string;
  logo: string;
  category: string;
  description: string;
};

export const MANUFACTURERS: Manufacturer[] = [
  {
    name: "Manufacturer Name",
    logo: "/images/manufacturers/placeholder.svg",
    category: "Biologics — Bone Grafting & Regenerative Solutions",
    description:
      "Representation focused on clinically driven biologic solutions for orthopedic, podiatric, and neurosurgical applications."
  }
];

export type SpecialtyId = "orthopedic" | "podiatry" | "neurosurgery";

export type Specialty = {
  id: SpecialtyId;
  name: string;
  products: string[];
  description: string;
  support: string;
};

export const SPECIALTIES: Specialty[] = [
  {
    id: "orthopedic",
    name: "Orthopedic Surgery",
    products: [
      "Biologics",
      "Fixation hardware",
      "Joint reconstruction",
      "Regenerative solutions"
    ],
    description:
      "Alta Strada Consulting partners with orthopedic surgeons and their teams to support biologic and hardware solutions that align with clinical objectives and hospital standards.",
    support:
      "We provide in-case support, product education, and disciplined territory management that respects surgeon time while supporting consistent, evidence-informed decision making."
  },
  {
    id: "podiatry",
    name: "Podiatry",
    products: [
      "Biologics for wound care",
      "Biologics for surgical applications",
      "Fixation systems"
    ],
    description:
      "We work with podiatric practices and hospital-based teams managing complex lower extremity pathology, with an emphasis on biologic therapies and fixation systems that support durable outcomes.",
    support:
      "Our approach combines practical case support with education and coordination across the care team to ensure appropriate product selection and availability."
  },
  {
    id: "neurosurgery",
    name: "Neurosurgery",
    products: ["Spinal biologics", "Fixation", "Hardware solutions"],
    description:
      "Alta Strada supports neurosurgeons with spinal biologics and hardware designed for complex reconstructive and degenerative procedures.",
    support:
      "We focus on detailed product knowledge, reliable intraoperative support, and consistent follow-through with hospitals and surgery centers across the territory."
  }
];

export type CredibilityStat = {
  label: string;
  value: string;
  /** For animated counter; omit for non-numeric (e.g. territory name) */
  numericValue?: number;
  suffix?: string;
};

export const CREDIBILITY_STATS: CredibilityStat[] = [
  { label: "Years Experience", value: "15+", numericValue: 15, suffix: "+" },
  { label: "Surgeon Partnerships", value: "50+", numericValue: 50, suffix: "+" },
  { label: "Surgical Specialties", value: "3", numericValue: 3 },
  { label: "Territory", value: "Southeast" }
];

