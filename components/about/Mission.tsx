import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function Mission() {
  return (
    <section className="section-light border-b border-ice/60">
      <Container>
        <FadeIn className="border-y border-ice bg-white/70 px-6 py-10 text-center shadow-[0_1px_0_rgba(148,163,184,0.3)]">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-silver">
            Mission
          </p>
          <h2 className="heading-serif mt-4 text-2xl font-semibold text-charcoal">
            Representing manufacturers with discipline, integrity, and clinical focus.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-slate">
            Alta Strada Consulting&apos;s mission is to provide manufacturers and
            surgeons with a representation partner that is prepared, measured, and
            reliable&mdash;supporting appropriate product utilization while respecting
            the priorities of the operating room and the demands of clinical practice.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}

