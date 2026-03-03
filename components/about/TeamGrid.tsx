import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { TEAM_MEMBERS } from "@/lib/constants";

export function TeamGrid() {
  return (
    <section className="section-light">
      <Container>
        <SectionHeading
          eyebrow="Our Team"
          title="Meet the team"
          subtitle="Experienced representatives focused on surgeon relationships, clinical preparation, and measured, professional coverage across the territory."
        />
        <FadeIn>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM_MEMBERS.map((member) => (
              <article
                key={member.name}
                className="card-light flex flex-col overflow-hidden"
              >
                <div className="relative h-60 w-full bg-off-white">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 px-5 py-4 text-sm">
                  <h3 className="heading-serif text-base font-semibold text-charcoal">
                    {member.name}
                  </h3>
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-silver">
                    {member.title}
                  </p>
                  <p className="text-xs text-slate">
                    <span className="font-medium text-charcoal">Territory: </span>
                    {member.territory}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {member.bio}
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

