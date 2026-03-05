import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { FadeIn } from "@/components/ui/FadeIn";
import { COMPANY } from "@/lib/constants";
import { Mail, MapPin, Linkedin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Alta Strada Consulting to discuss manufacturer representation or learn more about the products we support."
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-blue-wash py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 sm:px-8">
          <p className="section-label mb-4">Contact</p>
          <h1 className="font-heading text-5xl font-normal text-gray-900 md:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-6 max-w-2xl text-base text-gray-600 md:text-lg">
            Whether you are a manufacturer seeking representation or a practice
            looking to learn more, we would like to hear from you.
          </p>
        </div>
      </section>
      <section className="bg-white py-24 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <FadeIn className="lg:col-span-3">
              <ContactForm />
            </FadeIn>
            <aside className="lg:col-span-2">
              <FadeIn className="space-y-6">
                <h2 className="font-heading text-xl font-normal text-gray-900">
                  Contact details
                </h2>
                {COMPANY.email && (
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="flex items-center gap-3 text-gray-600 transition-colors hover:text-blue-primary"
                  >
                    <Mail className="h-5 w-5 text-blue-primary" />
                    <span>{COMPANY.email}</span>
                  </a>
                )}
                {COMPANY.territory && (
                  <p className="flex items-center gap-3 text-gray-600">
                    <MapPin className="h-5 w-5 text-blue-primary" />
                    <span>{COMPANY.territory}</span>
                  </p>
                )}
                {COMPANY.address && (
                  <p className="flex items-center gap-3 text-gray-600">
                    <MapPin className="h-5 w-5 text-blue-primary" />
                    <span>{COMPANY.address}</span>
                  </p>
                )}
                {COMPANY.linkedin && (
                  <a
                    href={COMPANY.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-gray-600 transition-colors hover:text-blue-primary"
                  >
                    <Linkedin className="h-5 w-5 text-blue-primary" />
                    <span>LinkedIn</span>
                  </a>
                )}
              </FadeIn>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
