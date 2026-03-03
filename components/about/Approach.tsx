import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function Approach() {
  return (
    <section className="section-dark border-b border-ice/20">
      <Container>
        <FadeIn className="grid gap-8 text-sm text-slate md:grid-cols-3">
          <div>
            <h3 className="heading-serif text-lg font-semibold text-white">
              Relationship-driven
            </h3>
            <p className="mt-3">
              Surgeon and hospital relationships are built over years, not quarters. Alta
              Strada prioritizes thoughtful coverage, consistent follow-up, and clear
              communication with clinical and administrative stakeholders.
            </p>
          </div>
          <div>
            <h3 className="heading-serif text-lg font-semibold text-white">
              Clinical knowledge
            </h3>
            <p className="mt-3">
              Representation is grounded in product knowledge and a working
              understanding of the procedures where those products are used. The firm
              prepares carefully for cases and supports surgeons and staff without
              distraction or theatrics.
            </p>
          </div>
          <div>
            <h3 className="heading-serif text-lg font-semibold text-white">
              Long-term partnerships
            </h3>
            <p className="mt-3">
              Alta Strada represents a focused set of manufacturers and avoids
              unnecessary line conflicts. The goal is durable territory growth and
              stability, not short-lived spikes in activity.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

