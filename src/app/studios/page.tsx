import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Image as ImageIcon,
  MessageSquareQuote,
  Search,
  Users,
} from "lucide-react";
import PageBanner from "@/components/PageBanner";
import PhotoBlock from "@/components/PhotoBlock";
import Reveal from "@/components/Reveal";
import { ARTICLES } from "@/lib/journal";
import { STUDIOS } from "@/lib/studios";

export const metadata: Metadata = {
  title: "Studios: Broformer",
  description:
    "Browse every studio running men's reformer Pilates classes on Broformer, plus guides and resources for studios getting started.",
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

export default function StudiosPage() {
  const guides = ARTICLES.filter((a) => a.category === "Tips For Studios");

  return (
    <main>
      <PageBanner
        eyebrow="For Studios"
        title="Studios on Broformer."
        subtitle="Every studio already running men's reformer classes, plus everything a studio needs to get started."
      />

      <section id="listings" className="bg-cream py-16 md:py-24">
        <div className="container-x">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
                On Broformer
              </span>
              <h2 className="mt-3 font-display text-3xl uppercase leading-[0.95] text-ink sm:text-4xl">
                {STUDIOS.length} studios and counting.
              </h2>
            </div>
            <Link
              href="/find-a-class"
              className="inline-flex shrink-0 items-center gap-1.5 text-xs font-bold uppercase tracking-[0.08em] text-red hover:text-ink"
            >
              <Search size={14} />
              Search by city
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {STUDIOS.map((studio, i) => (
              <Reveal key={studio.slug} delay={i * 0.05}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-ink/5 transition-shadow duration-300 hover:shadow-lg">
                  <PhotoBlock
                    label={studio.name}
                    glow={i % 2 === 0 ? "top" : "bottom"}
                    className="aspect-[16/10] transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-base font-bold text-ink">
                      {studio.name}
                    </h3>
                    <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.08em] text-red">
                      {studio.city}, {studio.country}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink/60">
                      {studio.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {studio.classTypes.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-cream px-2.5 py-1 text-[11px] font-semibold text-ink/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="bg-paper py-16 md:py-24">
        <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <Reveal>
            <div className="overflow-hidden rounded-2xl">
              <PhotoBlock
                label="The Broformer studio kit"
                glow="center"
                className="aspect-square lg:aspect-[4/5]"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
                Resources
              </span>
              <h2 className="mt-3 font-display text-3xl uppercase leading-[0.95] text-ink sm:text-4xl">
                The Broformer studio kit
              </h2>
            </Reveal>
            <div className="mt-6 grid grid-cols-2 gap-5">
              {KIT.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.06} className="h-full">
                  <div className="flex h-full min-h-[210px] flex-col rounded-2xl bg-cream p-5 shadow-sm ring-1 ring-ink/5 transition-shadow duration-300 hover:shadow-md">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-red">
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
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="container-x">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
              Read First
            </span>
            <h2 className="mt-2 font-display text-3xl uppercase leading-[0.95] text-ink sm:text-4xl">
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

      <section className="bg-paper py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl rounded-3xl bg-cream px-6 py-12 text-center shadow-sm sm:px-14 sm:py-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
              For Studios
            </span>
            <h2 className="mt-3 font-display text-3xl uppercase leading-[0.95] text-ink sm:text-4xl">
              Ready to bring more men
              <br />
              <span className="text-red">through your doors?</span>
            </h2>

            <div className="mx-auto mt-10 max-w-md">
              <Link
                href="/list-your-studio"
                className="block w-full rounded-full bg-red px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-ink active:scale-95"
              >
                List Your Studio, Free Listing
              </Link>
              <p className="mt-3 text-center text-xs text-ink/40">
                No cost, ever. Wherever you are, we welcome studios anywhere in
                the world.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
