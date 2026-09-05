import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms & Conditions: Broformer",
};

const SECTIONS = [
  {
    title: "1. Using Broformer",
    body: "Broformer is a directory that helps men find reformer Pilates studios and classes. We don't operate the studios listed on our platform, and we're not responsible for the classes, instructors, or facilities of any listed studio.",
  },
  {
    title: "2. Studio listings",
    body: "Studios that submit a listing confirm the information provided is accurate. Broformer reserves the right to review, edit, or remove any listing that doesn't meet our guidelines, including listings that misrepresent a studio's offering.",
  },
  {
    title: "3. Bookings and payments",
    body: "Any class bookings, memberships, or payments happen directly between you and the studio. Broformer is not a party to that transaction and doesn't process payments on a studio's behalf.",
  },
  {
    title: "4. Acceptable use",
    body: "You agree not to misuse the site, including submitting false studio listings, scraping the directory, or using the platform for anything unlawful.",
  },
  {
    title: "5. Intellectual property",
    body: "The Broformer name, logo and site content are owned by Broformer. Studio and partner logos remain the property of their respective owners.",
  },
  {
    title: "6. Limitation of liability",
    body: "Broformer is provided \"as is.\" We do our best to keep listings accurate and the site running smoothly, but we can't guarantee uninterrupted access or the accuracy of every third-party listing.",
  },
  {
    title: "7. Changes to these terms",
    body: "We may update these terms occasionally. Continued use of Broformer after a change means you accept the updated terms.",
  },
];

export default function TermsPage() {
  return (
    <main>
      <PageBanner eyebrow="Legal" title="Terms & Conditions" subtitle="Last updated: September 2026" />

      <section className="bg-cream py-16 md:py-24">
        <div className="container-x mx-auto max-w-2xl space-y-10">
          {SECTIONS.map((section, i) => (
            <Reveal key={section.title} delay={i * 0.05}>
              <h2 className="text-base font-bold text-ink">{section.title}</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/65">
                {section.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
