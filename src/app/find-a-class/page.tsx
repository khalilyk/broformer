"use client";

import { ChevronDown, MapPin, Search } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";
import GearCta from "@/components/GearCta";
import PageBanner from "@/components/PageBanner";
import PhotoBlock from "@/components/PhotoBlock";
import Reveal from "@/components/Reveal";
import { useTypewriter } from "@/hooks/useTypewriter";
import { STUDIOS, searchStudios } from "@/lib/studios";

const POPULAR_CITIES = [
  "Sydney",
  "Melbourne",
  "London",
  "Dubai",
  "New York",
  "Los Angeles",
  "Toronto",
  "Tokyo",
];

const SEARCH_PROMPTS = [
  "Try Sydney, Australia",
  "Try Melbourne, Australia",
  "Try London, UK",
  "Try Dubai, UAE",
  "Try New York, USA",
  "Try Los Angeles, USA",
  "Try Tokyo, Japan",
  "Try Toronto, Canada",
];

const CLASS_TYPES = Array.from(
  new Set(STUDIOS.flatMap((s) => s.classTypes))
).sort();

export default function FindAClassPage() {
  return (
    <Suspense fallback={null}>
      <FindAClassContent />
    </Suspense>
  );
}

function FindAClassContent() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("city") ?? "");
  const [classFilter, setClassFilter] = useState<string | null>(null);
  const typed = useTypewriter(SEARCH_PROMPTS);

  const results = useMemo(() => {
    const base = searchStudios(query);
    return classFilter
      ? base.filter((s) => s.classTypes.includes(classFilter))
      : base;
  }, [query, classFilter]);

  return (
    <main>
      <PageBanner
        eyebrow="Find A Class"
        title="Men's reformer classes, worldwide."
        subtitle="Search by city or country to find studios running men's-friendly reformer Pilates near you."
      />

      <section className="bg-cream py-10 md:py-14">
        <div className="container-x">
          <Reveal>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex w-full gap-2"
            >
              <div className="flex flex-1 items-center gap-3 rounded-full bg-white px-5 py-3.5 shadow-md focus-within:ring-2 focus-within:ring-red/30">
                <MapPin size={18} className="shrink-0 text-ink/50" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="text"
                  placeholder={typed}
                  className="w-full bg-transparent text-sm text-ink placeholder:text-ink/45 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                aria-label="Search"
                className="group grid shrink-0 cursor-pointer place-items-center rounded-full bg-red px-6 text-white transition-all duration-200 hover:bg-red-dark active:scale-95"
              >
                <Search
                  size={20}
                  className="transition-transform duration-200 group-hover:scale-110"
                />
              </button>
            </form>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/40">
                Popular
              </span>
              {POPULAR_CITIES.map((city) => (
                <button
                  key={city}
                  onClick={() => setQuery(city)}
                  className="cursor-pointer rounded-full border border-ink/15 px-3.5 py-1.5 text-xs font-semibold text-ink/70 transition-colors hover:border-red hover:text-red"
                >
                  {city}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="results" className="bg-cream scroll-mt-24 pb-16 md:pb-24">
        <div className="container-x">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-ink/50">
              {results.length} {results.length === 1 ? "studio" : "studios"}
              {query ? ` matching "${query}"` : ""}
            </p>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/40">
                Filter
              </span>
              <div className="relative">
                <select
                  value={classFilter ?? ""}
                  onChange={(e) => setClassFilter(e.target.value || null)}
                  className="appearance-none rounded-full border border-ink/15 bg-white py-1.5 pl-4 pr-9 text-xs font-semibold text-ink/70 transition-colors focus:outline-none focus:ring-2 focus:ring-red/30"
                >
                  <option value="">All class types</option>
                  {CLASS_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={14}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink/40"
                />
              </div>
            </div>
          </div>

          {results.length === 0 ? (
            <div className="mt-8 rounded-2xl border border-dashed border-ink/15 px-6 py-16 text-center">
              <p className="text-ink/60">
                No studios matched that search yet. We&apos;re adding new
                cities every week.
              </p>
              <a
                href="/list-your-studio"
                className="mt-4 inline-block text-sm font-bold text-red hover:text-ink"
              >
                Know a studio that should be here? List it →
              </a>
            </div>
          ) : (
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((studio, i) => (
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
          )}
        </div>
      </section>

      <GearCta />
    </main>
  );
}
