import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactForm } from "@/components/contact/ContactForm";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Contact | ${COMPANY.name}`,
  description:
    "Contact Alta Strada Consulting Inc. to discuss manufacturer representation or to learn more about the biologics and hardware products we support."
};

export default function ContactPage() {
  return (
    <section className="section-dark">
      <Container>
        <FadeIn className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <h1 className="heading-serif text-3xl sm:text-4xl font-semibold text-white">
              Get in touch
            </h1>
            <p className="mt-4 max-w-xl text-sm sm:text-base text-slate">
              Whether you are a manufacturer seeking representation or a practice looking
              to learn more about the products we support, Alta Strada Consulting
              welcomes a straightforward conversation.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
          <aside className="space-y-5 text-sm text-silver">
            <div>
              <h2 className="heading-serif text-base font-semibold text-white">
                Contact details
              </h2>
              <ul className="mt-3 space-y-1 text-sm">
                {COMPANY.email && (
                  <li>
                    <span className="font-medium text-white">Email: </span>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-accent hover:text-accent-hover focus-ring"
                    >
                      {COMPANY.email}
                    </a>
                  </li>
                )}
                {COMPANY.address && (
                  <li>
                    <span className="font-medium text-white">Address: </span>
                    <span>{COMPANY.address}</span>
                  </li>
                )}
                {COMPANY.territory && (
                  <li>
                    <span className="font-medium text-white">Territory: </span>
                    <span>{COMPANY.territory}</span>
                  </li>
                )}
              </ul>
            </div>
            {COMPANY.linkedin && (
              <div>
                <h2 className="heading-serif text-base font-semibold text-white">
                  LinkedIn
                </h2>
                <a
                  href={COMPANY.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex text-accent hover:text-accent-hover focus-ring"
                >
                  View company page
                </a>
              </div>
            )}
          </aside>
        </FadeIn>
      </Container>
    </section>
  );
}

