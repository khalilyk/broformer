import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock, MapPin } from "lucide-react";
import GearCta from "@/components/GearCta";
import PhotoBlock from "@/components/PhotoBlock";
import Reveal from "@/components/Reveal";
import { STUDIOS, getStudio } from "@/lib/studios";

export function generateStaticParams() {
  return STUDIOS.map((s) => ({ slug: s.slug }));
}

function splitIntoParagraphs(text: string): string[] {
  const sentences = text.split(/(?<=[.!?])\s+/).filter(Boolean);
  if (sentences.length <= 2) return [text];
  const mid = Math.ceil(sentences.length / 2);
  return [sentences.slice(0, mid).join(" "), sentences.slice(mid).join(" ")];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const studio = getStudio(slug);
  if (!studio) return {};
  return {
    title: `${studio.name}: Reformer Pilates in ${studio.city}`,
    description: studio.description,
  };
}

export default async function StudioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const studio = getStudio(slug);
  if (!studio) notFound();

  const others = STUDIOS.filter(
    (s) => s.slug !== slug && s.city === studio.city
  ).slice(0, 3);
  const fallbackOthers = STUDIOS.filter((s) => s.slug !== slug).slice(0, 3);
  const related = others.length > 0 ? others : fallbackOthers;

  return (
    <main>
      <section className="relative isolate flex min-h-[45vh] items-end overflow-hidden bg-ink pb-14 pt-32 md:min-h-[50vh] md:pb-20 md:pt-40">
        <div className="container-x">
          <Reveal>
            <Link
              href="/studios#listings"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-white/60 transition-colors hover:text-white"
            >
              <ArrowLeft size={14} />
              All Studios
            </Link>
            <h1 className="mt-6 font-display text-4xl uppercase leading-[0.95] text-white sm:text-5xl md:text-6xl">
              {studio.name}
            </h1>
            <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-[0.08em] text-red">
              <MapPin size={15} />
              {studio.city}, {studio.country}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-14 md:py-20">
        <div className="container-x">
          <Reveal>
            <div className="overflow-hidden rounded-2xl">
              <PhotoBlock
                label={studio.name}
                glow="center"
                className="aspect-[16/7]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto mt-10 max-w-2xl">
            <div className="flex flex-wrap gap-1.5">
              {studio.classTypes.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-paper px-3 py-1 text-xs font-semibold text-ink/60 ring-1 ring-ink/10"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-5 space-y-4">
              {splitIntoParagraphs(studio.about ?? studio.description).map((paragraph, i) => (
                <p key={i} className="text-[17px] leading-relaxed text-ink/80">
                  {paragraph}
                </p>
              ))}
            </div>

            {studio.timetable && (
              <div className="mt-8 flex gap-3 rounded-2xl bg-paper p-5 shadow-sm ring-1 ring-ink/10">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-cream text-red">
                  <Clock size={16} strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-ink">Hours &amp; Schedule</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-ink/60">
                    {studio.timetable}
                  </p>
                </div>
              </div>
            )}

            <div className="mt-10 rounded-2xl bg-ink px-6 py-10 text-center shadow-sm sm:px-10 sm:py-12">
              <h3 className="font-display text-2xl uppercase text-white sm:text-3xl">
                Ready to book a class?
              </h3>
              <p className="mt-1.5 text-sm text-white/60">
                Visit {studio.name}&apos;s own site for schedules, pricing and
                booking.
              </p>
              <a
                href={studio.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-red px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-white hover:text-ink active:scale-95"
              >
                Visit Website
                <ArrowUpRight size={14} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="container-x text-center">
          <h2 className="font-display text-3xl uppercase leading-[0.95] text-ink sm:text-4xl">
            {others.length > 0
              ? `More studios in ${studio.city}`
              : "More studios on Broformer"}
          </h2>
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-5">
            {related.map((s, i) => (
              <Reveal
                key={s.slug}
                delay={i * 0.05}
                className="h-full w-[calc(50%-0.625rem)] sm:w-[calc(33.333%-0.835rem)]"
              >
                <Link href={`/studios/${s.slug}`} className="group block h-full">
                  <div className="flex h-full min-h-[180px] cursor-pointer flex-col items-center justify-center rounded-2xl bg-cream p-5 text-center shadow-sm ring-1 ring-ink/10 transition-colors duration-300 hover:bg-ink">
                    <h3 className="text-sm font-bold text-ink transition-colors duration-300 group-hover:text-white">
                      {s.name}
                    </h3>
                    <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-red">
                      {s.city}, {s.country}
                    </p>
                  </div>
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
