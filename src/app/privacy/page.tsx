import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy: Broformer",
};

const SECTIONS = [
  {
    title: "1. What we collect",
    body: "When you use Broformer, we collect information you give us directly, such as your name and email when you sign up for updates, search for a class, or submit a studio listing. We also collect basic usage data (pages visited, general location, device type) to help us understand how the directory is used.",
  },
  {
    title: "2. How we use it",
    body: "We use your information to operate the Broformer directory: showing you relevant studios, sending newsletter updates you've opted into, and reviewing studio listing submissions. We do not sell your personal information to third parties.",
  },
  {
    title: "3. Studio listings",
    body: "Information submitted through our studio listing forms (studio name, location, contact details, class information) is used to publish and maintain your public directory listing, and to contact you about it.",
  },
  {
    title: "4. Cookies",
    body: "We use essential cookies to keep the site functioning and, where enabled, analytics cookies to understand aggregate usage. You can control cookies through your browser settings.",
  },
  {
    title: "5. Your rights",
    body: "You can request access to, correction of, or deletion of your personal data at any time by emailing hello@broformer.com. We'll respond within 30 days.",
  },
  {
    title: "6. Changes to this policy",
    body: "We may update this policy from time to time. Material changes will be reflected with an updated date at the top of this page.",
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <PageBanner eyebrow="Legal" title="Privacy Policy" subtitle="Last updated: September 2026" />

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
