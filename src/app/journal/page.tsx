import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import PhotoBlock from "@/components/PhotoBlock";
import Reveal from "@/components/Reveal";
import { ARTICLES } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Journal — Broformer",
  description:
    "Guides and studio tips on men's reformer Pilates from the Broformer journal.",
};

export default function JournalPage() {
  return (
    <main>
      <PageBanner
        eyebrow="Journal"
        title="Guides, tips & stories."
        subtitle="Everything we've learned about men's reformer Pilates — for the men doing it, and the studios building classes around it."
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((article, i) => (
              <Reveal key={article.slug} delay={i * 0.06}>
                <Link href={`/journal/${article.slug}`} className="group flex h-full flex-col">
                  <div className="overflow-hidden rounded-2xl">
                    <PhotoBlock
                      label={article.title}
                      glow={i % 2 === 0 ? "top" : "bottom"}
                      className="aspect-[4/3] transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <span className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-red">
                      {article.category} · {article.readTime}
                    </span>
                    <h2 className="mt-2 text-lg font-bold text-ink">
                      {article.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink/60">
                      {article.excerpt}
                    </p>
                    <span className="mt-auto inline-flex w-fit items-center gap-1.5 pt-4 text-xs font-bold uppercase tracking-[0.08em] text-red">
                      Read more
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
    </main>
  );
}
