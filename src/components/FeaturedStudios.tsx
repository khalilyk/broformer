import Link from "next/link";
import { MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { STUDIOS } from "@/lib/studios";

const FEATURED_SLUGS = [
  "soma-collection-sydney",
  "kx-pilates-melbourne",
  "tempo-301-london",
  "reform-athletica-dubai",
  "new-york-pilates-nyc",
  "wundabar-pilates-la",
  "muse-movement-toronto",
  "zen-place-pilates-ginza-tokyo",
  "villa-pilates-melbourne",
  "avea-pilates-nyc",
];

const FEATURED = FEATURED_SLUGS.map((slug) => STUDIOS.find((s) => s.slug === slug)).filter(
  (s): s is (typeof STUDIOS)[number] => Boolean(s)
);

export default function FeaturedStudios() {
  const track = [...FEATURED, ...FEATURED];

  return (
    <section className="overflow-hidden bg-ink py-14 md:py-16">
      <Reveal className="container-x text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
          On Broformer
        </span>
        <h2 className="mt-3 font-display text-2xl uppercase leading-[0.95] text-white sm:text-3xl">
          Studios already moving men worldwide.
        </h2>
      </Reveal>

      <div className="group/marquee relative mt-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent sm:w-32" />

        <div className="flex w-max gap-4 animate-marquee group-hover/marquee:[animation-play-state:paused]">
          {track.map((studio, i) => (
            <Link
              key={`${studio.slug}-${i}`}
              href={`/studios/${studio.slug}`}
              className="group flex shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-red/40 hover:bg-white/10 hover:shadow-[0_12px_30px_-8px_rgba(227,30,36,0.35)]"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-red/30 text-red">
                <MapPin size={15} strokeWidth={1.75} />
              </span>
              <div className="whitespace-nowrap text-left">
                <p className="text-sm font-bold text-white">{studio.name}</p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-white/40">
                  {studio.city}, {studio.country}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Reveal delay={0.1} className="container-x mt-8 text-center">
        <Link
          href="/studios#listings"
          className="text-xs font-bold uppercase tracking-[0.08em] text-red hover:text-white"
        >
          View all studios →
        </Link>
      </Reveal>
    </section>
  );
}
