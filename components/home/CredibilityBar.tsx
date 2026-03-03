import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { CREDIBILITY_STATS } from "@/lib/constants";

export function CredibilityBar() {
  return (
    <section className="bg-navy-light border-y border-ice/40">
      <Container className="py-8">
        <FadeIn>
          <div className="grid gap-6 text-sm text-silver sm:grid-cols-2 md:grid-cols-4">
            {CREDIBILITY_STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-silver/80">
                  {stat.label}
                </span>
                <span className="heading-serif text-lg font-semibold text-white">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

