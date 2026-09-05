import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PhotoBlock from "@/components/PhotoBlock";
import Reveal from "@/components/Reveal";
import { BENEFITS, getBenefit } from "@/lib/benefits";

export function generateStaticParams() {
  return BENEFITS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const benefit = getBenefit(slug);
  if (!benefit) return {};
  return {
    title: `${benefit.title} — Why Men Do Broformer`,
    description: benefit.seoDescription,
  };
}

export default async function BenefitPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const benefit = getBenefit(slug);
  if (!benefit) notFound();

  const others = BENEFITS.filter((b) => b.slug !== slug);

  return (
    <main>
      <section className="bg-ink pb-14 pt-32 md:pb-20 md:pt-40">
        <div className="container-x">
          <Reveal>
            <Link
              href="/#why-broformer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-white/60 transition-colors hover:text-white"
            >
              <ArrowLeft size={14} />
              Why Broformer
            </Link>
            <div className="mt-6 flex items-center gap-4">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-red/40 text-red">
                <benefit.icon size={30} strokeWidth={1.5} />
              </span>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
                  Why Men Do Broformer
                </span>
                <h1 className="font-display text-3xl uppercase leading-[0.95] text-white sm:text-4xl md:text-5xl">
                  {benefit.title}
                </h1>
              </div>
            </div>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/60 md:text-base">
              {benefit.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-14 md:py-20">
        <div className="container-x">
          <Reveal>
            <div className="overflow-hidden rounded-2xl">
              <PhotoBlock
                label={benefit.title}
                glow="center"
                icon={benefit.icon}
                className="aspect-[16/7]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto mt-10 max-w-2xl">
            <div className="space-y-6">
              {benefit.content.map((paragraph, i) => (
                <p key={i} className="text-[17px] leading-relaxed text-ink/80">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/find-a-class"
                className="rounded-full bg-red px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-ink"
              >
                Find A Class
              </Link>
              <Link
                href="/journal"
                className="rounded-full border border-ink/20 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] text-ink transition-all duration-300 hover:border-ink hover:bg-ink hover:text-white"
              >
                Read The Journal
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="container-x">
          <h2 className="font-display text-2xl uppercase text-ink sm:text-3xl">
            More reasons men do Broformer
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            {others.map((b, i) => (
              <Reveal key={b.slug} delay={i * 0.05}>
                <Link
                  href={`/benefits/${b.slug}`}
                  className="group flex flex-col items-center text-center"
                >
                  <span className="grid h-16 w-16 place-items-center rounded-full border border-red/30 text-red transition-colors duration-300 group-hover:border-red group-hover:bg-red group-hover:text-white">
                    <b.icon size={26} strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-3 text-sm font-bold uppercase tracking-[0.08em] text-ink">
                    {b.title}
                  </h3>
                  <span className="mt-1 inline-flex items-center gap-1 text-xs font-bold text-red opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Learn more
                    <ArrowRight size={12} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
