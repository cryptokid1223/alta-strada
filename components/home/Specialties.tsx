import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { SPECIALTIES } from "@/lib/constants";

export function HomeSpecialties() {
  return (
    <section className="section-dark border-b border-ice/20">
      <Container>
        <SectionHeading
          eyebrow="Specialties We Serve"
          title="Focused on key surgical disciplines"
          subtitle="Alta Strada Consulting represents products used in orthopedic surgery, podiatry, and neurosurgery, with a disciplined focus on case support and clinical alignment."
        />
        <FadeIn>
          <div className="grid gap-8 md:grid-cols-3">
            {SPECIALTIES.map((specialty) => (
              <article
                key={specialty.id}
                className="card flex flex-col gap-4 p-5 text-sm text-slate"
              >
                <h3 className="heading-serif text-lg font-semibold text-white">
                  {specialty.name}
                </h3>
                <p>{specialty.description}</p>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-xs text-silver">
                  {specialty.products.map((product) => (
                    <li key={product}>{product}</li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-silver">{specialty.support}</p>
                <div className="mt-4">
                  <Link
                    href={`/specialties#${specialty.id}`}
                    className="text-xs font-medium text-accent hover:text-accent-hover focus-ring"
                  >
                    Learn more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

