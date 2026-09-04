import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Image as ImageIcon, MessageSquareQuote, Users } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import { ARTICLES } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Studio Resources — Broformer",
  description:
    "Guides, marketing assets and playbooks to help studios attract and retain more men in reformer Pilates classes.",
};

const KIT = [
  {
    icon: FileText,
    title: "The Men's Class Playbook",
    description: "A step-by-step guide to launching and filling your first men's reformer class.",
  },
  {
    icon: ImageIcon,
    title: "Marketing Asset Pack",
    description: "On-brand social templates, class-name suggestions and photography guidance.",
  },
  {
    icon: MessageSquareQuote,
    title: "Messaging Guide",
    description: "Copy examples for how to describe reformer Pilates in a way that resonates with men.",
  },
  {
    icon: Users,
    title: "Referral Program Template",
    description: "A ready-to-use structure for turning your first men's class into a self-sustaining community.",
  },
];

export default function StudioResourcesPage() {
  const guides = ARTICLES.filter((a) => a.category === "Tips For Studios");

  return (
    <main>
      <PageBanner
        eyebrow="For Studios"
        title="Studio resources."
        subtitle="Everything we've learned about running men's reformer classes, packaged up for studios to use directly."
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-2xl uppercase text-ink sm:text-3xl">
              The Broformer studio kit
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {KIT.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5 transition-shadow duration-300 hover:shadow-md">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-cream text-red">
                    <item.icon size={20} strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink/60">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="container-x">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
              Read First
            </span>
            <h2 className="mt-2 font-display text-2xl uppercase text-ink sm:text-3xl">
              Our studio guides
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {guides.map((article, i) => (
              <Reveal key={article.slug} delay={i * 0.06}>
                <Link href={`/journal/${article.slug}`} className="group block">
                  <h3 className="text-sm font-bold text-ink group-hover:text-red">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink/60">
                    {article.excerpt}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.08em] text-red">
                    Read guide
                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-center md:py-20">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-2xl uppercase text-white sm:text-3xl">
              Ready to bring more men through your doors?
            </h2>
            <Link
              href="/list-your-studio"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-red px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-white hover:text-ink"
            >
              List Your Studio
              <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
