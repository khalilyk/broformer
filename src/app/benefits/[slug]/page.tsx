import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import GearCta from "@/components/GearCta";
import PhotoBlock from "@/components/PhotoBlock";
import Reveal from "@/components/Reveal";
import SearchBar from "@/components/SearchBar";
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
      <section className="relative isolate flex min-h-[60vh] items-end overflow-hidden bg-ink pb-14 pt-32 md:min-h-[65vh] md:pb-20 md:pt-40">
        <Image
          src="/header.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/70 to-black/40" />

        <div className="container-x">
          <Reveal>
            <Link
              href="/#why-broformer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-white/60 transition-colors hover:text-white"
            >
              <ArrowLeft size={14} />
              Why Broformer
            </Link>
            <div className="mt-6 flex items-center gap-5">
              <span className="grid h-20 w-20 shrink-0 place-items-center rounded-full border border-red/40 text-red md:h-24 md:w-24">
                <benefit.icon size={38} strokeWidth={1.5} />
              </span>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
                  Why Men Do Broformer
                </span>
                <h1 className="font-display text-5xl uppercase leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-8xl">
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

            <div className="mt-10 rounded-2xl bg-ink px-6 py-10 text-center shadow-sm sm:px-10 sm:py-12">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-red/40 text-red">
                <Search size={22} strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 font-display text-2xl uppercase text-white sm:text-3xl">
                Ready to feel it for yourself?
              </h3>
              <p className="mt-1.5 text-sm text-white/60">
                Find a men&apos;s-friendly reformer class near you.
              </p>
              <div className="mt-6 flex justify-center">
                <SearchBar />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="container-x text-center">
          <h2 className="font-display text-2xl uppercase text-ink sm:text-3xl">
            More reasons men do Broformer
          </h2>
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
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
                  <p className="mt-1.5 text-xs leading-snug text-ink/55 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {b.tagline}
                  </p>
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

      <GearCta />
    </main>
  );
}
