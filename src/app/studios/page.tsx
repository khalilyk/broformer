import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import {
  ArrowRight,
  FileText,
  Image as ImageIcon,
  MessageSquareQuote,
  Users,
} from "lucide-react";
import PageBanner from "@/components/PageBanner";
import PhotoBlock from "@/components/PhotoBlock";
import Reveal from "@/components/Reveal";
import StudioSearch from "@/components/StudioSearch";
import { ARTICLES } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Studios: Broformer",
  description:
    "Browse every studio running men's reformer Pilates classes on Broformer, plus tips and resources for studios getting started.",
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

      <Suspense fallback={null}>
        <StudioSearch />
      </Suspense>

      <section id="resources" className="bg-paper py-16 md:py-24">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
              Resources
            </span>
            <h2 className="mt-3 font-display text-3xl uppercase leading-[0.95] text-ink sm:text-4xl">
              The Broformer studio kit
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <Reveal>
              <div className="overflow-hidden rounded-2xl">
                <PhotoBlock
                  label="The Broformer studio kit"
                  glow="center"
                  className="aspect-square lg:aspect-[4/5]"
                />
              </div>
            </Reveal>

            <div className="grid grid-cols-2 gap-5">
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
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
              Tips
            </span>
            <h2 className="mt-3 font-display text-3xl uppercase leading-[0.95] text-ink sm:text-4xl">
              Tips for running a great studio.
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {guides.map((article, i) => (
              <Reveal key={article.slug} delay={i * 0.06} className="h-full">
                <Link href={`/journal/${article.slug}`} className="group block h-full">
                  <div className="flex h-full flex-col rounded-2xl bg-paper p-5 shadow-sm ring-1 ring-ink/5 transition-shadow duration-300 hover:shadow-md">
                    <h3 className="text-sm font-bold text-ink group-hover:text-red">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-ink/60">
                      {article.excerpt}
                    </p>
                    <span className="mt-auto inline-flex w-fit items-center gap-1.5 pt-4 text-xs font-bold uppercase tracking-[0.08em] text-red">
                      Read tip
                      <ArrowRight
                        size={13}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-ink py-20 md:py-28">
        <Image
          src="/bros.png"
          alt="Men training together on reformer machines"
          fill
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/85 via-black/75 to-black/90" />
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl rounded-3xl bg-white/10 px-6 py-12 text-center shadow-sm ring-1 ring-white/15 backdrop-blur-sm sm:px-14 sm:py-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
              For Studios
            </span>
            <h2 className="mt-3 font-display text-3xl uppercase leading-[0.95] text-white sm:text-4xl">
              Ready to bring more men
              <br />
              <span className="text-red">through your doors?</span>
            </h2>

            <div className="mx-auto mt-10 max-w-md">
              <Link
                href="/list-your-studio"
                className="block w-full rounded-full bg-red px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-white hover:text-ink active:scale-95"
              >
                List Your Studio, Free Listing
              </Link>
              <p className="mt-3 text-center text-xs text-white/50">
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
