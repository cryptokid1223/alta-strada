import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import type { Specialty } from "@/lib/constants";

type SpecialtySectionProps = {
  specialty: Specialty;
  variant: "light" | "dark";
};

export function SpecialtySection({ specialty, variant }: SpecialtySectionProps) {
  const sectionClass =
    variant === "light"
      ? "section-light border-y border-ice/60"
      : "section-dark border-y border-ice/20";

  const headingTextClass =
    variant === "light" ? "text-charcoal" : "text-white";

  const bodyTextClass =
    variant === "light" ? "text-slate" : "text-slate";

  const listTextClass =
    variant === "light" ? "text-silver" : "text-silver";

  return (
    <section id={specialty.id} className={sectionClass}>
      <Container>
        <FadeIn className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-silver">
              Specialty
            </p>
            <h2
              className={`heading-serif mt-3 text-2xl font-semibold ${headingTextClass}`}
            >
              {specialty.name}
            </h2>
          </div>
          <div className="md:col-span-2 space-y-4 text-sm">
            <p className={bodyTextClass}>{specialty.description}</p>
            <div>
              <h3
                className={`heading-serif text-sm font-semibold ${headingTextClass}`}
              >
                Product focus
              </h3>
              <ul className={`mt-2 list-disc space-y-1 pl-5 text-xs ${listTextClass}`}>
                {specialty.products.map((product) => (
                  <li key={product}>{product}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3
                className={`heading-serif text-sm font-semibold ${headingTextClass}`}
              >
                How we support clinicians
              </h3>
              <p className={`mt-2 text-sm ${bodyTextClass}`}>{specialty.support}</p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

