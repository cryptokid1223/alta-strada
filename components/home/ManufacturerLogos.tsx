import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { MANUFACTURERS } from "@/lib/constants";

export function ManufacturerLogos() {
  return (
    <section className="section-light border-b border-ice/60">
      <Container>
        <SectionHeading
          eyebrow="Who We Represent"
          title="Manufacturer partners"
          subtitle="A focused portfolio of biologics and hardware manufacturers serving orthopedic surgery, podiatry, and neurosurgery."
        />
        <FadeIn>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {MANUFACTURERS.map((manufacturer) => (
              <div
                key={manufacturer.name}
                className="flex items-center justify-center rounded-md border border-ice bg-white px-4 py-3 transition-colors hover:border-accent"
              >
                <Image
                  src={manufacturer.logo}
                  alt={manufacturer.name}
                  width={160}
                  height={80}
                  className="max-h-10 w-auto grayscale transition hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

