import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { MANUFACTURERS } from "@/lib/constants";

export function PortfolioGrid() {
  return (
    <section className="section-light">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Our manufacturer partners"
          subtitle="Alta Strada Consulting represents a focused group of biologics and hardware manufacturers. Each relationship is managed with attention to territory coverage, clinical alignment, and long-term growth."
        />
        <FadeIn>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {MANUFACTURERS.map((manufacturer) => (
              <article
                key={manufacturer.name}
                className="card-light flex flex-col border border-ice bg-white"
              >
                <div className="flex items-center justify-center border-b border-ice bg-off-white px-4 py-4">
                  <Image
                    src={manufacturer.logo}
                    alt={manufacturer.name}
                    width={200}
                    height={80}
                    className="max-h-10 w-auto"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 px-5 py-4 text-sm text-slate">
                  <h3 className="heading-serif text-base font-semibold text-charcoal">
                    {manufacturer.name}
                  </h3>
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-silver">
                    {manufacturer.category}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed">
                    {manufacturer.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

