import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function CTASection() {
  return (
    <section className="section-muted">
      <Container>
        <FadeIn className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="heading-serif text-2xl sm:text-3xl font-semibold text-white">
              Ready to grow your territory?
            </h2>
            <p className="mt-3 max-w-xl text-sm sm:text-base text-silver">
              Whether you are a manufacturer evaluating representation or a practice
              looking to learn more about the products we support, Alta Strada Consulting
              is available for a direct conversation.
            </p>
          </div>
          <Link
            href="/contact"
            className="focus-ring inline-flex items-center justify-center rounded-md border border-transparent bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Contact Us
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}

