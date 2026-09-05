import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PhotoBlock from "@/components/PhotoBlock";
import Reveal from "@/components/Reveal";
import { ARTICLES, getArticle } from "@/lib/journal";

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title}: Broformer Journal`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const more = ARTICLES.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <main>
      <section className="bg-ink pb-14 pt-32 md:pb-20 md:pt-40">
        <div className="container-x">
          <Reveal>
            <Link
              href="/journal"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-white/60 transition-colors hover:text-white"
            >
              <ArrowLeft size={14} />
              Journal
            </Link>
            <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.2em] text-red">
              {article.category} · {article.readTime}
            </span>
            <h1 className="mt-3 max-w-3xl font-display text-3xl uppercase leading-[0.95] text-white sm:text-4xl md:text-5xl">
              {article.title}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-14 md:py-20">
        <div className="container-x">
          <Reveal>
            <div className="overflow-hidden rounded-2xl">
              <PhotoBlock label={article.title} glow="center" className="aspect-[16/7]" />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto mt-10 max-w-2xl">
            <div className="space-y-6">
              {article.content.map((paragraph, i) => (
                <p key={i} className="text-[17px] leading-relaxed text-ink/80">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {more.length > 0 && (
        <section className="bg-paper py-16 md:py-24">
          <div className="container-x">
            <h2 className="font-display text-2xl uppercase text-ink sm:text-3xl">
              More from the journal
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-3">
              {more.map((a, i) => (
                <Reveal key={a.slug} delay={i * 0.06}>
                  <Link href={`/journal/${a.slug}`} className="group flex flex-col">
                    <div className="overflow-hidden rounded-2xl">
                      <PhotoBlock
                        label={a.title}
                        glow="top"
                        className="aspect-[4/3] transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>
                    <h3 className="mt-4 text-sm font-bold text-ink">{a.title}</h3>
                    <span className="mt-2 inline-flex w-fit items-center gap-1.5 text-xs font-bold uppercase tracking-[0.08em] text-red">
                      Read more
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
      )}
    </main>
  );
}
