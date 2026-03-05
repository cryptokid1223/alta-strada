import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { COMPANY } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnalyticsScript } from "@/components/layout/AnalyticsScript";
import { BackToTop } from "@/components/ui/BackToTop";

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap"
});

const heading = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-heading",
  display: "swap"
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.altastradaconsulting.com";

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.name} | ${COMPANY.tagline}`,
    template: `%s | ${COMPANY.name}`
  },
  description:
    "Alta Strada Consulting provides strategic medical sales representation for biologics and hardware manufacturers serving orthopedic surgeons, podiatrists, and neurosurgeons.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: COMPANY.name,
    title: `${COMPANY.name} | ${COMPANY.tagline}`,
    description:
      "Established medical device sales consulting firm representing leading biologics and hardware manufacturers.",
    locale: "en_US"
  },
  alternates: {
    canonical: siteUrl
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    url: siteUrl,
    description: COMPANY.tagline,
    email: COMPANY.email,
    address: COMPANY.address || undefined
  };

  return (
    <html lang="en" className={`${sans.variable} ${heading.variable}`}>
      <body className="min-h-screen bg-off-white text-gray-800">
        <div className="h-1 w-full bg-gradient-to-r from-blue-primary via-blue-light to-transparent" />
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <BackToTop />
        <AnalyticsScript />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
