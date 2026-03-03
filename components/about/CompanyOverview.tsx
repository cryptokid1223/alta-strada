import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { COMPANY } from "@/lib/constants";

export function CompanyOverview() {
  return (
    <section className="section-dark border-b border-ice/20">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Alta Strada Consulting Inc."
          subtitle={
            <>
              Alta Strada Consulting is a medical device sales consulting firm focused on
              biologics and hardware used in orthopedic surgery, podiatry, and
              neurosurgery. The firm represents manufacturers to surgeons and health
              systems with an emphasis on clinical alignment, reliable territory
              coverage, and consistent follow-through.
            </>
          }
        />
        <FadeIn className="grid gap-8 text-sm text-slate md:grid-cols-2">
          <p>
            Established manufacturer partners look to Alta Strada Consulting for a
            representation model that combines disciplined sales execution with a
            measured, professional presence in the operating room. The firm builds
            relationships over time, earns trust through preparation and product
            knowledge, and represents each manufacturer as a long-term partner rather
            than a short-term promotion.
          </p>
          <div className="space-y-2 text-sm text-silver">
            {COMPANY.yearFounded && (
              <p>
                <span className="font-medium text-white">Years in market: </span>
                Since {COMPANY.yearFounded} (experience may pre-date formal founding).
              </p>
            )}
            {COMPANY.territory && (
              <p>
                <span className="font-medium text-white">Territory: </span>
                {COMPANY.territory}
              </p>
            )}
            {COMPANY.address && (
              <p>
                <span className="font-medium text-white">Office: </span>
                {COMPANY.address}
              </p>
            )}
            <p>
              Alta Strada maintains a focused portfolio of biologics and hardware
              manufacturers, avoiding unnecessary overlap and ensuring each partner
              receives deliberate attention across the territory.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

